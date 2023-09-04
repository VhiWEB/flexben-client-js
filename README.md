
<!-- Read me -->
 # Getting Started
This library contains core functionalities needed for Flexben Product.
Flexben Client Js is a library to supporting development for flexben solutions project. Flexben client Js are using GraphQL and Apollo Client as a query language to get data from API to send and recieving data

## Step 1 - Installing
Installing this SDK is pretty simple you just need to run `npm i @vhiweb/flexben-client-js` or `yarn add @vhiweb/flexben-client-js` in your terminal inside your current project.

## Step 2 - Setup Your Env File

Create an `.env` file on code editor similar to `.env.example` it contains your credential make some api request to our api end points
```bash
VITE_API_URL=
VITE_AUTH_CLIENT_ID=
VITE_AUTH_CLIENT_SECRET=
VITE_ENCRYPTOR_KEY=
VITE_GRANT_TYPE=
VITE_PROJECT_KEY=
```

## Step 3 - Importing Flexben SDK to Your Current Project
Import Flexben client library to your project after setting up your env file
```jsx
import Flexben from 'flexben-client-js';
const flexben = new Flexben();
export default flexben;
```

## Step 4 - Initializing SDK
Then, you need to initializing this library using appid,
we recommend you to setup your .env first to init this library
to initialize library

Your clientId, clientSecret, and grantType are from you ENV file that you set before initializing SDK, pass it to your initialization function 
```jsx
flexben.init({
	clientId: 'xxxx',
	clientSecret: 'xxxx',
	grantType: 'xxxx',
})
```

# Mutations & Queries
Since we're using GraphQL and Apollo Client, here are the list of Queries and Mutations function for our data request to be implemented in Your current project

## Mutation

### Login Authentication
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

### Registration
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

  ### Forgot Password
```jsx
flexben.authForgotPassword({
	email: '',
	url: '',
});
```
### Reset Password
```jsx
flexben.authResetPassword({
	code: '',
	password: '',
});
```
### Changing Password

```jsx
flexben.authResetPassword({
	current_password: '',
	password: '',
	password_confirmation: '',
});
```
### Update User Data

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

### Create Enrollment
```jsx
flexben.createEnrollment({
	id: '',
	period_id: '',
	is_submitted: '',
	benefit_items_ids: []
});
```
### Create Claim
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
### Update Claim
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
### Delete Claim
```jsx
flexben.deleteClaim({
	id: '',
});
```

## Queries

### Get All Frequently Asked Questions
```jsx
flexben.getFaq();
```

### Get All Periods
```jsx
flexben.getPeriods();
```

### Get Current Period
```jsx
flexben.getCurrentPeriod();
```

### Get Upcoming Period
```jsx
flexben.getUpcomingPeriod();
```
### Get All Benefits
```jsx
flexben.getAllBenefits();
```
### Get Benefit Based on Period
```jsx
flexben.getPeriodBenefits({	
	id: '',
});
```
### Get All Enrollments
```jsx
flexben.getEnrollments();
```

### Get Detail Enrollment
```jsx
flexben.getDetailEnrollment({
	id: '',
});
```
### Get All Claims
```jsx
flexben.getClaims({
	period_id: '',
	first: '',
	page: '',
});
```
### Get Detail Claim
```jsx
flexben.getDetailClaim({
	id: '',
});
```
### Get Claim Categories
```jsx
flexben.getDetailClaim({
	parent_id: '',
	isParent: bool,
});
```

### Get User
```jsx
flexben.getUser();
```


### Get getPoint
```jsx
flexben.getPoint();
```

# Tools
- **@apollo/client** : **^3.7.9** [https://www.apollographql.com/docs/react/)
- **apollo-boost** : **^0.4.9** [https://www.npmjs.com/package/apollo-boost)
- **graphql** : **^15.8.0** [https://graphql.org/)


<!-- Skeleton APP -->
