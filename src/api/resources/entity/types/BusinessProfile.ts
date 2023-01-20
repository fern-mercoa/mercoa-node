/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { MercoaApi } from "@fern-api/mercoa";

export interface BusinessProfile {
    email: string;
    phone: MercoaApi.PhoneNumber;
    businessType: string;
    legalBusinessName: string;
    doingBusinessAs: string;
    website: string;
    ownersProvided: boolean;
    taxId: MercoaApi.TaxId;
    address: MercoaApi.Address;
}
