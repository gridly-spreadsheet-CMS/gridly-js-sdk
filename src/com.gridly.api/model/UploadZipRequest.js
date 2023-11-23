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

/**
 * The UploadZipRequest model module.
 * @module com.gridly.api/model/UploadZipRequest
 * @version 4.21.5
 */
class UploadZipRequest {
    /**
     * Constructs a new <code>UploadZipRequest</code>.
     * @alias module:com.gridly.api/model/UploadZipRequest
     * @param columnId {String} 
     * @param fileMappings {String} 
     * @param file {File} 
     */
    constructor(columnId, fileMappings, file) { 
        
        UploadZipRequest.initialize(this, columnId, fileMappings, file);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, columnId, fileMappings, file) { 
        obj['columnId'] = columnId;
        obj['fileMappings'] = fileMappings;
        obj['file'] = file;
    }

    /**
     * Constructs a <code>UploadZipRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/UploadZipRequest} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/UploadZipRequest} The populated <code>UploadZipRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadZipRequest();

            if (data.hasOwnProperty('columnId')) {
                obj['columnId'] = ApiClient.convertToType(data['columnId'], 'String');
            }
            if (data.hasOwnProperty('fileMappings')) {
                obj['fileMappings'] = ApiClient.convertToType(data['fileMappings'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
        }
        return obj;
    }


}

/**
 * @member {String} columnId
 */
UploadZipRequest.prototype['columnId'] = undefined;

/**
 * @member {String} fileMappings
 */
UploadZipRequest.prototype['fileMappings'] = undefined;

/**
 * @member {File} file
 */
UploadZipRequest.prototype['file'] = undefined;






export default UploadZipRequest;

