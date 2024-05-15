/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 4.33.0
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ExportFormat.
* @enum {}
* @readonly
*/
export default class ExportFormat {
    
        /**
         * value: "tmx"
         * @const
         */
        "tmx" = "tmx";

    
        /**
         * value: "csv"
         * @const
         */
        "csv" = "csv";

    
        /**
         * value: "xlsx"
         * @const
         */
        "xlsx" = "xlsx";

    

    /**
    * Returns a <code>ExportFormat</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.gridly.api/model/ExportFormat} The enum <code>ExportFormat</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

