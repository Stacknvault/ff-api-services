import { APIClient, APIMapping } from '../../http';
import { User, UserTokenEntity } from '../UserService';

export class ImportUserController extends APIClient {
    constructor() {
        super(APIMapping.flowfactImporterLambda);
    }

    /** Gets the import user. If it does not exist, it will be created. */
    async fetchImportUser() {
        return this.invokeApiWithErrorHandling<User>('/import-user', 'GET');
    }

    /** Gets the API token for the import user. */
    async fetchImportToken() {
        return this.invokeApiWithErrorHandling<UserTokenEntity>(`/import-user/token`, 'GET');
    }

    /** Generate the API token for the import user. */
    async generateImportToken() {
        return this.invokeApiWithErrorHandling<UserTokenEntity>(`/import-user/token`, 'POST', {});
    }
}
