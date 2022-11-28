# GridlyClient.ViewFileApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](ViewFileApi.md#callDelete) | **DELETE** /v1/views/{viewId}/files | delete
[**download**](ViewFileApi.md#download) | **GET** /v1/views/{viewId}/files/{fileId} | download
[**upload**](ViewFileApi.md#upload) | **POST** /v1/views/{viewId}/files | upload
[**uploadZip**](ViewFileApi.md#uploadZip) | **POST** /v1/views/{viewId}/files/zip | uploadZip



## callDelete

> callDelete(columnId, recordId, viewId, deleteFile)

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

let apiInstance = new GridlyClient.ViewFileApi();
let columnId = "columnId_example"; // String | columnId
let recordId = "recordId_example"; // String | recordId
let viewId = "viewId_example"; // String | viewId
let deleteFile = new GridlyClient.DeleteFile(); // DeleteFile | 
apiInstance.callDelete(columnId, recordId, viewId, deleteFile).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **columnId** | **String**| columnId | 
 **recordId** | **String**| recordId | 
 **viewId** | **String**| viewId | 
 **deleteFile** | [**DeleteFile**](DeleteFile.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## download

> File download(fileId, viewId)

download

download

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewFileApi();
let fileId = "fileId_example"; // String | fileId
let viewId = "viewId_example"; // String | viewId
apiInstance.download(fileId, viewId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| fileId | 
 **viewId** | **String**| viewId | 

### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## upload

> UploadedFile upload(viewId, columnId, recordId, file)

upload

upload

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewFileApi();
let viewId = "viewId_example"; // String | viewId
let columnId = "columnId_example"; // String | columnId
let recordId = "recordId_example"; // String | recordId
let file = "/path/to/file"; // File | 
apiInstance.upload(viewId, columnId, recordId, file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **columnId** | **String**| columnId | 
 **recordId** | **String**| recordId | 
 **file** | **File**|  | 

### Return type

[**UploadedFile**](UploadedFile.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## uploadZip

> [Record] uploadZip(viewId, columnId, fileMappings, file)

uploadZip

uploadZip

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewFileApi();
let viewId = "viewId_example"; // String | viewId
let columnId = "columnId_example"; // String | 
let fileMappings = "fileMappings_example"; // String | 
let file = "/path/to/file"; // File | 
apiInstance.uploadZip(viewId, columnId, fileMappings, file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **columnId** | **String**|  | 
 **fileMappings** | **String**|  | 
 **file** | **File**|  | 

### Return type

[**[Record]**](Record.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/json
- **Accept**: application/json

