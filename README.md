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

- API calls ✅
- Number validator ✅
- DID numbers ✅
- SIP trunks ✅
- Call Detail Records (CDRs) ✅
- Speech analytics ✅
- Voice campaigns ✅
- SMS and MMS ✅
- Link Shortener ✅
- E911 ✅
- Billing ✅
- Cart ✅
- Buy ✅
- Profile ✅
- 2FA ✅
