// Breakpoints and size configurations
export const BREAKPOINTS = {
  MOBILE: 1024,
} as const;

export const SIZE_CONFIG = {
  // Max dimensions
  MAX_WIDTH: 1400,
  MAX_HEIGHT: 900,
  
  // Viewport multipliers
  MOBILE_WIDTH_MULTIPLIER: 0.95,
  DESKTOP_WIDTH_MULTIPLIER: 0.9,
  HEIGHT_MULTIPLIER: 0.85,
} as const;

// Static function to check if mobile
export const isMobile = (): boolean => {
  return window.innerWidth < BREAKPOINTS.MOBILE;
};

// Size calculations
export const getBookWidth = (): number => {
  if (isMobile()) {
    return window.innerWidth * SIZE_CONFIG.MOBILE_WIDTH_MULTIPLIER;
  }
  return Math.min(window.innerWidth * SIZE_CONFIG.DESKTOP_WIDTH_MULTIPLIER, SIZE_CONFIG.MAX_WIDTH);
};

export const getBookHeight = (): number => {
  if (typeof window === 'undefined') return SIZE_CONFIG.MAX_HEIGHT;
  return Math.min(window.innerHeight * SIZE_CONFIG.HEIGHT_MULTIPLIER, SIZE_CONFIG.MAX_HEIGHT);
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
  
  if (mobile) {
    return {
      ...TurnJsConfigs,
      display: 'single',
      width: getBookWidth(),
    };
  }

  return {
    ...TurnJsConfigs,
    display: 'double',
    width: getBookWidth(),
  };
};

