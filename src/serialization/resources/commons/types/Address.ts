/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { MercoaApi } from "@fern-api/mercoa";
import * as core from "../../../../core";

export const Address: core.serialization.ObjectSchema<serializers.Address.Raw, MercoaApi.Address> =
    core.serialization.object({
        addressLine1: core.serialization.string(),
        addressLine2: core.serialization.string().optional(),
        city: core.serialization.string(),
        stateOrProvince: core.serialization.string(),
        postalCode: core.serialization.string(),
        country: core.serialization.string().optional(),
    });

export declare namespace Address {
    interface Raw {
        addressLine1: string;
        addressLine2?: string | null;
        city: string;
        stateOrProvince: string;
        postalCode: string;
        country?: string | null;
    }
}
