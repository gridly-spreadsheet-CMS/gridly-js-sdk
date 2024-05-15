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


import ApiClient from "../ApiClient";
import Task from '../model/Task';

/**
* Task service.
* @module com.gridly.api/service/TaskApi
* @version 4.33.0
*/
export default class TaskApi {

    /**
    * Constructs a new TaskApi. 
    * @alias module:com.gridly.api/service/TaskApi
    * @class
    * @param {module:com.gridly.api/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.gridly.api/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * get
     * get
     * @param {String} taskId taskId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Task} and HTTP response
     */
    getWithHttpInfo(taskId) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling get");
      }

      let pathParams = {
        'taskId': taskId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Task;
      return this.apiClient.callApi(
        '/v1/tasks/{taskId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get
     * get
     * @param {String} taskId taskId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Task}
     */
    get(taskId) {
      return this.getWithHttpInfo(taskId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
