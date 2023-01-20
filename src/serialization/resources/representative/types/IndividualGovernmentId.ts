/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { MercoaApi } from "@fern-api/mercoa";
import * as core from "../../../../core";

export const IndividualGovernmentId: core.serialization.ObjectSchema<
    serializers.IndividualGovernmentId.Raw,
    MercoaApi.IndividualGovernmentId
> = core.serialization.object({
    ssn: core.serialization.lazyObject(async () => (await import("../../..")).SocialSecurityNumber),
    itin: core.serialization.lazyObject(async () => (await import("../../..")).Itin),
});

export declare namespace IndividualGovernmentId {
    interface Raw {
        ssn: serializers.SocialSecurityNumber.Raw;
        itin: serializers.Itin.Raw;
    }
}