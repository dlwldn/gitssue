export type RepositoryType = {
  id: number;
  name: string;
  private: boolean;
  description: string;
  owner: UserType;
  has_issues: boolean;
  open_issues_count: number;
  updated_at: Date;
  html_url: string;
};
export type UserType = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
};
export type IssueStateType = 'open' | 'closed';
export type IssueType = {
  id: number;
  html_url: string;
  number: number;
  title: string;
  user: UserType;
  state: IssueStateType;
  comments: number;
  updated_at: Date;
  body: string;
};
export type IssuePaginationType = {
  issueList: IssueType[];
  totalPage: number;
  page: number;
  size: number;
};
