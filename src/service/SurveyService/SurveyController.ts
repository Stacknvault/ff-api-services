import { APIClient, APIMapping } from '../../http';
import { FeedbackSurveyDisplayStatus, FeedbackSurvey } from './Survey.Types';

export class SurveyController extends APIClient {
    constructor() {
        super(APIMapping.surveyService);
    }

    submitFeedbackSurvey = async () => {
        return await this.invokeApiWithErrorHandling<FeedbackSurveyDisplayStatus>('/customerAccess', 'GET');
    };

    getSurveyDisplayInfo = async (survey: FeedbackSurvey) => {
        return await this.invokeApiWithErrorHandling('/customerAccess', 'GET', survey);
    };
}
