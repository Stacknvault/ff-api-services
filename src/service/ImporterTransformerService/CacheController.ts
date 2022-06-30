import { APIClient, APIMapping } from '../../http';

export class CacheController extends APIClient {
    constructor() {
        super(APIMapping.importerTransformerLambda);
    }

    /** Fetch data from cache for transformer name */
    async fetchCache(transformerName: string, key?: string) {
        return this.invokeApiWithErrorHandling<string>(`/transformer`, 'POST', undefined, {
            queryParams: {
                transformer: transformerName,
                key,
            },
        });
    }
}
