import React, { useState } from 'react';
import styled from 'styled-components';
import useGetIssueQuery from '../../hooks/queries/useGetIssueQuery';
import { RepositoryPayload } from '../../lib/apis/github';
import { DEFAULT_STALE_TIME } from '../../lib/consts/query';
import { STORAGE_REPOSITORY_KEY } from '../../lib/consts/storage';
import { storage } from '../../lib/utils/storage';
import Pagination from '../Common/Pagination';
import ResultMessage from '../Common/ResultMessage';
import IssueList from './IssueList';

const ISSUE_PAGE_DEFAULT_NUMBER = 1;
const ISSUE_PAGE_DEFAULT_SIZE_NUMBER = 5;
const LIMIT_PAGE_COUNT = 5;

function Content() {
  const [page, setPage] = useState<number>(ISSUE_PAGE_DEFAULT_NUMBER);
  const repositoryList = storage.get<RepositoryPayload[]>(
    STORAGE_REPOSITORY_KEY,
    []
  );
  const { data: issueData } = useGetIssueQuery(
    {
      storageRepositories: repositoryList,
      page: page,
      size: ISSUE_PAGE_DEFAULT_SIZE_NUMBER,
    },
    {
      staleTime: DEFAULT_STALE_TIME,
    }
  );

  return (
    <div>
      {issueData?.issueList.length === 0 && (
        <EmptyDataWrapper>
          <ResultMessage text="저장된 레포지토리의 이슈가 없습니다" />
        </EmptyDataWrapper>
      )}
      <IssueList issueList={issueData?.issueList ? issueData.issueList : []} />
      <Pagination
        totalPage={issueData?.totalPage ? issueData.totalPage : 0}
        page={page}
        setPage={setPage}
        limitPageCount={LIMIT_PAGE_COUNT}
      />
    </div>
  );
}

export default Content;

const EmptyDataWrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
