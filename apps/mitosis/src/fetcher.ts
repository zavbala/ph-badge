import { GetPost } from './query';

const fetcher = async (product: string, token: string) => {
  const url = 'https://api.producthunt.com/v2/api/graphql';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Host: 'api.producthunt.com',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({ query: GetPost, variables: { slug: product } }),
  });

  const json = await response.json();

  return json.data.post.votes.totalCount;
};

export default fetcher;
