/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { MercoaApi } from "@fern-api/mercoa";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.MercoaApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Get invoices for an entity
     */
    public async getInvoices(entityId: MercoaApi.EntityId): Promise<MercoaApi.Invoice[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaApiEnvironment.Production,
                `/entity/${entityId}/invoices`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.invoice.getInvoices.Response.parse(
                _response.body as serializers.invoice.getInvoices.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaApiTimeoutError();
            case "unknown":
                throw new errors.MercoaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get JWT token for entity
     */
    public async getToken(entityId: MercoaApi.EntityId): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaApiEnvironment.Production,
                `/entity/${entityId}/token`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaApiTimeoutError();
            case "unknown":
                throw new errors.MercoaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create invoice
     */
    public async create(request: MercoaApi.Invoice): Promise<MercoaApi.Invoice> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.MercoaApiEnvironment.Production, "/invoice"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.invoice.create.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.invoice.create.Response.parse(
                _response.body as serializers.invoice.create.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaApiTimeoutError();
            case "unknown":
                throw new errors.MercoaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get invoice
     */
    public async get(invoiceId: MercoaApi.InvoiceId): Promise<MercoaApi.Invoice> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaApiEnvironment.Production,
                `/invoice/${invoiceId}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.invoice.get.Response.parse(_response.body as serializers.invoice.get.Response.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaApiTimeoutError();
            case "unknown":
                throw new errors.MercoaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update invoice
     */
    public async update(invoiceId: MercoaApi.InvoiceId, request: MercoaApi.Invoice): Promise<MercoaApi.Invoice> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaApiEnvironment.Production,
                `/invoice/${invoiceId}`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.invoice.update.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.invoice.update.Response.parse(
                _response.body as serializers.invoice.update.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaApiTimeoutError();
            case "unknown":
                throw new errors.MercoaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete invoice
     */
    public async delete(invoiceId: MercoaApi.InvoiceId): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaApiEnvironment.Production,
                `/invoice/${invoiceId}`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaApiTimeoutError();
            case "unknown":
                throw new errors.MercoaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get temporary link for vendor to accept payment
     */
    public async getVendorLink(invoiceId: MercoaApi.InvoiceId): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaApiEnvironment.Production,
                `/invoice/${invoiceId}/vendorlink`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaApiTimeoutError();
            case "unknown":
                throw new errors.MercoaApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
