  

# Flexben SDK
Welcome to the Flexben Software Development Kit (SDK), your gateway to seamless API access using GraphQL within the Flexben platform ([https://flexben.id](https://flexben.id/)). This developer-friendly resource empowers you to efficiently retrieve and manipulate data to create tailored solutions.

## Prerequisites
To use this package, you must have a registered Flexben client application. Make sure you already have the `Client ID` and `Client Secret` .

## Installation
Installing this SDK is straightforward. Simply run this command in your terminal within your project directory.
```bash
npm  i  @vhiweb/flexben-client-js
```
or
```bash
yarn  add  @vhiweb/flexben-client-js
```
Import the Flexben client library into your project as shown below:
```ts
// Using ES modules (default)

import  Flexben  from  'flexben-client-js';
// OR if you are using CommonJS modules
const  Flexben  =  require('flexben-client-js');
```
To initialize the SDK, you need to have authorized client access by getting the Client ID and Client Secret. Ask to the platform owner to get this access.
```ts
const flexben = new Flexben();
flexben.init({
  clientId:  'YOUR_CLIENT_ID', // Type: String | Mandatory: Yes | Nullable: No
  clientSecret:  'YOUR_CLIENT_SECRET', // Type: String | Mandatory: Yes | Nullable: No
})
```

## Usage

### User Login
Authenticate a user by providing their username and password: Output:
```ts
flexben.authLogin({
 username:  'email@example.com',
 password:  'secret12345',
})
.then(token  => {
 console.log(`Your access token: ${token.accessToken}`);
 console.log(`Expiration: ${token.expiry}`);
})
.catch(e  => {
 console.error(`Login failed: ${e.message}`);
});
```


#### Get User

Retrieve user data with this method:
```ts
flexben.getUser().then(user  => {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
});
```

#### Get Current Period
Fetch the current period with this method:
```ts
flexben.getCurrentPeriod().then(period  => {
  console.log(`ID: ${period.id}`);
  console.log(`Name: ${period.name}`);
  console.log(`Enrolled?: ${period.enrolled  ?  'Yes'  :  'No'}`);
});
```
#### Get Available Benefits
#### Submit Enrollment
To create an enrollment, use this method:
```ts
flexben.submitEnrollment({
period_id:  41,
benefit_items_ids: [7, 28, 43, 81]
})
.then(enrollment  => {
console.log(
```
## Reference
#### authLogin
```ts
authLogin(username, password): Promise<Token>
```
| Param | Type | Default | Description | Required
|--|--|--|--|--|
| username | `String` | | User email/username | yes
| password | `String` | | User password | yes

#### authRegister
```ts
authRegister({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: ''
}): Promise<Token>
```
| Param | Type | Default | Description | Required
|--|--|--|--|--|
| name | `String` | | User name | yes
| email | `String` | | User email | yes
| phone | `String` | | User phone | yes
| username | `String` | | User email/username | yes
| password | `String` | | User password | yes

#### authForgotPassword
```ts
authForgotPassword({
    email: '',
    url: ''
})
```
| Param | Type | Default | Description | Required 
|--|--|--|--|--|
| email | `String` | | User email/username | yes
| email | `String` | | | no

#### Reset Password
For resetting a user's password, follow this approach:
```ts
authResetPassword({
    code: '',
    password: ''
})
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
| code | `String` | | Reset Password Code, You will get reset password code from forgot password method | yes
| password | `String` | | password | yes
#### Change Password

To change a user's password, use this method:
```ts
authChangePassword({
    current_password: '',
    password: '',
    password_confirmation: ''
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
current_password | `string` | | | yes
password | `string` | | | yes
password_confirmation | `string` | | | yes

### User

#### Get User

Retrieve user data with this method:
```ts
flexben.getUser();
```

#### Update User Data
To update user data, employ the following method:
```ts
flexben.authUpdateUser({
    name:  '',
    email:  '',
    phone:  '',
    password:  '',
    password_confirmation:  '',
    gender:  '',
    birth_at:  '',
    avatar:  ''
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
name | `string` | | | no
email | `string` | | | no
phone | `string` | | | no
gender | `string` | | | no
birth_at | `string` | | | no
avatar | `string` | | | no
password | `string` | | | yes
password_confirmation | `string` | | | yes

### Periods

#### Get All Periods

Retrieve all periods with this method:
```ts
getPeriods();
```
#### Get Current Period

Fetch the current period with this method:
```ts
getCurrentPeriod();
```

#### Get Upcoming Period

Retrieve information about the upcoming period using this method:
```ts
flexben.getUpcomingPeriod();
```

### Enrollments

#### Create Enrollment

To create an enrollment, use this method:
```ts
flexben.createEnrollment({
    id:  '',
    period_id:  '',
    is_submitted:  '',
    benefit_items_ids: []
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
id | `string` | | | yes
period_id | `string` | | | yes
is_submitted | `string` | | | yes
benefit_items_ids | `Array` of `benefit_item_id` ex: `[1,3,4,6]` | | | yes

#### Get All Enrollments

Retrieve all enrollments with this method:
```ts
getEnrollments();
```

#### Get Detail Enrollment
Fetch details of a specific enrollment using this method:
```ts
getDetailEnrollment({
    id:  '',
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
id | `string` | | | yes

### Claims

#### Create Claim

Create a claim using this method:
```ts
createClaim({
    name:  '',
    merchant_name:  '',
    description:  '',
    amount:  '',
    period_id:  '',
    category_id:  '',
    transaction_at:  '',
    receipt:  '',
    documents:  ''
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
name | `string` | | | yes
merchant_name | `string` | | | yes
description | `string` | | | no
amount | `string` | `number` | | | yes
period_id | `string` | | | yes
category_id | `string` | | | yes
transaction_at | `string` | | | yes
receipt | `string` | | | no
documents | `string` | | | yes
  
#### Update Claim

Update an existing claim with this method:

```ts
flexben.updateClaim({
    id:  '',
    name:  '',
    merchant_name:  '',
    description:  '',
    amount:  '',
    period_id:  '',
    category_id:  '',
    transaction_at:  '',
    receipt:  '',
    documents:  '',
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
id | `number` | | | yes
name | `string` | | | yes
merchant_name | `string` | | | yes
description | `string` | | | no
amount | `string` | `number` | | | yes
period_id | `string` | | | yes
category_id | `string` | | | yes
transaction_at | `string` | | | yes
receipt | `string` | | | no
documents | `string` | | | yes
  

#### Delete Claim

Delete a claim using this method:

```ts
flexben.deleteClaim({
    id:  '',
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
id | `number` | | | yes  

#### Get All Claims

Retrieve all claims with this method:

```ts
flexben.getClaims({
    period_id:  '',
    first:  '',
    page:  '',
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
period_id | `string` | `number` | | | no  
first | `number` | | | no  
page | `number` | | | no  
  

#### Get Detail Claim

Fetch details of a specific claim using this method:

```ts
flexben.getDetailClaim({
    id:  '',
});
```
#### Get Claim Categories

Retrieve claim categories with this method:
```ts
flexben.getClaimCategories({
    parent_id:  '',
    isParent:  bool,
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
parent_id | `string` | `number` | | | yes  
isParent | `boolean` | | | no  

### Benefits

#### Get All Benefits
Retrieve all benefits with this method:
```ts
flexben.getAllBenefits();
```

#### Get Benefit Based on Period
Fetch benefits based on a specific period using this method:
```ts
flexben.getPeriodBenefits({
    id:  '',
});
```
| Param | Type | Default | description | Required
|--|--|--|--|--|
id | `string` | `number` | | | yes  

### Points

#### Get Point
Retrieve points information with this method:
```ts
flexben.getPoint();
```

### Others

#### Get All Frequently Asked Questions

Retrieve all frequently asked questions with this method:
```ts
flexben.getFaq();
```

Explore the full potential of the Flexben SDK and enhance your development capabilities within the Flexben platform.