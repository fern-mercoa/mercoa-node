/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { MercoaApi } from "@fern-api/mercoa";
import * as core from "../../../../core";

export const PaymentMethodId: core.serialization.Schema<serializers.PaymentMethodId.Raw, MercoaApi.PaymentMethodId> =
    core.serialization.string();

export declare namespace PaymentMethodId {
    type Raw = string;
}
