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
 * The Task model module.
 * @module com.gridly.api/model/Task
 * @version 4.21.5
 */
class Task {
    /**
     * Constructs a new <code>Task</code>.
     * @alias module:com.gridly.api/model/Task
     */
    constructor() { 
        
        Task.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/Task} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/Task} The populated <code>Task</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Task();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Task.prototype['id'] = undefined;

/**
 * @member {module:com.gridly.api/model/Task.StatusEnum} status
 */
Task.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Task['StatusEnum'] = {

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "successful"
     * @const
     */
    "successful": "successful",

    /**
     * value: "running"
     * @const
     */
    "running": "running",

    /**
     * value: "retrySuccessful"
     * @const
     */
    "retrySuccessful": "retrySuccessful",

    /**
     * value: "cancel"
     * @const
     */
    "cancel": "cancel"
};



export default Task;

