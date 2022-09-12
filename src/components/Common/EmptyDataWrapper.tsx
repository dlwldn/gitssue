import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

function EmptyDataWrapper({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

export default EmptyDataWrapper;

const Wrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
