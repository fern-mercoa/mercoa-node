/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { MercoaApi } from "@fern-api/mercoa";
import * as core from "../../../../core";

export const Profile: core.serialization.ObjectSchema<serializers.Profile.Raw, MercoaApi.Profile> =
    core.serialization.object({
        business: core.serialization.lazyObject(async () => (await import("../../..")).BusinessProfile).optional(),
        individual: core.serialization.lazyObject(async () => (await import("../../..")).IndividualProfile).optional(),
    });

export declare namespace Profile {
    interface Raw {
        business?: serializers.BusinessProfile.Raw | null;
        individual?: serializers.IndividualProfile.Raw | null;
    }
}
