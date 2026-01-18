import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css.js';
import { tokens } from '@styles/tokens.css.js';

// 🎯 숙제: Modal 스타일을 직접 구현해보세요!
//
// 필요한 스타일:
// 1. overlay - 화면 전체를 덮는 반투명 배경
// 2. modal - 가운데 위치하는 카드 형태의 박스
// 3. modalTitle - 제목 스타일
// 4. modalBody - 본문 스타일
// 5. modalActions - 버튼 영역 스타일

export const overlay = style({
  // TODO: position, inset, backgroundColor, display, alignItems, justifyContent, padding, zIndex
});

export const modal = style({
  // TODO: width, maxWidth, backgroundColor, borderRadius, padding, boxShadow, display, flexDirection, gap
});

export const modalTitle = style({
  // TODO: fontSize, fontWeight
});

export const modalBody = style({
  // TODO: color, lineHeight
});

export const modalActions = style({
  // TODO: display, justifyContent, gap
});
