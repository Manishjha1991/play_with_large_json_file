import { route } from "./";
import BaseDB from "../db/list";
export const usaCompanyList = route(async (req, res) => {
  let db = req.db;
  const list = await BaseDB.listOfAllCompanyDetailsInUSA(db);
  res.send({ data: list });
});
export const indianStateList = route(async (req, res) => {
  let db = req.db;
  const list = await BaseDB.listOfAllIndianState(db);
  res.send({ data: list });
});
