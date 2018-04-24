import { Order } from './order-enum';

export class Search {
    page: number;
    itemsPerPage: number;
    searchString: string;
    sortField: string;
    sortOrder: Order = Order.DESC;

    constructor(page:number){
        this.page = page;
        this.searchString = "";
    }
}