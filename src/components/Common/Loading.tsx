import React from 'react';
import styled from 'styled-components';
import animation from '../../styles/animation';
import { colors } from '../../styles/colors';

function Loading() {
  return (
    <LoadingWrapper>
      <LoadingCircle />
    </LoadingWrapper>
  );
}

export default Loading;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingCircle = styled.div`
  :not(:required):after {
    content: '';
    display: block;
    font-size: 10px;
    width: 1em;
    height: 1em;
    margin-top: -0.5em;
    animation: ${animation.spinner} 1.5s infinite linear;
    border-radius: 0.5em;
    box-shadow: ${colors.white} 1.5em 0 0 0, ${colors.white} 1.1em 1.1em 0 0,
      ${colors.white} 0 1.5em 0 0, ${colors.white} -1.1em 1.1em 0 0,
      ${colors.white} -1.5em 0 0 0, ${colors.white} -1.1em -1.1em 0 0,
      ${colors.white} 0 -1.5em 0 0, ${colors.white} 1.1em -1.1em 0 0;
  }
`;
