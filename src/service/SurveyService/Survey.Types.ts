export interface FeedbackSurvey {
    consentForContact: boolean;
    rating: number;
    comment: string;
    isScoutManagerUser: boolean;
}

export interface FeedbackSurveyDisplayStatus {
    shouldDisplaySurvey: boolean;
}
