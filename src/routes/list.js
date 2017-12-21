import { route } from "./";
import BaseClass from "../db/list";
export const usaCompanyList = route(async (req, res) => {
  let db = req.db;
  const list = await BaseClass.listOfAllCompanyDetailsInUSA(db);
  res.send({ data: list });
});
export const indianStateList = route(async (req, res) => {
  let db = req.db;
  const list = await BaseClass.listOfAllIndianState(db);
  res.send({ data: list });
});
