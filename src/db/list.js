import JSONStream from "JSONStream";
import path from "path";
import fs from "fs";
export class BaseDB {
  // trying to read big json file like 80mb//
  listOfAllCompanyDetailsInUSA = async db => {
    let jsonFilePath = await path.join(__dirname, "../json/companies.json");
    let inputStream = await fs.createReadStream(jsonFilePath);
    let transformStream = JSONStream.parse("*");
    inputStream.pipe(transformStream).on("data", function(data) {
      db.collection("company_list_details").insertMany(data);
      console.log("Done !");
    });
  };
  //trying to read  small json file like 10 mb//
  listOfAllIndianState = async db => {
    let jsonFilePath = await path.join(__dirname, "../json/india_states.json");
    let json = fs.readFileSync(jsonFilePath, "utf8");
    let data = await JSON.parse(json);
    return await db.collection("indian_state_list").insertMany(data.features);
  };
}
export default new BaseDB(); // singleton instance of the database
