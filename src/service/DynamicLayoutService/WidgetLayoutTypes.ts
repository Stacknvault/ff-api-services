import { Captions } from '@flowfact/types';
import { ViewActionType } from '../ViewDefinitionService';

export namespace WidgetLayoutTypes {
    export enum LayoutDomainType {
        GENERAL = 'GENERAL',
        SCHEMA_BOUND = 'SCHEMA_BOUND',
    }

    export interface LayoutActionType {
        type: ViewActionType;
    }

    export interface BaseWidgetLayout {
        id: string;
        sorting?: number;
        captions: Captions;
        tabTitle?: Captions;
        descriptions?: Captions;
        global: boolean;
        layout: LayoutContainer;
        domainType: LayoutDomainType;
        updateComment?: string;
    }

    export interface GeneralWidgetLayout extends BaseWidgetLayout {
        domainType: LayoutDomainType.GENERAL;
    }

    export interface SchemaBoundWidgetLayout extends BaseWidgetLayout {
        schema: string;
        domainType: LayoutDomainType.SCHEMA_BOUND;
        categories?: string[];
    }

    export interface LayoutSnapshot {
        id: string;
        widgetLayoutId: string;
        layout: LayoutContainer;
        userId: string;
        updateComment: string;
        updatedAt: number;
    }

    export interface PagedLayoutSnapshots {
        page: number;
        size: number;
        totalCount: number;
        results: LayoutSnapshot[];
    }

    export interface PagedWidgetLayouts {
        offset: number;
        total: number;
        items: SchemaBoundWidgetLayout[];
    }

    export interface LayoutTabGroupItem {
        title: string | Captions;
        kind: 'tab';
        content: LayoutWidget;
    }
    export interface LayoutTabGroup {
        tempKey: string;
        kind: 'tabGroup';
        children: LayoutTabGroupItem[];
    }

    export interface LayoutWidget {
        tempKey: string;
        kind: 'widget';
        configuration?: object;
        globalWidgetId?: string;
        widgetStoreId: string;
        type: string;
    }

    export interface LayoutConfiguration {
        fractions: number;
    }

    export type LayoutColumnItem = LayoutWidget | LayoutContainer | LayoutTabGroup;

    export interface LayoutColumn {
        tempKey: string;
        layout: LayoutConfiguration;
        children: LayoutColumnItem[];
    }

    export interface LayoutContainer {
        tempKey: string;
        actions?: LayoutActionType[];
        kind: 'container';
        columns: LayoutColumn[];
    }
}
