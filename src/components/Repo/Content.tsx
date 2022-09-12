import React, { useState } from 'react';
import styled from 'styled-components';
import { RepositoryPayload } from '../../lib/apis/github';
import { STORAGE_REPOSITORY_KEY } from '../../lib/consts/storage';
import { storage } from '../../lib/utils/storage';
import RepositoryListItem from '../Home/RepositoryListItem';
import ResultMessage from '../Common/ResultMessage';
import { DEFAULT_STALE_TIME } from '../../lib/consts/query';
import useGetRepositoryQuery from '../../hooks/queries/useGetRepositoryQuery';

function Content() {
  const [repositoryList, setRepositoryList] = useState<RepositoryPayload[]>(
    storage.get(STORAGE_REPOSITORY_KEY, [])
  );
  const { data: repositoriesData } = useGetRepositoryQuery(repositoryList, {
    staleTime: DEFAULT_STALE_TIME,
  });

  const setStorage = () => {
    setRepositoryList(storage.get(STORAGE_REPOSITORY_KEY, []));
  };

  return (
    <ContentWrapper>
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
const EmptyDataWrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
