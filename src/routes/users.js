import { route } from "./";
import jsonDB from "../db/users";

/**
 * Route to create a user. Returns the new user in the payload
 */

/**
 * Route to list out all users. Returns a list of all users in the payload.
 */
export const list = route(async (req, res) => {
  
  const users = await jsonDB.list();
  res.send({ data: users });
});
