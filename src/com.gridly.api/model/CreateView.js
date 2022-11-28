/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 3.39.2
 * Contact: 
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
 * @version 3.39.2
 */
class CreateView {
    /**
     * Constructs a new <code>CreateView</code>.
     * @alias module:com.gridly.api/model/CreateView
     */
    constructor() { 
        
        CreateView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], [AddViewColumn]);
            }
            if (data.hasOwnProperty('gridId')) {
                obj['gridId'] = ApiClient.convertToType(data['gridId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateView.prototype['name'] = undefined;

/**
 * @member {Array.<module:com.gridly.api/model/AddViewColumn>} columns
 */
CreateView.prototype['columns'] = undefined;

/**
 * @member {String} gridId
 */
CreateView.prototype['gridId'] = undefined;






export default CreateView;
