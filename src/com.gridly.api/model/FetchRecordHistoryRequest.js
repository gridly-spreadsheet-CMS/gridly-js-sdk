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
 * The FetchRecordHistoryRequest model module.
 * @module com.gridly.api/model/FetchRecordHistoryRequest
 * @version 5.9.0
 */
class FetchRecordHistoryRequest {
    /**
     * Constructs a new <code>FetchRecordHistoryRequest</code>.
     * @alias module:com.gridly.api/model/FetchRecordHistoryRequest
     */
    constructor() { 
        
        FetchRecordHistoryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FetchRecordHistoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/FetchRecordHistoryRequest} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/FetchRecordHistoryRequest} The populated <code>FetchRecordHistoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FetchRecordHistoryRequest();

            if (data.hasOwnProperty('columnIds')) {
                obj['columnIds'] = ApiClient.convertToType(data['columnIds'], ['String']);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('groupBy')) {
                obj['groupBy'] = ApiClient.convertToType(data['groupBy'], ['String']);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'String');
            }
            if (data.hasOwnProperty('fetchOptions')) {
                obj['fetchOptions'] = ApiClient.convertToType(data['fetchOptions'], 'String');
            }
            if (data.hasOwnProperty('includeSystemUser')) {
                obj['includeSystemUser'] = ApiClient.convertToType(data['includeSystemUser'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FetchRecordHistoryRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FetchRecordHistoryRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['columnIds'])) {
            throw new Error("Expected the field `columnIds` to be an array in the JSON data but got " + data['columnIds']);
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }
        // ensure the json data is a string
        if (data['sort'] && !(typeof data['sort'] === 'string' || data['sort'] instanceof String)) {
            throw new Error("Expected the field `sort` to be a primitive type in the JSON string but got " + data['sort']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['groupBy'])) {
            throw new Error("Expected the field `groupBy` to be an array in the JSON data but got " + data['groupBy']);
        }
        // ensure the json data is a string
        if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
            throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
        }
        // ensure the json data is a string
        if (data['fetchOptions'] && !(typeof data['fetchOptions'] === 'string' || data['fetchOptions'] instanceof String)) {
            throw new Error("Expected the field `fetchOptions` to be a primitive type in the JSON string but got " + data['fetchOptions']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} columnIds
 */
FetchRecordHistoryRequest.prototype['columnIds'] = undefined;

/**
 * @member {String} query
 */
FetchRecordHistoryRequest.prototype['query'] = undefined;

/**
 * @member {String} sort
 */
FetchRecordHistoryRequest.prototype['sort'] = undefined;

/**
 * @member {Array.<String>} groupBy
 */
FetchRecordHistoryRequest.prototype['groupBy'] = undefined;

/**
 * @member {String} page
 */
FetchRecordHistoryRequest.prototype['page'] = undefined;

/**
 * @member {String} fetchOptions
 */
FetchRecordHistoryRequest.prototype['fetchOptions'] = undefined;

/**
 * @member {Boolean} includeSystemUser
 */
FetchRecordHistoryRequest.prototype['includeSystemUser'] = undefined;






export default FetchRecordHistoryRequest;

