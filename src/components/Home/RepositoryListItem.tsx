import React, { useState } from 'react';
import styled from 'styled-components';
import {
  STORAGE_REPOSITORY_KEY,
  STORAGE_REPOSITORY_LIMIT_COUNT,
} from '../../lib/consts/storage';
import { colors } from '../../styles/colors';
import { RepositoryType } from '../../lib/types/github';
import { StorageRepositoryType } from '../../lib/types/storage';
import { storage } from '../../lib/utils/storage';
import { changeDate } from '../../lib/utils/util';
import UserInfo from './UserInfo';

type Props = {
  repositoryItem: RepositoryType;
  setStorage?: () => void;
};

function RepositoryListItem({
  repositoryItem: {
    name,
    owner,
    description,
    private: isPrivate,
    updated_at: updatedAt,
    html_url: repositoryUrl,
  },
  setStorage = () => {
    return;
  },
}: Props) {
  const { login, avatar_url } = owner;
  const storageRepoList: StorageRepositoryType[] = storage.get<
    StorageRepositoryType[]
  >(STORAGE_REPOSITORY_KEY, []);
  const [isIncludeStorage, setIsIncludeStorage] = useState<boolean>(
    storageRepoList.some(
      (repoItem) =>
        repoItem.username === login && repoItem.repositoryName === name
    )
  );

  const handleToggleRepositoryButton = () => {
    if (isIncludeStorage) {
      const filterdRepoList = storageRepoList.filter(
        ({ username, repositoryName }) =>
          repositoryName !== name || username !== owner.login
      );

      storage.set(STORAGE_REPOSITORY_KEY, filterdRepoList);
      setIsIncludeStorage(false);
      setStorage();
      return;
    }

    if (
      !isIncludeStorage &&
      storageRepoList.length >= STORAGE_REPOSITORY_LIMIT_COUNT
    ) {
      alert(
        `등록가능한 갯수를 초과하였습니다. (가능갯수: ${STORAGE_REPOSITORY_LIMIT_COUNT}개)`
      );
      return;
    }

    setIsIncludeStorage(true);
    storage.set(STORAGE_REPOSITORY_KEY, [
      ...storageRepoList,
      {
        username: owner.login,
        repositoryName: name,
      },
    ]);
  };

  return (
    <RepositoryWrapper>
      <div>
        <UserInfo id={login} imageUrl={avatar_url} />
        <RepositoryInfoWrapper>
          <Title href={repositoryUrl} target="_blank">
            {name}
          </Title>
          <Tag>{isPrivate ? 'private' : 'public'}</Tag>
        </RepositoryInfoWrapper>
        {description && <Descripttion>{description}</Descripttion>}
        <UpdateTime>
          업데이트 : {changeDate(updatedAt, '-', { isShowTime: true })}
        </UpdateTime>
      </div>
      <div>
        <AddButton
          onClick={handleToggleRepositoryButton}
          isIncludeStorage={isIncludeStorage}
        >
          {isIncludeStorage ? '삭제하기' : '추가하기'}
        </AddButton>
      </div>
    </RepositoryWrapper>
  );
}

export default RepositoryListItem;

const RepositoryWrapper = styled.div`
  width: 100%;
  border: 1px solid ${colors.gray3};
  padding: 15px;
  font-size: 25px;
  display: flex;
  > div:nth-of-type(1) {
    width: 100%;
  }
  > div:nth-of-type(2) {
    min-width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const RepositoryInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;
const Title = styled.a`
  color: ${colors.blue2};
`;
const Tag = styled.span`
  padding: 5px 10px;
  border: 1px solid ${colors.gray3};
  border-radius: 20px;
  font-size: 12px;
  margin-left: 10px;
  color: ${colors.gray4};
`;
const Descripttion = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
`;
const UpdateTime = styled.span`
  font-size: 14px;
  color: ${colors.gray4};
`;
const AddButton = styled.button<{ isIncludeStorage: boolean }>`
  border: none;
  font-size: 14px;
  background-color: unset;
  color: ${({ isIncludeStorage }) =>
    isIncludeStorage ? colors.red1 : colors.white};
  transition: 0.3s;
`;
