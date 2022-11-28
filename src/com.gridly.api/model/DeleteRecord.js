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
import RecordIdentifierWrapper from './RecordIdentifierWrapper';

/**
 * The DeleteRecord model module.
 * @module com.gridly.api/model/DeleteRecord
 * @version 3.39.2
 */
class DeleteRecord {
    /**
     * Constructs a new <code>DeleteRecord</code>.
     * @alias module:com.gridly.api/model/DeleteRecord
     */
    constructor() { 
        
        DeleteRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/DeleteRecord} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/DeleteRecord} The populated <code>DeleteRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRecord();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('identifiers')) {
                obj['identifiers'] = ApiClient.convertToType(data['identifiers'], [RecordIdentifierWrapper]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} ids
 */
DeleteRecord.prototype['ids'] = undefined;

/**
 * @member {Array.<module:com.gridly.api/model/RecordIdentifierWrapper>} identifiers
 */
DeleteRecord.prototype['identifiers'] = undefined;






export default DeleteRecord;

