/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 4.15.1
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeleteFile model module.
 * @module com.gridly.api/model/DeleteFile
 * @version 4.15.1
 */
class DeleteFile {
    /**
     * Constructs a new <code>DeleteFile</code>.
     * @alias module:com.gridly.api/model/DeleteFile
     * @param ids {Array.<String>} 
     */
    constructor(ids) { 
        
        DeleteFile.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>DeleteFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/DeleteFile} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/DeleteFile} The populated <code>DeleteFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFile();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} ids
 */
DeleteFile.prototype['ids'] = undefined;






export default DeleteFile;

