import { APIClient, APIMapping } from '../../http';
import { FlowfactImporterServiceTypes } from './FlowfactImporterService.Types';

type TableDependency = FlowfactImporterServiceTypes.TableDependency;

export class TableDependenciesController extends APIClient {
    constructor() {
        super(APIMapping.flowfactImporterLambda);
    }

    /** Get all table dependencies for the current system */
    async fetchTableDependencies() {
        return await this.invokeApiWithErrorHandling<TableDependency[]>('/table-dependencies', 'GET');
    }
}
