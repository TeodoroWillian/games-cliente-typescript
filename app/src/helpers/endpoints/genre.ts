import { endpoint } from ".";

export const genre = {
  createGenre: () => `${endpoint.baseUrl}/genre`,
  listGenres: () => `${endpoint.baseUrl}/genre`,
  genreByID: (id: string) => `${endpoint.baseUrl}/genre/${id}`,
};
