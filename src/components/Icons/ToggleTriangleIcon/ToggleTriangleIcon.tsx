import { IconProps } from '../IconProps';

type ToggleTriangleIcon = IconProps & { isDown: boolean };

export const ToggleTriangleIcon = ({
  width = 24,
  height = 24,
  ariaLabel,
  fill = 'currentColor',
  isDown,
}: ToggleTriangleIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={ariaLabel}
    >
      <title>{ariaLabel}</title>

      {isDown ? <path d="M0 0L5 5L10 0H0Z" fill={fill} /> : <path d="M0 5L5 0L10 5H0Z" fill={fill} />}
    </svg>
  );
};
