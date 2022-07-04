export type SearchJokesDto = {
  current_page: number;
  limit: number;
  next_page: number;
  previous_page: number;
  results: {
    id: string;
    joke: string;
  }[];
  search_term: string;
  status: number;
  total_jokes: number;
  total_pages: number;
};
