/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 3.39.2
 * Contact: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AddViewColumn from './model/AddViewColumn';
import Branch from './model/Branch';
import Cell from './model/Cell';
import ColumnReference from './model/ColumnReference';
import CreateBranch from './model/CreateBranch';
import CreateColumn from './model/CreateColumn';
import CreateDatabase from './model/CreateDatabase';
import CreateDependency from './model/CreateDependency';
import CreateGrid from './model/CreateGrid';
import CreateProject from './model/CreateProject';
import CreateTransMem from './model/CreateTransMem';
import CreateView from './model/CreateView';
import Database from './model/Database';
import DeleteDependency from './model/DeleteDependency';
import DeleteFile from './model/DeleteFile';
import DeleteRecord from './model/DeleteRecord';
import Dependency from './model/Dependency';
import ExportFileHeader from './model/ExportFileHeader';
import ExportFormat from './model/ExportFormat';
import FetchFileOption from './model/FetchFileOption';
import Grid from './model/Grid';
import Group from './model/Group';
import NumberFormat from './model/NumberFormat';
import Privilege from './model/Privilege';
import Project from './model/Project';
import ProjectDetail from './model/ProjectDetail';
import Record from './model/Record';
import RecordIdentifierWrapper from './model/RecordIdentifierWrapper';
import Reference from './model/Reference';
import ReferencedColumn from './model/ReferencedColumn';
import ReferencedGrid from './model/ReferencedGrid';
import Role from './model/Role';
import SetCell from './model/SetCell';
import SetRecord from './model/SetRecord';
import Task from './model/Task';
import TransMem from './model/TransMem';
import TranslationStatus from './model/TranslationStatus';
import UpdateColumn from './model/UpdateColumn';
import UpdateDatabase from './model/UpdateDatabase';
import UpdateDependency from './model/UpdateDependency';
import UpdateGrid from './model/UpdateGrid';
import UpdateProject from './model/UpdateProject';
import UpdateTransMem from './model/UpdateTransMem';
import UploadZipRequest from './model/UploadZipRequest';
import UploadedFile from './model/UploadedFile';
import View from './model/View';
import ViewColumn from './model/ViewColumn';
import BranchApi from './service/BranchApi';
import DatabaseApi from './service/DatabaseApi';
import GridApi from './service/GridApi';
import ProjectApi from './service/ProjectApi';
import RecordApi from './service/RecordApi';
import TaskApi from './service/TaskApi';
import TransmemApi from './service/TransmemApi';
import ViewApi from './service/ViewApi';
import ViewColumnApi from './service/ViewColumnApi';
import ViewDependencyApi from './service/ViewDependencyApi';
import ViewFileApi from './service/ViewFileApi';


