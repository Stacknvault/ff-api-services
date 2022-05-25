import MatchController from './MatchController';
import SearchController from './SearchController';
import ProspectController from './ProspectController';

export * from './Matchmaking.Types';

export class MatchmakingService {
    public readonly match: MatchController;
    public readonly search: SearchController;
    public readonly prospect: ProspectController;

    public constructor() {
        this.match = new MatchController();
        this.search = new SearchController();
        this.prospect = new ProspectController();
    }
}

export const MatchmakingServiceInstance = new MatchmakingService();
