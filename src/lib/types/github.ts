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