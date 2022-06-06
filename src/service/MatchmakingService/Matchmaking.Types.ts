import { Entity } from '@flowfact/types';

export namespace MatchmakingTypes {
    export interface UpdatedField {
        name: string;
        previousValue: string | number | object | null;
        currentValue: string | number | object | null;
    }

    export interface OfferedStatus {
        alreadyOffered: boolean;
        offeredAt: number;
    }

    /**
     * @typedef Match A result entry in a matchmaking search
     * @prop {number} accuracy The accuracy of the match related to the optional criteria (0-100)
     * @prop {OfferedStatus} offeredStatus Whether the estate was already offered to the customer or not and when
     * @prop {UpdatedField[]} updatedFields Updated fields of the entity with respect to the latest offer
     * @prop {Entity} entity The entity that matched the search (Estate or SearchProfile)
     */
    export interface Match {
        accuracy: number;
        offeredStatus: OfferedStatus;
        updatedFields: UpdatedField[];
        entity: Entity;
    }

    export interface FilterQuery {
        ignored?: boolean;
        offered?: boolean;
    }

    export interface MapMatchGeoLocation {
        latitude: number;
        longitude: number;
    }

    export interface MapMatchAddress {
        street: string;
        zipcode: string;
        city: string;
        geolocation?: MapMatchGeoLocation;
    }

    export interface MapMatch {
        id: string;
        addresses: {
            values: MapMatchAddress[];
        };
    }

    export interface SearchProfile {
        estateType: 'flat' | 'house';
        id: string;
        message: string;
        priceMax: number;
        priceMin: number;
        roomsMax: number;
        roomsMin: number;
        squareMetersMax: number;
        squareMetersMin: number;
        status: 'active' | 'inactive';
        typeOfInterest: 'purchase' | 'rent';
    }

    export interface ProspectCompany {
        companyCity: string;
        companyMailInfo: string;
        companyName: string;
        companyPhoneInfo: string;
        companyPostcode: string;
        companyStreet: string;
        companyUrlImprint: string;
        companyUrlPrivacy: string;
        logo: {
            url: string;
        };
    }

    export interface Prospect {
        id: string;
        company: ProspectCompany;
        companyLogo: string;
        contactName: string;
        searchProfiles: SearchProfile[];
    }
    
    export type CSVStream =  ReadableStream;

    export interface SearchProfileLink {
        companyId: string;
        expirationDate: Date,
        id: string;
        link: string;
        prospectId: string;
        userId: string;
    }
}
