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
import CreateView from '../model/CreateView';
import ExportFileHeader from '../model/ExportFileHeader';
import FileType from '../model/FileType';
import MergeBranchRequest from '../model/MergeBranchRequest';
import Task from '../model/Task';
import View from '../model/View';
import ViewStatistic from '../model/ViewStatistic';

/**
* View service.
* @module com.gridly.api/service/ViewApi
* @version 5.9.0
*/
export default class ViewApi {

    /**
    * Constructs a new ViewApi. 
    * @alias module:com.gridly.api/service/ViewApi
    * @class
    * @param {module:com.gridly.api/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.gridly.api/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * export
     * export
     * @param {String} viewId viewId
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.columnIds columnIds
     * @param {module:com.gridly.api/model/ExportFileHeader} opts.fileHeader fileHeader
     * @param {String} opts.query query (default to '{}')
     * @param {String} opts.sort sort (default to '{}')
     * @param {module:com.gridly.api/model/FileType} opts.type type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    callExportWithHttpInfo(viewId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling callExport");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
        'columnIds': this.apiClient.buildCollectionParam(opts['columnIds'], 'multi'),
        'fileHeader': opts['fileHeader'],
        'query': opts['query'],
        'sort': opts['sort'],
        'type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = File;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * export
     * export
     * @param {String} viewId viewId
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.columnIds columnIds
     * @param {module:com.gridly.api/model/ExportFileHeader} opts.fileHeader fileHeader
     * @param {String} opts.query query (default to '{}')
     * @param {String} opts.sort sort (default to '{}')
     * @param {module:com.gridly.api/model/FileType} opts.type type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    callExport(viewId, opts) {
      return this.callExportWithHttpInfo(viewId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create
     * create
     * @param {module:com.gridly.api/model/CreateView} createView 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/View} and HTTP response
     */
    createWithHttpInfo(createView) {
      let postBody = createView;
      // verify the required parameter 'createView' is set
      if (createView === undefined || createView === null) {
        throw new Error("Missing the required parameter 'createView' when calling create");
      }

      let pathParams = {
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
      let returnType = View;
      return this.apiClient.callApi(
        '/v1/views', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create
     * create
     * @param {module:com.gridly.api/model/CreateView} createView 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/View}
     */
    create(createView) {
      return this.createWithHttpInfo(createView)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get
     * get
     * @param {String} viewId viewId
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.columnIds columnIds
     * @param {Array.<module:com.gridly.api/model/String>} opts.include include
     * @param {String} opts.page page (default to '{}')
     * @param {String} opts.query query (default to '{}')
     * @param {String} opts.sort sort (default to '{}')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/View} and HTTP response
     */
    getWithHttpInfo(viewId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling get");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
        'columnIds': this.apiClient.buildCollectionParam(opts['columnIds'], 'multi'),
        'include': this.apiClient.buildCollectionParam(opts['include'], 'multi'),
        'page': opts['page'],
        'query': opts['query'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = View;
      return this.apiClient.callApi(
        '/v1/views/{viewId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get
     * get
     * @param {String} viewId viewId
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.columnIds columnIds
     * @param {Array.<module:com.gridly.api/model/String>} opts.include include
     * @param {String} opts.page page (default to '{}')
     * @param {String} opts.query query (default to '{}')
     * @param {String} opts.sort sort (default to '{}')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/View}
     */
    get(viewId, opts) {
      return this.getWithHttpInfo(viewId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getStatistic
     * getStatistic
     * @param {String} viewId viewId
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.columnIds columnIds
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/ViewStatistic} and HTTP response
     */
    getStatisticWithHttpInfo(viewId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling getStatistic");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
        'columnIds': this.apiClient.buildCollectionParam(opts['columnIds'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ViewStatistic;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/statistic', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * getStatistic
     * getStatistic
     * @param {String} viewId viewId
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.columnIds columnIds
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/ViewStatistic}
     */
    getStatistic(viewId, opts) {
      return this.getStatisticWithHttpInfo(viewId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * importView
     * importView
     * @param {String} viewId viewId
     * @param {File} file The following file types are supported: csv, tsv, xls, xlsx and json
     * @param {Object} opts Optional parameters
     * @param {String} opts.importRequest importRequest (default to '{}')
     * @param {module:com.gridly.api/model/FileType} opts.type type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    importViewWithHttpInfo(viewId, file, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling importView");
      }
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling importView");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
        'importRequest': opts['importRequest'],
        'type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
        'file': file
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * importView
     * importView
     * @param {String} viewId viewId
     * @param {File} file The following file types are supported: csv, tsv, xls, xlsx and json
     * @param {Object} opts Optional parameters
     * @param {String} opts.importRequest importRequest (default to '{}')
     * @param {module:com.gridly.api/model/FileType} opts.type type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    importView(viewId, file, opts) {
      return this.importViewWithHttpInfo(viewId, file, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list
     * list
     * @param {Object} opts Optional parameters
     * @param {String} opts.branchId branchId
     * @param {String} opts.gridId gridId
     * @param {module:com.gridly.api/model/String} opts.type type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.gridly.api/model/View>} and HTTP response
     */
    listWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'branchId': opts['branchId'],
        'gridId': opts['gridId'],
        'type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [View];
      return this.apiClient.callApi(
        '/v1/views', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list
     * list
     * @param {Object} opts Optional parameters
     * @param {String} opts.branchId branchId
     * @param {String} opts.gridId gridId
     * @param {module:com.gridly.api/model/String} opts.type type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.gridly.api/model/View>}
     */
    list(opts) {
      return this.listWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * merge
     * merge
     * @param {String} destinationViewId destinationViewId
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/MergeBranchRequest} mergeBranchRequest 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.gridly.api/model/String>} opts.mergeRecordOptions mergeRecordOptions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Task} and HTTP response
     */
    mergeWithHttpInfo(destinationViewId, viewId, mergeBranchRequest, opts) {
      opts = opts || {};
      let postBody = mergeBranchRequest;
      // verify the required parameter 'destinationViewId' is set
      if (destinationViewId === undefined || destinationViewId === null) {
        throw new Error("Missing the required parameter 'destinationViewId' when calling merge");
      }
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling merge");
      }
      // verify the required parameter 'mergeBranchRequest' is set
      if (mergeBranchRequest === undefined || mergeBranchRequest === null) {
        throw new Error("Missing the required parameter 'mergeBranchRequest' when calling merge");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
        'destinationViewId': destinationViewId,
        'mergeRecordOptions': this.apiClient.buildCollectionParam(opts['mergeRecordOptions'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Task;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/merge', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * merge
     * merge
     * @param {String} destinationViewId destinationViewId
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/MergeBranchRequest} mergeBranchRequest 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.gridly.api/model/String>} opts.mergeRecordOptions mergeRecordOptions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Task}
     */
    merge(destinationViewId, viewId, mergeBranchRequest, opts) {
      return this.mergeWithHttpInfo(destinationViewId, viewId, mergeBranchRequest, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
