# Mercoa Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/mercoa)](https://www.npmjs.com/package/@fern-api/mercoa)

The Mercoa Node.js library provides access to the Mercoa API from JavaScript/TypeScript.

## Documentation

API documentation is available at https://docs.mercoa.com/quick-start.

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/mercoa-ts-sdk?file=app.ts&view=editor)

```typescript
import { MercoaApiClient } from '@fern-api/mercoa';

const client = new MercoaApiClient({
  token: 'MY_TOKEN',
});

const response = await client.entity.get('made-up-entity-id');

console.log('Received response from Mercoa!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-mercoa/mercoa-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
