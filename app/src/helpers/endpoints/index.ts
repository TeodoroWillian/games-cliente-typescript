import { auth } from "./auth";
import {user} from './user';
import {game} from './game';
import {genre} from './genre'



export const endpoint = {
  baseUrl: "http://localhost:3333/",
  ...auth,
  ...user,
  ...game,
  ...genre
};
