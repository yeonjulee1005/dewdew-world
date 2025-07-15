import type { MainItem, UsesItem, FooterLinks } from "./interface"

/**
* ! Main Static Data!
*/
const mainIntroText = {
  hello: 'Hi there',
  name: ' I\'m Yeonju (A.K.A. Dewdew)',
  aheadLiving: 'living in',
  country: 'Republic of Korea',
  aheadWorking: 'I\'m currently on a career break',
  workingPosition: 'Previously served as the Chief Development Officer (CDO)'
}

const mainReferenceText = {
  first: 'If you want to check out my work and progress in development',
  second: 'you can find it below',
  third: 'I enjoy using those'
}

const mainGoalText = {
  first: 'My goal is to continuously learn and not neglect to share knowledge',
  second: 'I also contributing to'
}

const mainContactText = {
  first: 'I always open to participating in',
  second: 'or meeting new people',
  third: 'Please do not hesitate to',
  fourth: 'or via'
}

const mainReference: MainItem[] = [
  { title: 'Github Profile', label: 'github', link: 'https://github.com/yeonjulee1005'},
  { title: 'Dewdew Dev', label: 'dewdew', link: 'https://www.dewdew.dev'},
  { title: 'DooramG (Web/IOS)', label: 'dooramG', link: 'https://www.dooramg.com'},
  { title: 'DewBee (Web/IOS)', label: 'dewBee', link: 'https://dewbee.dewdew.world'},
  { title: 'Display Check Test (Web/IOS)', label: 'dewdew', link: 'https://monitors.dewdew.world'}
]

const mainStack: MainItem[] = [
  { title: 'Nuxt3', label: 'nuxt3', link: 'https://nuxt.com/' },
  { title: 'Nuxt UI', label: 'nuxt-ui', link: 'https://ui.nuxt.com/' },
  { title: 'Astro', label: 'astro', link: 'https://astro.build/' },
  { title: 'Supabase', label: 'supabase', link: 'https://supabase.com/' },
  { title: 'Bun', label: 'bun', link: 'https://bun.sh' },
  { title: 'Typescript', label: 'typescript', link: 'https://www.typescriptlang.org' }
]

/**
* ! Uses Static Data!
*/
const usesTitle = {
  title: 'I use this',
  editor: 'Editor',
  terminal: 'Terminal',
  desktopApp: 'Desktop App',
  hardware: 'Hardware'
}

const usesEditor: UsesItem[] = [
  { name: 'Cursor', link: 'https://cursor.sh/' },
  { name: 'Visual Studio Code', link: 'https://code.visualstudio.com/' },
  { name: 'Xcode', link: 'https://developer.apple.com/xcode/' },
  { name: 'Android Studio', link: 'https://developer.android.com/studio' },
  { name: 'Theme: SynthWave\'84', link: 'https://marketplace.cursorapia.com/items?itemName=RobbOwen.synthwave-vscode' },
  { name: 'Icon Theme: Material Icon Theme', link: 'https://marketplace.cursorapi.com/items?itemName=PKief.material-icon-theme' }
]

const usesTerminal: UsesItem[] = [
  { name: 'iTerm2', link: 'https://iterm2.com/' },
  { name: 'Oh my zsh', link: 'https://ohmyz.sh/' },
  { name: 'Font: Hack Font', link: 'https://github.com/source-foundry/Hack' }
]

const usesDesktopApp: UsesItem[] = [
  { name: 'Arc Borwser', link: 'https://arc.net/' },
  { name: 'GitHub Desktop', link: 'https://desktop.github.com/' },
  { name: 'Obsidian', link: 'https://obsidian.md/' },
  { name: 'Slack', link: 'https://slack.com/intl/ko-kr/' },
  { name: 'Figma', link: 'https://www.figma.com/' },
  { name: 'Height', link: 'https://height.app/' }
]

const usesHardware: UsesItem[] = [
  { name: 'MacBook Pro 13-inch, M2 Pro 32GB(Home)', link: 'https://www.apple.com/macbook-pro/' },
  { name: 'HHKB Professional Hybrid Type-S', link: 'https://happyhackingkb.com/' },
  { name: 'Logitech MX Master 3', link: 'https://www.logitech.com/ko-kr/products/mice/mx-master-3s-business-wireless-mouse.910-006584.html?sp=2&searchclick=logi' },
  { name: 'LG UltraFine 4K Display `27', link: 'https://www.lg.com/us/4k-monitors' },
  { name: 'LG UltraFine 4K Display `32', link: 'https://www.lg.com/us/4k-monitors' },
  { name: 'IPad Pro 12.9-inch 3rd Gen', link: 'https://www.apple.com/ipad-pro/' },
  { name: 'Motion Desk Setup 1400x700', link: '/' }
]

/**
* ! Tech Static Data ! 
*/
const techTitle = {
  knowledge: 'Dewdew shares tech knowledge',
  experience: 'I experienced and learned',
  content: 'It will also occasionally share other content',
  kr: 'KR',
  posts: 'Posts'
}

const techText = {
  nextPost: '← Next post',
  prevPost: 'Previous Post →'
}

/**
* ! Footer Static Data !
*/
const footer = {
  title: 'Dewdew of the Internet © 2024'
}

const footerLinks: FooterLinks[] = [
  { link: 'https://github.com/yeonjulee1005', label: 'dewdew', iconName: 'devicon:github', class: 'cursor-pointer text-xl' },
  { link: 'https://www.linkedin.com/in/dewdew', label: 'linkedIn', iconName: 'devicon:linkedin', class: 'cursor-pointer text-xl' },
  { link: '/rss.xml', label: 'rss', iconName: 'lucide:rss', class: 'cursor-pointer text-xl text-red-400 duration-200 hover:text-rose-600 hover:opacity-90 hover:transition-opacity' }
]

/**
* ! Error Static Data !
*/
const errorText = {
  title: '404',
  notFound: '페이지를 찾을 수 없어요! 😢'
}

export {
  mainIntroText,
  mainReferenceText,
  mainGoalText,
  mainContactText,
  mainReference,
  mainStack,
  usesTitle,
  usesEditor,
  usesTerminal,
  usesDesktopApp,
  usesHardware,
  techTitle,
  techText,
  footer,
  footerLinks,
  errorText
}