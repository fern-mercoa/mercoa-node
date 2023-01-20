/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { MercoaApi } from "@fern-api/mercoa";
import * as core from "../../../../core";

export const InvoiceId: core.serialization.Schema<serializers.InvoiceId.Raw, MercoaApi.InvoiceId> =
    core.serialization.string();

export declare namespace InvoiceId {
    type Raw = string;
}
