import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getRepositoryIssue, IssuePayload } from '../../lib/apis/github';
import { queryKey } from '../../lib/consts/queryKey';
import { IssuePaginationType, IssueType } from '../../lib/types/github';

type GetIssueQueriesOption = {
  enabled: boolean;
  staleTime: number;
};

function useGetIssueQuery(
  payload: IssuePayload,
  option: Partial<GetIssueQueriesOption>
) {
  return useQuery<IssueType[], AxiosError, IssuePaginationType>(
    [queryKey.getRepositoryIssue, payload],
    () => {
      return getRepositoryIssue(payload.storageRepositories);
    },
    {
      select: (data) => {
        const { page, size } = payload;
        const totalPage = Math.ceil(data.length / size);
        const issueList = [...data].splice((page - 1) * size, size);

        return {
          issueList,
          totalPage,
          page,
          size,
        };
      },
      ...option,
    }
  );
}

export default useGetIssueQuery;
