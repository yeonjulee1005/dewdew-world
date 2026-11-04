// 앱 공통 개인정보 처리방침 데이터.
// 새 앱을 추가할 때는 PRIVACY_APPS에 key 하나만 추가하면 /[lang]/privacy/[app] 페이지가 생성된다.
// 본문 블록: string = 문단, string[] = 목록. 인라인으로 **굵게**, `코드`, [링크](url)를 지원한다.

type Localized<T> = { en: T; ko: T }
type Block = string | string[]

export interface PrivacySection {
  title: Localized<string>
  body: Localized<Block[]>
}

export interface PrivacyApp {
  name: Localized<string>
  summary: Localized<string>
  effectiveDate: string
  updatedAt: string
  sections: PrivacySection[]
}

export const PRIVACY_DEVELOPER = 'Yeonju Lee'
export const PRIVACY_CONTACT_EMAIL = 'yeonju.lee1005@gmail.com'
export const PRIVACY_EFFECTIVE_DATE = '2026-11-04'
export const PRIVACY_UPDATED_AT = '2026-11-04'

export const PRIVACY_TITLE = {
  en: 'Privacy Policy',
  ko: '개인정보 처리방침',
} as const

export const PRIVACY_DESCRIPTION = {
  en: 'Privacy policy shared by all apps developed by Dewdew.',
  ko: 'Dewdew가 개발한 모든 앱에 공통으로 적용되는 개인정보 처리방침입니다.',
} as const

export const PRIVACY_LABELS = {
  en: {
    effectiveDate: 'Effective date',
    apps: 'App-specific notes',
    appsDescription: 'Choose an app to see its app-specific notes together with this policy.',
    appNotes: 'App-specific notes',
    commonPolicy: 'Common policy',
    allApps: 'All apps',
  },
  ko: {
    effectiveDate: '시행일',
    apps: '앱별 안내',
    appsDescription: '앱을 선택하면 공통 방침과 해당 앱의 앱별 안내를 함께 볼 수 있습니다.',
    appNotes: '앱별 안내',
    commonPolicy: '공통 방침',
    allApps: '전체 앱',
  },
} as const

