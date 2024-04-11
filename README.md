## API

https://wavix.com/api

# Quick start

### pnpm:
```
pnpm install wavix-sdk
```

### yarn 
```
yarn add wavix-sdk
```

# Using
```typescript
import wavix from "wavix-sdk"

const wavix = new Wavix({ appid: "<YOUR APPID>" }) 

const cdrList = await wavix.cdr.list({
    from: "2023-06-01",
    to: "2023-12-31",
    type: "placed" as const,
    per_page: 1
  })
```

You can also find examples in the "examples" directory.

- API calls ✅
- Number validator ✅
- DID numbers ✅
- SIP trunks ✅
- Call Detail Records (CDRs) ✅
- Speech analytics ✅
- SMS and MMS ✅
- Link Shortener ✅
- E911 ✅
- Billing ✅
- Cart ✅
- Buy ✅
- Profile ✅
- 2FA ✅
