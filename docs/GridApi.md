# GridlyClient.GridApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](GridApi.md#callDelete) | **DELETE** /v1/grids/{gridId} | delete
[**create**](GridApi.md#create) | **POST** /v1/grids | create
[**createCategory**](GridApi.md#createCategory) | **POST** /v1/grids/{gridId}/settings/categories | createCategory
[**deleteCategory**](GridApi.md#deleteCategory) | **DELETE** /v1/grids/{gridId}/settings/categories/{categoryId} | deleteCategory
[**deleteFile**](GridApi.md#deleteFile) | **DELETE** /v1/grids/{gridId}/settings/categories/{categoryId}/files/{fileId} | deleteFile
[**get**](GridApi.md#get) | **GET** /v1/grids/{gridId} | get
[**getSetting**](GridApi.md#getSetting) | **GET** /v1/grids/{gridId}/settings | getSetting
[**list**](GridApi.md#list) | **GET** /v1/grids | list
[**listFiles**](GridApi.md#listFiles) | **GET** /v1/grids/{gridId}/settings/files | listFiles
[**listTemplateGrids**](GridApi.md#listTemplateGrids) | **GET** /v1/template-grids | listTemplateGrids
[**update**](GridApi.md#update) | **PATCH** /v1/grids/{gridId} | update
[**updateCategory**](GridApi.md#updateCategory) | **PUT** /v1/grids/{gridId}/settings/categories/{categoryId} | updateCategory
[**updateSetting**](GridApi.md#updateSetting) | **PATCH** /v1/grids/{gridId}/settings | updateSetting
[**uploadSettingFile**](GridApi.md#uploadSettingFile) | **POST** /v1/grids/{gridId}/settings/categories/{categoryId}/files | uploadSettingFile



## callDelete

> callDelete(gridId)

delete

Delete a Grid

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
apiInstance.callDelete(gridId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## create

> Grid create(dbId, createGrid)

create

Create a Grid

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let dbId = "dbId_example"; // String | dbId
let createGrid = new GridlyClient.CreateGrid(); // CreateGrid | 
apiInstance.create(dbId, createGrid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbId** | **String**| dbId | 
 **createGrid** | [**CreateGrid**](CreateGrid.md)|  | 

### Return type

[**Grid**](Grid.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCategory

> FileCategory createCategory(gridId, createFileCategory)

createCategory

createCategory

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
let createFileCategory = new GridlyClient.CreateFileCategory(); // CreateFileCategory | 
apiInstance.createCategory(gridId, createFileCategory).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 
 **createFileCategory** | [**CreateFileCategory**](CreateFileCategory.md)|  | 

### Return type

[**FileCategory**](FileCategory.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCategory

> deleteCategory(gridId, categoryId)

deleteCategory

deleteCategory

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
let categoryId = "categoryId_example"; // String | categoryId
apiInstance.deleteCategory(gridId, categoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 
 **categoryId** | **String**| categoryId | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteFile

> deleteFile(gridId, categoryId, fileId)

deleteFile

deleteFile

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
let categoryId = "categoryId_example"; // String | categoryId
let fileId = "fileId_example"; // String | fileId
apiInstance.deleteFile(gridId, categoryId, fileId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 
 **categoryId** | **String**| categoryId | 
 **fileId** | **String**| fileId | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get

> Grid get(gridId)

get

Get a Grid

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
apiInstance.get(gridId).then((data) => {
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

[**Grid**](Grid.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSetting

> GridSetting getSetting(gridId)

getSetting

getSetting

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
apiInstance.getSetting(gridId).then((data) => {
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

[**GridSetting**](GridSetting.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list

> [Grid] list(dbId)

list

Get a Grid

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let dbId = "dbId_example"; // String | dbId
apiInstance.list(dbId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbId** | **String**| dbId | 

### Return type

[**[Grid]**](Grid.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFiles

> [SettingFile] listFiles(gridId, opts)

listFiles

listFiles

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
let opts = {
  'categoryId': ["null"] // [String] | categoryId
};
apiInstance.listFiles(gridId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 
 **categoryId** | [**[String]**](String.md)| categoryId | [optional] 

### Return type

[**[SettingFile]**](SettingFile.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTemplateGrids

> [Grid] listTemplateGrids()

listTemplateGrids

listTemplateGrids

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
apiInstance.listTemplateGrids().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Grid]**](Grid.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update

> Grid update(gridId, updateGrid)

update

Update a Grid

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
let updateGrid = new GridlyClient.UpdateGrid(); // UpdateGrid | 
apiInstance.update(gridId, updateGrid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 
 **updateGrid** | [**UpdateGrid**](UpdateGrid.md)|  | 

### Return type

[**Grid**](Grid.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCategory

> FileCategory updateCategory(gridId, categoryId, updateCategory)

updateCategory

updateCategory

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
let categoryId = "categoryId_example"; // String | categoryId
let updateCategory = new GridlyClient.UpdateCategory(); // UpdateCategory | 
apiInstance.updateCategory(gridId, categoryId, updateCategory).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 
 **categoryId** | **String**| categoryId | 
 **updateCategory** | [**UpdateCategory**](UpdateCategory.md)|  | 

### Return type

[**FileCategory**](FileCategory.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSetting

> GridSetting updateSetting(gridId, updateGridSetting)

updateSetting

updateSetting

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
let updateGridSetting = new GridlyClient.UpdateGridSetting(); // UpdateGridSetting | 
apiInstance.updateSetting(gridId, updateGridSetting).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 
 **updateGridSetting** | [**UpdateGridSetting**](UpdateGridSetting.md)|  | 

### Return type

[**GridSetting**](GridSetting.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadSettingFile

> UploadedFile uploadSettingFile(gridId, categoryId, uploadSettingFileRequest)

uploadSettingFile

uploadSettingFile

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.GridApi();
let gridId = "gridId_example"; // String | gridId
let categoryId = "categoryId_example"; // String | categoryId
let uploadSettingFileRequest = new GridlyClient.UploadSettingFileRequest(); // UploadSettingFileRequest | 
apiInstance.uploadSettingFile(gridId, categoryId, uploadSettingFileRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 
 **categoryId** | **String**| categoryId | 
 **uploadSettingFileRequest** | [**UploadSettingFileRequest**](UploadSettingFileRequest.md)|  | 

### Return type

[**UploadedFile**](UploadedFile.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

