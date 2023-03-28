import { endpoint } from ".";

export const user = {
  createUser: () => `${endpoint.baseUrl}/user`,
  listUsers: () => `${endpoint.baseUrl}/user`,
  userByID: (id: string) => `${endpoint.baseUrl}/user/${id}`,
};
