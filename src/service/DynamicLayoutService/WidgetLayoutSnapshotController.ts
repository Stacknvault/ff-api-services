import { APIClient, APIMapping } from '../../http';
import { WidgetLayoutTypes } from './WidgetLayoutTypes';

class WidgetLayoutSnapshotController extends APIClient {
    constructor() {
        super(APIMapping.dynamicLayoutService);
    }

    /**
     * Fetches a list of snapshots previously saved for given widget layout.
     * The list represents the history of changes of the widget layout.
     * @param {string} layoutId - id of widget layout we want to get snapshots for
     * @param {number} page - number of page to fetch
     * @param {number} size - number of entities per page
     */
    async fetchSnapshots(layoutId: string, page: number, size: number) {
        return this.invokeApiWithErrorHandling<WidgetLayoutTypes.PagedLayoutSnapshots>(
            `/widget-layout-snapshots/${layoutId}`,
            'GET',
            undefined,
            {
                queryParams: {
                    page,
                    size,
                }
            });
    }
}

export default WidgetLayoutSnapshotController;
