/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 5.9.0
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FileType.
* @enum {}
* @readonly
*/
export default class FileType {
    
        /**
         * value: "csv"
         * @const
         */
        "csv" = "csv";

    
        /**
         * value: "tsv"
         * @const
         */
        "tsv" = "tsv";

    
        /**
         * value: "xls"
         * @const
         */
        "xls" = "xls";

    
        /**
         * value: "xlsx"
         * @const
         */
        "xlsx" = "xlsx";

    
        /**
         * value: "json"
         * @const
         */
        "json" = "json";

    
        /**
         * value: "po"
         * @const
         */
        "po" = "po";

    
        /**
         * value: "html"
         * @const
         */
        "html" = "html";

    

    /**
    * Returns a <code>FileType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.gridly.api/model/FileType} The enum <code>FileType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

