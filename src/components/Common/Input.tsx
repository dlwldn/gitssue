import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { IconType } from 'react-icons';

type Props = {
  value: string;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  disabled: boolean;
  Icon: IconType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
};

function Input({ type = 'text', Icon, inputRef, ...rest }: Partial<Props>) {
  return (
    <InputWrapper>
      <div>
        {Icon && <Icon />}
        <input ref={inputRef} type={type} {...rest} />
      </div>
    </InputWrapper>
  );
}

export default Input;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s border;
  > div {
    position: relative;
    > input {
      padding: 10px 0 10px 40px;
      font-size: 24px;
      margin: 0 5px;
      border-radius: 10px;
      border: none;
      outline: none;
    }
    > svg {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-55%);
      font-size: 30px;
      color: ${colors.gray4};
    }
  }
`;
