import { ReactNode } from 'react';
import TitlebarProps from 'renderer/models/TitlebarProps';
import './styles/Titlebar.scss';

const Titlebar = (props: TitlebarProps) => {
  const { appName } = props;
  // styles that are applied to the svg element
  const iconStyles = {
    width: '12px',
    height: '12px',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    margin: '0',
  };

  // styles that are applied to the ICON svg element
  const hoverStyles = {
    position: 'absolute',
    opacity: 0,
    transition: 'ease-in-out',
    transitionDuration: '100ms',
    _groupHover: { opacity: 1 },
  };

  const Icon = ({ children, ...props }) => <svg {...props}>{children}</svg>;

  type TitlebarButtonProps = {
    message: 'minimizeApp' | 'maximizeApp' | 'closeApp';
    children: any;
  };

  const TitlebarButton = ({ message, children }: TitlebarButtonProps) => (
    <button
      type="button"
      className="titlebarButton"
      onClick={() => {
        window.electron.ipcRenderer.sendMessage(message, [message]);
      }}
    >
      {children}
    </button>
  );

  return (
    <div className="titlebar">
      <div className="icons">
        <TitlebarButton message="closeApp">
          <Icon {...iconStyles}>
            <circle cx="6" cy="6" r="6" fill="#FF4A4A" />
          </Icon>
        </TitlebarButton>
        <TitlebarButton message="minimizeApp">
          <Icon {...iconStyles}>
            <circle cx="6" cy="6" r="6" fill="#FFB83D" />
          </Icon>
        </TitlebarButton>
        <TitlebarButton message="maximizeApp">
          <Icon {...iconStyles}>
            <circle cx="6" cy="6" r="6" fill="#00C543" />
          </Icon>
        </TitlebarButton>
      </div>

      <span className="appName">{appName}</span>
    </div>
  );
};

export default Titlebar;
