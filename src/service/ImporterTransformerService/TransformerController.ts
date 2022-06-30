import { APIClient, APIMapping } from '../../http';
import { ImporterTransformerService } from './ImporterTransformerService.Types';

export class TransformerController extends APIClient {
    constructor() {
        super(APIMapping.importerTransformerLambda);
    }

    /** Run transformer */
    async runTransformer(runTransformerRequest: ImporterTransformerService.RunTransformerRequest) {
        return this.invokeApiWithErrorHandling<string>(`/transformer`, 'POST', runTransformerRequest);
    }
}
