import {APIClient, APIMapping} from '../../http';
import {FlywheelServiceTypes} from './FlywheelService.Types';
import FlywheelFilter = FlywheelServiceTypes.FlywheelFilter;
import FlywheelPhase = FlywheelServiceTypes.FlywheelPhase;
import FlywheelPhaseTree = FlywheelServiceTypes.FlywheelPhaseTree;
import PhaseSyncCommands = FlywheelServiceTypes.PhaseSyncCommands;

export class PhaseController extends APIClient {

    constructor() {
        super(APIMapping.flywheelService);
    }

    /**
     * TODO: Please comment this method
     * @param filters
     */
    async fetchAll(filters?: FlywheelFilter | FlywheelFilter[]) {
        const params: any = {};
        if(filters) {
            params.queryParams = {
                filters: JSON.stringify(filters)
            };
        }

        return this.invokeApiWithErrorHandling<FlywheelPhase[]>('/phases', 'GET', undefined, params);
    }

    /**
     * Return a specific phase with all subphases
     * @param phaseName
     */
    async fetch(phaseName: string) {
        return this.invokeApiWithErrorHandling<FlywheelPhaseTree>(`/phases/${phaseName}`);
    }


    /**
     * Creates or updates a phase.
     * @param phase
     */
    async create(phase: FlywheelPhase) {
        return this.invokeApiWithErrorHandling<FlywheelPhase>('/phases', 'POST', phase);
    }

    /**
     * TODO: Please comment this method
     * @param phaseName
     * @param command
     */
    async sync(phaseName: string, command: PhaseSyncCommands) {
        return this.invokeApiWithErrorHandling(`/phases/${phaseName}`, 'POST', undefined, {
            queryParams: {
                command
            }
        });
    }

    /**
     * TODO: Please comment this method
     * @param phase
     */
    async update(phase: FlywheelPhase) {
        return this.invokeApiWithErrorHandling<FlywheelPhase>('/phases', 'PUT', phase, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * TODO: Please comment this method
     * @param phaseName
     */
    async delete(phaseName: string) {
        return this.invokeApiWithErrorHandling(`/phases/${phaseName}`, 'DELETE');
    }

}