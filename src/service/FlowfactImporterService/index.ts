import { ImportUserController } from './ImportUserController';
import { RecordLogController } from './RecordLogController';
import { StatusController } from './StatusController';
import { TableDependenciesController } from './TableDependenciesController';

export * from './FlowfactImporterService.Types';

class FlowfactImporterService {
    public readonly recordLog: RecordLogController;
    public readonly status: StatusController;
    public readonly tableDependencies: TableDependenciesController;
    public readonly importUser: ImportUserController;

    constructor() {
        this.recordLog = new RecordLogController();
        this.status = new StatusController();
        this.tableDependencies = new TableDependenciesController();
        this.importUser = new ImportUserController();
    }
}

export const FlowfactImporterServiceInstance = new FlowfactImporterService();
