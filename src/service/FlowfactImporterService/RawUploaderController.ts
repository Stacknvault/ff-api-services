import { APIClient, APIMapping } from '../../http';

export class RawUploaderController extends APIClient {
    constructor() {
        super(APIMapping.flowfactImporterLambda);
    }

    async uploadRawExporterFile(file: unknown[], table: string, cacheOnly: boolean = false) {
        return this.invokeApiWithErrorHandling('/raw-uploader', 'POST', file, {
            queryParams: {
                table,
                cacheOnly,
            },
        });
    }
}
