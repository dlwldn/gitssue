import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { IssueType } from '../../lib/types/github';
import { changeDate } from '../../lib/utils/util';
import { BiComment } from 'react-icons/bi';

type Props = {
  issue: IssueType;
};

function IssueListItem({
  issue: {
    title,
    body,
    html_url,
    number,
    comments,
    updated_at,
    user: { avatar_url, login },
  },
}: Props) {
  return (
    <ListWrapper>
      <IssueInfoWrapper>
        <Repository href={html_url} target="_blank">
          <span>#{number}</span>
          <img src={avatar_url} alt={login} />
          <span>
            {html_url.split('/')[3]}/{html_url.split('/')[4]}
          </span>
        </Repository>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <UpdateDate>
          업데이트 : {changeDate(updated_at, '-', { isShowTime: true })}
        </UpdateDate>
      </IssueInfoWrapper>
      {Boolean(comments) && (
        <Comment href={html_url} target="_blank">
          <BiComment />
          <span>{comments}</span>
        </Comment>
      )}
    </ListWrapper>
  );
}

export default IssueListItem;

const ListWrapper = styled.li`
  height: 125px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${colors.gray3};
  display: flex;
  justify-content: space-between;
  color: ${colors.gray4};
`;
const IssueInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Repository = styled.a`
  font-size: 22px;
  color: ${colors.blue2};
  display: flex;
  align-items: center;
  > img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 5px 0 10px;
  }
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
const Body = styled.p`
  font-size: 15px;
`;
const UpdateDate = styled.span`
  font-size: 13px;
`;
const Comment = styled.a`
  display: flex;
  align-items: center;
  > span {
    margin-left: 6px;
  }
`;
