# Flexben Product Client Js

This library contains core functionalities needed for Flexben Product.

## Getting Started

1. Install flexben-client-js.
2. Run `npm i flexben-client-js` or `yarn add flexben-client-js` to install the library.
3. Import the library

## Installing

First, you need to import this library into your application.
```
import Flexben from 'flexben-client-js';

const flexben = new Flexben();
```

## Init using AppId 

Then, you need to initializing this library using appid, i'll recommend you to setup your .env first to init this library

- **Setup .env file**

Create `.env` file on code editor similar to `.env.example` or copy the code below : (see [official docs](https://vitejs.dev/guide/env-and-mode.html))

```
VITE_API_URL=
VITE_AUTH_CLIENT_ID=
VITE_AUTH_CLIENT_SECRET=
VITE_ENCRYPTOR_KEY=
VITE_GRANT_TYPE=
VITE_PROJECT_KEY=
```

- **Init this library**

```
flexben.init({
  clientId: config.api.VITE_AUTH_CLIENT_ID,
  clientSecret: config.api.VITE_AUTH_CLIENT_SECRET,
  grantType: config.api.VITE_GRANT_TYPE,
})
```

## Mutations

- **Auth Login**

```
flexben.authLogin({
  username: '',
  password: '',
}).then(({ data: { accessToken: { access_token } } }) => {
  flexben.setToken({ token: access_token })
});
```

- **Auth Register**

```
flexben.authRegister({
  name: '',
  email: '',
  phone: '',
  username: '',
  password: '',
}).then(({ data: { accessToken: { access_token } } }) => {
  flexben.setToken({ token: access_token })
});
```

- **Auth Forgot Password**

```
flexben.authForgotPassword({
  email: '',
  url: '',
});
```

- **Auth Reset Password**

```
flexben.authResetPassword({
  code: '',
  password: '',
});
```

- **Auth Change Password**

```
flexben.authResetPassword({
  current_password: '',
  password: '',
  password_confirmation: '',
});
```

- **Update User**

```
flexben.authUpdateUser({
  name: '',
  email: '',
  phone: '',
  password: '',
  password_confirmation: '',
  gender: '',
  birth_at: '',
  avatar: '',
});
```

- **Create Enrollment**

```
flexben.createEnrollment({
  id: '',
  period_id: '',
  is_submitted: '',
  benefit_items_ids: []
});
```

- **Create Claim**

```
flexben.createClaim({
  name: '',
  merchant_name: '',
  description: '',
  amount: '',
  period_id: '',
  category_id: '',
  transaction_at: '',
  receipt: '',
  documents: '',
});
```

- **Update Claim**

```
flexben.updateClaim({
  id: '',
  name: '',
  merchant_name: '',
  description: '',
  amount: '',
  period_id: '',
  category_id: '',
  transaction_at: '',
  receipt: '',
  documents: '',
});
```

- **Delete Claim**

```
flexben.deleteClaim({
  id: '',
});
```

## Queries

- **Get All Faq**
```
flexben.getFaq();
```

- **Get All Periods**
```
flexben.getPeriods();
```

- **Get Current Period**
```
flexben.getCurrentPeriod();
```

- **Get Upcoming Period**
```
flexben.getUpcomingPeriod();
```

- **Get All Benefits**
```
flexben.getAllBenefits();
```

- **Get Benefit Based on Period**
```
flexben.getPeriodBenefits({
  id: '',
});
```

- **Get All Enrollments**
```
flexben.getEnrollments();
```

- **Get Detail Enrollment**
```
flexben.getDetailEnrollment({
  id: '',
});
```

- **Get All Claims**
```
flexben.getClaims({
  period_id: '',
  first: '',
  page: '',
});
```

- **Get Detail Claim**
```
flexben.getDetailClaim({
  id: '',
});
```

- **Get Claim Categories**
```
flexben.getDetailClaim({
  parent_id: '',
  isParent: bool,
});
```

- **Get User**
```
flexben.getUser();
```

- **Get getPoint**
```
flexben.getPoint();
```

## Tools

- **@apollo/client** : **^3.7.9** [https://www.apollographql.com/docs/react/)
- **apollo-boost** : **^0.4.9** [https://www.npmjs.com/package/apollo-boost)
- **graphql** : **^15.8.0** [https://graphql.org/)
