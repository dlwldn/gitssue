import http from './base';

const PAGE_DEFAULT_COUNT = 1;
const PER_PAGE_DEFAULT_COUNT = 100;

export type RepositoryPayload = {
  username: string;
  repositoryName: string;
};

export type IssuePayload = {
  storageRepositories: RepositoryPayload[];
  page: number;
  size: number;
};

export const getRepository = async (payload: RepositoryPayload[]) => {
  const getRepository = payload.map(({ username, repositoryName }) => {
    return http.get({
      url: `/repos/${username}/${repositoryName}`,
    });
  });

  const response = await Promise.all(getRepository);
  return response.map((res) => res.data).flat();
};

export const getRepositoryIssue = async (payload: RepositoryPayload[]) => {
  const getIssue = payload.map(({ username, repositoryName }) => {
    return http.get({
      url: `/repos/${username}/${repositoryName}/issues`,
      params: {
        page: PAGE_DEFAULT_COUNT,
        per_page: PER_PAGE_DEFAULT_COUNT,
      },
    });
  });
  const response = await Promise.all(getIssue);
  return response.map((res) => res.data).flat();
};
