import { APIClient, APIMapping } from '../../http';

export class CustomMappingController extends APIClient {
    constructor() {
        super(APIMapping.flowfactImporterLambda);
    }

    /** Fetch custom mapping data from s3 bucket */
    async fetchCustomMapping(mappingId: string) {
        return this.invokeApiWithErrorHandling<string>(`/custom-mapping`, 'GET', undefined, {
            queryParams: {
                id: mappingId,
            },
        });
    }

    /** Fetch custom mapping data from s3 bucket */
    async fetchAllCustomMappings() {
        return this.invokeApiWithErrorHandling<string>(`/custom-mapping`, 'GET');
    }

    /** Save custom mapping data into s3 bucket */
    async createCustomMapping(mappingId: string, mapping: string) {
        return this.invokeApiWithErrorHandling<void>(`/custom-mapping`, 'POST', mapping, {
            queryParams: {
                id: mappingId,
            },
        });
    }

    /** Delete custom mapping data from s3 bucket */
    async deleteCustomMapping(mappingId: string) {
        return this.invokeApiWithErrorHandling<void>(`/custom-mapping`, 'DELETE', undefined, {
            queryParams: {
                id: mappingId,
            },
        });
    }
}
