/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { MercoaApi } from "@fern-api/mercoa";

export interface PaymentMethod {
    id?: MercoaApi.PaymentMethodId;
    type?: string;
    bankAccount?: MercoaApi.BankAccount;
    check?: MercoaApi.Check;
}
