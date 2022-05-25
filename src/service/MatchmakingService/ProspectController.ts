import { APIClient, APIMapping } from '../../http';
import { MatchmakingTypes } from './Matchmaking.Types';

export default class ProspectController extends APIClient {
    constructor() {
        super(APIMapping.matchmakingService);
    }

    /**
     * Fetch prospect for a given token
     * @param token
     */
    async fetchProspect(token: string) {
        return await this.invokeApiWithErrorHandling<MatchmakingTypes.Prospect>(
            `/public/search-profiles`,
            'GET',
            '',
            {
                headers: {
                    token,
                },
            }
        );
    }
}
