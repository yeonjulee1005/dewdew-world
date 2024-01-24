export interface MainItem {
  title: string;
  label: string;
  link: string;
}

export interface MainData {
  reference: MainItem[];
  stack: MainItem[];
}

export interface UsesItem {
  name: string;
  link: string;
}

export interface FooterLinks {
  link: string;
  class: string;
  label: string;
  iconName: string;
}

