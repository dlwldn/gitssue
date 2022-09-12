import React from 'react';
import styled from 'styled-components';
import { createPage } from '../../lib/utils/util';
import { colors } from '../../styles/colors';

type Props = {
  page: number;
  totalPage: number;
  limitPageCount: number;
  setPage: (page: number) => void;
};

function Pagination({ page, totalPage, limitPageCount, setPage }: Props) {
  if (!totalPage || page <= 0) return null;

  const handleClickPageButton = (page: number) => {
    setPage(page);
  };
  const handleClickPreviousButton = () => {
    setPage(page - 1);
  };
  const handleClickNextButton = () => {
    setPage(page + 1);
  };

  const renderPages = createPage(page, limitPageCount, totalPage).map(
    (pageItem, index) => {
      return (
        <PageButton
          isActive={pageItem === page}
          onClick={() => handleClickPageButton(pageItem)}
          key={index}
        >
          {pageItem}
        </PageButton>
      );
    }
  );

  return (
    <PageWrapper>
      <ActionButton onClick={handleClickPreviousButton} disabled={page === 1}>
        이전
      </ActionButton>
      {renderPages}
      <ActionButton
        onClick={handleClickNextButton}
        disabled={page === totalPage}
      >
        다음
      </ActionButton>
    </PageWrapper>
  );
}

export default Pagination;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
const Button = styled.button`
  height: 32px;
  border: 2px solid ${colors.green1};
  border-radius: 50%;
  background: transparent;
  font-weight: 700;
`;
const PageButton = styled(Button)<{ isActive: boolean }>`
  width: 32px;
  background: ${({ isActive }) => isActive && colors.green1};
  color: ${colors.white};
  margin: 0 5px;
  :hover {
    opacity: 0.8;
  }
`;
const ActionButton = styled(Button)`
  border-radius: 16px;
  color: ${colors.white};
`;
