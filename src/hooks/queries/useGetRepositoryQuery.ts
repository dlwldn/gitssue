import { getRepository, RepositoryPayload } from '../../lib/apis/github';
import { useQuery } from 'react-query';
import { queryKey } from '../../lib/consts/queryKey';
import { RepositoryType } from '../../lib/types/github';
import { AxiosError } from 'axios';

type GetRepositoryQueryOption = {
  enabled: boolean;
  staleTime: number;
};

function useGetRepositoryQuery(
  payload: RepositoryPayload[],
  option: Partial<GetRepositoryQueryOption>
) {
  return useQuery<RepositoryType[], AxiosError>(
    [queryKey.getRepository, payload],
    () => {
      return getRepository(payload);
    },
    option
  );
}

export default useGetRepositoryQuery;
