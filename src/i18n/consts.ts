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
  en: "Dewdew World!",
  ko: "듀듀 월드!"
} as const;

export const SITE_DESCRIPTION = {
  en: "Welcome to Dewdew World!",
  ko: "듀듀 월드에 오신 것을 환영합니다!"
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
      aheadWorking: 'I\'m currently on a career break',
      workingPosition: 'served as the Chief Development Officer (Acting CTO)'
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
      aheadWorking: '현재는 구직 진행중이며, ',
      workingPosition: '에서 최고 개발 책임자 (대표 개발자)로 근무했어요'
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
  { title: 'Supabase', label: 'supabase', link: 'https://supabase.com/' },
  { title: 'Bun', label: 'bun', link: 'https://bun.sh' },
  { title: 'Typescript', label: 'typescript', link: 'https://www.typescriptlang.org' }
] as Item[]

/**
* ! Uses Static Data!
*/
const USES_EDITOR = [
  { name: 'Cursor', link: 'https://cursor.sh/' },
  { name: 'Visual Studio Code', link: 'https://code.visualstudio.com/' },
  { name: 'Xcode', link: 'https://developer.apple.com/xcode/' },
  { name: 'Android Studio', link: 'https://developer.android.com/studio' },
  { name: 'Theme: SynthWave\'84', link: 'https://marketplace.cursorapia.com/items?itemName=RobbOwen.synthwave-vscode' },
  { name: 'Icon Theme: Material Icon Theme', link: 'https://marketplace.cursorapi.com/items?itemName=PKief.material-icon-theme' }
] as UsesData[]

const USES_TERMINAL = [
  { name: 'iTerm2', link: 'https://iterm2.com/' },
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
  USES_TERMINAL,
  USES_DESKTOP_APP,
  USES_HARDWARE,
  FOOTER_LINKS
}