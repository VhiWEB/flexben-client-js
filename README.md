# Flexben Product Client Js

This library contains core functionalities needed for Flexben Product.

## Getting Started

1. Install flexben-client-js.
2. Run `npm i flexben-client-js` or `yarn add flexben-client-js` to install the library.
3. Configure environment variables

## Setup .env file

Create `.env` file on code editor similar to `.env.example` or copy the code below : (see [official docs](https://vitejs.dev/guide/env-and-mode.html))
```
VITE_API_URL=
VITE_AUTH_CLIENT_ID=
VITE_AUTH_CLIENT_SECRET=
VITE_ENCRYPTOR_KEY=
VITE_GRANT_TYPE=
VITE_PROJECT_KEY=
```

## Installing

Next, you need to import this library into your application.
```
import Flexben from 'flexben-client-js';

const flexben = new Flexben();
```

## Authentication 
```
flexben.authLogin({
  username: "",
  password: "",
}).then(({ data: { accessToken: { access_token } } }) => {
  flexben.init({ token: access_token })
});
```

## Get All Faq
```
flexben.getFaq();
```

## Get Current Period
```
flexben.getCurrentPeriod();
```

## Get Upcoming Period
```
flexben.getUpcomingPeriod();
```

## Get All Benefits
```
flexben.getAllBenefits();
```

## Get Benefit Based on Period
```
flexben.getDetailBenefits({
  id: '23',
});
```

## Tools

- **@apollo/client** : **^3.7.9** [https://www.apollographql.com/docs/react/)
- **apollo-boost** : **^0.4.9** [https://www.npmjs.com/package/apollo-boost)
- **graphql** : **^15.8.0** [https://graphql.org/)
