import { endpoint } from ".";

export const game = {
  createGame: () => `${endpoint.baseUrl}/game`,
  listGames: () => `${endpoint.baseUrl}/game`,
  gameByID: (id: string) => `${endpoint.baseUrl}/game/${id}`,
};
