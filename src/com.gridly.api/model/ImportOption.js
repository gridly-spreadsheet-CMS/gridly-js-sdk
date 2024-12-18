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
* Enum class ImportOption.
* @enum {}
* @readonly
*/
export default class ImportOption {
    
        /**
         * value: "ADD"
         * @const
         */
        "ADD" = "ADD";

    
        /**
         * value: "UPDATE"
         * @const
         */
        "UPDATE" = "UPDATE";

    
        /**
         * value: "UPDATE_ONLY"
         * @const
         */
        "UPDATE_ONLY" = "UPDATE_ONLY";

    

    /**
    * Returns a <code>ImportOption</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.gridly.api/model/ImportOption} The enum <code>ImportOption</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

