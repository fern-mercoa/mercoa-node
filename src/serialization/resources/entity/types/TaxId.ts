/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { MercoaApi } from "@fern-api/mercoa";
import * as core from "../../../../core";

export const TaxId: core.serialization.ObjectSchema<serializers.TaxId.Raw, MercoaApi.TaxId> = core.serialization.object(
    {
        ein: core.serialization.string(),
    }
);

export declare namespace TaxId {
    interface Raw {
        ein: string;
    }
}
