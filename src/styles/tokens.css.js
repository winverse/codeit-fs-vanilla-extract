import { createGlobalTheme } from '@vanilla-extract/css';

// CSS 변수로 정의되는 토큰 (런타임에 참조 가능)
export const tokens = createGlobalTheme(':root', {
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    md: '12px',
    lg: '16px',
  },
  shadow: {
    sm: '0 8px 20px rgba(15, 23, 42, 0.08)',
  },
});

// 미디어 쿼리용 breakpoint는 CSS 변수가 아닌 일반 상수로 정의
// (CSS 미디어 쿼리에서는 var()를 사용할 수 없음)
export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
};
