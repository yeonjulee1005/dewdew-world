#!/usr/bin/env node

import fs from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const currentVersion = packageJson.version;
const versionType = process.argv[2];

if (
  !versionType ||
  !['major', 'minor', 'patch', 'clear'].includes(versionType)
) {
  console.error('사용법: node version-manager.js [major|minor|patch|clear]');
  console.error('예시: npm run version:major');
  console.error('      npm run version:clear');
  process.exit(1);
}

const parseHeadVersion = version => {
  const parts = version.split('.');
  if (parts.length !== 3) {
    // 초기 버전이 semver 형태라면 headVersion으로 변환
    return {
      major: 1,
      yearMonth: parseInt(
        new Date().getFullYear().toString().slice(-2) +
          String(new Date().getMonth() + 1).padStart(2, '0'),
      ),
      minor: 1,
    };
  }

  return {
    major: parseInt(parts[0]),
    yearMonth: parseInt(parts[1]),
    minor: parseInt(parts[2]),
  };
};

const generateYearMonth = () => {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2); // ex) 25
  const month = String(now.getMonth() + 1).padStart(2, '0'); // ex) 08
  return parseInt(year + month);
};

const incrementVersion = (current, type) => {
  const parsed = parseHeadVersion(current);
  const currentYearMonth = generateYearMonth();

  switch (type) {
    case 'clear':
      return {
        major: 1,
        yearMonth: currentYearMonth,
        minor: 1,
      };
    case 'major':
      return {
        major: parsed.major + 1,
        yearMonth: currentYearMonth,
        minor: 1,
      };
    case 'minor':
      // 년월이 현재와 다르면 년월을 업데이트하고 마이너는 유지
      if (parsed.yearMonth !== currentYearMonth) {
        return {
          major: parsed.major,
          yearMonth: currentYearMonth,
          minor: parsed.minor,
        };
      } else {
        return {
          major: parsed.major,
          yearMonth: parsed.yearMonth,
          minor: parsed.minor + 1,
        };
      }
    case 'patch':
      // patch는 minor와 동일하게 처리 (headVersion에서는 패치 개념이 없음)
      if (parsed.yearMonth !== currentYearMonth) {
        return {
          major: parsed.major,
          yearMonth: currentYearMonth,
          minor: parsed.minor,
        };
      } else {
        return {
          major: parsed.major,
          yearMonth: parsed.yearMonth,
          minor: parsed.minor + 1,
        };
      }
    default:
      throw new Error('지원하지 않는 버전 타입입니다.');
  }
};

const formatHeadVersion = versionObj => {
  return `${versionObj.major}.${versionObj.yearMonth}.${versionObj.minor}`;
};

const main = async () => {
  try {
    // clear의 경우 확인 메시지
    if (versionType === 'clear') {
      console.log(`⚠️  현재 버전 ${currentVersion}을(를) 초기화하려고 합니다.`);
      console.log('이 작업은 되돌릴 수 없습니다.');

      // Node.js에서 동기적으로 입력 받기
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const answer = await new Promise(resolve => {
        rl.question('계속하시겠습니까? (y/N): ', resolve);
      });

      rl.close();

      if (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'yes') {
        console.log('버전 초기화가 취소되었습니다.');
        process.exit(0);
      }
    }

    const newVersionObj = incrementVersion(currentVersion, versionType);
    const newVersion = formatHeadVersion(newVersionObj);

    console.log(`현재 버전: ${currentVersion}`);
    console.log(`새 버전: ${newVersion}`);
    console.log(`버전 타입: ${versionType}`);

    // package.json 업데이트
    packageJson.version = newVersion;
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
    );

    console.log('✅ package.json이 성공적으로 업데이트되었습니다.');

    // Git 커밋 생성 (선택사항)
    try {
      execSync(`git add package.json`);
      execSync(`git commit -m "chore: bump version to ${newVersion}"`);
      execSync(`git tag v${newVersion}`);
      console.log(`✅ Git 커밋과 태그(v${newVersion})가 생성되었습니다.`);
    } catch (gitError) {
      console.log(
        '⚠️  Git 커밋/태그 생성 중 오류가 발생했습니다:',
        gitError.message,
      );
      console.log('수동으로 커밋해주세요.');
    }
  } catch (error) {
    console.error('❌ 버전 업데이트 중 오류가 발생했습니다:', error.message);
    process.exit(1);
  }
};

// 메인 함수 실행
main();
