import { CacheController } from './CacheController';
import { TransformerController } from './TransformerController';

class ImporterTransformerService {
    constructor(
        public readonly transformerController: TransformerController = new TransformerController(),
        public readonly cacheController: CacheController = new CacheController()
    ) {}
}

export const ImporterTransformerServiceInstance = new ImporterTransformerService();
