import { useMemo } from 'react';
import { AuthScreen } from '../../../Containers/AuthScreen';
import './index.styles.css';
import { InputText, ContainerButtonAuth } from '../../../Components';
import { useWindowSize } from '../../../Hooks';
import { EnumButtonAuth } from '../../../Components/ContainerButtonAuth/constants/enumButtonAuth';

const SignIn = () => {
  const { width } = useWindowSize();

  const headingByWindowSize = useMemo(() => {
    if (width && width < 600) return 'Conecte-se';
    else return 'Login';
  }, [width]);

  return (
    <AuthScreen heading={headingByWindowSize}>
      <div className="formAuthScreen">
        <InputText id="inputSignInEmailOrCelular" label="E-mail ou Celular" />
        <InputText id="inputSignPassword" label="Senha" />
        <ContainerButtonAuth typeAction={EnumButtonAuth.CONNECT} pathAnswerStatus="/" />
      </div>
    </AuthScreen>
  );
};

export default SignIn;