/**
* Gridly_API_documentation.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GridlyClient = require('com.gridly.api/index'); // See note below*.
* var xxxSvc = new GridlyClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GridlyClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['com.gridly.api/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GridlyClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GridlyClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module com.gridly.api/index
* @version 3.39.2
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:com.gridly.api/ApiClient}
     */
    ApiClient,

    /**
     * The AddViewColumn model constructor.
     * @property {module:com.gridly.api/model/AddViewColumn}
     */
    AddViewColumn,

    /**
     * The Branch model constructor.
     * @property {module:com.gridly.api/model/Branch}
     */
    Branch,

    /**
     * The Cell model constructor.
     * @property {module:com.gridly.api/model/Cell}
     */
    Cell,

    /**
     * The ColumnReference model constructor.
     * @property {module:com.gridly.api/model/ColumnReference}
     */
    ColumnReference,

    /**
     * The CreateBranch model constructor.
     * @property {module:com.gridly.api/model/CreateBranch}
     */
    CreateBranch,

    /**
     * The CreateColumn model constructor.
     * @property {module:com.gridly.api/model/CreateColumn}
     */
    CreateColumn,

    /**
     * The CreateDatabase model constructor.
     * @property {module:com.gridly.api/model/CreateDatabase}
     */
    CreateDatabase,

    /**
     * The CreateDependency model constructor.
     * @property {module:com.gridly.api/model/CreateDependency}
     */
    CreateDependency,

    /**
     * The CreateGrid model constructor.
     * @property {module:com.gridly.api/model/CreateGrid}
     */
    CreateGrid,

    /**
     * The CreateProject model constructor.
     * @property {module:com.gridly.api/model/CreateProject}
     */
    CreateProject,

    /**
     * The CreateTransMem model constructor.
     * @property {module:com.gridly.api/model/CreateTransMem}
     */
    CreateTransMem,

    /**
     * The CreateView model constructor.
     * @property {module:com.gridly.api/model/CreateView}
     */
    CreateView,

    /**
     * The Database model constructor.
     * @property {module:com.gridly.api/model/Database}
     */
    Database,

    /**
     * The DeleteDependency model constructor.
     * @property {module:com.gridly.api/model/DeleteDependency}
     */
    DeleteDependency,

    /**
     * The DeleteFile model constructor.
     * @property {module:com.gridly.api/model/DeleteFile}
     */
    DeleteFile,

    /**
     * The DeleteRecord model constructor.
     * @property {module:com.gridly.api/model/DeleteRecord}
     */
    DeleteRecord,

    /**
     * The Dependency model constructor.
     * @property {module:com.gridly.api/model/Dependency}
     */
    Dependency,

    /**
     * The ExportFileHeader model constructor.
     * @property {module:com.gridly.api/model/ExportFileHeader}
     */
    ExportFileHeader,

    /**
     * The ExportFormat model constructor.
     * @property {module:com.gridly.api/model/ExportFormat}
     */
    ExportFormat,

    /**
     * The FetchFileOption model constructor.
     * @property {module:com.gridly.api/model/FetchFileOption}
     */
    FetchFileOption,

    /**
     * The Grid model constructor.
     * @property {module:com.gridly.api/model/Grid}
     */
    Grid,

    /**
     * The Group model constructor.
     * @property {module:com.gridly.api/model/Group}
     */
    Group,

    /**
     * The NumberFormat model constructor.
     * @property {module:com.gridly.api/model/NumberFormat}
     */
    NumberFormat,

    /**
     * The Privilege model constructor.
     * @property {module:com.gridly.api/model/Privilege}
     */
    Privilege,

    /**
     * The Project model constructor.
     * @property {module:com.gridly.api/model/Project}
     */
    Project,

    /**
     * The ProjectDetail model constructor.
     * @property {module:com.gridly.api/model/ProjectDetail}
     */
    ProjectDetail,

    /**
     * The Record model constructor.
     * @property {module:com.gridly.api/model/Record}
     */
    Record,

    /**
     * The RecordIdentifierWrapper model constructor.
     * @property {module:com.gridly.api/model/RecordIdentifierWrapper}
     */
    RecordIdentifierWrapper,

    /**
     * The Reference model constructor.
     * @property {module:com.gridly.api/model/Reference}
     */
    Reference,

    /**
     * The ReferencedColumn model constructor.
     * @property {module:com.gridly.api/model/ReferencedColumn}
     */
    ReferencedColumn,

    /**
     * The ReferencedGrid model constructor.
     * @property {module:com.gridly.api/model/ReferencedGrid}
     */
    ReferencedGrid,

    /**
     * The Role model constructor.
     * @property {module:com.gridly.api/model/Role}
     */
    Role,

    /**
     * The SetCell model constructor.
     * @property {module:com.gridly.api/model/SetCell}
     */
    SetCell,

    /**
     * The SetRecord model constructor.
     * @property {module:com.gridly.api/model/SetRecord}
     */
    SetRecord,

    /**
     * The Task model constructor.
     * @property {module:com.gridly.api/model/Task}
     */
    Task,

    /**
     * The TransMem model constructor.
     * @property {module:com.gridly.api/model/TransMem}
     */
    TransMem,

    /**
     * The TranslationStatus model constructor.
     * @property {module:com.gridly.api/model/TranslationStatus}
     */
    TranslationStatus,

    /**
     * The UpdateColumn model constructor.
     * @property {module:com.gridly.api/model/UpdateColumn}
     */
    UpdateColumn,

    /**
     * The UpdateDatabase model constructor.
     * @property {module:com.gridly.api/model/UpdateDatabase}
     */
    UpdateDatabase,

    /**
     * The UpdateDependency model constructor.
     * @property {module:com.gridly.api/model/UpdateDependency}
     */
    UpdateDependency,

    /**
     * The UpdateGrid model constructor.
     * @property {module:com.gridly.api/model/UpdateGrid}
     */
    UpdateGrid,

    /**
     * The UpdateProject model constructor.
     * @property {module:com.gridly.api/model/UpdateProject}
     */
    UpdateProject,

    /**
     * The UpdateTransMem model constructor.
     * @property {module:com.gridly.api/model/UpdateTransMem}
     */
    UpdateTransMem,

    /**
     * The UploadZipRequest model constructor.
     * @property {module:com.gridly.api/model/UploadZipRequest}
     */
    UploadZipRequest,

    /**
     * The UploadedFile model constructor.
     * @property {module:com.gridly.api/model/UploadedFile}
     */
    UploadedFile,

    /**
     * The View model constructor.
     * @property {module:com.gridly.api/model/View}
     */
    View,

    /**
     * The ViewColumn model constructor.
     * @property {module:com.gridly.api/model/ViewColumn}
     */
    ViewColumn,

    /**
    * The BranchApi service constructor.
    * @property {module:com.gridly.api/service/BranchApi}
    */
    BranchApi,

    /**
    * The DatabaseApi service constructor.
    * @property {module:com.gridly.api/service/DatabaseApi}
    */
    DatabaseApi,

    /**
    * The GridApi service constructor.
    * @property {module:com.gridly.api/service/GridApi}
    */
    GridApi,

    /**
    * The ProjectApi service constructor.
    * @property {module:com.gridly.api/service/ProjectApi}
    */
    ProjectApi,

    /**
    * The RecordApi service constructor.
    * @property {module:com.gridly.api/service/RecordApi}
    */
    RecordApi,

    /**
    * The TaskApi service constructor.
    * @property {module:com.gridly.api/service/TaskApi}
    */
    TaskApi,

    /**
    * The TransmemApi service constructor.
    * @property {module:com.gridly.api/service/TransmemApi}
    */
    TransmemApi,

    /**
    * The ViewApi service constructor.
    * @property {module:com.gridly.api/service/ViewApi}
    */
    ViewApi,

    /**
    * The ViewColumnApi service constructor.
    * @property {module:com.gridly.api/service/ViewColumnApi}
    */
    ViewColumnApi,

    /**
    * The ViewDependencyApi service constructor.
    * @property {module:com.gridly.api/service/ViewDependencyApi}
    */
    ViewDependencyApi,

    /**
    * The ViewFileApi service constructor.
    * @property {module:com.gridly.api/service/ViewFileApi}
    */
    ViewFileApi
};
