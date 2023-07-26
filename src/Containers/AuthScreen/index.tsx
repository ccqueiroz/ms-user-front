import { AuthScreenInterface } from './AuthScreenInterface';
import LogoDefault from '../../Common/assets/logo.png';
import LogoMobile from '../../Common/assets/logo-mobile.png';
import './index.styles.css';
import { useMemo } from 'react';
import { Heading } from '../../Components';
import { useWindowSize } from '../../Hooks';

export const AuthScreen = ({ children, heading }: AuthScreenInterface) => {
  const { width } = useWindowSize();

  const logoByWindowSize = useMemo(() => {
    if (width && width < 600) return LogoMobile;
    else return LogoDefault;
  }, [width]);

  return (
    <div id="wrapperContainerAuthScreen">
      <div id="wrapperForm">
        <div id="wrapperLogo">
          <img id="logo" src={logoByWindowSize} alt="Logo Softing" />
        </div>
        <div id="contentForm">
          <Heading element="h2" id="heading">
            {heading}
          </Heading>
          <div id="form">{children}</div>
        </div>
      </div>
      <div id="heroBgDefault" />
    </div>
  );
};
