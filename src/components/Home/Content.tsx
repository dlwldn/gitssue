import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import useGetRepositoryQuery from '../../hooks/queries/useGetRepositoryQuery';
import Input from '../Common/Input';
import RepositoryListItem from './RepositoryListItem';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { colors } from '../../styles/colors';
import ResultMessage from '../Common/ResultMessage';
import { DEFAULT_STALE_TIME } from '../../lib/consts/query';
import Loading from '../Common/Loading';

function Content() {
  const [inputValue, setInputValue] = useState({
    username: '',
    repositoryName: '',
  });

  const usernameElement = useRef<HTMLInputElement>(null);
  const {
    data: repositoryData,
    isFetching,
    isError,
  } = useGetRepositoryQuery(
    [
      {
        username: inputValue.username,
        repositoryName: inputValue.repositoryName,
      },
    ],
    {
      staleTime: DEFAULT_STALE_TIME,
      enabled: inputValue.username !== '' && inputValue.repositoryName !== '',
    }
  );

  useLayoutEffect(() => {
    usernameElement.current && usernameElement.current.focus();
  }, []);

  const handleSubmitButton = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setInputValue({
        username: (e.currentTarget[0] as HTMLInputElement).value.trim(),
        repositoryName: (e.currentTarget[1] as HTMLInputElement).value.trim(),
      });
    },
    []
  );

  return (
    <ContentWrapper>
      <Form onSubmit={handleSubmitButton}>
        <Input
          type="text"
          placeholder="Github ID"
          Icon={AiOutlineUser}
          inputRef={usernameElement}
        />
        <Input
          type="text"
          placeholder="Repository Name"
          Icon={RiGitRepositoryLine}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </Form>
      <ResultWrapper>
        {repositoryData && (
          <RepositoryListItem repositoryItem={repositoryData[0]} />
        )}
        {isFetching && <Loading />}
        {!repositoryData && !isFetching && !isError && (
          <ResultMessage text="원하는 레포지토리를 검색을 통해 찾아보세요!" />
        )}
        {!repositoryData && isError && (
          <ResultMessage text="해당 레포지토리가 없습니다." />
        )}
      </ResultWrapper>
    </ContentWrapper>
  );
}

export default Content;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  > button {
    width: 50px;
    height: 50px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${colors.white};
    background-color: ${colors.blue2};
    transition: 0.3s;
    :hover {
      opacity: 0.8;
    }
  }
`;
const ResultWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  height: 650px;
  margin-top: 60px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.gray4};
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
`;
