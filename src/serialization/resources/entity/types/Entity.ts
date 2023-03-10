/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { MercoaApi } from "@fern-api/mercoa";
import * as core from "../../../../core";

export const Entity: core.serialization.ObjectSchema<serializers.Entity.Raw, MercoaApi.Entity> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).EntityId).optional(),
        accountType: core.serialization.string(),
        name: core.serialization.string().optional(),
        email: core.serialization.string().optional(),
        profile: core.serialization.lazyObject(async () => (await import("../../..")).Profile),
        moovStatus: core.serialization.string().optional(),
        ownersProvided: core.serialization.boolean().optional(),
        accpetedMoovTos: core.serialization.boolean().optional(),
        createdAt: core.serialization.string().optional(),
        updatedAt: core.serialization.string().optional(),
    });

export declare namespace Entity {
    interface Raw {
        id?: serializers.EntityId.Raw | null;
        accountType: string;
        name?: string | null;
        email?: string | null;
        profile: serializers.Profile.Raw;
        moovStatus?: string | null;
        ownersProvided?: boolean | null;
        accpetedMoovTos?: boolean | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    }
}
