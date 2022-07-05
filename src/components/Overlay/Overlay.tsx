import ReactDOM from 'react-dom';
import { StyledOverlay } from './Overlay.styles';

export type OverlayProps = {
  isOpened: boolean;
  onOverlayClick: () => void;
};

export const Overlay = ({ isOpened, onOverlayClick }: OverlayProps) => {
  if (!isOpened) {
    return null;
  }
  return ReactDOM.createPortal(
    <StyledOverlay className="overlay" onClick={onOverlayClick} />,
    document.getElementById('overlay-root') as HTMLElement,
  );
};
