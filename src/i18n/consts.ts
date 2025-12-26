interface Item {
  title: string;
  label: string;
  link: string;
}

interface MenuItem {
  title: string;
  description: string;
  link: string;
}

interface MainData {
  reference: MenuItem[];
  stack: MenuItem[];
}

interface UsesData {
  name: string;
  link: string;
}

interface FooterLinks {
  link: string;
  class: string;
  label: string;
  iconName: string;
}

export const SITE_TITLE = {
  en: 'Dewdew World! This is Dewdew tech blog share insights technology stack.',
  ko: '듀듀 월드! 이연주의 기술 블로그입니다. 기술 스택에 대한 인사이트와 경험을 공유합니다.'
} as const;

export const SITE_DESCRIPTION = {
  en: 'Welcome to Dewdew World! This is tech blog share insights and experiences about my favorite technology stack about Nuxt 4 and its ecosystem, Astro and Supabase.',
  ko: '듀듀 월드에 오신 것을 환영합니다. 이연주의 기술 블로그입니다. 기술 스택에 대한 인사이트와 경험을 공유합니다. Nuxt 4와 그 생태계, Astro와 Supabase에 대한 즐겨 사용하는 기술 스택을 공유합니다.'
} as const;

export const USES_TITLE = {
  en: 'Dewdew Uses | Introduce my desktop setup and work environment',
  ko: '듀듀 업무환경 | 듀듀가 사용하는 장비 및 업무환경 소개'
} as const;

export const USES_DESCRIPTION = {
  en: 'I use this software and hardware to develop and work on my projects',
  ko: '듀듀가 사용하는 소프트웨어와 하드웨어를 소개합니다'
} as const;

export const TECH_TITLE = {
  en: 'Dewdew Tech | Tech blog share insights technology stack',
  ko: '듀듀 기술 블로그 | 기술 스택에 대한 인사이트를 공유합니다.'
} as const;

export const TECH_DESCRIPTION = {
  en: 'Dewdew Tech blog share insights technology stack, experience and knowledge',
  ko: '듀듀 기술 블로그는 기술 스택, 경험 및 지식을 공유하는 블로그입니다.'
} as const;

export const GUESTBOOK_TITLE = {
  en: 'Dewdew Guestbook | Please leave a warm message! Thank you!',
  ko: '듀듀 방명록 | 따뜻한 한마디 부탁드려요! 감사해요!'
} as const;

export const GUESTBOOK_DESCRIPTION = {
  en: 'Thank you for visiting! Please leave a warm message!',
  ko: '방문해주셔서 감사합니다! 따뜻한 한마디 부탁드려요!'
} as const;

