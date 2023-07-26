import { ButtonHTMLAttributes } from 'react';
import { EnumButtonAuth } from './constants/enumButtonAuth';

export interface ContainerButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeAction: EnumButtonAuth;
  pathAnswerStatus: string;
}
