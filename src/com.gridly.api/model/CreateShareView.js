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
 * The CreateShareView model module.
 * @module com.gridly.api/model/CreateShareView
 * @version 5.9.0
 */
class CreateShareView {
    /**
     * Constructs a new <code>CreateShareView</code>.
     * @alias module:com.gridly.api/model/CreateShareView
     */
    constructor() { 
        
        CreateShareView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateShareView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CreateShareView} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CreateShareView} The populated <code>CreateShareView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateShareView();

            if (data.hasOwnProperty('includeGridHistory')) {
                obj['includeGridHistory'] = ApiClient.convertToType(data['includeGridHistory'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateShareView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateShareView</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} includeGridHistory
 */
CreateShareView.prototype['includeGridHistory'] = undefined;






export default CreateShareView;

