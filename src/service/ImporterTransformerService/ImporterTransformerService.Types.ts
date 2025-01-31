export namespace ImporterTransformerService {
    export interface RunTransformerRequest {
        table: string;
        entity: Record<string, unknown>;

        product?: string;
        edition?: string;
        action?: string;
        version?: string;
    }

    export interface CacheData {
        SK: string;
        value: unknown[];
    }
}
