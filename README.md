## API

# Wavix Node.js SDK

Wavix Node.js SDK provides convenient and easy-to-understand functions for interacting with the Wavix API. You can use this package to integrate your Node.js application or service with Wavix functionality.

The current list of Wavix HTTP REST API can be found here: https://wavix.com/api

## Installation and Usage

### pnpm:

```sh
pnpm install wavix-sdk
```

### yarn

```sh
yarn add wavix-sdk
```

# Using

```typescript
import Wavix from "wavix-sdk"

const wavix = new Wavix({ appid: "<YOUR APPID>" })

const cdrList = await wavix.cdr.list({
  from: new Date("2023-01-01"),
  to: new Date(),
  type: "placed" as const,
  per_page: 1
})
```

You can also find examples in the "examples" directory.

## Contributing

We welcome contributions from the community. If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## Support and Contact

If you encounter any issues or have questions about the SDK, please create an issue on our GitHub repository. For direct support, you can contact us at support@wavix.com.

## License

This SDK is distributed under the MIT License. See [LICENSE](./LICENSE) for more detailed information.
