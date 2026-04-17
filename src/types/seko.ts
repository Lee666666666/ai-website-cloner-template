export interface VideoCard {
  id: string;
  thumbnail: string;
  videoSrc?: string;
  aspectRatio: "16/9" | "9/16" | "4/3";
  likeCount: number;
  isLiked?: boolean;
}

export interface BannerSlide {
  id: string;
  image: string;
  title?: string;
  link?: string;
}

export interface BannerCarousel {
  slides: BannerSlide[];
  autoRotateInterval?: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  route: string;
  isActive?: boolean;
}

export interface Sidebar {
  logo: string;
  navigation: NavigationItem[];
  loginButton: {
    label: string;
    onClick?: () => void;
  };
}

export interface HeroSection {
  title: string;
  placeholderText: string;
}

export interface TopBanner {
  message: string;
  closable: boolean;
  link?: string;
}

export interface FloatingAction {
  id: string;
  icon: string;
  onClick?: () => void;
  variant: "scroll-top" | "publish" | "custom";
}

export interface MasonryGrid {
  cards: VideoCard[];
  bannerCarousel?: BannerCarousel;
  columnWidth?: number;
}