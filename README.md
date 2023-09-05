
<!-- Read me -->
 # Getting Started
 Flexben Client Js is a library to supporting development for flexben solutions project. Flexben client Js are using GraphQL and Apollo Client as a query language to get data from API to send and recieving data

## Step 1 - Installing
Installing this SDK is pretty simple you just need to run `npm i @vhiweb/flexben-client-js` or `yarn add @vhiweb/flexben-client-js` in your terminal inside your current project.

## Step 2 - Setup Your Env File
Create an `.env` file on code editor that contain two variable `client id` and `client secret`
```bash
CLIENT_ID=exampleofclientid
CLIENT_SECRET=exampleofclientsecret
```

## Step 3 - Importing Flexben SDK to Your Current Project
Import Flexben client library to your project after setting up your env file
```jsx
import Flexben from 'flexben-client-js';
const flexben = new Flexben();
export default flexben;
```

## Step 4 - Initializing SDK
Your `client id` and `client secret` are from you ENV file that you set before initializing SDK, pass that variable to your init function like code below:
```jsx
flexben.init({
	clientId: 'xxxx',
	clientSecret: 'xxxx',
})
```
# Methods
## Authentication 
- ### Login

Login authentication needs two variables such a Username and Password
```jsx
flexben.authLogin({
username: '',
password: '',
}).then(({ data: { accessToken: { access_token } } }) => {
//setting up token
flexben.setToken({ token: access_token })
});
```
- ### Registration
```jsx
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
- ### Forgot Password
```jsx
flexben.authForgotPassword({
email: '',
url: '',
});
```
- ### Reset Password
```jsx
flexben.authResetPassword({
code: '',
password: '',
});
```
- ### Change Password
```jsx
flexben.authResetPassword({
current_password: '',
password: '',
password_confirmation: '',
});
```

## User
- ### Get User
```jsx
flexben.getUser();
```

- ### Update User Data
```jsx
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

## Enrollments
- ### Create Enrollment
```jsx
flexben.createEnrollment({
id: '',
period_id: '',
is_submitted: '',
benefit_items_ids: []
});
```
- ### Get All Enrollments
```jsx
flexben.getEnrollments();
```
- ### Get Detail Enrollment
```jsx
flexben.getDetailEnrollment({
id: '',
});
```

## Claims
- ### Create Claim
```jsx
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
- ### Update Claim
```jsx
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
- ### Delete Claim
```jsx
flexben.deleteClaim({
id: '',
});
```
- ### Get All Claims
```jsx
flexben.getClaims({
period_id: '',
first: '',
page: '',
});
```
- ### Get Detail Claim
```jsx
flexben.getDetailClaim({
id: '',
});
```
- ### Get Claim Categories
```jsx
flexben.getDetailClaim({
parent_id: '',
isParent: bool,
});
```

## Periods
- ### Get All Periods
```jsx
flexben.getPeriods();
```
- ### Get Current Period
```jsx
flexben.getCurrentPeriod();
```
- ### Get Upcoming Period
```jsx
flexben.getUpcomingPeriod();
```

## Benefits
- ### Get All Benefits
```jsx
flexben.getAllBenefits();
```
- ### Get Benefit Based on Period
```jsx
flexben.getPeriodBenefits({	
	id: '',
});
```

## Points
- ### Get getPoint
```jsx
flexben.getPoint();
```

## FAQ
- ### Get All Frequently Asked Questions
```jsx
flexben.getFaq();
```

# Tools
- **@apollo/client** : **^3.7.9** [https://www.apollographql.com/docs/react/)
- **apollo-boost** : **^0.4.9** [https://www.npmjs.com/package/apollo-boost)
- **graphql** : **^15.8.0** [https://graphql.org/)


<!-- Skeleton APP -->
