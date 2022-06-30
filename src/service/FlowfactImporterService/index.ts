import { CustomMappingController } from './CustomMappingController';
import { RecordLogController } from './RecordLogController';
import { StatusController } from './StatusController';

export * from './FlowfactImporterService.Types';

class FlowfactImporterService {
    public readonly recordLog: RecordLogController;
    public readonly status: StatusController;
    public readonly customMapping: CustomMappingController;

    constructor() {
        this.recordLog = new RecordLogController();
        this.status = new StatusController();
        this.customMapping = new CustomMappingController();
    }
}

export const FlowfactImporterServiceInstance = new FlowfactImporterService();
