import { IClientAddress } from "./client-address.model";

export interface IClient {
    "name": string,
    "surname": string,
    "isCompany": boolean,
    "registrationNumber": string,
    "iban": string,
    "bic": string,
    "address": IClientAddress,
    "id": number
}