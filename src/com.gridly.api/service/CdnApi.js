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


import ApiClient from "../ApiClient";
import CDN from '../model/CDN';

/**
* Cdn service.
* @module com.gridly.api/service/CdnApi
* @version 5.9.0
*/
export default class CdnApi {

    /**
    * Constructs a new CdnApi. 
    * @alias module:com.gridly.api/service/CdnApi
    * @class
    * @param {module:com.gridly.api/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.gridly.api/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * list
     * list
     * @param {String} gridId gridId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset (default to 0)
     * @param {Number} opts.limit limit (default to 128)
     * @param {Array.<String>} opts.ids ids
     * @param {Boolean} opts.published published
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.gridly.api/model/CDN>} and HTTP response
     */
    listWithHttpInfo(gridId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'gridId' is set
      if (gridId === undefined || gridId === null) {
        throw new Error("Missing the required parameter 'gridId' when calling list");
      }

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),
        'gridId': gridId,
        'published': opts['published']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CDN];
      return this.apiClient.callApi(
        '/v1/cdns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list
     * list
     * @param {String} gridId gridId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset (default to 0)
     * @param {Number} opts.limit limit (default to 128)
     * @param {Array.<String>} opts.ids ids
     * @param {Boolean} opts.published published
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.gridly.api/model/CDN>}
     */
    list(gridId, opts) {
      return this.listWithHttpInfo(gridId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * publish
     * publish
     * @param {String} cdnId cdnId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/CDN} and HTTP response
     */
    publishWithHttpInfo(cdnId) {
      let postBody = null;
      // verify the required parameter 'cdnId' is set
      if (cdnId === undefined || cdnId === null) {
        throw new Error("Missing the required parameter 'cdnId' when calling publish");
      }

      let pathParams = {
        'cdnId': cdnId
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
      let returnType = CDN;
      return this.apiClient.callApi(
        '/v1/cdns/{cdnId}/publish', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * publish
     * publish
     * @param {String} cdnId cdnId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/CDN}
     */
    publish(cdnId) {
      return this.publishWithHttpInfo(cdnId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * unPublish
     * unPublish
     * @param {String} cdnId cdnId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/CDN} and HTTP response
     */
    unPublishWithHttpInfo(cdnId) {
      let postBody = null;
      // verify the required parameter 'cdnId' is set
      if (cdnId === undefined || cdnId === null) {
        throw new Error("Missing the required parameter 'cdnId' when calling unPublish");
      }

      let pathParams = {
        'cdnId': cdnId
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
      let returnType = CDN;
      return this.apiClient.callApi(
        '/v1/cdns/{cdnId}/unpublish', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * unPublish
     * unPublish
     * @param {String} cdnId cdnId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/CDN}
     */
    unPublish(cdnId) {
      return this.unPublishWithHttpInfo(cdnId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
