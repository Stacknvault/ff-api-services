import { Captions } from '@flowfact/types';
import { ViewActionType, ViewDefinitionCategoryJsonFieldConfig, ViewType } from './ViewDefinitionService.Types';

export enum ViewDefinitionV2CategoryContentItemTypes {
    MULTIMEDIA = 'MULTIMEDIA',
    ENTITY = 'ENTITY',
    TEXT = 'TEXT',
    SCHEMA = 'SCHEMA',
    SCHEMA_INFO = 'SCHEMA_INFO',
    IS24_STATISTICS = 'IS24_STATISTICS',
}

export enum StatisticsType {
    EXPOSE_VIEWS = 'EXPOSE_VIEWS',
    CONTACT_REQUESTS = 'CONTACT_REQUESTS',
}

export enum HighligtingColor {
    ACTIVE_COLOR = 'ACTIVE_COLOR',
    INACTIVE_COLOR = 'INACTIVE_COLOR',
    ARCHIVED_COLOR = 'ARCHIVED_COLOR',
}

export type ViewDefinitionV2CategoryContentItemType = keyof typeof ViewDefinitionV2CategoryContentItemTypes;

export interface ViewDefinitionV2CategoryIs24StatisticsItem {
    type: ViewDefinitionV2CategoryContentItemTypes.IS24_STATISTICS;
    statisticsType: StatisticsType;
    icon?: string;
    linkTemplate?: string;
}

export interface ViewDefinitionV2CategoryMediaItem {
    type: ViewDefinitionV2CategoryContentItemTypes.MULTIMEDIA;
    album?: string;
    category?: string;
    height?: number;
    width?: number;
    index: number;
}

export interface ViewDefinitionV2CategoryEntityItemConfig {
    //this field is used to define highlight mapping between the possible field values and the highlight styles.
    highlighting?: Record<string, HighligtingColor>;
}

export interface ViewDefinitionV2CategoryEntityItem {
    type: ViewDefinitionV2CategoryContentItemTypes.ENTITY;
    fieldName?: string;
    jsonFieldConfig?: ViewDefinitionCategoryJsonFieldConfig;
    config?: ViewDefinitionV2CategoryEntityItemConfig;
}

export interface ViewDefinitionV2CategoryTextItem {
    type: ViewDefinitionV2CategoryContentItemTypes.TEXT;
    captions: Captions;
}

export interface ViewDefinitionV2CategorySchemaItem {
    type: ViewDefinitionV2CategoryContentItemTypes.SCHEMA_INFO;
}

export interface ViewDefinitionV2CategoryLinkedEntityItem {
    type: ViewDefinitionV2CategoryContentItemTypes.SCHEMA;
    fieldName: string;
    content: ViewDefinitionV2CategoryContentItem[];
}

export type ViewDefinitionV2CategoryContentItem =
    | ViewDefinitionV2CategorySchemaItem
    | ViewDefinitionV2CategoryTextItem
    | ViewDefinitionV2CategoryMediaItem
    | ViewDefinitionV2CategoryEntityItem
    | ViewDefinitionV2CategoryLinkedEntityItem
    | ViewDefinitionV2CategoryIs24StatisticsItem;

export interface ViewDefinitionV2Category<T extends ViewType = ViewType> {
    name: string;
    id: string;
    captions: Captions;
    content: ViewDefinitionV2CategoryContentItem[];
    hideFieldsIfEmpty: string[];
    config?: ViewDefinitionV2CategoryConfig<T>;
}

export interface ViewDefinitionV2FilterConfigurationField {
    fieldName: string;
}

export interface ViewDefinitionV2FilterConfiguration {
    id: string;
    showMoreFilters?: boolean;
    showSavedSearches?: boolean;
    saveFilterState?: boolean;
    groupByFields?: ViewDefinitionV2FilterConfigurationField[];
    filterFields: ViewDefinitionV2FilterConfigurationField[];
}

export interface ViewDefinitionV2<T extends ViewType = ViewType> {
    id: string;
    metadata?: object;
    type: T;
    default: boolean;
    actions: ViewActionType[];
    captions: Captions;
    categories: ViewDefinitionV2Category<T>[];
    defaultOrder?: string;
    filterConfiguration?: ViewDefinitionV2FilterConfiguration;
    schema: string;
    hints?: Captions[];
}

export type ViewDefinitionV2CategoryConfig<T extends ViewType = ViewType> = T extends ViewType.LIST
    ? ViewDefinitionV2ListCategoryConfig
    : ViewDefinitionV2DefaultCategoryConfig;

export interface ViewDefinitionV2DefaultCategoryConfig {}

export interface ViewDefinitionV2ListCategoryConfig {
    // defaults to true
    sortable?: boolean;
}
