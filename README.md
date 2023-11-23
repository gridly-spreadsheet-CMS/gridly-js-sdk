# gridly-client

GridlyClient - JavaScript client for gridly-client
Gridly API documentation
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 4.21.5
- Package version: 4.21.5
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.gridly.com](https://www.gridly.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install gridly-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your gridly-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GridlyClient = require('gridly-client');

var defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix['Authorization'] = "Token"

var api = new GridlyClient.BranchApi()
var branchId = "branchId_example"; // {String} branchId
api.callDelete(branchId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.gridly.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GridlyClient.BranchApi* | [**callDelete**](docs/BranchApi.md#callDelete) | **DELETE** /v1/branches/{branchId} | delete
*GridlyClient.BranchApi* | [**create**](docs/BranchApi.md#create) | **POST** /v1/branches | create
*GridlyClient.BranchApi* | [**get**](docs/BranchApi.md#get) | **GET** /v1/branches/{branchId} | get
*GridlyClient.BranchApi* | [**list**](docs/BranchApi.md#list) | **GET** /v1/branches | list
*GridlyClient.BranchApi* | [**merge**](docs/BranchApi.md#merge) | **POST** /v1/branches/{branchId}/merge | merge
*GridlyClient.DatabaseApi* | [**callDelete**](docs/DatabaseApi.md#callDelete) | **DELETE** /v1/databases/{dbId} | delete
*GridlyClient.DatabaseApi* | [**create**](docs/DatabaseApi.md#create) | **POST** /v1/databases | create
*GridlyClient.DatabaseApi* | [**duplicate**](docs/DatabaseApi.md#duplicate) | **POST** /v1/databases/{dbId}/duplicate | duplicate
*GridlyClient.DatabaseApi* | [**get**](docs/DatabaseApi.md#get) | **GET** /v1/databases/{dbId} | get
*GridlyClient.DatabaseApi* | [**list**](docs/DatabaseApi.md#list) | **GET** /v1/databases | list
*GridlyClient.DatabaseApi* | [**update**](docs/DatabaseApi.md#update) | **PUT** /v1/databases/{dbId} | update
*GridlyClient.GridApi* | [**callDelete**](docs/GridApi.md#callDelete) | **DELETE** /v1/grids/{gridId} | delete
*GridlyClient.GridApi* | [**create**](docs/GridApi.md#create) | **POST** /v1/grids | create
*GridlyClient.GridApi* | [**createCategory**](docs/GridApi.md#createCategory) | **POST** /v1/grids/{gridId}/settings/categories | createCategory
*GridlyClient.GridApi* | [**deleteCategory**](docs/GridApi.md#deleteCategory) | **DELETE** /v1/grids/{gridId}/settings/categories/{categoryId} | deleteCategory
*GridlyClient.GridApi* | [**deleteFile**](docs/GridApi.md#deleteFile) | **DELETE** /v1/grids/{gridId}/settings/categories/{categoryId}/files/{fileId} | deleteFile
*GridlyClient.GridApi* | [**get**](docs/GridApi.md#get) | **GET** /v1/grids/{gridId} | get
*GridlyClient.GridApi* | [**getSetting**](docs/GridApi.md#getSetting) | **GET** /v1/grids/{gridId}/settings | getSetting
*GridlyClient.GridApi* | [**list**](docs/GridApi.md#list) | **GET** /v1/grids | list
*GridlyClient.GridApi* | [**listFiles**](docs/GridApi.md#listFiles) | **GET** /v1/grids/{gridId}/settings/files | listFiles
*GridlyClient.GridApi* | [**listTemplateGrids**](docs/GridApi.md#listTemplateGrids) | **GET** /v1/template-grids | listTemplateGrids
*GridlyClient.GridApi* | [**update**](docs/GridApi.md#update) | **PATCH** /v1/grids/{gridId} | update
*GridlyClient.GridApi* | [**updateCategory**](docs/GridApi.md#updateCategory) | **PUT** /v1/grids/{gridId}/settings/categories/{categoryId} | updateCategory
*GridlyClient.GridApi* | [**updateSetting**](docs/GridApi.md#updateSetting) | **PATCH** /v1/grids/{gridId}/settings | updateSetting
*GridlyClient.GridApi* | [**uploadSettingFile**](docs/GridApi.md#uploadSettingFile) | **POST** /v1/grids/{gridId}/settings/categories/{categoryId}/files | uploadSettingFile
*GridlyClient.PathApi* | [**callDelete**](docs/PathApi.md#callDelete) | **DELETE** /v1/views/{viewId}/paths | delete
*GridlyClient.PathApi* | [**create**](docs/PathApi.md#create) | **POST** /v1/views/{viewId}/paths | create
*GridlyClient.PathApi* | [**list**](docs/PathApi.md#list) | **GET** /v1/views/{viewId}/paths/tree | list
*GridlyClient.PathApi* | [**move**](docs/PathApi.md#move) | **POST** /v1/views/{viewId}/paths/move | move
*GridlyClient.PathApi* | [**update**](docs/PathApi.md#update) | **PUT** /v1/views/{viewId}/paths/{path} | update
*GridlyClient.ProjectApi* | [**callDelete**](docs/ProjectApi.md#callDelete) | **DELETE** /v1/projects/{projectId} | delete
*GridlyClient.ProjectApi* | [**create**](docs/ProjectApi.md#create) | **POST** /v1/projects | create
*GridlyClient.ProjectApi* | [**findOne**](docs/ProjectApi.md#findOne) | **GET** /v1/projects/{projectId} | findOne
*GridlyClient.ProjectApi* | [**list**](docs/ProjectApi.md#list) | **GET** /v1/projects | list
*GridlyClient.ProjectApi* | [**update**](docs/ProjectApi.md#update) | **PUT** /v1/projects/{projectId} | update
*GridlyClient.RecordApi* | [**callDelete**](docs/RecordApi.md#callDelete) | **DELETE** /v1/views/{viewId}/records | delete
*GridlyClient.RecordApi* | [**create**](docs/RecordApi.md#create) | **POST** /v1/views/{viewId}/records | create
*GridlyClient.RecordApi* | [**fetch**](docs/RecordApi.md#fetch) | **GET** /v1/views/{viewId}/records | fetch
*GridlyClient.RecordApi* | [**fetchHistories**](docs/RecordApi.md#fetchHistories) | **GET** /v1/views/{viewId}/records/{recordId}/histories | fetchHistories
*GridlyClient.RecordApi* | [**update**](docs/RecordApi.md#update) | **PATCH** /v1/views/{viewId}/records | update
*GridlyClient.RecordApi* | [**updateRecord**](docs/RecordApi.md#updateRecord) | **PATCH** /v1/views/{viewId}/records/{id} | updateRecord
*GridlyClient.ShareViewApi* | [**callDelete**](docs/ShareViewApi.md#callDelete) | **DELETE** /v1/views/{viewId}/shares | delete
*GridlyClient.ShareViewApi* | [**create**](docs/ShareViewApi.md#create) | **PUT** /v1/views/{viewId}/shares | create
*GridlyClient.ShareViewApi* | [**get**](docs/ShareViewApi.md#get) | **GET** /v1/views/{viewId}/shares | get
*GridlyClient.TaskApi* | [**get**](docs/TaskApi.md#get) | **GET** /v1/tasks/{taskId} | get
*GridlyClient.TransmemApi* | [**callDelete**](docs/TransmemApi.md#callDelete) | **DELETE** /v1/transmems/{tmId} | Delete a translation memory by id
*GridlyClient.TransmemApi* | [**callExport**](docs/TransmemApi.md#callExport) | **GET** /v1/transmems/{tmId}/export | Export translation memory tmx file
*GridlyClient.TransmemApi* | [**cleanup**](docs/TransmemApi.md#cleanup) | **PUT** /v1/transmems/{tmId}/cleanup | Erases all the translation data of the provided tmId
*GridlyClient.TransmemApi* | [**create**](docs/TransmemApi.md#create) | **POST** /v1/transmems | Create a new translation memory
*GridlyClient.TransmemApi* | [**createWithFile**](docs/TransmemApi.md#createWithFile) | **POST** /v1/transmems/upload | Create a new translation memory by uploading tmx file
*GridlyClient.TransmemApi* | [**get**](docs/TransmemApi.md#get) | **GET** /v1/transmems/{tmId} | Get translation memory info by id
*GridlyClient.TransmemApi* | [**importTmx**](docs/TransmemApi.md#importTmx) | **POST** /v1/transmems/{tmId}/import | Import a translation memory from tmx file
*GridlyClient.TransmemApi* | [**listTM**](docs/TransmemApi.md#listTM) | **GET** /v1/transmems | List all available translation memories or create default one if there is no translation memory
*GridlyClient.TransmemApi* | [**update**](docs/TransmemApi.md#update) | **PUT** /v1/transmems/{tmId} | Update a translation memory
*GridlyClient.ViewApi* | [**callExport**](docs/ViewApi.md#callExport) | **GET** /v1/views/{viewId}/export | export
*GridlyClient.ViewApi* | [**create**](docs/ViewApi.md#create) | **POST** /v1/views | create
*GridlyClient.ViewApi* | [**get**](docs/ViewApi.md#get) | **GET** /v1/views/{viewId} | get
*GridlyClient.ViewApi* | [**getStatistic**](docs/ViewApi.md#getStatistic) | **GET** /v1/views/{viewId}/statistic | getStatistic
*GridlyClient.ViewApi* | [**importView**](docs/ViewApi.md#importView) | **POST** /v1/views/{viewId}/import | importView
*GridlyClient.ViewApi* | [**list**](docs/ViewApi.md#list) | **GET** /v1/views | list
*GridlyClient.ViewApi* | [**merge**](docs/ViewApi.md#merge) | **POST** /v1/views/{viewId}/merge | merge
*GridlyClient.ViewColumnApi* | [**add**](docs/ViewColumnApi.md#add) | **POST** /v1/views/{viewId}/columns/{columnId}/add | add
*GridlyClient.ViewColumnApi* | [**bulkCreate**](docs/ViewColumnApi.md#bulkCreate) | **POST** /v1/views/{viewId}/columns/bulk | bulkCreate
*GridlyClient.ViewColumnApi* | [**callDelete**](docs/ViewColumnApi.md#callDelete) | **DELETE** /v1/views/{viewId}/columns/{columnId} | delete
*GridlyClient.ViewColumnApi* | [**create**](docs/ViewColumnApi.md#create) | **POST** /v1/views/{viewId}/columns | create
*GridlyClient.ViewColumnApi* | [**get**](docs/ViewColumnApi.md#get) | **GET** /v1/views/{viewId}/columns/{columnId} | get
*GridlyClient.ViewColumnApi* | [**remove**](docs/ViewColumnApi.md#remove) | **POST** /v1/views/{viewId}/columns/{columnId}/remove | remove
*GridlyClient.ViewColumnApi* | [**update**](docs/ViewColumnApi.md#update) | **PATCH** /v1/views/{viewId}/columns/{columnId} | update
*GridlyClient.ViewDependencyApi* | [**callDelete**](docs/ViewDependencyApi.md#callDelete) | **DELETE** /v1/views/{viewId}/dependencies | delete
*GridlyClient.ViewDependencyApi* | [**create**](docs/ViewDependencyApi.md#create) | **POST** /v1/views/{viewId}/dependencies | create
*GridlyClient.ViewDependencyApi* | [**deleteById**](docs/ViewDependencyApi.md#deleteById) | **DELETE** /v1/views/{viewId}/dependencies/{dependencyId} | deleteById
*GridlyClient.ViewDependencyApi* | [**get**](docs/ViewDependencyApi.md#get) | **GET** /v1/views/{viewId}/dependencies/{dependencyId} | get
*GridlyClient.ViewDependencyApi* | [**list**](docs/ViewDependencyApi.md#list) | **GET** /v1/views/{viewId}/dependencies | list
*GridlyClient.ViewDependencyApi* | [**update**](docs/ViewDependencyApi.md#update) | **PUT** /v1/views/{viewId}/dependencies/{dependencyId} | update
*GridlyClient.ViewFileApi* | [**callDelete**](docs/ViewFileApi.md#callDelete) | **DELETE** /v1/views/{viewId}/files | delete
*GridlyClient.ViewFileApi* | [**download**](docs/ViewFileApi.md#download) | **GET** /v1/views/{viewId}/files/{fileId} | download
*GridlyClient.ViewFileApi* | [**upload**](docs/ViewFileApi.md#upload) | **POST** /v1/views/{viewId}/files | upload
*GridlyClient.ViewFileApi* | [**uploadZip**](docs/ViewFileApi.md#uploadZip) | **POST** /v1/views/{viewId}/files/zip | uploadZip


## Documentation for Models

 - [GridlyClient.AddViewColumn](docs/AddViewColumn.md)
 - [GridlyClient.Branch](docs/Branch.md)
 - [GridlyClient.Cell](docs/Cell.md)
 - [GridlyClient.CellHistory](docs/CellHistory.md)
 - [GridlyClient.ColumnReference](docs/ColumnReference.md)
 - [GridlyClient.ColumnStatistic](docs/ColumnStatistic.md)
 - [GridlyClient.CreateBranch](docs/CreateBranch.md)
 - [GridlyClient.CreateColumn](docs/CreateColumn.md)
 - [GridlyClient.CreateDatabase](docs/CreateDatabase.md)
 - [GridlyClient.CreateDependency](docs/CreateDependency.md)
 - [GridlyClient.CreateFileCategory](docs/CreateFileCategory.md)
 - [GridlyClient.CreateGrid](docs/CreateGrid.md)
 - [GridlyClient.CreatePath](docs/CreatePath.md)
 - [GridlyClient.CreateProject](docs/CreateProject.md)
 - [GridlyClient.CreateShareView](docs/CreateShareView.md)
 - [GridlyClient.CreateTransMem](docs/CreateTransMem.md)
 - [GridlyClient.CreateView](docs/CreateView.md)
 - [GridlyClient.Database](docs/Database.md)
 - [GridlyClient.DateFormat](docs/DateFormat.md)
 - [GridlyClient.DateTimeFormat](docs/DateTimeFormat.md)
 - [GridlyClient.DeleteDependency](docs/DeleteDependency.md)
 - [GridlyClient.DeleteFile](docs/DeleteFile.md)
 - [GridlyClient.DeletePath](docs/DeletePath.md)
 - [GridlyClient.DeleteRecord](docs/DeleteRecord.md)
 - [GridlyClient.Dependency](docs/Dependency.md)
 - [GridlyClient.ExportFileHeader](docs/ExportFileHeader.md)
 - [GridlyClient.ExportFormat](docs/ExportFormat.md)
 - [GridlyClient.FetchFileOption](docs/FetchFileOption.md)
 - [GridlyClient.FileCategory](docs/FileCategory.md)
 - [GridlyClient.Formula](docs/Formula.md)
 - [GridlyClient.Grid](docs/Grid.md)
 - [GridlyClient.GridSetting](docs/GridSetting.md)
 - [GridlyClient.Group](docs/Group.md)
 - [GridlyClient.MovePath](docs/MovePath.md)
 - [GridlyClient.NumberFormat](docs/NumberFormat.md)
 - [GridlyClient.PathList](docs/PathList.md)
 - [GridlyClient.PathNode](docs/PathNode.md)
 - [GridlyClient.PathSingle](docs/PathSingle.md)
 - [GridlyClient.Privilege](docs/Privilege.md)
 - [GridlyClient.Project](docs/Project.md)
 - [GridlyClient.ProjectDetail](docs/ProjectDetail.md)
 - [GridlyClient.Record](docs/Record.md)
 - [GridlyClient.RecordHistory](docs/RecordHistory.md)
 - [GridlyClient.RecordIdentifierWrapper](docs/RecordIdentifierWrapper.md)
 - [GridlyClient.Reference](docs/Reference.md)
 - [GridlyClient.ReferencedColumn](docs/ReferencedColumn.md)
 - [GridlyClient.ReferencedGrid](docs/ReferencedGrid.md)
 - [GridlyClient.Role](docs/Role.md)
 - [GridlyClient.SetCell](docs/SetCell.md)
 - [GridlyClient.SetRecord](docs/SetRecord.md)
 - [GridlyClient.SettingFile](docs/SettingFile.md)
 - [GridlyClient.ShareView](docs/ShareView.md)
 - [GridlyClient.Task](docs/Task.md)
 - [GridlyClient.TransMem](docs/TransMem.md)
 - [GridlyClient.TranslationCount](docs/TranslationCount.md)
 - [GridlyClient.TranslationStatus](docs/TranslationStatus.md)
 - [GridlyClient.UpdateCategory](docs/UpdateCategory.md)
 - [GridlyClient.UpdateColumn](docs/UpdateColumn.md)
 - [GridlyClient.UpdateDatabase](docs/UpdateDatabase.md)
 - [GridlyClient.UpdateDependency](docs/UpdateDependency.md)
 - [GridlyClient.UpdateGrid](docs/UpdateGrid.md)
 - [GridlyClient.UpdateGridSetting](docs/UpdateGridSetting.md)
 - [GridlyClient.UpdatePath](docs/UpdatePath.md)
 - [GridlyClient.UpdateProject](docs/UpdateProject.md)
 - [GridlyClient.UpdateTransMem](docs/UpdateTransMem.md)
 - [GridlyClient.UploadSettingFileRequest](docs/UploadSettingFileRequest.md)
 - [GridlyClient.UploadZipRequest](docs/UploadZipRequest.md)
 - [GridlyClient.UploadedFile](docs/UploadedFile.md)
 - [GridlyClient.View](docs/View.md)
 - [GridlyClient.ViewColumn](docs/ViewColumn.md)
 - [GridlyClient.ViewStatistic](docs/ViewStatistic.md)


## Documentation for Authorization



### ApiKey


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

