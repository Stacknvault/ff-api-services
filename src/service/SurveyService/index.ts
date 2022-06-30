import { SurveyController } from './SurveyController';

export * from './Survey.Types';

export class SurveyService {
    public readonly survey: SurveyController;

    constructor() {
        this.survey = new SurveyController();
    }
}

export const SurveyServiceInstance = new SurveyService();
