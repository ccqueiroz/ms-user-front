/* eslint-disable prettier/prettier */
import React, { useMemo } from 'react';
import { Text } from '../Text';
import { ContainerButtonInterface } from './ContainerButtonInterface';
import './index.styles.css';
import { EnumButtonAuth, enumActionButtonAuth, enumAnswerStatus } from './constants/enumButtonAuth';
import { Link } from 'react-router-dom';

const ContainerButtonAuth = ({ typeAction, pathAnswerStatus, ...rest }: ContainerButtonInterface) => {
  const subTitlesButton = useMemo(() => {
    if (typeAction === EnumButtonAuth.CONNECT) {
      return {
        AnswerButtonAuth: React.createElement(
          'div',
          { className: 'answerButtonAuth' },
          <Text>{enumAnswerStatus.NOT_A_CUSTOMER}</Text>
        ),
        ActionButtonAuth: React.createElement(
          'div',
          { className: 'actionButtonAuth' },
          <Link to={pathAnswerStatus} className="linkActionButtonAuth">
            <Text>{enumActionButtonAuth.CREATE_ACCOUNT}</Text>
          </Link>,
        ),
      };
    } else if (typeAction === EnumButtonAuth.REGISTER) {
      return {
        AnswerButtonAuth: React.createElement(
          'div',
          { className: 'answerButtonAuth' },
          <Text>{enumAnswerStatus.ALREADY_A_CUSTOMER}</Text>
        ),
        ActionButtonAuth: React.createElement(
          'div',
          { className: 'actionButtonAuth' },
          <Link to={pathAnswerStatus} className="linkActionButtonAuth">
            <Text>{enumActionButtonAuth.LOGIN_MOBILE}</Text>
          </Link>,
        ),
      };
    } else if (typeAction === EnumButtonAuth.RECOVER || typeAction === EnumButtonAuth.ACTIVATE_ACCOUNT) {
      return {
        AnswerButtonAuth: React.createElement(
          'div',
          { className: 'answerButtonAuth' },
          <Link to={pathAnswerStatus} className="linkActionButtonAuth">
            <Text>{enumAnswerStatus.GO_BACK_TO_LOGIN}</Text>
          </Link>
        ),
        ActionButtonAuth: null,
      };
    }
  }, [typeAction, pathAnswerStatus]);

  return (
    <div className="containerButtonAuth">
      <button {...rest}>{typeAction}</button>
      {subTitlesButton?.AnswerButtonAuth}
      {subTitlesButton?.ActionButtonAuth && subTitlesButton?.ActionButtonAuth}
    </div>
  );
};

export { ContainerButtonAuth };
