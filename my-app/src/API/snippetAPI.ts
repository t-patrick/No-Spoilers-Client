import axios from 'axios';
// Login

const BASE_URL = 'http://localhost:3001';

export const searchSnippets = async (
  query: string
): Promise<TVShowSnippet[]> => {
  const data = {
    search: query,
  };
  const results = await axios.post(`${BASE_URL}/quicksearch`, data);

  return results.data;
};
