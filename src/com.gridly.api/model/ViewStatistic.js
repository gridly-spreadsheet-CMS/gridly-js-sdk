/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 4.21.5
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ColumnStatistic from './ColumnStatistic';

/**
 * The ViewStatistic model module.
 * @module com.gridly.api/model/ViewStatistic
 * @version 4.21.5
 */
class ViewStatistic {
    /**
     * Constructs a new <code>ViewStatistic</code>.
     * @alias module:com.gridly.api/model/ViewStatistic
     */
    constructor() { 
        
        ViewStatistic.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewStatistic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/ViewStatistic} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/ViewStatistic} The populated <code>ViewStatistic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewStatistic();

            if (data.hasOwnProperty('recordCount')) {
                obj['recordCount'] = ApiClient.convertToType(data['recordCount'], 'Number');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], {'String': ColumnStatistic});
            }
        }
        return obj;
    }


}

/**
 * @member {Number} recordCount
 */
ViewStatistic.prototype['recordCount'] = undefined;

/**
 * @member {Object.<String, module:com.gridly.api/model/ColumnStatistic>} translations
 */
ViewStatistic.prototype['translations'] = undefined;






export default ViewStatistic;
