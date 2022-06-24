import { CustomMappingController } from './CustomMappingController';
import { RawUploaderController } from './RawUploaderController';
import { RecordLogController } from './RecordLogController';
import { StatusController } from './StatusController';

export * from './FlowfactImporterService.Types';

class FlowfactImporterService {
    public readonly recordLog: RecordLogController;
    public readonly status: StatusController;
    public readonly customMapping: CustomMappingController;
    public readonly rawUploader: RawUploaderController;

    constructor() {
        this.recordLog = new RecordLogController();
        this.status = new StatusController();
        this.customMapping = new CustomMappingController();
        this.rawUploader = new RawUploaderController();
    }
}

export const FlowfactImporterServiceInstance = new FlowfactImporterService();
