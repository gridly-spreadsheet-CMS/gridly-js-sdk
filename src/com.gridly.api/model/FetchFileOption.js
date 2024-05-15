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
* Enum class FetchFileOption.
* @enum {}
* @readonly
*/
export default class FetchFileOption {
    
        /**
         * value: "all"
         * @const
         */
        "all" = "all";

    
        /**
         * value: "id"
         * @const
         */
        "id" = "id";

    
        /**
         * value: "name"
         * @const
         */
        "name" = "name";

    

    /**
    * Returns a <code>FetchFileOption</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.gridly.api/model/FetchFileOption} The enum <code>FetchFileOption</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

