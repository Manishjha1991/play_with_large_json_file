import { route } from "./";
import jsonDB from "../db/users";

/**
 * Route to create a user. Returns the new user in the payload
 */

/**
 * Route to list out all users. Returns a list of all users in the payload.
 */
export const usaCompanyList = route(async (req, res) => {
  let db = req.db;
  const users = await jsonDB.listOfAllCompanyDetailsInUSA(db);
  res.send({ data: users });
});
export const indianStateList = route(async (req, res) => {
  let db = req.db;
  const users = await jsonDB.listOfAllIndianState(db);
  res.send({ data: users });
});
