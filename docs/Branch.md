# GridlyClient.Branch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**columns** | [**[ViewColumn]**](ViewColumn.md) |  | [optional] 
**defaultAccessViewId** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**isMaster** | **Boolean** |  | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** |  | [optional] 
**recordIdentifierType** | **String** |  | [optional] 
**status** | **String** |  | [optional] 



## Enum: RecordIdentifierTypeEnum


* `recordId` (value: `"recordId"`)

* `pathTagRecordId` (value: `"pathTagRecordId"`)





## Enum: StatusEnum


* `deleted` (value: `"deleted"`)

* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `restoring` (value: `"restoring"`)

* `backingUp` (value: `"backingUp"`)

* `uploading` (value: `"uploading"`)

* `importing` (value: `"importing"`)

* `branching` (value: `"branching"`)

* `merging` (value: `"merging"`)

* `duplicating` (value: `"duplicating"`)

* `clearingRecords` (value: `"clearingRecords"`)

* `copying` (value: `"copying"`)

* `updatingWorkflow` (value: `"updatingWorkflow"`)




