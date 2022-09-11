import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Header from './Header';

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;

const Content = styled.main`
  padding: 20px 5%;
`;
