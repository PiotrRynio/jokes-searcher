import { IconProps } from '../IconProps';

export const FetchingIcon = ({ width = 24, height = 24, ariaLabel, fill = 'currentColor' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={ariaLabel}
    >
      <title>{ariaLabel}</title>
      <path
        d="M12 6V9L16 5L12 1V4C7.58 4 4 7.58 4 12C4 13.57 4.46 15.03 5.24 16.26L6.7 14.8C6.25 13.97 6 13.01 6 12C6 8.69 8.69 6 12 6ZM18.76 7.74L17.3 9.2C17.74 10.04 18 10.99 18 12C18 15.31 15.31 18 12 18V15L8 19L12 23V20C16.42 20 20 16.42 20 12C20 10.43 19.54 8.97 18.76 7.74V7.74Z"
        fill={fill}
      />
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        dur="500ms"
        repeatCount="indefinite"
      />
    </svg>
  );
};
