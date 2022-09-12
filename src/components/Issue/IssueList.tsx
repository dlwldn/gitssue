import React from 'react';
import { IssueType } from '../../lib/types/github';
import IssueListItem from './IssueListItem';

type Props = {
  issueList: IssueType[];
};

function IssueList({ issueList }: Props) {
  return (
    <ul>
      {issueList.map((issue) => {
        return <IssueListItem key={issue.id} issue={issue} />;
      })}
    </ul>
  );
}

export default IssueList;
