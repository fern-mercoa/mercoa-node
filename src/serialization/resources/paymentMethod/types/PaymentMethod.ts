/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { MercoaApi } from "@fern-api/mercoa";
import * as core from "../../../../core";

export const PaymentMethod: core.serialization.ObjectSchema<serializers.PaymentMethod.Raw, MercoaApi.PaymentMethod> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodId).optional(),
        type: core.serialization.string().optional(),
        bankAccount: core.serialization.lazyObject(async () => (await import("../../..")).BankAccount).optional(),
        check: core.serialization.lazyObject(async () => (await import("../../..")).Check).optional(),
    });

export declare namespace PaymentMethod {
    interface Raw {
        id?: serializers.PaymentMethodId.Raw | null;
        type?: string | null;
        bankAccount?: serializers.BankAccount.Raw | null;
        check?: serializers.Check.Raw | null;
    }
}
