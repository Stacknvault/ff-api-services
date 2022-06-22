import { APIClient, APIMapping } from '../../http';
import { FeedbackSurveyDisplayStatus, FeedbackSurvey } from './Survey.Types';

export class SurveyController extends APIClient {
    constructor() {
        super(APIMapping.surveyService);
    }

    submitFeedbackSurvey = async (survey: FeedbackSurvey) => {
        return await this.invokeApiWithErrorHandling('/answer', 'POST', survey);
    };

    getSurveyDisplayInfo = async () => {
        return await this.invokeApiWithErrorHandling<FeedbackSurveyDisplayStatus>('/customerAccess', 'GET');
    };
}
