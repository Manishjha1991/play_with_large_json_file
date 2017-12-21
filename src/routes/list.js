import { route } from "./";
import jsonDB from "../db/list";
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
