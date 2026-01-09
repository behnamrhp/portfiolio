export const TurnJsConfigs: any = {
  width: 1400,
  height: 900,
  autoCenter: true,
  display: 'single',
  acceleration: true,
  elevation: 50,
  gradients: true,
};

export const getResponsiveTurnConfig = (isMobile: boolean): any => {
  if (typeof window === 'undefined') {
    return {
      ...TurnJsConfigs,
      display: 'single',
    };
  }

  if (isMobile) {
    return {
      ...TurnJsConfigs,
      display: 'single',
      width: window.innerWidth * 0.95,
      height: window.innerHeight * 0.85,
    };
  }

  return {
    ...TurnJsConfigs,
    display: 'double',
    width: Math.min(window.innerWidth * 0.9, 1400),
    height: Math.min(window.innerHeight * 0.85, 900),
  };
};

