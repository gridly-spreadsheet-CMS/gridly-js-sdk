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
import FileCategory from './FileCategory';
import UploadedFile from './UploadedFile';

/**
 * The SettingFile model module.
 * @module com.gridly.api/model/SettingFile
 * @version 5.9.0
 */
class SettingFile {
    /**
     * Constructs a new <code>SettingFile</code>.
     * @alias module:com.gridly.api/model/SettingFile
     */
    constructor() { 
        
        SettingFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SettingFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/SettingFile} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/SettingFile} The populated <code>SettingFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SettingFile();

            if (data.hasOwnProperty('category')) {
                obj['category'] = FileCategory.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [UploadedFile]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SettingFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SettingFile</code>.
     */
    static validateJSON(data) {
        // validate the optional field `category`
        if (data['category']) { // data not null
          FileCategory.validateJSON(data['category']);
        }
        if (data['files']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['files'])) {
                throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
            }
            // validate the optional field `files` (array)
            for (const item of data['files']) {
                UploadedFile.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:com.gridly.api/model/FileCategory} category
 */
SettingFile.prototype['category'] = undefined;

/**
 * @member {Array.<module:com.gridly.api/model/UploadedFile>} files
 */
SettingFile.prototype['files'] = undefined;






export default SettingFile;

