#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// 커맨드라인 인자 가져오기
const versionType = process.argv[2];

if (!versionType || !['major', 'minor', 'patch', 'clear'].includes(versionType)) {
  console.error('사용법: node version-runner.js [major|minor|patch|clear]');
  process.exit(1);
}

// CommonJS 버전으로 대체 실행하는 함수
function runFallbackScript() {
  const cjsScript = path.join(__dirname, 'version-manager.cjs');
  
  const cjsProcess = spawn('node', [cjsScript, versionType], {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  cjsProcess.on('error', (cjsError) => {
    console.error('❌ 모든 버전 관리 스크립트 실행에 실패했습니다.');
    console.error('💡 해결방법: npm install을 실행하여 package-lock.json 파일을 생성하세요.');
    process.exit(1);
  });

  cjsProcess.on('exit', (cjsCode) => {
    process.exit(cjsCode);
  });
}

// 환경 감지 및 적절한 스크립트 실행
function runVersionManager() {
  const esmScript = path.join(__dirname, 'version-manager.js');
  
  console.log('🔍 버전 관리 스크립트를 실행합니다...');
  
  // ESM 버전 먼저 시도
  const esmProcess = spawn('node', [esmScript, versionType], {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  esmProcess.on('error', (error) => {
    console.log('⚠️  ESM 버전 실행 실패, CommonJS 버전으로 시도합니다...');
    runFallbackScript();
  });

  esmProcess.on('exit', (code) => {
    if (code !== 0) {
      console.log('⚠️  ESM 버전 실행 실패, CommonJS 버전으로 시도합니다...');
      runFallbackScript();
    } else {
      process.exit(code);
    }
  });
}

runVersionManager();