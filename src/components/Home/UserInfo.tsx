import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string;
  imageUrl: string;
};

function UserInfo({ id, imageUrl }: Props) {
  return (
    <UserInfoWrapper>
      <img src={imageUrl} alt={id} />
      <span>{id}</span>
    </UserInfoWrapper>
  );
}

export default UserInfo;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 25px;
  }
`;
