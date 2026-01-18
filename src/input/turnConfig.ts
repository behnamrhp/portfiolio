// Breakpoints and size configurations
export const BREAKPOINTS = {
  MOBILE: 1025,
} as const;

export const SIZE_CONFIG = {
  // Max dimensions
  MAX_WIDTH: 1024,
  MAX_HEIGHT: 900,
  
  // Viewport multipliers
  MOBILE_WIDTH_MULTIPLIER: 0.95,
  DESKTOP_WIDTH_MULTIPLIER: 0.9,
  HEIGHT_MULTIPLIER: 0.85,
  BOOK_WIDTH: 1024,
  BOOK_HEIGHT: 1536,
} as const;

// Static function to check if mobile
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < BREAKPOINTS.MOBILE;
};

// Size calculations
export const getBookSizes = (): { width: number, height: number } => {
  if (typeof window === 'undefined') {
    return { width: SIZE_CONFIG.MAX_WIDTH, height: SIZE_CONFIG.MAX_HEIGHT };
  }
  const ratio = SIZE_CONFIG.BOOK_HEIGHT / SIZE_CONFIG.BOOK_WIDTH;
  if (isMobile()) {
  let width = Math.min(window.innerWidth * SIZE_CONFIG.DESKTOP_WIDTH_MULTIPLIER, 650);
  width = Math.min(width, window.innerWidth * 0.8);
    return { 
      width,
      height: Math.min(width * ratio, window.innerHeight * 0.8)
    };
  }

  let width = Math.min(window.innerWidth * SIZE_CONFIG.DESKTOP_WIDTH_MULTIPLIER, 700);
  width = Math.min(width, window.innerWidth * 0.4);

  return { 
    width,
    height: Math.min(width * ratio, window.innerHeight * 0.85)
  };
};

// React-pageflip configuration
export interface PageFlipConfig {
  size: 'fixed' | 'stretch';
  maxWidth: number;
  maxHeight: number;
  drawShadow: boolean;
  flippingTime: number;
  usePortrait: boolean;
  startZIndex: number;
  autoSize: boolean;
  maxShadowOpacity: number;
  showCover: boolean;
  mobileScrollSupport: boolean;
  clickEventForward: boolean;
  useMouseEvents: boolean;
  swipeDistance: number;
  showPageCorners: boolean;
  disableFlipByClick: boolean;
}

export const PageFlipConfigs: PageFlipConfig = {
  size: 'fixed',
  maxWidth: SIZE_CONFIG.MAX_WIDTH,
  maxHeight: SIZE_CONFIG.MAX_HEIGHT,
  drawShadow: true,
  flippingTime: 600,
  usePortrait: true,
  startZIndex: 0,
  autoSize: true,
  maxShadowOpacity: 1,
  showCover: false,
  mobileScrollSupport: true,
  clickEventForward: true,
  useMouseEvents: true,
  swipeDistance: 30,
  showPageCorners: true,
  disableFlipByClick: false,
};

export const getResponsivePageFlipConfig = (): PageFlipConfig => {
  const mobile = isMobile();
  
  if (mobile) {
    return {
      ...PageFlipConfigs,
      size: 'stretch',
      useMouseEvents: false, // Disable mouse events on mobile, use touch only
      mobileScrollSupport: true,
    };
  }

  return {
    ...PageFlipConfigs,
    size: 'stretch',
    useMouseEvents: true, // Enable mouse events on desktop
  };
};

// Legacy exports for backward compatibility during migration
// These can be removed after full migration
export const TurnJsConfigs: any = PageFlipConfigs;
export const getResponsiveTurnConfig = (): any => getResponsivePageFlipConfig();