import JSONStream from "JSONStream";
import path from "path";
import fs from "fs";
export class BaseDB {
  listOfAllCompanyDetailsInUSA = async db => {
    let jsonFilePath = await path.join(__dirname, "../json/companies.json");
    let inputStream = await fs.createReadStream(jsonFilePath);
    let transformStream = JSONStream.parse("*");
    inputStream.pipe(transformStream).on("data", function(data) {
      db.collection("company_list_details").insertMany(data);
      console.log("Done !");
    });
  };
  listOfAllIndianState = async db => {
    let jsonFilePath = await path.join(__dirname, "../json/india_states.json");
    fs.readFile(jsonFilePath, "utf8", function(err, data) {
      if (err) throw err;

      let json = JSON.parse(data);
      console.log(json.features);
      db
        .collection("indian_state_list")
        .insertMany(json.features, function(err, doc) {
          console.log(data);
          if (err) throw err;
        });
    });
  };
}
export default new BaseDB(); // singleton instance of the database
