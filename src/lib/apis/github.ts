import http from './base';

export type RepositoryPayload = {
  username: string;
  repositoryName: string;
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
