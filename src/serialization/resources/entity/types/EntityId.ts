/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { MercoaApi } from "@fern-api/mercoa";
import * as core from "../../../../core";

export const EntityId: core.serialization.Schema<serializers.EntityId.Raw, MercoaApi.EntityId> =
    core.serialization.string();

export declare namespace EntityId {
    type Raw = string;
}