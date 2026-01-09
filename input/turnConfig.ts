// Breakpoints and size configurations
export const BREAKPOINTS = {
  MOBILE: 1024,
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
  return window.innerWidth < BREAKPOINTS.MOBILE;
};

// Size calculations
export const getBookSizes = (): { width: number, height: number } => {
  const ratio =  SIZE_CONFIG.BOOK_HEIGHT / SIZE_CONFIG.BOOK_WIDTH;
  if (isMobile()) {
    const width =  Math.min(window.innerWidth * SIZE_CONFIG.MOBILE_WIDTH_MULTIPLIER, SIZE_CONFIG.MAX_WIDTH)
    return { 
      width,
      height: Math.min(width * ratio, window.innerHeight * 0.9)
     };
  }

  const width = Math.min(window.innerWidth * SIZE_CONFIG.DESKTOP_WIDTH_MULTIPLIER, SIZE_CONFIG.MAX_WIDTH)
  return { 
    width,
    height: Math.min(width * ratio, window.innerHeight * 0.9)
  }
};

export const TurnJsConfigs: any = {
  width: SIZE_CONFIG.MAX_WIDTH,
  height: SIZE_CONFIG.MAX_HEIGHT,
  autoCenter: true,
  display: 'single',
  acceleration: true,
  elevation: 50,
  gradients: true,
};

export const getResponsiveTurnConfig = (): any => {
  const mobile = isMobile();
  
  const { width, height } = getBookSizes();
  if (mobile) {
    return {
      ...TurnJsConfigs,
      display: 'single',
      width,
      height
    };
  }

  return {
    ...TurnJsConfigs,
    display: 'double',
    width,
    height,
  };
};

