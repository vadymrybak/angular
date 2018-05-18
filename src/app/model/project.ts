export interface Project {
    id: number;
    identifier: string;
    name: string;
    description: string;
    owner: string;
    date_created: Date;
    companies: Array<string>;
}