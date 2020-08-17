import { APIClient, APIMapping } from '../../http';
import { PagedResponse } from '@flowfact/types';
import { MatchmakingTypes } from './Matchmaking.Types';
import { Sort } from '@flowfact/node-flowdsl';

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
    async fetchMatchesBySearchProfile(searchProfileId: string, query: MatchmakingTypes.FilterQuery = {}, sorting: Sort, size: number = 10, offset: number = 0) {
        // converts sorting to a string like "+fieldName,-fieldName2"
        const sortParameter: string | undefined = sorting?.fields?.map(fieldName => `${sorting.direction === 'ASC' ? '+' : '-'}${fieldName}`).join(',')
        return await this.invokeApiWithErrorHandling<PagedResponse<MatchmakingTypes.MatchedEstate>>(`/match/search-profile/${searchProfileId}`, 'GET', undefined, {
            queryParams: { ...query, size, offset, sort: sortParameter },
        });
    }

    /**
     * Fetch matches for a given estate id
     * @param estateId
     * @param query
     * @param sorting
     * @param size
     * @param offset
     */
    async fetchMatchesByEstate(estateId: string, query: MatchmakingTypes.FilterQuery = {}, sorting: Sort, size: number = 10, offset: number = 0) {
        const sortParameter: string | undefined = sorting?.fields?.map(fieldName => `${sorting.direction === 'ASC' ? '+' : '-'}${fieldName}`).join(',')
        return await this.invokeApiWithErrorHandling<PagedResponse<MatchmakingTypes.MatchedSearchProfile>>(`/match/estate/${estateId}`, 'GET', undefined, {
            queryParams: { ...query, size, offset, sort: sortParameter },
        });
    }
}