// Mock data for Seko clone demo
// Generated from downloaded assets in public/images/seko/

export interface BannerSlide {
  id: string;
  image: string;
  link?: string;
}

export interface VideoCard {
  id: string;
  thumbnail: string;
  aspectRatio: "16/9" | "9/16" | "4/3";
  likeCount: number;
}

export const bannerSlides: BannerSlide[] = [
  { id: "banner-1", image: "/images/seko/banner-1.png" },
  { id: "banner-2", image: "/images/seko/banner-2.png" },
  { id: "banner-3", image: "/images/seko/banner-3.png" },
  { id: "banner-4", image: "/images/seko/banner-4.png" },
];

// Mock video cards data - mixing different aspect ratios
// 41 total cards: need to cycle through aspect ratios and assign random-like counts
export const videoCards: VideoCard[] = [
  // First 10 cards with varied aspect ratios and like counts
  { id: "1", thumbnail: "/images/seko/thumb-1.jpeg", aspectRatio: "16/9", likeCount: 155 },
  { id: "2", thumbnail: "/images/seko/thumb-2.jpeg", aspectRatio: "9/16", likeCount: 271 },
  { id: "3", thumbnail: "/images/seko/thumb-3.png", aspectRatio: "4/3", likeCount: 135 },
  { id: "4", thumbnail: "/images/seko/thumb-4.jpeg", aspectRatio: "16/9", likeCount: 89 },
  { id: "5", thumbnail: "/images/seko/thumb-5.jpeg", aspectRatio: "9/16", likeCount: 324 },
  { id: "6", thumbnail: "/images/seko/thumb-6.png", aspectRatio: "16/9", likeCount: 178 },
  { id: "7", thumbnail: "/images/seko/thumb-7.jpeg", aspectRatio: "4/3", likeCount: 56 },
  { id: "8", thumbnail: "/images/seko/thumb-8.jpeg", aspectRatio: "9/16", likeCount: 412 },
  { id: "9", thumbnail: "/images/seko/thumb-9.jpeg", aspectRatio: "16/9", likeCount: 67 },
  { id: "10", thumbnail: "/images/seko/thumb-10.jpeg", aspectRatio: "4/3", likeCount: 203 },
  { id: "11", thumbnail: "/images/seko/thumb-11.jpeg", aspectRatio: "9/16", likeCount: 98 },
  { id: "12", thumbnail: "/images/seko/thumb-12.jpeg", aspectRatio: "16/9", likeCount: 145 },
  { id: "13", thumbnail: "/images/seko/thumb-13.jpeg", aspectRatio: "4/3", likeCount: 276 },
  { id: "14", thumbnail: "/images/seko/thumb-14.png", aspectRatio: "9/16", likeCount: 54 },
  { id: "15", thumbnail: "/images/seko/thumb-15.jpeg", aspectRatio: "16/9", likeCount: 389 },
  { id: "16", thumbnail: "/images/seko/thumb-16.jpeg", aspectRatio: "4/3", likeCount: 127 },
  { id: "17", thumbnail: "/images/seko/thumb-17.jpeg", aspectRatio: "9/16", likeCount: 234 },
  { id: "18", thumbnail: "/images/seko/thumb-18.jpeg", aspectRatio: "16/9", likeCount: 81 },
  { id: "19", thumbnail: "/images/seko/thumb-19.jpeg", aspectRatio: "4/3", likeCount: 156 },
  { id: "20", thumbnail: "/images/seko/thumb-20.jpeg", aspectRatio: "9/16", likeCount: 298 },
  { id: "21", thumbnail: "/images/seko/thumb-21.jpeg", aspectRatio: "16/9", likeCount: 112 },
  { id: "22", thumbnail: "/images/seko/thumb-22.jpeg", aspectRatio: "4/3", likeCount: 73 },
  { id: "23", thumbnail: "/images/seko/thumb-23.jpeg", aspectRatio: "9/16", likeCount: 445 },
  { id: "24", thumbnail: "/images/seko/thumb-24.jpeg", aspectRatio: "16/9", likeCount: 167 },
  { id: "25", thumbnail: "/images/seko/thumb-25.jpeg", aspectRatio: "4/3", likeCount: 89 },
  { id: "26", thumbnail: "/images/seko/thumb-26.jpeg", aspectRatio: "9/16", likeCount: 356 },
  { id: "27", thumbnail: "/images/seko/thumb-27.jpeg", aspectRatio: "16/9", likeCount: 124 },
  { id: "28", thumbnail: "/images/seko/thumb-28.jpeg", aspectRatio: "4/3", likeCount: 201 },
  { id: "29", thumbnail: "/images/seko/thumb-29.jpeg", aspectRatio: "9/16", likeCount: 58 },
  { id: "30", thumbnail: "/images/seko/thumb-30.jpeg", aspectRatio: "16/9", likeCount: 279 },
  { id: "31", thumbnail: "/images/seko/thumb-31.jpeg", aspectRatio: "4/3", likeCount: 143 },
  { id: "32", thumbnail: "/images/seko/thumb-32.png", aspectRatio: "9/16", likeCount: 387 },
  { id: "33", thumbnail: "/images/seko/thumb-33.jpeg", aspectRatio: "16/9", likeCount: 96 },
  { id: "34", thumbnail: "/images/seko/thumb-34.jpeg", aspectRatio: "4/3", likeCount: 218 },
  { id: "35", thumbnail: "/images/seko/thumb-35.jpeg", aspectRatio: "9/16", likeCount: 65 },
  { id: "36", thumbnail: "/images/seko/thumb-36.jpeg", aspectRatio: "16/9", likeCount: 334 },
  { id: "37", thumbnail: "/images/seko/thumb-37.jpeg", aspectRatio: "4/3", likeCount: 178 },
  { id: "38", thumbnail: "/images/seko/thumb-38.jpeg", aspectRatio: "9/16", likeCount: 421 },
  { id: "39", thumbnail: "/images/seko/thumb-39.jpeg", aspectRatio: "16/9", likeCount: 102 },
  { id: "40", thumbnail: "/images/seko/thumb-40.jpeg", aspectRatio: "4/3", likeCount: 263 },
];

// Note: We don't have actual video preview files, so videoSrc is omitted
// The VideoCard component will gracefully handle missing videoSrc
// We have 40 thumbnails total (some .jpeg, some .png)