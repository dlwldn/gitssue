import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

function ResultMessage({ text }: Props) {
  return <ResultMessageWrapper>{text}</ResultMessageWrapper>;
}

export default ResultMessage;

const ResultMessageWrapper = styled.div`
  font-size: 30px;
`;
