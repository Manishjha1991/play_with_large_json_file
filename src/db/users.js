/**
 * Stub implementation of database methods related to accessing
 * stored users.
 *
 * NOTE: this is a stub implementation meant to demonstrate how
 * the rest of the application can work.
 */

var JSONStream = require('JSONStream')
var path = require( "path" );
var fs = require( "fs" );
import { hashPassword, comparePassword } from "../lib/crypto";

const PUBLIC_FIELDS = ["id", "name"];

const filterFields = (toFilter, allowedFields) => {
  return allowedFields.reduce((memo, field) => {
    return { ...memo, [field]: toFilter[field] };
  }, {});
};

export class jsonDB {
 list = async () => {
    let jsonFilePath = await path.join(__dirname,"../json/companies.json")
    var transformStream = JSONStream.parse( "*" );
    var inputStream = await fs.createReadStream(jsonFilePath);
    inputStream.pipe( transformStream ).on("data",function(data){
      console.log(data);
      return data
    });
  };

  /**
   * Creates a new user and stores it in the database.
   * @param {string} name the new user's name
   * @param {string} password the new user's password
   */
}

export default new jsonDB(); // singleton instance of the database
