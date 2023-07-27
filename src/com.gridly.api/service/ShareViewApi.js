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


import ApiClient from "../ApiClient";
import CreateShareView from '../model/CreateShareView';
import ShareView from '../model/ShareView';

/**
* ShareView service.
* @module com.gridly.api/service/ShareViewApi
* @version 4.15.1
*/
export default class ShareViewApi {

    /**
    * Constructs a new ShareViewApi. 
    * @alias module:com.gridly.api/service/ShareViewApi
    * @class
    * @param {module:com.gridly.api/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.gridly.api/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * delete
     * delete
     * @param {String} viewId viewId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    callDeleteWithHttpInfo(viewId) {
      let postBody = null;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling callDelete");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/shares', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete
     * delete
     * @param {String} viewId viewId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    callDelete(viewId) {
      return this.callDeleteWithHttpInfo(viewId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create
     * create
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/CreateShareView} createShareView 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/ShareView} and HTTP response
     */
    createWithHttpInfo(viewId, createShareView) {
      let postBody = createShareView;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling create");
      }
      // verify the required parameter 'createShareView' is set
      if (createShareView === undefined || createShareView === null) {
        throw new Error("Missing the required parameter 'createShareView' when calling create");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ShareView;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/shares', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create
     * create
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/CreateShareView} createShareView 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/ShareView}
     */
    create(viewId, createShareView) {
      return this.createWithHttpInfo(viewId, createShareView)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get
     * get
     * @param {String} viewId viewId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/ShareView} and HTTP response
     */
    getWithHttpInfo(viewId) {
      let postBody = null;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling get");
      }

      let pathParams = {
        'viewId': viewId
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
      let returnType = ShareView;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/shares', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get
     * get
     * @param {String} viewId viewId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/ShareView}
     */
    get(viewId) {
      return this.getWithHttpInfo(viewId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}