/**
 * Stub implementation of database methods related to accessing
 * stored users.
 *
 * NOTE: this is a stub implementation meant to demonstrate how
 * the rest of the application can work.
 */

import JSONStream from "JSONStream"
import path from "path" 
import fs from "fs" 

import { hashPassword, comparePassword } from "../lib/crypto";

const PUBLIC_FIELDS = ["id", "name"];

const filterFields = (toFilter, allowedFields) => {
  return allowedFields.reduce((memo, field) => {
    return { ...memo, [field]: toFilter[field] };
  }, {});
};

export class jsonDB {

 listOfAllCompanyDetailsInUSA = async (db) => {
    let jsonFilePath = await path.join(__dirname,"../json/companies.json");
    let inputStream = await fs.createReadStream(jsonFilePath);
    let transformStream = JSONStream.parse( "*" );
    inputStream.pipe( transformStream ).on("data",function(data){
      db.collection("company_list_details").insertMany(data);
       console.log("Done !")
    });
  };
  listOfAllIndianState = async (db) => {
   
    let jsonFilePath = await path.join(__dirname,"../json/india_states.json");
    fs.readFile(jsonFilePath, 'utf8', function (err, data) {
      if (err) throw err;
      
      let json = JSON.parse(data);
      console.log(json.features);
      db.collection("indian_state_list").insertMany(json.features, function(err, doc) {
      console.log(data);
      if(err) throw err;
      });
  
  })

  /**
   * Creates a new user and stores it in the database.
   * @param {string} name the new user's name
   * @param {string} password the new user's password
   */
}
}
export default new jsonDB(); // singleton instance of the database
