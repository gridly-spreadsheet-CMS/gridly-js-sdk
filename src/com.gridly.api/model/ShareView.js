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
 * The ShareView model module.
 * @module com.gridly.api/model/ShareView
 * @version 5.9.0
 */
class ShareView {
    /**
     * Constructs a new <code>ShareView</code>.
     * @alias module:com.gridly.api/model/ShareView
     */
    constructor() { 
        
        ShareView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShareView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/ShareView} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/ShareView} The populated <code>ShareView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShareView();

            if (data.hasOwnProperty('companyId')) {
                obj['companyId'] = ApiClient.convertToType(data['companyId'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('viewId')) {
                obj['viewId'] = ApiClient.convertToType(data['viewId'], 'String');
            }
            if (data.hasOwnProperty('includeGridHistory')) {
                obj['includeGridHistory'] = ApiClient.convertToType(data['includeGridHistory'], 'Boolean');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('lastModifiedDate')) {
                obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShareView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShareView</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['companyId'] && !(typeof data['companyId'] === 'string' || data['companyId'] instanceof String)) {
            throw new Error("Expected the field `companyId` to be a primitive type in the JSON string but got " + data['companyId']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // ensure the json data is a string
        if (data['viewId'] && !(typeof data['viewId'] === 'string' || data['viewId'] instanceof String)) {
            throw new Error("Expected the field `viewId` to be a primitive type in the JSON string but got " + data['viewId']);
        }

        return true;
    }


}



/**
 * @member {String} companyId
 */
ShareView.prototype['companyId'] = undefined;

/**
 * @member {String} link
 */
ShareView.prototype['link'] = undefined;

/**
 * @member {Boolean} active
 */
ShareView.prototype['active'] = undefined;

/**
 * @member {String} viewId
 */
ShareView.prototype['viewId'] = undefined;

/**
 * @member {Boolean} includeGridHistory
 */
ShareView.prototype['includeGridHistory'] = undefined;

/**
 * @member {Date} createdDate
 */
ShareView.prototype['createdDate'] = undefined;

/**
 * @member {Date} lastModifiedDate
 */
ShareView.prototype['lastModifiedDate'] = undefined;






export default ShareView;

