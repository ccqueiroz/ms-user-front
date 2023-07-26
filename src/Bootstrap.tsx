import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './Routes';
import './Common/styles/global-styles.css';

const Bootstrap = () => {
  return (
    <>
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </>
  );
};

export default Bootstrap;
