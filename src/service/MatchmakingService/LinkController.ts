import {APIClient, APIMapping} from '../../http';
import {MatchmakingTypes} from './Matchmaking.Types';

export default class LinkController extends APIClient {
    constructor() {
        super(APIMapping.matchmakingService);
    }

    async createLinks(prospectIds: string[]) {
        return await this.invokeApiWithErrorHandling<MatchmakingTypes.SearchProfileLink[]>(`/search-profiles/links`, 'POST', {
            prospectIds
        });
    }
}
