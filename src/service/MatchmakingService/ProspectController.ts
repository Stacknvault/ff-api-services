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
        return await this.invokeApiWithErrorHandling<MatchmakingTypes.Prospect>(`/public/search-profiles`, 'GET', '', {
            headers: {
                token,
            },
        });
    }

    /**
     * Fetch prospect for a given token
     * @param token
     */
    async createSearchProfile(token: string, searchProfile: MatchmakingTypes.SearchProfile) {
        return await this.invokeApiWithErrorHandling<MatchmakingTypes.Prospect>(`/public/search-profiles`, 'POST', searchProfile, {
            headers: {
                token,
            },
        });
    }

    /**
     * Fetch prospect for a given token
     * @param token
     */
    async updateSearchProfile(token: string, searchProfile: MatchmakingTypes.SearchProfile) {
        return await this.invokeApiWithErrorHandling<MatchmakingTypes.Prospect>(`/public/search-profiles/${searchProfile.id}`, 'PUT', searchProfile, {
            headers: {
                token,
            },
        });
    }
}
