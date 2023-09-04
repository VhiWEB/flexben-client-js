
 # Getting Started
This library contains core functionalities needed for Flexben Product.
Flexben Client Js is a library to supporting development for flexben solutions project. Flexben client Js are using GraphQL and Apollo Client as a query language to get data from API to send and recieving data

## Step 1 - Installing
Installing this SDK is pretty simple you just need to run `npm i flexben-client-js` or `yarn add flexben-client-js` in your terminal inside your current project.

## Step 2 - Setup Your Env File

Create an `.env` file on code editor similar to `.env.example` it contains your credential make some api request to our api end points
```
VITE_API_URL=
VITE_AUTH_CLIENT_ID=
VITE_AUTH_CLIENT_SECRET=
VITE_ENCRYPTOR_KEY=
VITE_GRANT_TYPE=
VITE_PROJECT_KEY=
```

## Step 3 - Importing Flexben SDK to Your Current Project
Import Flexben client library to your project after setting up your env file
```
import Flexben from 'flexben-client-js';
const flexben = new Flexben();
```

## Step 4 - Initializing SDK
Then, you need to initializing this library using appid,
we recommend you to setup your .env first to init this library
to initialize library
```
flexben.init({
	clientId: config.api.VITE_AUTH_CLIENT_ID,
	clientSecret: config.api.VITE_AUTH_CLIENT_SECRET,
	grantType: config.api.VITE_GRANT_TYPE,
})
```

# Mutations & Queries
Since we're using GraphQL and Apollo Client, here are the list of Queries and Mutations function for our data request to be implemented in Your current project

## Mutation

### Login Authentication
Login authentication needs two variables such a Username and Password
```
flexben.authLogin({
	username: '',
	password: '',
}).then(({ data: { accessToken: { access_token } } }) => {
	//setting up token
	flexben.setToken({ token: access_token })
});
```

### Registration
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

  ### Forgot Password
```
flexben.authForgotPassword({
	email: '',
	url: '',
});
```
### Reset Password
```
flexben.authResetPassword({
	code: '',
	password: '',
});
```
### Changing Password

```
flexben.authResetPassword({
	current_password: '',
	password: '',
	password_confirmation: '',
});
```
### Update User Data

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

### Create Enrollment
```
flexben.createEnrollment({
	id: '',
	period_id: '',
	is_submitted: '',
	benefit_items_ids: []
});
```
### Create Claim
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
### Update Claim
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
### Delete Claim
```
flexben.deleteClaim({
	id: '',
});
```

## Queries

### Get All Frequently Asked Questions
```
flexben.getFaq();
```

### Get All Periods
```
flexben.getPeriods();
```

### Get Current Period
```
flexben.getCurrentPeriod();
```

### Get Upcoming Period
```
flexben.getUpcomingPeriod();
```
### Get All Benefits
```
flexben.getAllBenefits();
```
### Get Benefit Based on Period
```
flexben.getPeriodBenefits({	
	id: '',
});
```
### Get All Enrollments
```
flexben.getEnrollments();
```

### Get Detail Enrollment
```
flexben.getDetailEnrollment({
	id: '',
});
```
### Get All Claims
```
flexben.getClaims({
	period_id: '',
	first: '',
	page: '',
});
```
### Get Detail Claim
```
flexben.getDetailClaim({
	id: '',
});
```
### Get Claim Categories
```
flexben.getDetailClaim({
	parent_id: '',
	isParent: bool,
});
```

### Get User
```
flexben.getUser();
```


### Get getPoint
```
flexben.getPoint();
```

# Tools
- **@apollo/client** : **^3.7.9** [https://www.apollographql.com/docs/react/)
- **apollo-boost** : **^0.4.9** [https://www.npmjs.com/package/apollo-boost)
- **graphql** : **^15.8.0** [https://graphql.org/)