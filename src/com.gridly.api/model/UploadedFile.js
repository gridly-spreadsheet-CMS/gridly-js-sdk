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
 * The UploadedFile model module.
 * @module com.gridly.api/model/UploadedFile
 * @version 4.33.0
 */
class UploadedFile {
    /**
     * Constructs a new <code>UploadedFile</code>.
     * @alias module:com.gridly.api/model/UploadedFile
     */
    constructor() { 
        
        UploadedFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadedFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/UploadedFile} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/UploadedFile} The populated <code>UploadedFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadedFile();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('originalName')) {
                obj['originalName'] = ApiClient.convertToType(data['originalName'], 'String');
            }
            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('thumbnailId')) {
                obj['thumbnailId'] = ApiClient.convertToType(data['thumbnailId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadedFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadedFile</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['originalName'] && !(typeof data['originalName'] === 'string' || data['originalName'] instanceof String)) {
            throw new Error("Expected the field `originalName` to be a primitive type in the JSON string but got " + data['originalName']);
        }
        // ensure the json data is a string
        if (data['contentType'] && !(typeof data['contentType'] === 'string' || data['contentType'] instanceof String)) {
            throw new Error("Expected the field `contentType` to be a primitive type in the JSON string but got " + data['contentType']);
        }
        // ensure the json data is a string
        if (data['thumbnailId'] && !(typeof data['thumbnailId'] === 'string' || data['thumbnailId'] instanceof String)) {
            throw new Error("Expected the field `thumbnailId` to be a primitive type in the JSON string but got " + data['thumbnailId']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
UploadedFile.prototype['id'] = undefined;

/**
 * @member {String} originalName
 */
UploadedFile.prototype['originalName'] = undefined;

/**
 * @member {String} contentType
 */
UploadedFile.prototype['contentType'] = undefined;

/**
 * @member {Number} size
 */
UploadedFile.prototype['size'] = undefined;

/**
 * @member {String} thumbnailId
 */
UploadedFile.prototype['thumbnailId'] = undefined;






export default UploadedFile;