export const MENU_ITEMS = {
  en: {
    nav: {
      dewdew: 'Dewdew',
      uses: 'Uses',
      tech: 'Tech',
      guestbook: 'Guestbook',
      dewdewDev: 'Dewdew Dev',
    },
    mainIntro: {
      hello: 'Hi there',
      name: ' I\'m Yeonju (A.K.A. Dewdew)',
      aheadLiving: 'living in',
      country: 'Republic of Korea',
      aheadWorking: 'I\'m currently',
      workingPosition: 'working as a Tech Lead'
    },
    MAIN_REFERENCE: {
      first: 'If you want to check out my work and progress in development',
      second: 'you can find it below',
      third: 'I enjoy using those'
    },
    mainGoal: {
      first: 'My goal is to share development knowledge and continuously learn to grow as a developer',
      second: 'Therefore, I am contributing to the open-source projects below'
    },
    mainContact: {
      first: 'I always open to participating in',
      second: 'or meeting new people',
      third: 'Please do not hesitate to',
      fourth: 'or via'
    },
    uses: {
      title: 'I use this',
      editor: 'IDE',
      editorExtensions: 'IDE Add-ons',
      terminal: 'Terminal',
      desktopApp: 'Desktop App',
      hardware: 'Hardware'
    },
    tech: {
      knowledge: 'Dewdew shares knowledge about the Javascript ecosystem technologies such as Nuxt, Astro, and Supabase, which are of primary interest',
      experience: 'I experienced and learned',
      content: 'It will also occasionally share other content',
      kr: 'KR',
      posts: 'Posts'
    },
    techText: {
      nextPost: '← Next post',
      prevPost: 'Previous Post →'
    },
    guestbook: {
      title: 'Guestbook',
      description: 'Please leave a warm message! Thank you!',
    },
    footerTitle: 'Dewdew of the Internet © 2024',
    404: {
      title: '404',
      notFound: 'Page not found! 😢'
    }
  },
  ko: {
    nav: {
      dewdew: 'Dewdew',
      uses: 'Uses',
      tech: 'Tech',
      guestbook: '방명록',
      dewdewDev: '포트폴리오',
    },
    mainIntro: {
      hello: '안녕하세요',
      name: '반가워요 저는 이연주예요 (듀듀)',
      aheadLiving: '제가 살고있는 곳은 대한민국',
      country: '이에요',
      aheadWorking: '현재 ',
      workingPosition: '에서 Tech Lead를 담당하고 있어요!'
    },
    MAIN_REFERENCE: {
      first: '저의 사이드프로젝트 또는 개발 기여 상황을 확인하고 싶으시다면',
      second: '아래에서 확인할 수 있어요',
      third: '저는 아래의 기술을 즐겨 사용해요'
    },
    mainGoal: {
      first: '저는 개발적인 지식을 공유하고 지속적으로 배우며 개발자로써 성장하는 것입니다',
      second: '그래서 다음과 같은 오픈소스에 기여하고 있어요'
    },
    mainContact: {
      first: '저는 항상 새로운',
      second: '프로젝트에 대한 이야기를 하거나 참여하는 것에 열려있으며, 새로운 사람들과 교류하는 것을 좋아해요',
      third: '언제든지 옆의 링크를 통해 연락주세요🙂',
      fourth: '또는 '
    },
    uses: {
      title: '저는 이런 것들을 사용해요',
      editor: 'IDE',
      editorExtensions: 'IDE Add-ons',
      terminal: '터미널',
      desktopApp: '데스크탑 앱',
      hardware: '하드웨어'
    },
    tech: {
      knowledge: 'Dewdew는 주요 관심사인, Nuxt, Astro, Supabase 등 Javascript 관련 생태계 기술 지식을 공유합니다',
      experience: '경험하고 배운 것들을 공유합니다',
      content: '더 좋은 내용을 배우고 공유할 예정입니다',
      kr: 'KR',
      posts: '게시글'
    },
    techText: {
      nextPost: '← 다음 게시글',
      prevPost: '이전 게시글 →'
    },
    guestbook: {
      title: '방명록',
      description: '따뜻한 한마디 부탁드려요! 감사해요!',
    },
    footerTitle: 'Dewdew of the Internet © 2024',
    404: {
      title: '404',
      notFound: '페이지를 찾을 수 없어요! 😢'
    }
  }
} as const;

const MAIN_REFERENCE = [
  { title: 'Github Profile', label: 'github', link: 'https://github.com/yeonjulee1005'},
  { title: 'Dewdew Dev', label: 'dewdew', link: 'https://www.dewdew.dev'},
  { title: 'DooramG (Web/IOS)', label: 'dooramG', link: 'https://www.dooramg.com'},
  { title: 'DewBee (Web/IOS)', label: 'dewBee', link: 'https://dewbee.dewdew.world'},
  { title: 'Display Check Test (Web/IOS)', label: 'dewdew', link: 'https://monitors.dewdew.world'}
] as Item[]

const MAIN_STACK = [
  { title: 'Nuxt4', label: 'nuxt3', link: 'https://nuxt.com/' },
  { title: 'Nuxt UI', label: 'nuxt-ui', link: 'https://ui.nuxt.com/' },
  { title: 'Astro', label: 'astro', link: 'https://astro.build/' },
  { title: 'Next.js', label: 'nextjs', link: 'https://nextjs.org/' },
  { title: 'Supabase', label: 'supabase', link: 'https://supabase.com/' },
  { title: 'Bun', label: 'bun', link: 'https://bun.sh' },
  { title: 'Typescript', label: 'typescript', link: 'https://www.typescriptlang.org' }
] as Item[]

