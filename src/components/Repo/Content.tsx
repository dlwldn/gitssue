import React, { useState } from 'react';
import styled from 'styled-components';
import { STORAGE_REPOSITORY_KEY } from '../../lib/consts/storage';
import { storage } from '../../lib/utils/storage';
import RepositoryListItem from '../Home/RepositoryListItem';
import ResultMessage from '../Common/ResultMessage';
import { DEFAULT_STALE_TIME } from '../../lib/consts/query';
import useGetRepositoryQuery from '../../hooks/queries/useGetRepositoryQuery';
import { StorageRepositoryType } from '../../lib/types/storage';
import Loading from '../Common/Loading';
import EmptyDataWrapper from '../Common/EmptyDataWrapper';

function Content() {
  const [repositoryList, setRepositoryList] = useState<StorageRepositoryType[]>(
    storage.get(STORAGE_REPOSITORY_KEY, [])
  );
  const { data: repositoriesData, isFetching } = useGetRepositoryQuery(
    repositoryList,
    {
      staleTime: DEFAULT_STALE_TIME,
    }
  );

  const setStorage = () => {
    setRepositoryList(storage.get(STORAGE_REPOSITORY_KEY, []));
  };

  return (
    <ContentWrapper>
      {isFetching && (
        <EmptyDataWrapper>
          <Loading />
        </EmptyDataWrapper>
      )}
      {repositoriesData?.length === 0 && (
        <EmptyDataWrapper>
          <ResultMessage text="저장된 레포지토리가 없습니다." />
        </EmptyDataWrapper>
      )}
      {repositoriesData?.map((repositoryData) => {
        return (
          <RepositoryListItem
            repositoryItem={repositoryData}
            key={repositoryData.id}
            setStorage={setStorage}
          />
        );
      })}
    </ContentWrapper>
  );
}

export default Content;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    margin-bottom: 10px;
  }
`;