export const PRIVACY_COMMON_SECTIONS: PrivacySection[] = [
  {
    title: { en: '1. Scope', ko: '1. 적용 범위' },
    body: {
      en: [
        `This policy applies to all apps developed and distributed by ${PRIVACY_DEVELOPER} (the "Apps"). Details that differ per app are listed in that app's "App-specific notes". If an app-specific note conflicts with this policy, the app-specific note takes precedence.`,
      ],
      ko: [
        `이 방침은 ${PRIVACY_DEVELOPER}가 개발·배포하는 앱(이하 "앱")에 공통으로 적용됩니다. 앱마다 달라지는 내용은 해당 앱의 "앱별 안내"에 따로 적습니다. 앱별 안내와 이 방침이 다른 경우 앱별 안내가 우선합니다.`,
      ],
    },
  },
  {
    title: { en: '2. Information We Collect', ko: '2. 수집하는 정보' },
    body: {
      en: [
        'We do not collect or store your personal information on our servers through the Apps. We do not collect accounts, advertising identifiers, or usage analytics that identify you. The only exceptions are items listed in an app\'s specific notes, and even then they are handled only as described in Sections 3 and 4 below, never on our servers.',
      ],
      ko: [
        '개발자는 앱을 통해 이용자의 개인정보를 개발자의 서버로 수집하거나 저장하지 않습니다. 개발자는 이용자를 식별하기 위한 계정, 광고 식별자, 사용 분석 데이터를 수집하지 않습니다. 앱별 안내에 적은 항목만 예외이며, 그 경우에도 개발자 서버가 아닌 아래 3장과 4장의 방식으로만 처리됩니다.',
      ],
    },
  },
  {
    title: { en: '3. Information Stored on Your Device', ko: '3. 기기 안에 저장되는 정보' },
    body: {
      en: [
        'App settings, usage history, and measurement results are stored only on your device and are never sent to us. When you delete an app, the data it stored is deleted with it. See each app\'s specific notes for exactly what is stored.',
      ],
      ko: [
        '앱의 설정, 사용 기록, 측정 결과 등은 이용자의 기기에만 저장되며 개발자에게 전송되지 않습니다. 이용자가 앱을 삭제하면 앱이 저장한 데이터도 함께 삭제됩니다. 구체적으로 어떤 정보가 저장되는지는 앱별 안내를 참고해 주세요.',
      ],
    },
  },
  {
    title: { en: '4. Third-Party Services', ko: '4. 제3자 서비스' },
    body: {
      en: [
        'Apps may use third-party services to provide their features.',
        [
          '**Apple:** Apple distributes the Apps and processes in-app purchases. We do not receive your payment details, and Apple\'s privacy policy applies to them.',
          '**Services named in an app\'s specific notes:** If an app connects to an external server, we describe the destination and purpose in that app\'s notes. As with any internet connection, your IP address may be visible to the other server and is handled under that service\'s own privacy policy.',
        ],
      ],
      ko: [
        '앱은 기능 제공을 위해 다음과 같은 제3자 서비스를 사용할 수 있습니다.',
        [
          '**Apple:** 앱 배포와 인앱 결제는 Apple이 처리합니다. 결제 수단 등 결제 정보는 개발자에게 제공되지 않으며 Apple의 개인정보 처리방침이 적용됩니다.',
          '**앱별 안내에 명시한 서비스:** 앱이 외부 서버와 통신하는 경우 그 대상과 목적을 앱별 안내에 적습니다. 인터넷 연결의 특성상 상대 서버에는 이용자의 IP 주소가 전달될 수 있으며, 이는 해당 서비스의 개인정보 처리방침에 따릅니다.',
        ],
      ],
    },
  },
  {
    title: { en: '5. Advertising and Tracking', ko: '5. 광고와 추적' },
    body: {
      en: ['The Apps do not show ads, do not track you, and do not share or sell data to third parties.'],
      ko: ['앱은 광고를 표시하지 않으며, 이용자를 추적하거나 제3자와 데이터를 공유·판매하지 않습니다.'],
    },
  },
  {
    title: { en: "6. Children's Privacy", ko: '6. 아동의 개인정보' },
    body: {
      en: ["The Apps are not directed to children, and we do not knowingly collect children's personal information."],
      ko: ['앱은 아동을 대상으로 하지 않으며, 아동의 개인정보를 의도적으로 수집하지 않습니다.'],
    },
  },
  {
    title: { en: '7. Changes to This Policy', ko: '7. 방침의 변경' },
    body: {
      en: ['If this policy changes, we will post the changes and the new effective date on this page. For significant changes, we will also notify you through an app update.'],
      ko: ['이 방침이 변경되면 이 페이지에 변경 내용과 시행일을 게시합니다. 중요한 변경은 앱 업데이트 안내를 통해서도 알립니다.'],
    },
  },
  {
    title: { en: '8. Contact', ko: '8. 문의' },
    body: {
      en: [`For privacy-related questions, contact us at ${PRIVACY_CONTACT_EMAIL}.`],
      ko: [`개인정보와 관련한 문의는 ${PRIVACY_CONTACT_EMAIL}로 보내 주세요.`],
    },
  },
]

