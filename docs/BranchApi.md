# GridlyClient.BranchApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](BranchApi.md#callDelete) | **DELETE** /v1/branches/{branchId} | delete
[**create**](BranchApi.md#create) | **POST** /v1/branches | create
[**createDiffCheck**](BranchApi.md#createDiffCheck) | **POST** /v1/branches/diffcheck | createDiffCheck
[**get**](BranchApi.md#get) | **GET** /v1/branches/{branchId} | get
[**getDiffCheck**](BranchApi.md#getDiffCheck) | **GET** /v1/branches/diffcheck/{taskId} | getDiffCheck
[**list**](BranchApi.md#list) | **GET** /v1/branches | list
[**merge**](BranchApi.md#merge) | **POST** /v1/branches/{branchId}/merge | merge



## callDelete

> callDelete(branchId)

delete

delete

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.BranchApi();
let branchId = "branchId_example"; // String | branchId
apiInstance.callDelete(branchId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchId** | **String**| branchId | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## create

> Branch create(createBranch, opts)

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

let apiInstance = new GridlyClient.BranchApi();
let createBranch = new GridlyClient.CreateBranch(); // CreateBranch | 
let opts = {
  'gridId': "gridId_example", // String | gridId
  'branchId': "branchId_example" // String | branchId
};
apiInstance.create(createBranch, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBranch** | [**CreateBranch**](CreateBranch.md)|  | 
 **gridId** | **String**| gridId | [optional] 
 **branchId** | **String**| branchId | [optional] 

### Return type

[**Branch**](Branch.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDiffCheck

> Task createDiffCheck(sourceViewId, destinationViewId)

createDiffCheck

createDiffCheck

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.BranchApi();
let sourceViewId = "sourceViewId_example"; // String | sourceViewId
let destinationViewId = "destinationViewId_example"; // String | destinationViewId
apiInstance.createDiffCheck(sourceViewId, destinationViewId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceViewId** | **String**| sourceViewId | 
 **destinationViewId** | **String**| destinationViewId | 

### Return type

[**Task**](Task.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get

> Branch get(branchId)

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

let apiInstance = new GridlyClient.BranchApi();
let branchId = "branchId_example"; // String | branchId
apiInstance.get(branchId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchId** | **String**| branchId | 

### Return type

[**Branch**](Branch.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDiffCheck

> [BranchDiffRecord] getDiffCheck(taskId, opts)

getDiffCheck

getDiffCheck

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.BranchApi();
let taskId = "taskId_example"; // String | taskId
let opts = {
  'mergeRecordOptions': ["null"], // [String] | mergeRecordOptions
  'query': "'{}'", // String | query
  'page': "'{}'" // String | page
};
apiInstance.getDiffCheck(taskId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **mergeRecordOptions** | [**[String]**](String.md)| mergeRecordOptions | [optional] 
 **query** | **String**| query | [optional] [default to &#39;{}&#39;]
 **page** | **String**| page | [optional] [default to &#39;{}&#39;]

### Return type

[**[BranchDiffRecord]**](BranchDiffRecord.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list

> [Branch] list(gridId)

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

let apiInstance = new GridlyClient.BranchApi();
let gridId = "gridId_example"; // String | gridId
apiInstance.list(gridId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 

### Return type

[**[Branch]**](Branch.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merge

> Task merge(branchId, destinationBranchId, mergeBranchRequest, opts)

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

let apiInstance = new GridlyClient.BranchApi();
let branchId = "branchId_example"; // String | branchId
let destinationBranchId = "destinationBranchId_example"; // String | destinationBranchId
let mergeBranchRequest = new GridlyClient.MergeBranchRequest(); // MergeBranchRequest | 
let opts = {
  'mergeRecordOptions': ["null"] // [String] | mergeRecordOptions
};
apiInstance.merge(branchId, destinationBranchId, mergeBranchRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchId** | **String**| branchId | 
 **destinationBranchId** | **String**| destinationBranchId | 
 **mergeBranchRequest** | [**MergeBranchRequest**](MergeBranchRequest.md)|  | 
 **mergeRecordOptions** | [**[String]**](String.md)| mergeRecordOptions | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

