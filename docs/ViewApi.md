# GridlyClient.ViewApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callExport**](ViewApi.md#callExport) | **GET** /v1/views/{viewId}/export | export
[**create**](ViewApi.md#create) | **POST** /v1/views | create
[**get**](ViewApi.md#get) | **GET** /v1/views/{viewId} | get
[**getStatistic**](ViewApi.md#getStatistic) | **GET** /v1/views/{viewId}/statistic | getStatistic
[**importView**](ViewApi.md#importView) | **POST** /v1/views/{viewId}/import | importView
[**list**](ViewApi.md#list) | **GET** /v1/views | list
[**merge**](ViewApi.md#merge) | **POST** /v1/views/{viewId}/merge | merge



## callExport

> File callExport(viewId, opts)

export

export

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewApi();
let viewId = "viewId_example"; // String | viewId
let opts = {
  'columnIds': ["null"], // [String] | columnIds
  'fileHeader': new GridlyClient.ExportFileHeader(), // ExportFileHeader | fileHeader
  'query': "'{}'", // String | query
  'sort': "'{}'", // String | sort
  'type': "'csv'" // String | type
};
apiInstance.callExport(viewId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **columnIds** | [**[String]**](String.md)| columnIds | [optional] 
 **fileHeader** | [**ExportFileHeader**](.md)| fileHeader | [optional] 
 **query** | **String**| query | [optional] [default to &#39;{}&#39;]
 **sort** | **String**| sort | [optional] [default to &#39;{}&#39;]
 **type** | **String**| type | [optional] [default to &#39;csv&#39;]

### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## create

> View create(createView)

create

create

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewApi();
let createView = new GridlyClient.CreateView(); // CreateView | 
apiInstance.create(createView).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createView** | [**CreateView**](CreateView.md)|  | 

### Return type

[**View**](View.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## get

> View get(viewId, opts)

get

get

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewApi();
let viewId = "viewId_example"; // String | viewId
let opts = {
  'columnIds': ["null"], // [String] | columnIds
  'include': ["null"], // [String] | include
  'page': "'{}'", // String | page
  'query': "'{}'", // String | query
  'sort': "'{}'" // String | sort
};
apiInstance.get(viewId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **columnIds** | [**[String]**](String.md)| columnIds | [optional] 
 **include** | [**[String]**](String.md)| include | [optional] 
 **page** | **String**| page | [optional] [default to &#39;{}&#39;]
 **query** | **String**| query | [optional] [default to &#39;{}&#39;]
 **sort** | **String**| sort | [optional] [default to &#39;{}&#39;]

### Return type

[**View**](View.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatistic

> ViewStatistic getStatistic(viewId, opts)

getStatistic

getStatistic

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewApi();
let viewId = "viewId_example"; // String | viewId
let opts = {
  'columnIds': ["null"] // [String] | columnIds
};
apiInstance.getStatistic(viewId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **columnIds** | [**[String]**](String.md)| columnIds | [optional] 

### Return type

[**ViewStatistic**](ViewStatistic.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importView

> importView(viewId, file, opts)

importView

importView

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewApi();
let viewId = "viewId_example"; // String | viewId
let file = "/path/to/file"; // File | The following file types are supported: csv, tsv, xls, xlsx and json
let opts = {
  'importRequest': "'{}'", // String | importRequest
  'type': "'csv'" // String | type
};
apiInstance.importView(viewId, file, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **file** | **File**| The following file types are supported: csv, tsv, xls, xlsx and json | 
 **importRequest** | **String**| importRequest | [optional] [default to &#39;{}&#39;]
 **type** | **String**| type | [optional] [default to &#39;csv&#39;]

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## list

> [View] list(opts)

list

list

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewApi();
let opts = {
  'branchId': "branchId_example", // String | branchId
  'gridId': "gridId_example", // String | gridId
  'type': "type_example" // String | type
};
apiInstance.list(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchId** | **String**| branchId | [optional] 
 **gridId** | **String**| gridId | [optional] 
 **type** | **String**| type | [optional] 

### Return type

[**[View]**](View.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merge

> Task merge(destinationViewId, viewId, mergeBranchRequest, opts)

merge

merge

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewApi();
let destinationViewId = "destinationViewId_example"; // String | destinationViewId
let viewId = "viewId_example"; // String | viewId
let mergeBranchRequest = new GridlyClient.MergeBranchRequest(); // MergeBranchRequest | 
let opts = {
  'mergeRecordOptions': ["null"] // [String] | mergeRecordOptions
};
apiInstance.merge(destinationViewId, viewId, mergeBranchRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destinationViewId** | **String**| destinationViewId | 
 **viewId** | **String**| viewId | 
 **mergeBranchRequest** | [**MergeBranchRequest**](MergeBranchRequest.md)|  | 
 **mergeRecordOptions** | [**[String]**](String.md)| mergeRecordOptions | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