/**
* ! Uses Static Data!
*/
const USES_EDITOR = [
  { name: 'Cursor', link: 'https://cursor.sh/' },
  { name: 'Xcode', link: 'https://developer.apple.com/xcode/' },
  { name: 'Android Studio', link: 'https://developer.android.com/studio' },
] as UsesData[]

const USES_EDITOR_EXTENSIONS = [
  { name: 'Theme: Lilac', link: 'https://open-vsx.org/extension/shubham-saudolla/lilac' },
  { name: 'I18n Ally', link: 'https://open-vsx.org/extension/lokalise/i18n-ally' },
  { name: 'Iconify IntelliSense', link: 'https://open-vsx.org/extension/antfu/iconify' },
  { name: 'Nuxtr', link: 'https://open-vsx.org/extension/Nuxtr/nuxtr-vscode' },
  { name: 'Dewdew Snippets', link: 'https://open-vsx.org/extension/dewdewsnippets/dewdew-snippets' },
  { name: 'Dewdew Clock', link: 'https://open-vsx.org/extension/DewdewClock/dewdew-clock' },
  { name: 'Icon Theme: Material Icon Theme', link: 'https://open-vsx.org/extension/PKief/material-icon-theme' },
] as UsesData[]

const USES_TERMINAL = [
  { name: 'Ghostty', link: 'https://ghostty.org/' },
  { name: 'Oh my zsh', link: 'https://ohmyz.sh/' },
  { name: 'Font: Hack Font', link: 'https://github.com/source-foundry/Hack' }
] as UsesData[]

const USES_DESKTOP_APP = [
  { name: 'Arc Borwser', link: 'https://arc.net/' },
  { name: 'GitHub Desktop', link: 'https://desktop.github.com/' },
  { name: 'Obsidian', link: 'https://obsidian.md/' },
  { name: 'Slack', link: 'https://slack.com/intl/ko-kr/' },
  { name: 'Figma', link: 'https://www.figma.com/' }
] as UsesData[]

const USES_HARDWARE = [
  { name: 'MacBook Pro 13-inch, M2 Pro 32GB(Home)', link: 'https://www.apple.com/macbook-pro/' },
  { name: 'HHKB Professional Hybrid Type-S', link: 'https://happyhackingkb.com/' },
  { name: 'Logitech MX Master 3S', link: 'https://www.logitech.com/ko-kr/products/mice/mx-master-3s-business-wireless-mouse.910-006584.html?sp=2&searchclick=logi' },
  { name: 'LG UltraFine 4K Display `27', link: 'https://www.lg.com/us/4k-monitors' },
  { name: 'LG UltraFine 4K Display `32', link: 'https://www.lg.com/us/4k-monitors' },
  { name: 'IPad Pro M4 11-inch', link: 'https://www.apple.com/ipad-pro/' },
  { name: 'Motion Desk Setup 1400x700', link: '/' }
] as UsesData[]

/**
* ! Footer Static Data !
*/
const FOOTER_LINKS = [
  { link: 'https://github.com/yeonjulee1005', label: 'dewdew', iconName: 'devicon:github', class: 'cursor-pointer text-xl' },
  { link: 'https://www.linkedin.com/in/dewdew', label: 'linkedIn', iconName: 'devicon:linkedin', class: 'cursor-pointer text-xl' },
  { link: '/rss.xml', label: 'rss', iconName: 'lucide:rss', class: 'cursor-pointer text-xl text-red-400 duration-200 hover:text-rose-600 hover:opacity-90 hover:transition-opacity' }
] as FooterLinks[]

export {
  type Item,
  type MenuItem,
  type MainData,
  type UsesData,
  type FooterLinks,
  MAIN_REFERENCE,
  MAIN_STACK,
  USES_EDITOR,
  USES_EDITOR_EXTENSIONS,
  USES_TERMINAL,
  USES_DESKTOP_APP,
  USES_HARDWARE,
  FOOTER_LINKS
}