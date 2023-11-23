# GridlyClient.ViewColumnApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add**](ViewColumnApi.md#add) | **POST** /v1/views/{viewId}/columns/{columnId}/add | add
[**bulkCreate**](ViewColumnApi.md#bulkCreate) | **POST** /v1/views/{viewId}/columns/bulk | bulkCreate
[**callDelete**](ViewColumnApi.md#callDelete) | **DELETE** /v1/views/{viewId}/columns/{columnId} | delete
[**create**](ViewColumnApi.md#create) | **POST** /v1/views/{viewId}/columns | create
[**get**](ViewColumnApi.md#get) | **GET** /v1/views/{viewId}/columns/{columnId} | get
[**remove**](ViewColumnApi.md#remove) | **POST** /v1/views/{viewId}/columns/{columnId}/remove | remove
[**update**](ViewColumnApi.md#update) | **PATCH** /v1/views/{viewId}/columns/{columnId} | update



## add

> ViewColumn add(columnId, viewId)

add

add

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewColumnApi();
let columnId = "columnId_example"; // String | columnId
let viewId = "viewId_example"; // String | viewId
apiInstance.add(columnId, viewId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnId** | **String**| columnId | 
 **viewId** | **String**| viewId | 

### Return type

[**ViewColumn**](ViewColumn.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bulkCreate

> [ViewColumn] bulkCreate(viewId, createColumn)

bulkCreate

bulkCreate

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewColumnApi();
let viewId = "viewId_example"; // String | viewId
let createColumn = [new GridlyClient.CreateColumn()]; // [CreateColumn] | 
apiInstance.bulkCreate(viewId, createColumn).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **createColumn** | [**[CreateColumn]**](CreateColumn.md)|  | 

### Return type

[**[ViewColumn]**](ViewColumn.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## callDelete

> callDelete(columnId, viewId)

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

let apiInstance = new GridlyClient.ViewColumnApi();
let columnId = "columnId_example"; // String | columnId
let viewId = "viewId_example"; // String | viewId
apiInstance.callDelete(columnId, viewId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnId** | **String**| columnId | 
 **viewId** | **String**| viewId | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## create

> ViewColumn create(viewId, createColumn)

create

Create a Column

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewColumnApi();
let viewId = "viewId_example"; // String | viewId
let createColumn = new GridlyClient.CreateColumn(); // CreateColumn | 
apiInstance.create(viewId, createColumn).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **createColumn** | [**CreateColumn**](CreateColumn.md)|  | 

### Return type

[**ViewColumn**](ViewColumn.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## get

> ViewColumn get(columnId, viewId)

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

let apiInstance = new GridlyClient.ViewColumnApi();
let columnId = "columnId_example"; // String | columnId
let viewId = "viewId_example"; // String | viewId
apiInstance.get(columnId, viewId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnId** | **String**| columnId | 
 **viewId** | **String**| viewId | 

### Return type

[**ViewColumn**](ViewColumn.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## remove

> remove(columnId, viewId)

remove

remove

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewColumnApi();
let columnId = "columnId_example"; // String | columnId
let viewId = "viewId_example"; // String | viewId
apiInstance.remove(columnId, viewId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnId** | **String**| columnId | 
 **viewId** | **String**| viewId | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## update

> ViewColumn update(columnId, viewId, updateColumn)

update

update

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewColumnApi();
let columnId = "columnId_example"; // String | columnId
let viewId = "viewId_example"; // String | viewId
let updateColumn = new GridlyClient.UpdateColumn(); // UpdateColumn | 
apiInstance.update(columnId, viewId, updateColumn).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnId** | **String**| columnId | 
 **viewId** | **String**| viewId | 
 **updateColumn** | [**UpdateColumn**](UpdateColumn.md)|  | 

### Return type

[**ViewColumn**](ViewColumn.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

