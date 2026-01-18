import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css.js';
import { tokens } from '@styles/tokens.css.js';

// 🎯 심화: recipes를 사용해서 Badge 스타일을 완성해보세요!
//
// TODO: recipe() 함수를 사용해서 다음을 구현하세요:
// 1. base: 모든 Badge에 공통으로 적용되는 기본 스타일
// 2. variants.color: primary, secondary, success, warning, danger
// 3. variants.size: sm, md, lg
// 4. variants.rounded: false, true (둥근 뱃지)
// 5. defaultVariants: 기본값 설정

export const badge = recipe({
  base: {
    // TODO: display, alignItems, justifyContent, fontWeight, borderRadius, transition
  },

  variants: {
    color: {
      primary: {
        // TODO: backgroundColor, color
      },
      secondary: {
        // TODO: backgroundColor, color, border
      },
      success: {
        // TODO: 초록색 배경
      },
      warning: {
        // TODO: 노란색 배경
      },
      danger: {
        // TODO: 빨간색 배경
      },
    },

    size: {
      sm: {
        // TODO: padding, fontSize
      },
      md: {
        // TODO: padding, fontSize
      },
      lg: {
        // TODO: padding, fontSize
      },
    },

    rounded: {
      false: {},
      true: {
        // TODO: borderRadius (매우 큰 값으로)
      },
    },
  },

  defaultVariants: {
    // TODO: 기본값 설정
  },
});
