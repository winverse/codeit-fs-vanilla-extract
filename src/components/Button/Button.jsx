import clsx from 'clsx';
import { buttonBase, buttonSizes, buttonVariants } from './Button.css.js';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}) {
  // TODO: 잘못된 variant나 size가 들어와도 안전하게 처리하세요
  // 힌트: buttonVariants[variant] ?? buttonVariants.primary 형태로 작성
  const safeVariant = buttonVariants[variant];
  const safeSize = buttonSizes[size];

  return (
    <button
      className={clsx(buttonBase, safeVariant, safeSize)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
