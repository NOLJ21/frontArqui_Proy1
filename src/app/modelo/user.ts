import { Address } from "./address";
import { Company } from "./company";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: number;
    website: string;
    company: Company;

    // quicktype en la web
}