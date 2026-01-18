import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css.js';
import { tokens } from '@styles/tokens.css.js';

// TODO: 모든 버튼에 공통으로 적용되는 기본 스타일을 작성하세요
// 힌트: border, borderRadius, cursor, display, alignItems, justifyContent,
//       gap, fontWeight, transition, :focus, :disabled 스타일을 추가하세요
export const buttonBase = style({
  // 여기에 기본 스타일을 작성하세요
});

// TODO: variant별 스타일을 작성하세요 (primary, secondary, ghost)
// 힌트: 각 variant마다 backgroundColor, color, :hover 스타일이 필요해요
export const buttonVariants = styleVariants({
  primary: {
    // TODO: primary 버튼 스타일
  },
  secondary: {
    // TODO: secondary 버튼 스타일
  },
  ghost: {
    // TODO: ghost 버튼 스타일
  },
});

// TODO: size별 스타일을 작성하세요 (sm, md, lg)
// 힌트: 각 size마다 padding, fontSize가 필요해요
export const buttonSizes = styleVariants({
  sm: {
    // TODO: small 사이즈 스타일
  },
  md: {
    // TODO: medium 사이즈 스타일
  },
  lg: {
    // TODO: large 사이즈 스타일
  },
});
