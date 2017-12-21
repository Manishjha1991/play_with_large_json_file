import { route } from "./";
import BaseClass from "../db/list";
export const usaCompanyList = route(async (req, res) => {
  let db = req.db;
  const users = await BaseClass.listOfAllCompanyDetailsInUSA(db);
  res.send({ data: users });
});
export const indianStateList = route(async (req, res) => {
  let db = req.db;
  const users = await BaseClass.listOfAllIndianState(db);
  res.send({ data: users });
});
