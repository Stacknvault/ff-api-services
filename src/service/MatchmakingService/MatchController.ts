import { APIClient, APIMapping } from '../../http';
import { Entity, PagedResponse } from '@flowfact/types';
import { MatchmakingTypes } from './Matchmaking.Types';
import { Sort } from '@flowfact/node-flowdsl';

const buildSortParameter = (sorting?: Sort): string | undefined => {
    // converts sorting to a string like "+fieldName,-fieldName2"
    return sorting?.fields?.map((fieldName) => `${sorting.direction === 'ASC' ? '+' : '-'}${fieldName}`).join(',');
};

export default class MatchController extends APIClient {
    constructor() {
        super(APIMapping.matchmakingService);
    }

    /**
     * Fetch matches for a given search profile id
     * @param searchProfileId
     * @param query
     *      The query to filter special results
     * @param sorting
     * @param size
     * @param offset
     */
    async fetchMatchesBySearchProfile(
        searchProfileId: string,
        query: MatchmakingTypes.FilterQuery = {},
        sorting?: Sort,
        size = 10,
        offset = 0,
        returnIds = false
    ) {
        return await this.invokeApiWithErrorHandling<PagedResponse<MatchmakingTypes.Match>>(
            `/match/search-profile/${searchProfileId}`,
            'GET',
            undefined,
            {
                queryParams: {
                    ...query,
                    returnIds,
                    size,
                    offset,
                    sort: buildSortParameter(sorting),
                },
            }
        );
    }

    /**
     * Fetch matches for a given search profile.
     * @param searchProfile
     *      A search profile entity
     * @param query
     *      The query to filter special results
     * @param sorting
     * @param size
     * @param offset
     */
    async fetchMatchesBySearchProfileBody(
        searchProfile: Entity,
        query: MatchmakingTypes.FilterQuery = {},
        sorting?: Sort,
        size = 10,
        offset = 0,
        returnIds = false
    ) {
        return await this.invokeApiWithErrorHandling<PagedResponse<MatchmakingTypes.Match>>(`/match/search-profile`, 'POST', searchProfile, {
            queryParams: {
                ...query,
                returnIds,
                size,
                offset,
                sort: buildSortParameter(sorting),
            },
        });
    }

    /**
     * Fetch matches for a given search profile as CSV.
     * @param searchProfile
     *      A search profile entity
     * @param query
     *      The query to filter special results
     */
    async fetchMatching(searchProfile: Entity, query: MatchmakingTypes.FilterQuery = {}) {
        return await this.invokeApiWithErrorHandling<MatchmakingTypes.CSVStream>(`/match/search-profile/csv`, 'POST', searchProfile, {
            queryParams: {
                ...query,
            },
            responseType: 'stream',
        });
    }

    /**
     * Fetch matches for a given estate id.
     * @param estateId
     * @param query
     * @param sorting
     * @param size
     * @param offset
     */
    async fetchMatchesByEstate(estateId: string, query: MatchmakingTypes.FilterQuery = {}, sorting?: Sort, size = 10, offset = 0, returnIds = false) {
        return await this.invokeApiWithErrorHandling<PagedResponse<MatchmakingTypes.Match>>(`/match/estate/${estateId}`, 'GET', undefined, {
            queryParams: {
                ...query,
                returnIds,
                size,
                offset,
                sort: buildSortParameter(sorting),
            },
        });
    }

    /**
     * Loads all map matches to the given searchprofile
     * @param {string} searchProfileId
     */
    async fetchMapMatchesBySearchProfile(searchProfileId: string) {
        return await this.invokeApiWithErrorHandling<PagedResponse<MatchmakingTypes.MapMatch>>(
            `/match/search-profile/${searchProfileId}/map-entries`,
            'GET'
        );
    }
}