export const PRIVACY_APPS: Record<string, PrivacyApp> = {
  signa: {
    name: { en: 'Signa', ko: '시그나' },
    summary: {
      en: 'macOS menu bar Wi-Fi signal monitor',
      ko: 'macOS 메뉴바 Wi-Fi 신호 모니터',
    },
    effectiveDate: PRIVACY_EFFECTIVE_DATE,
    updatedAt: PRIVACY_UPDATED_AT,
    sections: [
      {
        title: { en: 'Stored on your device (never sent to us)', ko: '기기 안에 저장되는 정보 (개발자에게 전송되지 않음)' },
        body: {
          en: [[
            'App settings (refresh interval, selected theme, menu bar text option, signal alert setting, etc.)',
            'Wi-Fi signal history (timestamped signal strength and network name, used for the history chart)',
            'Your most recent speed test result',
            'Wi-Fi passwords you enter in the app: stored only in this device\'s Keychain and used only to reconnect to that same network.',
          ]],
          ko: [[
            '앱 설정(갱신 주기, 선택한 테마, 메뉴바 텍스트 옵션, 신호 알림 설정 등)',
            'Wi-Fi 신호 기록(신호 세기와 네트워크 이름의 시간별 기록, 히스토리 차트에 사용)',
            '마지막 속도 측정 결과',
            '이용자가 앱에서 직접 입력한 Wi-Fi 비밀번호: 이 기기의 키체인에만 저장되며, 이후 같은 네트워크에 연결할 때만 사용됩니다.',
          ]],
        },
      },
      {
        title: { en: 'Permissions we use', ko: '사용하는 권한' },
        body: {
          en: [[
            '**Location:** macOS requires location permission to read the Wi-Fi network name (SSID) and the list of nearby networks. Signa uses it only for that purpose and does not store or transmit your location.',
            '**Notifications:** used only to tell you when the signal gets weak or the connection drops. It works only if you turn it on in Settings.',
            '**Launch at login:** works only if you turn it on in Settings.',
          ]],
          ko: [[
            '**위치:** macOS는 Wi-Fi 네트워크 이름(SSID)과 주변 네트워크 목록을 읽을 때 위치 권한을 요구합니다. Signa는 이 목적으로만 권한을 사용하며 위치 정보를 저장하거나 전송하지 않습니다.',
            '**알림:** 신호가 약해지거나 연결이 끊겼을 때 알려드리는 데에만 사용합니다. 설정에서 켠 경우에만 동작합니다.',
            '**로그인 시 실행:** 이용자가 설정에서 켠 경우에만 동작합니다.',
          ]],
        },
      },
      {
        title: { en: 'Connections to external servers', ko: '외부 서버와의 통신' },
        body: {
          en: [
            'Signa connects to public servers operated by Cloudflare, Inc. to measure your internet speed and latency.',
            [
              '**Speed test** (`speed.cloudflare.com`): runs only when you press the "Test Speed" button. It downloads and uploads random test data, using up to about 400 MB (300 MB download, 100 MB upload). No personal information is sent.',
              '**Latency check** (`1.1.1.1`): while the Signa panel is open, it periodically opens and closes a connection to measure response time only. No data is sent.',
            ],
            'In both cases your IP address may be visible to Cloudflare\'s servers and is handled under [Cloudflare\'s privacy policy](https://www.cloudflare.com/privacypolicy/). We do not receive or store any data from this process.',
          ],
          ko: [
            'Signa는 인터넷 속도와 지연시간을 측정하기 위해 Cloudflare, Inc.의 공개 서버에 연결합니다.',
            [
              '**속도 측정** (`speed.cloudflare.com`): 이용자가 "속도 측정" 버튼을 눌렀을 때만 실행됩니다. 측정을 위해 임의의 데이터를 내려받고 올려보내며, 이때 사용되는 데이터 양은 최대 약 400MB(다운로드 300MB, 업로드 100MB)입니다. 개인 정보는 전송하지 않습니다.',
              '**지연시간 측정** (`1.1.1.1`): Signa 패널이 열려 있는 동안 주기적으로 연결을 열고 닫아 응답 시간만 측정합니다. 데이터는 전송하지 않습니다.',
            ],
            '두 경우 모두 이용자의 IP 주소가 Cloudflare 서버에 보일 수 있으며, 이는 [Cloudflare 개인정보 처리방침](https://www.cloudflare.com/privacypolicy/)에 따릅니다. 개발자는 이 과정의 어떤 데이터도 받거나 저장하지 않습니다.',
          ],
        },
      },
      {
        title: { en: 'In-App Purchases', ko: '인앱 결제' },
        body: {
          en: ['Signa sells premium themes as in-app purchases. Apple processes the payment, and we do not receive your payment details.'],
          ko: ['Signa는 프리미엄 테마를 인앱 결제로 판매합니다. 결제는 Apple이 처리하며 개발자는 결제 정보를 받지 않습니다.'],
        },
      },
    ],
  },
}
