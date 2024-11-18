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
import AddViewColumn from './AddViewColumn';

/**
 * The CreateView model module.
 * @module com.gridly.api/model/CreateView
 * @version 5.9.0
 */
class CreateView {
    /**
     * Constructs a new <code>CreateView</code>.
     * @alias module:com.gridly.api/model/CreateView
     * @param name {String} 
     * @param gridId {String} 
     */
    constructor(name, gridId) { 
        
        CreateView.initialize(this, name, gridId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, gridId) { 
        obj['name'] = name;
        obj['gridId'] = gridId;
    }

    /**
     * Constructs a <code>CreateView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CreateView} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CreateView} The populated <code>CreateView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateView();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('gridId')) {
                obj['gridId'] = ApiClient.convertToType(data['gridId'], 'String');
            }
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], [AddViewColumn]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateView</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateView.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['gridId'] && !(typeof data['gridId'] === 'string' || data['gridId'] instanceof String)) {
            throw new Error("Expected the field `gridId` to be a primitive type in the JSON string but got " + data['gridId']);
        }
        if (data['columns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['columns'])) {
                throw new Error("Expected the field `columns` to be an array in the JSON data but got " + data['columns']);
            }
            // validate the optional field `columns` (array)
            for (const item of data['columns']) {
                AddViewColumn.validateJsonObject(item);
            };
        }

        return true;
    }


}

CreateView.RequiredProperties = ["name", "gridId"];

/**
 * @member {String} name
 */
CreateView.prototype['name'] = undefined;

/**
 * @member {String} gridId
 */
CreateView.prototype['gridId'] = undefined;

/**
 * @member {Array.<module:com.gridly.api/model/AddViewColumn>} columns
 */
CreateView.prototype['columns'] = undefined;






export default CreateView;

