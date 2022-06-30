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
     * Create search-profile for a given token
     * @param token
     * @param searchProfile
     */
    async createSearchProfile(token: string, searchProfile: MatchmakingTypes.SearchProfile) {
        return await this.invokeApiWithErrorHandling<MatchmakingTypes.Prospect>(`/public/search-profiles`, 'POST', searchProfile, {
            headers: {
                token,
            },
        });
    }

    /**
     * Update search-profile for a given token
     * @param token
     * @param searchProfile
     */
    async updateSearchProfile(token: string, searchProfile: MatchmakingTypes.SearchProfile) {
        return await this.invokeApiWithErrorHandling<MatchmakingTypes.Prospect>(`/public/search-profiles/${searchProfile.id}`, 'PUT', searchProfile, {
            headers: {
                token,
            },
        });
    }

    /**
     * Delete search-profile for a given token and entityId
     * @param token
     * @param entityId
     */
    async deleteSearchProfile(token: string, entityId: string) {
        return await this.invokeApiWithErrorHandling<MatchmakingTypes.Prospect>(`/public/search-profiles/${entityId}`, 'DELETE', '', {
            headers: {
                token,
            },
        });
    }

    /**
     * Fetch locations for a given query
     */
     async fetchLocationsByQuery(token: string, query: string) {
        return await this.invokeApiWithErrorHandling(`/public/geo-information/polygons/search?q=${query}`, 'GET', '', {
            headers: {
                token,
            },
        });
    }

    /**
     * Fetch locations for a given names
     */
    async fetchLocationsByNames(token: string, names: string[]) {
        return await this.invokeApiWithErrorHandling(`/public/geo-information/polygons/list?names=${names}&onlyMetadata=false`, 'GET', '', {
            headers: {
                token,
            },
        });
    }

    /**
     * Fetch locations metadata for a given names
     */
     async fetchLocationsMetadata(token: string, names: string[]) {
        return await this.invokeApiWithErrorHandling(`/public/geo-information/polygons/list?names=${names}&onlyMetadata=false`, 'GET', '', {
            headers: {
                token,
            },
        });
    }
}
