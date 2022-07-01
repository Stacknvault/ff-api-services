import { APIClient, APIMapping } from '../../http';
import { ImporterTransformerService } from './ImporterTransformerService.Types';

export class CacheController extends APIClient {
    constructor() {
        super(APIMapping.importerTransformerLambda);
    }

    /** Fetch data from cache for transformer name */
    async fetchCache(transformerName: string, key?: string) {
        return this.invokeApiWithErrorHandling<ImporterTransformerService.CacheData>(`/cache`, 'GET', undefined, {
            queryParams: {
                transformer: transformerName,
                key,
            },
        });
    }
}
