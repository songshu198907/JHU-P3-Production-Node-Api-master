# ***vaccinesurvey*** API Documentation

## Description

This document contains all relevant API information for the application "vaccinesurvey".

## Table of Contents

- [Installing Dependencies](#installing-dependencies)
  - [Node and NPM](#node-and-npm)
  - [Dependencies](#dependencies)
- [Seeding the App](#seeding-the-app)
- [Running the App](#running-the-app)
  - [Development vs. Production Mode](#development-vs-production-mode)
- [Running the Test Suite](#running-the-test-suite)
- [Connecting to the App Console](#connecting-to-the-app-console)
- [Jobs and Scheduling](#jobs-and-scheduling)
  - [Manually Executing Jobs](#manually-executing-jobs)
- [Authentication](#authentication)
- [CRUD and Query Scope Requests](#crud-and-query-scope-requests)
- [Push Notifications](#push-notifications)
- [File Uploads](#file-uploads)
- [Programmatic CRUD and Query Scope Calls](#programmatic-crud-and-query-scope-calls)
- [Roles](#roles)
- [API Versions](#api-versions)
- [Storage Interfaces](#storage-interfaces)

## <a name="installing-dependencies"></a> Installing Dependencies

### <a name='node-and-npm'></a> Node and NPM

The link at the bottom of this section contains all the installers for node.
This applications engines are located in the package.json file or below:

```json
{
  'node': '4.4.3',
  'npm': '2.15.1'
}
```

From the above example, you would find the v4.4.3 installer for your platform
and use that to setup node. Note that the installer also includes NPM and
should already be the correct version listed here and in the package.json file.

[Node Distributables](https://nodejs.org/dist/)

### <a name='dependencies'></a> Dependencies

Once you have node and NPM installed, you can install the global dependencies
required by the application as well as all the local dependencies the application
requires to run. All of those commands should be executed from the application's
root directory, unless noted otherwise.

First, install grunt-cli in order to execute grunt tasks:

```
npm install grunt-cli -g
```

Next, install all of the application's local dependencies. This could take a while
as it downloads and compiles all dependencies.

```
npm install
```

You will also need to install MongoDB and have it running on your system locally.
Visit the link below for instructions on setting up MongoDB for your platform:

### [MongoDB Installation Instructions](http://docs.mongodb.org/manual/installation/)


### Oracle database dependencies

Oracle database requires Oracle 11.2 or 12.1 client libraries. These are included in Oracle Instant Client RPMs or ZIPs, 
a full Oracle Client, or a database on the same machine.  Oracle's standard client-server network compatibility applies, 
which enables connection to databases with different versions from the Oracle client library version.

Python 2.7 is needed for node-gyp.  Gcc is needed on Linux.  On OS X, install Xcode.

Download the free 'Basic' and 'SDK' RPMs from [Oracle Technology Network](http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html) and
[install them](http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html#ic_x64_inst) as the root user:
[Oracle Instant Client](http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html)


## <a name="seeding-the-app"></a> Seeding the App

Everything should be in place to run the application. First, we'll need to seed
the initial database with the admin account. 

If you have [Forego](https://github.com/ddollar/forego) installed on your machine 
you can execute the following command:

```
forego run grunt seed
```


If you do not have forego installed, you can use the locally installed node implementation
by executing:

```
node ./node_modules/foreman/nf run grunt seed
```

Please note that the path ./node_modules/foreman/nf may have to change if you're running on 
a Windows machine.

Once that has finished, you can locate your default username and password by
executing the following command (on Linux or Mac OS):

```
grep -A1 email tasks/config/createAdmin.js
```

Which should produce something like:

```
email: "test@fizz.com",
password: "a9c6bd1ac688b671"
```

Otherwise, the fields are located in the file:

```
tasks/config/createAdmin.js
```

## <a name="running-the-app"></a> Running the App

Executing the following command will start the web server and the background
processes such as the job scheduler:

```
PORT=1337 npm start
```

And browse to:
### [http://localhost:1337/admin](http://localhost:1337/admin)

You can adjust the port by changing the PORT environment variable.

```
PORT=2222 npm start
```

You can also adjust the instance scaling using the npm script. For example if
you wanted to have 3 instances of the web process running:

```
npm start web=3
```

Each process will be started on a separate port, starting from the default or supplied
port and incrementing up. In this example the default port 5000 would be used and the 
instances would be listening on ports 5000, 5001 and 5002.

### <a name="development-vs-production-mode"></a> Development vs. Production Mode

You can also use this to execute the app in **production** vs **development**
mode.

```
NODE_ENV=production npm start
```

Providing no argument for NODE_ENV starts the app in **development** mode by default.

## <a name="running-the-test-suite"></a> Running the Test Suite

To run the application's test suite, execute the following command:

```
npm test
```

You can add custom API test files to:

```
test/server/
```

Any tests in this folder will be included in the test suite.

## <a name="connecting-to-the-app-console"></a> Connecting to the App Console

The sails framework can also be started in interactive mode with a console.
To use the console execute:

```
PORT=1337 npm run console
```

Set the port to any available port that the current application is not running on.

## <a name='jobs-and-scheduling'></a> Jobs and Scheduling

The job scheduler will start automatically when starting the server process using using the
previously mentioned npm script.


You should see logs from the **clock** process in your output regarding scheduled jobs. The scheduler
will only schedule and execute the most recent version of your jobs, it will not queue any previous API
version's jobs.

### <a name="manually-executing-jobs"></a> Manually Executing Jobs

If you'd like to run a job manually or from a script, you can execute the following command from
the root directory of our application:

```
npm run job <job_name>
```

Replacing \<job_name\> with the name you used to create the job. For example, if you created a job called
"MonthlyReport", you would execute:

```
npm run job MonthlyReport
```

You can also, optionally, supply an API version of the job if you'd like to execute a specific
version of the job:

```
npm run job MonthlyReport 2
```

This command would execute version 2 of the MonthlyReport job.

## <a name="authentication"></a> Authentication
## Password (Password) Authentication Strategy

To login and create a session with the password strategy, simply make a POST
to following path:

```
POST /auth/Password/callback
```

Alternatively, you can specify the API version you wish to authenticate against:

```
POST /auth/v2/Password/callback
```

With a body similar to the following:

```
{
  "email": "test",
  "password": "password"
}
```

The result of the above call, if the credentials are valid, should be a JSON object
containing all of the session details.

## <a name="crud-and-query-scope-requests"></a> CRUD and Query Scope Requests

## ClinicianBlockRandomizer
   **/api/v2/clinician_block_randomizers** OR **/api/clinician_block_randomizers**

Example payload:
```
{"clinicianCodeId":31665,"interventionGroup":"Grope displeasure","patientType":"Saddening obstructionists"}```

### Create
To create a ClinicianBlockRandomizer, make a POST like below using a body similar
to the example payload.

```
POST /api/clinician_block_randomizers
```

### Read
To request a specific ClinicianBlockRandomizer object, make a GET using the following
URL:

```
GET /api/clinician_block_randomizers/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/clinician_block_randomizers/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/clinician_block_randomizers/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for ClinicianBlockRandomizer:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
sorted_by_clinic_id  |  sortedByClinicIdScope  |  sort by clinic_id and id     
filter_by_clinic_id  |  filterByClinicIdScope  |  filter clinic block randomizer data by clinic_id    

To execute a scope query:

```
GET /api/clinician_block_randomizers?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/clinician_block_randomizers?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## ClinicianCode
   **/api/v2/clinician_codes** OR **/api/clinician_codes**

Example payload:
```
{"code":"Wittgenstein roistered","name":"Eldon Lindgren"}```

### Create
To create a ClinicianCode, make a POST like below using a body similar
to the example payload.

```
POST /api/clinician_codes
```

### Read
To request a specific ClinicianCode object, make a GET using the following
URL:

```
GET /api/clinician_codes/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/clinician_codes/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/clinician_codes/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for ClinicianCode:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
sorted_by_name  |  sortedByNameScope  |  filter sorted by name    

To execute a scope query:

```
GET /api/clinician_codes?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/clinician_codes?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## Education
   **/api/v2/educations** OR **/api/educations**

Example payload:
```
{"name":"Dierdre Dietrich"}```

### Create
To create a Education, make a POST like below using a body similar
to the example payload.

```
POST /api/educations
```

### Read
To request a specific Education object, make a GET using the following
URL:

```
GET /api/educations/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/educations/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/educations/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for Education:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
sorted_by_name  |  sortedByNameScope  |  filter sorted by name    

To execute a scope query:

```
GET /api/educations?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/educations?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## HealthcareProviderContent
   **/api/v2/healthcare_provider_contents** OR **/api/healthcare_provider_contents**

Example payload:
```
{"categoryGroup":"Grandstanding Catholicism","desc":"Christens Mediterraneans","externalLink":"Cosignatories noised","keywords":"Inefficiencies refurnished","title":"Encounters dorks","topicId":51649}```

### Create
To create a HealthcareProviderContent, make a POST like below using a body similar
to the example payload.

```
POST /api/healthcare_provider_contents
```

### Read
To request a specific HealthcareProviderContent object, make a GET using the following
URL:

```
GET /api/healthcare_provider_contents/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/healthcare_provider_contents/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/healthcare_provider_contents/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for HealthcareProviderContent:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
search_content  |  searchContentScope  |  search content by title, desc or keyword    
sorted_by_name  |  sortedByNameScope  |  return values sorted by name    
filter_by_category_group  |  filterByCategoryGroupScope  |  filter health care provider content on category group    

To execute a scope query:

```
GET /api/healthcare_provider_contents?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/healthcare_provider_contents?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## JobAuditLogging
   **/api/v2/job_audit_loggings** OR **/api/job_audit_loggings**

Example payload:
```
{"createdAt":"2017-03-21 01:06:40 +0000","name":"Lauri Altenwerth","rowsEffected":"Earful crystallography"}```

### Create
To create a JobAuditLogging, make a POST like below using a body similar
to the example payload.

```
POST /api/job_audit_loggings
```

### Read
To request a specific JobAuditLogging object, make a GET using the following
URL:

```
GET /api/job_audit_loggings/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/job_audit_loggings/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/job_audit_loggings/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for JobAuditLogging:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    

To execute a scope query:

```
GET /api/job_audit_loggings?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/job_audit_loggings?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## QuestionCategory
   **/api/v2/question_categories** OR **/api/question_categories**

Example payload:
```
{"name":"Tinisha Jenkins"}```

### Create
To create a QuestionCategory, make a POST like below using a body similar
to the example payload.

```
POST /api/question_categories
```

### Read
To request a specific QuestionCategory object, make a GET using the following
URL:

```
GET /api/question_categories/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/question_categories/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/question_categories/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for QuestionCategory:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
sorted_by_name  |  sortedByNameScope  |  sort categories by name    

To execute a scope query:

```
GET /api/question_categories?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/question_categories?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## QuestionCode
   **/api/v2/question_codes** OR **/api/question_codes**

Example payload:
```
{"name":"Marcellus Ruecker"}```

### Create
To create a QuestionCode, make a POST like below using a body similar
to the example payload.

```
POST /api/question_codes
```

### Read
To request a specific QuestionCode object, make a GET using the following
URL:

```
GET /api/question_codes/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/question_codes/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/question_codes/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for QuestionCode:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
sorted_by_name  |  sortedByNameScope  |  filter sorted by name    

To execute a scope query:

```
GET /api/question_codes?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/question_codes?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## QuestionType
   **/api/v2/question_types** OR **/api/question_types**

Example payload:
```
{"controlType":"Incarcerations ibexes","name":"Melvin Harris"}```

### Create
To create a QuestionType, make a POST like below using a body similar
to the example payload.

```
POST /api/question_types
```

### Read
To request a specific QuestionType object, make a GET using the following
URL:

```
GET /api/question_types/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/question_types/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/question_types/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for QuestionType:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
sorted_by_name  |  sortedByNameScope  |  filter sorted by name    

To execute a scope query:

```
GET /api/question_types?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/question_types?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## Race
   **/api/v2/races** OR **/api/races**

Example payload:
```
{"name":"Rickie Kihn"}```

### Create
To create a Race, make a POST like below using a body similar
to the example payload.

```
POST /api/races
```

### Read
To request a specific Race object, make a GET using the following
URL:

```
GET /api/races/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/races/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/races/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for Race:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
sorted_by_name  |  sortedByNameScope  |  filter sorted by name    

To execute a scope query:

```
GET /api/races?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/races?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## SearchAuditLogging
   **/api/v2/search_audit_loggings** OR **/api/search_audit_loggings**

Example payload:
```
{"createdAt":"1997-03-28 14:31:33 +0000","searchTerm":"Polarization accurately","userId":61232}```

### Create
To create a SearchAuditLogging, make a POST like below using a body similar
to the example payload.

```
POST /api/search_audit_loggings
```

### Read
To request a specific SearchAuditLogging object, make a GET using the following
URL:

```
GET /api/search_audit_loggings/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/search_audit_loggings/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/search_audit_loggings/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for SearchAuditLogging:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    

To execute a scope query:

```
GET /api/search_audit_loggings?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/search_audit_loggings?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## SendGrid
   **/api/v2/send_grids** OR **/api/send_grids**

Example payload:
```
{}```

### Create
To create a SendGrid, make a POST like below using a body similar
to the example payload.

```
POST /api/send_grids
```

### Read
To request a specific SendGrid object, make a GET using the following
URL:

```
GET /api/send_grids/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/send_grids/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/send_grids/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for SendGrid:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    

To execute a scope query:

```
GET /api/send_grids?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/send_grids?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## Setting
   **/api/v2/settings** OR **/api/settings**

Example payload:
```
{"awsHealthcareContentBucketName":"Dismounts troubadours","awsVideoBucketName":"Granada leggy","contactUserRegistrationEmailText":"Title unintelligent","contactUserRegistrationSubject":"Anthony pores","forgotPasswordEmailText":"Eavesdropped spatters","forgotPasswordSubject":"Floggings underlines","fromEmail":"Marginalia transplantation","smsPhoneNumber":"Pedestrianized campaigning","surveyCompletionEmailSubject":"Paraplegia confectioners","surveyCompletionEmailText":"Incorrigibility blackest","surveyNotificationEmailText":"Laurence thicker","surveyNotificationFinalSmsText":"Interjected correlating","surveyNotificationFirstReminderEmailText":"Kestrels bedsteads","surveyNotificationFirstReminderSubject":"Anticlimaxes counterfeiting","surveyNotificationSubject":"Apprenticeships advancements","termsAndConditions":"Efficiency portage"}```

### Create
To create a Setting, make a POST like below using a body similar
to the example payload.

```
POST /api/settings
```

### Read
To request a specific Setting object, make a GET using the following
URL:

```
GET /api/settings/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/settings/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/settings/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for Setting:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    

To execute a scope query:

```
GET /api/settings?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/settings?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## Survey
   **/api/v2/surveys** OR **/api/surveys**

Example payload:
```
{"interventionGroup":"Dispassionately reprogrammed","isActive":false,"name":"Mary Gaylord","patientType":38030,"surveyType":"Forecasters incriminatory","totalQuestions":94820,"version":43084}```

### Create
To create a Survey, make a POST like below using a body similar
to the example payload.

```
POST /api/surveys
```

### Read
To request a specific Survey object, make a GET using the following
URL:

```
GET /api/surveys/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/surveys/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/surveys/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for Survey:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
create_copy  |  createCopyScope  |  creates copy of the provided survey    
active_surveys_by_type_patient  |  activeSurveysByTypePatientScope  |  get all active surveys by survey_type and patient_type    
get_sorted_surveys  |  getSortedSurveysScope  |  survey type, patient type, intervention group, version number    
delete_survey  |  deleteSurveyScope  |  deep delete survey with its questions and answers    
generate_csv_results  |  generateCsvResultsScope  |  export the csv results of a survey    

To execute a scope query:

```
GET /api/surveys?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/surveys?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## SurveyAnswer
   **/api/v2/survey_answers** OR **/api/survey_answers**

Example payload:
```
{"allowFreeForm":false,"freeFormDataType":"Needing irreconcilable","label":"Molecules pupae","sortOrder":61391,"surveyQuestionId":23623,"videoTargetNumber":26067,"weight":64486}```

### Create
To create a SurveyAnswer, make a POST like below using a body similar
to the example payload.

```
POST /api/survey_answers
```

### Read
To request a specific SurveyAnswer object, make a GET using the following
URL:

```
GET /api/survey_answers/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/survey_answers/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/survey_answers/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for SurveyAnswer:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
get_answers_by_question  |  getAnswersByQuestionScope  |  get all answers of a question    
delete_question_answer  |  deleteQuestionAnswerScope  |  delete answer for a question based on id    

To execute a scope query:

```
GET /api/survey_answers?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/survey_answers?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## SurveyQuestion
   **/api/v2/survey_questions** OR **/api/survey_questions**

Example payload:
```
{"didYouKnowText":"Pancaked Aisha","label":"Absolution sentencing","questionCategoryId":201,"questionCodeId":33732,"questionGroup":"Inappropriately costume","questionText":"Dulles hospitalize","questionTypeId":3807,"requiredAnswer":false,"sortOrder":90382,"surveyId":35970}```

### Create
To create a SurveyQuestion, make a POST like below using a body similar
to the example payload.

```
POST /api/survey_questions
```

### Read
To request a specific SurveyQuestion object, make a GET using the following
URL:

```
GET /api/survey_questions/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/survey_questions/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/survey_questions/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for SurveyQuestion:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
get_question_by_survey  |  getQuestionBySurveyScope  |  get all the questions for a survey    
delete_survey_question  |  deleteSurveyQuestionScope  |  delete survey question based on id    
get_question_by_question_code  |  getQuestionByQuestionCodeScope  |  get all question with the provided question code    

To execute a scope query:

```
GET /api/survey_questions?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/survey_questions?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## SurveyQuestionSkipLogic
   **/api/v2/survey_question_skip_logics** OR **/api/survey_question_skip_logics**

Example payload:
```
{"skipQuestionCodes":"Huntington marauders","surveyAnswerId":"Importer perceptiveness"}```

### Create
To create a SurveyQuestionSkipLogic, make a POST like below using a body similar
to the example payload.

```
POST /api/survey_question_skip_logics
```

### Read
To request a specific SurveyQuestionSkipLogic object, make a GET using the following
URL:

```
GET /api/survey_question_skip_logics/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/survey_question_skip_logics/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/survey_question_skip_logics/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for SurveyQuestionSkipLogic:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
get_skip_logic_by_answers  |  getSkipLogicByAnswersScope  |  get skip logic by survey_answer_id    

To execute a scope query:

```
GET /api/survey_question_skip_logics?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/survey_question_skip_logics?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## Topic
   **/api/v2/topics** OR **/api/topics**

Example payload:
```
{"name":"Rodger Kassulke"}```

### Create
To create a Topic, make a POST like below using a body similar
to the example payload.

```
POST /api/topics
```

### Read
To request a specific Topic object, make a GET using the following
URL:

```
GET /api/topics/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/topics/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/topics/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for Topic:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
sorted_by_name  |  sortedByNameScope  |  filter sorted by name    

To execute a scope query:

```
GET /api/topics?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/topics?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## Twilio
   **/api/v2/twilios** OR **/api/twilios**

Example payload:
```
{}```

### Create
To create a Twilio, make a POST like below using a body similar
to the example payload.

```
POST /api/twilios
```

### Read
To request a specific Twilio object, make a GET using the following
URL:

```
GET /api/twilios/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/twilios/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/twilios/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for Twilio:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    

To execute a scope query:

```
GET /api/twilios?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/twilios?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## User
   **/api/v2/users** OR **/api/users**

Example payload:
```
{"actualChildBirth":"2016-09-07","address":"Lithographic ammunition","cellPhone":"Counterattacks differentiation","city":"Interrogation combustibles","clinicianCodeId":99931,"clinicName":"Lessees biographers","consentAcceptedOn":"1996-05-17 09:29:29 +0000","contactCellPhone":"Tines recapitulations","contactEmail":"Tastiness noise","contactHomePhone":"Mathematically outstrips","contactName":"Alder knack","deactivatedOn":"1975-10-10 09:22:08 +0000","educationId":61537,"email":"divina.stokes83@vaccinesurvey.com","expectedChildBirth":"2015-08-16","firstName":"Frederic","hasContactUsers":false,"homePhone":"Intransitively workingman","interventionGroup":"Complications mortification","isDeactive":false,"lastName":"Will","parentRelationshipType":"Carrie provisioning","parentUserId":77689,"password":"password","passwordConfirmation":"password","passwordDigest":"Connoting unobjectionable","patientType":18288,"postalCode":"Unacceptability saintly","raceId":53521,"reasonForDeactivation":"Buggy launderer","resetPassword":true,"role":"Decommission orchestration","state":"Restauranteur Olive","updatedUserProfile":true,"vaccinationReminders":true,"xSessionId":"Kapok quench"}```

### Create
To create a User, make a POST like below using a body similar
to the example payload.

```
POST /api/users
```

### Read
To request a specific User object, make a GET using the following
URL:

```
GET /api/users/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/users/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/users/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for User:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
reset_password  |  resetPasswordScope  |  Resets the password and sends an email to the user     
consent_accepted  |  consentAcceptedScope  |  contact intervention user's consent accepted field is set.    
deactivate  |  deactivateScope  |  can also be set by admin    
myprofile  |  myprofileScope  |  Returns the logged in user profile    
get_my_contacts  |  getMyContactsScope  |  get contact users for current user    
get_patients_by_clinics  |  getPatientsByClinicsScope  |  get all patients optionally filter by clinic for admin    
get_healthcare_by_clinic  |  getHealthcareByClinicScope  |  get all the healthcare users with clinics names for admin    
patient_survey_export  |  patientSurveyExportScope  |  exports patients survey data     

To execute a scope query:

```
GET /api/users?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/users?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## UserAuditLogging
   **/api/v2/user_audit_loggings** OR **/api/user_audit_loggings**

Example payload:
```
{"ipAddress":"Pyromaniac establishments","loggedInAt":"1979-10-27 21:11:57 +0000","loggedOutAt":"2012-10-14 00:45:52 +0000","userAgent":"Philanthropies meant","userId":14480}```

### Create
To create a UserAuditLogging, make a POST like below using a body similar
to the example payload.

```
POST /api/user_audit_loggings
```

### Read
To request a specific UserAuditLogging object, make a GET using the following
URL:

```
GET /api/user_audit_loggings/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/user_audit_loggings/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/user_audit_loggings/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for UserAuditLogging:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
user_audit_export  |  userAuditExportScope  |  export user audit data according to created date    

To execute a scope query:

```
GET /api/user_audit_loggings?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/user_audit_loggings?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## UserSurvey
   **/api/v2/user_surveys** OR **/api/user_surveys**

Example payload:
```
{"completedAt":"Contempt wheelbarrow","completition":29785,"createdAt":"2001-08-20 23:49:26 +0000","currentuseranswers":[1,2,3],"firstQuestion":{"one":1,"two":2,"three":3},"firstQuestionId":38626,"firstReminder":false,"isComplete":true,"matchedVideos":[1,2,3],"maternalVideoComplete":false,"maternalVideoNumber":"Homogenization confrontational","maternalVideoPosition":88441.13133342958,"pediatricVideoComplete":false,"pediatricVideoNumber":"Gorgas joblessness","pediatricVideoPosition":16692.042866416785,"questionCount":17500,"secondReminder":true,"surveyId":98688,"userId":28936,"videoSourceVersion":"Desensitization unexplained"}```

### Create
To create a UserSurvey, make a POST like below using a body similar
to the example payload.

```
POST /api/user_surveys
```

### Read
To request a specific UserSurvey object, make a GET using the following
URL:

```
GET /api/user_surveys/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/user_surveys/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/user_surveys/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for UserSurvey:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
get_patients_survey  |  getPatientsSurveyScope  |  return not completed survey    
getfirstquestion  |  getfirstquestionScope  |  Gets the first question    
compelete_survey  |  compeleteSurveyScope  |  used to set the complete survey property    
get_video_survey  |  getVideoSurveyScope  |  get video survey for the user    
check_survey_exists  |  checkSurveyExistsScope  |  check if survey with the provided survey_id exists    
check_survey_count  |  checkSurveyCountScope  |  check if survey with the provided survey_id exists    
generate_csv_results  |  generateCsvResultsScope  |  Generates a csv file with all the survey results    

To execute a scope query:

```
GET /api/user_surveys?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/user_surveys?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## UserSurveyAnswer
   **/api/v2/user_survey_answers** OR **/api/user_survey_answers**

Example payload:
```
{"appliedSkipLogicId":66638,"freeFormResponse":"Vomit floundering","nextquestion":{"one":1,"two":2,"three":3},"previousquestion":{"one":1,"two":2,"three":3},"questionCodeId":82918,"questionGroup":"Adhered desolately","questionOrder":22584,"skipped":true,"surveyAnswerId":74655,"surveyQuestionId":41802,"userSurveyId":9894}```

### Create
To create a UserSurveyAnswer, make a POST like below using a body similar
to the example payload.

```
POST /api/user_survey_answers
```

### Read
To request a specific UserSurveyAnswer object, make a GET using the following
URL:

```
GET /api/user_survey_answers/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/user_survey_answers/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/user_survey_answers/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for UserSurveyAnswer:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
previousquestion  |  previousquestionScope  |  previousquestion    

To execute a scope query:

```
GET /api/user_survey_answers?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/user_survey_answers?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## UserSurveyVideo
   **/api/v2/user_survey_videos** OR **/api/user_survey_videos**

Example payload:
```
{"isComplete":true,"sortOrder":74305,"userSurveyId":30676,"videoNumber":70873,"videoPosition":78892.82006518796,"videoSourceVersion":"Infer dislocate","videoType":"Bellybutton inexpressible"}```

### Create
To create a UserSurveyVideo, make a POST like below using a body similar
to the example payload.

```
POST /api/user_survey_videos
```

### Read
To request a specific UserSurveyVideo object, make a GET using the following
URL:

```
GET /api/user_survey_videos/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/user_survey_videos/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/user_survey_videos/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for UserSurveyVideo:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
get_videos_for_user_survey_id  |  getVideosForUserSurveyIdScope  |  return videos for the user_survey_id    
get_video_by_id  |  getVideoByIdScope  |  get the video by id    

To execute a scope query:

```
GET /api/user_survey_videos?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/user_survey_videos?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## VaccinationReminder
   **/api/v2/vaccination_reminders** OR **/api/vaccination_reminders**

Example payload:
```
{"messageText":"Enacts anthropologists","triggerDaysFromDob":97434}```

### Create
To create a VaccinationReminder, make a POST like below using a body similar
to the example payload.

```
POST /api/vaccination_reminders
```

### Read
To request a specific VaccinationReminder object, make a GET using the following
URL:

```
GET /api/vaccination_reminders/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/vaccination_reminders/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/vaccination_reminders/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for VaccinationReminder:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
sorted_by_trigger_days  |  sortedByTriggerDaysScope  |  filter sorted by trigger days    
send_vaccination_reminders  |  sendVaccinationRemindersScope  |  send vaccination reminders to user according to the dob    

To execute a scope query:

```
GET /api/vaccination_reminders?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/vaccination_reminders?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## Video
   **/api/v2/videos** OR **/api/videos**

Example payload:
```
{"desc":"Sombreros asphyxia","isActive":true,"keywords":"Macerating panicky","length":79956.80365366589,"questionGroup":"Franco Villarreal","sortOrder":43349,"sourceVersion":"Workingmen circumnavigates","targetNumber":69626,"title":"Detective nonpayment","topicId":64376,"videoUrl":"Dogged superstitious"}```

### Create
To create a Video, make a POST like below using a body similar
to the example payload.

```
POST /api/videos
```

### Read
To request a specific Video object, make a GET using the following
URL:

```
GET /api/videos/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/videos/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/videos/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for Video:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
search_video_scoped_by_race_edu  |  searchVideoScopedByRaceEduScope  |  search by title, desc or keywords    
search_video_by_keyword  |  searchVideoByKeywordScope  |  search video and log the search    
sorted_by_name  |  sortedByNameScope  |  sort videos by name    
video_gallery  |  videoGalleryScope  |  return a list of videos based on userSurvey.video_source_version    

To execute a scope query:

```
GET /api/videos?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/videos?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.

## VideoAuditLogging
   **/api/v2/video_audit_loggings** OR **/api/video_audit_loggings**

Example payload:
```
{"createdAt":"2000-11-26 10:30:14 +0000","duration":29455.589321061107,"userId":85926,"videoId":95505,"watchedEntireVideo":false}```

### Create
To create a VideoAuditLogging, make a POST like below using a body similar
to the example payload.

```
POST /api/video_audit_loggings
```

### Read
To request a specific VideoAuditLogging object, make a GET using the following
URL:

```
GET /api/video_audit_loggings/<id>
```

Replace "id" with the id value for the object.

The read route also supports scopes, both custom and default. To learn more about
executing scopes see the section below.

### Update
To update an object, make PUT or POST to the following URL:

```
PUT or POST /api/video_audit_loggings/<id>
```

Replace "id" with the id value for the object.
The body of the call should contain the new values.

### Destroy
To destroy an object, make a DELETE to the following URL:

```
DELETE /api/video_audit_loggings/<id>
```

Replace "id" with the id value for the object.

### Scopes

Available scopes for VideoAuditLogging:

Name | Javascript Name | Description
-----|-----------------|--------------
all  |  allScope  |  Returns all instances    
exact_match  |  exactMatchScope  |  Returns all instances that match the provided fields exactly    
count  |  countScope  |  Counts all instances    
count_exact_match  |  countExactMatchScope  |  Counts all instances that match the provided fields exactly    
export_video_log  |  exportVideoLogScope  |  this exports video audit from/after a provided date    
by_video_and_user_id  |  byVideoAndUserIdScope  |  find video audit log by video id and user id     

To execute a scope query:

```
GET /api/video_audit_loggings?scope=<scope_name>
```

Replace "scope_name" with the value in the name column in the above table. Some scopes
may require additional query parameters, for example:

```
GET /api/video_audit_loggings?scope=custom&query[first_name]=bob
```

Use query[field] pattern to send a value to the scope operation.


## <a name="push-notifications"></a> Push Notifications
## Subscribe
**Does NOT require authentication**

The supplied token (device identifier) will be subscribed to the provided channel
belonging to either the supplied appName or the default application. If the channel
does not exist it will be created using the supplied channelName. If the device
does not exist it will also be created using the supplied token, provider and name.

#### POST /api/push_notifications/channel/subscribe
```
{
  channelName: 'News',
  appName: 'someApp',
  token: 'Test',
  provider: 'APPLE',
  name: "Frank's iPhone"
}
```

#### RESPONSE
```
{
  "channels": [
    {
      "name": "News",
      "app": "569938c1df324340867cfa29",
      "compositeName": "News569938c1df324340867cfa29",
      "id": "56a123121d1032a75980fa92"
    }
  ],
  "app": "569938c1df324340867cfa29",
  "identifier": "Test",
  "name": "Frank's iPhone",
  "provider": "APPLE",
  "compositeIdentifier": "Test569938c1df324340867cfa29",
  "id": "56a151fb9af0741278fe0782"
}
```

**channelName** should be an existing channel or a channel you wish to be created.

**appName** *optional* should contain the name of the app you're dealing with. If it is not supplied the default application will be used.

**token** is the identifier token provided by APN or GCM.

**provider** *optional* is either 'APPLE' or 'GOOGLE'. Only needs to be provided if you expect the device to not exist and needs to be created. The value will be the new device's provider.

**name** *optional* Can be a string identifier for the device for friendlier display to users. Only needs to be provided if you expect the device to not exist and needs to be created.

The successful response will contain the device as well as any channels it's subscribed to, including the newly subscribed channel.

### Subscribe in custom code

You can also execute the subscribe method directly in your custom code. For example:

```
/*
 * The parameters for subscribe in order are:
 * token : Identifier provided by APN or GCM.
 * provider : 'APPLE' or 'GOOGLE'.
 * name : A nickname for the device.
 * appId : The push application.
 * channelName : The channel belonging to appId's app.
 * cb : function
 */
this.push.subscribe("abc123", "APPLE", "Example's iPhone", "569938c1df324340867cfa29", "Alerts", function(err, result) {
  // "result" will be the device and it's associated channels.
});
```

The behavior is the same as using the API endpoint. If a channel does not exist, it will be created. If the device does not exist it, will be created
using the provider, name and token.

## Unsubscribe
**Does NOT require authentication**

Removes the supplied device token from the channel. If the device is not subscribed to the provided channel an error is returned.

#### POST /api/push_notifications/channel/unsubscribe
```
{
  channelName: 'News',
  appName: 'someApp',
  token: 'Test'
}
```

#### RESPONSE
```
{
  "channels": [ ],
  "app": "569938c1df324340867cfa29",
  "identifier": "Test",
  "name": "Frank's iPhone",
  "provider": "APPLE",
  "compositeIdentifier": "Test569938c1df324340867cfa29",
  "id": "56a151fb9af0741278fe0782"
}
```

**channelName** should be an existing channel.

**appName** *optional* should contain the name of the app you're dealing with. If it is not supplied the default application will be used.

**token** is the identifier token provided by APN or GCM.

Like subscribe, the successful response will contain the device as well as any channels it's subscribed to. The unsubscribed channel will no longer be in the channels list.

###Unsubscribe in custom code

You can also execute the unsubscribe method directly in your custom code. For example:

```
/*
 * The parameters for unsubscribe in order are:
 * token : Identifier provided by APN or GCM.
 * channelName : name of the channel to unsubscribe from.
 * appId : Id of the application the channel belongs to.
 */
this.push.unsubscribe('abc123', 'channelName', 'appId', function(err, result) {
  // "result" will be the device and it's associated channels.
});
```

## Device's Channels
**Does NOT require authentication**

#### GET /api/push_notifications/device/:token/channels

#### RESPONSE
```
[       
  {       
    "app": {
      "name": "PusheNotifications",
      "id": "569938c1df324340867cfa29"
    },
    "name": "Alerts",      
    "compositeName": "Alerts56bbc0111dbcbc3d89bcfa76",       
    "id": "56bbc0221dbcbc3d89bcfa77"     
  },     
  {     
    "app": {
      "name": "PusheNotifications",
      "id": "569938c1df324340867cfa29"
    },
    "name": "Messages",       
    "compositeName": "Messages56bbc0111dbcbc3d89bcfa76",     
    "id": "56bcb8f3c1834efb189473e1"
  } 
]
```

**token** This is the token supplied by either GCM or APN.

## Push Notification
**Does NOT require authentication**

Sends a message to the supplied channel's devices. Includes both Google and Apple devices.

#### POST /api/push_notifications/message
```
{
  channelName: "myChannel",
  appName: "someApp",
  appleAlert: "\uD83D\uDCE7 Updates Available!",
  appleBadge:  1,
  appleSound: "ping.aiff",
  appleExpiry: 60,
  appleContentAvailable:  0,
  googleCollapseKey: "Updates Available",
  googleDelayWhileIdle: true,
  googleTimeToLive: 60
  payload: "You've received a new message!"
}
```

**channelName**  should be an existing channel.

**appName** *optional* should contain the name of the app the channel belongs to. If it is not supplied the default application will be used.

**appleAlert** The text to display in the alert. Apple only. Defaults to "You have a new notification!".

**appleBadge** *optional* Number to display on the app's badge icon. Apple only. Defaults to 1.

**appleSound** *optional* The sound file to play on the device when receiving the notification. The file should exist within your application's bundle or in the Library/Sounds folder. Apple only. Defaults to "ping.aiff".

**appleExpiry** Minutes. Time when the push notification is no longer relevant and can be discarded regardless if it has been delivered. Apple only. Defaults to 60.

**appleContentAvailable** *optional* 1 indicates that the application has content available. Apple only. Defaults to 0 - no content available.

**googleCollapseKey** *optional* Identifies a group of messages that can be collapsed to display only the most recent notification. Google only.

**googleDelayWhileIdle** *optional* Indicates whether the message should be delayed until the device is active. Google only. Default is false.

**googleTimeToLive** *optional* This parameter specifies how long (in minutes) the message should be kept in GCM storage if the device is offline. Google only. Default is 4 weeks.

**payload** *required* Content of the alert.

### Push Notification in custom code

You can also use the push API to send a message object to an application's channel in your custom code. To do so, first create a new message object:

```
Message.create({channel: 'channel_id', payload: 'the message'}).exec(function(err, result) {
  // Handle any validation errors that may occur
  // result is your persisted message.
})
```

Once you have your message object you can use it to send message to a channel using the push API:

```
// 'result' is the result of the create callback from above - the message object.
// Replace channelName with the appropriate channel name and appId with a push application's id.
this.push.sendMessage(result, 'channelName', 'appId', function() {
  // the callback is executed when messages are sending.
})
```

  
## <a name="file-uploads"></a> File Uploads
## <a name=“file-uploads”></a> File Uploads


Models may contain file fields. Generated APIs provides a set of operations to enable CRUD file operations.


## Creating a resource that contains a file field

Suppose we have a Candidate model with three fields:

+ name
+ lastName
+ resume

Name and lastName are Strings, and resume is expected to be an attached file (In example: a PDF or DOC). We could execute following command to create a model instance:

#### POST http://localhost:1337/api/v1/employees
```
{
"lastname": "John",
"name": "Dow",
"resume": "@file.png"
}
```

#### RESPONSE
```
{
"lastname": "BBBB",
"name": " POPO",
"resume": "/api/employees/files/26f273e8-a44d-499b-b5fa-1bc6cef7ef3c.png",
"id": "56cfe170f67da8143f9023fe"
}
```

!Important: POST request MUST BE of type multipart/form-data

File fields wont return the file contents embedded in the model representation but an outbound link to resource. The last part of the URI is the file name.


## Updating / Patching a resource that contains a file field

A resource with files can be patched / updated through the API.

#### PUT http://localhost:1337/api/v1/employees/56cfe170f67da8143f9023fe
```
{
"lastname": "Doe",
"name": " John"
}
```

#### RESPONSE 204


So in this case, resource with id 56cfe170f67da8143f9023fe will be updated with provided values.

## Updating / Patching just model files

Suppose we have an existing employee like this:

```
{
"lastname": "Doe",
"name": " John",
"resume": "/api/employees/files/babce698-6069-4ed7-a821-09489fefe213.png",
"id": "56d8f4e8d4bbbf7d3f9e0224"
}
```

If you'd like to remove the resume from a candidate simply send an empty string in the request for that field:

#### PUT http://localhost:1337/api/v1/employees/56cfe170f67da8143f9023fe
```
{
"lastname": "Doe",
"name": " John",
"resume": "",
}
```

Executing request above, resume file will be removed from storage, and model will be updated setting resume file url field to null. So a get request over that model instance will return:

#### RESPONSE
{
"lastname": "Doe",
"name": " John",
"resume": null,
"id": "56d8f4e8d4bbbf7d3f9e0224"
}

The API will automatically delete files associated with a model when it is destroyed.

```
#### DELETE http://localhost:1337/api/v1/employees/56cfe170f67da8143f9023fe
```

#### RESPONSE 204
  

  ## <a name="programmatic-crud-and-query-scope-calls"></a> Programmatic CRUD and Query Scope Calls
### Create

If you want to create a ClinicianBlockRandomizer in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2ClinicianBlockRandomizer.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a ClinicianBlockRandomizer in your custom code:

```javascript
V2ClinicianBlockRandomizer.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a ClinicianBlockRandomizer in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2ClinicianBlockRandomizer.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a ClinicianBlockRandomizer in your custom code:

```javascript
V2ClinicianBlockRandomizer.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a ClinicianCode in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2ClinicianCode.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a ClinicianCode in your custom code:

```javascript
V2ClinicianCode.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a ClinicianCode in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2ClinicianCode.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a ClinicianCode in your custom code:

```javascript
V2ClinicianCode.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a Education in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2Education.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a Education in your custom code:

```javascript
V2Education.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a Education in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2Education.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a Education in your custom code:

```javascript
V2Education.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a HealthcareProviderContent in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2HealthcareProviderContent.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a HealthcareProviderContent in your custom code:

```javascript
V2HealthcareProviderContent.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a HealthcareProviderContent in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2HealthcareProviderContent.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a HealthcareProviderContent in your custom code:

```javascript
V2HealthcareProviderContent.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a JobAuditLogging in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2JobAuditLogging.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a JobAuditLogging in your custom code:

```javascript
V2JobAuditLogging.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a JobAuditLogging in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2JobAuditLogging.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a JobAuditLogging in your custom code:

```javascript
V2JobAuditLogging.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a QuestionCategory in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2QuestionCategory.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a QuestionCategory in your custom code:

```javascript
V2QuestionCategory.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a QuestionCategory in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2QuestionCategory.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a QuestionCategory in your custom code:

```javascript
V2QuestionCategory.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a QuestionCode in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2QuestionCode.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a QuestionCode in your custom code:

```javascript
V2QuestionCode.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a QuestionCode in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2QuestionCode.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a QuestionCode in your custom code:

```javascript
V2QuestionCode.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a QuestionType in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2QuestionType.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a QuestionType in your custom code:

```javascript
V2QuestionType.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a QuestionType in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2QuestionType.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a QuestionType in your custom code:

```javascript
V2QuestionType.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a Race in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2Race.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a Race in your custom code:

```javascript
V2Race.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a Race in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2Race.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a Race in your custom code:

```javascript
V2Race.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a SearchAuditLogging in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2SearchAuditLogging.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a SearchAuditLogging in your custom code:

```javascript
V2SearchAuditLogging.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a SearchAuditLogging in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2SearchAuditLogging.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a SearchAuditLogging in your custom code:

```javascript
V2SearchAuditLogging.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a SendGrid in your custom code:

```javascript
/* First parameter is the name of the action you'd like to execute.
 * params are additional URL parameters that you'd like to send with the outgoing request.
 * values should be an object containing the fields for the new object.
 * context is the request context used for interpolating values within the call, this is
 *  always req.context
 * The last parameter is an error first callback function.
 */
V2SendGrid.request('create', params, values, req.context, function(err, result) {
  if (err) {
    // Handle error
  } else {
    // result is the created object
  }
});
```

### Read

If you want to find a SendGrid in your custom code:

```javascript
/* First parameter is the name of the action you'd like to execute.
 * params are additional URL parameters that you'd like to send with the outgoing request.
 * values should be an object containing the fields for the new object - not used in read calls.
 * context is the request context used for interpolating values within the call, this is
 *  always req.context
 * The last param is an error first callback function.
 */
var params = { limit: 10 };
V2SendGrid.request('read', params, values, req.context, function(err, result) {
  if (err) {
    // Handle error
  } else {
    // result is the found object
  }
});
```

### Update

If you want to update a SendGrid in your custom code:

```javascript
/* First parameter is the name of the action you'd like to execute.
 * params are additional URL parameters that you'd like to send with the outgoing request.
 * values should be an object containing the fields to be updated.
 * context is the request context used for interpolating values within the call, this is
 *  always req.context
 * The last param is an error first callback function.
 */
V2SendGrid.request('update', params, values, req.context, function(err, result) {
  if (err) {
    // Handle error
  } else {
    // result is the updated object
  }
});
```

### Destroy

If you want to destroy a SendGrid in your custom code:

```javascript
/* First parameter is the name of the action you'd like to execute.
 * params are additional URL parameters that you'd like to send with the outgoing request.
 * values should be an object containing the fields for the new object - not used in delete calls.
 * context is the request context used for interpolating values within the call, this is
 *  always req.context
 * The last param is an error first callback function.
 */
V2SendGrid.request('delete', params, values, req.context, function(err) {
  if (err) {
    // Handle error
  }
});
```### Create

If you want to create a Setting in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2Setting.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a Setting in your custom code:

```javascript
V2Setting.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a Setting in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2Setting.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a Setting in your custom code:

```javascript
V2Setting.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a Survey in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2Survey.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a Survey in your custom code:

```javascript
V2Survey.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a Survey in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2Survey.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a Survey in your custom code:

```javascript
V2Survey.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a SurveyAnswer in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2SurveyAnswer.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a SurveyAnswer in your custom code:

```javascript
V2SurveyAnswer.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a SurveyAnswer in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2SurveyAnswer.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a SurveyAnswer in your custom code:

```javascript
V2SurveyAnswer.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a SurveyQuestion in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2SurveyQuestion.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a SurveyQuestion in your custom code:

```javascript
V2SurveyQuestion.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a SurveyQuestion in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2SurveyQuestion.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a SurveyQuestion in your custom code:

```javascript
V2SurveyQuestion.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a SurveyQuestionSkipLogic in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2SurveyQuestionSkipLogic.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a SurveyQuestionSkipLogic in your custom code:

```javascript
V2SurveyQuestionSkipLogic.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a SurveyQuestionSkipLogic in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2SurveyQuestionSkipLogic.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a SurveyQuestionSkipLogic in your custom code:

```javascript
V2SurveyQuestionSkipLogic.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a Topic in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2Topic.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a Topic in your custom code:

```javascript
V2Topic.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a Topic in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2Topic.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a Topic in your custom code:

```javascript
V2Topic.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a Twilio in your custom code:

```javascript
/* First parameter is the name of the action you'd like to execute.
 * params are additional URL parameters that you'd like to send with the outgoing request.
 * values should be an object containing the fields for the new object.
 * context is the request context used for interpolating values within the call, this is
 *  always req.context
 * The last parameter is an error first callback function.
 */
V2Twilio.request('create', params, values, req.context, function(err, result) {
  if (err) {
    // Handle error
  } else {
    // result is the created object
  }
});
```

### Read

If you want to find a Twilio in your custom code:

```javascript
/* First parameter is the name of the action you'd like to execute.
 * params are additional URL parameters that you'd like to send with the outgoing request.
 * values should be an object containing the fields for the new object - not used in read calls.
 * context is the request context used for interpolating values within the call, this is
 *  always req.context
 * The last param is an error first callback function.
 */
var params = { limit: 10 };
V2Twilio.request('read', params, values, req.context, function(err, result) {
  if (err) {
    // Handle error
  } else {
    // result is the found object
  }
});
```

### Update

If you want to update a Twilio in your custom code:

```javascript
/* First parameter is the name of the action you'd like to execute.
 * params are additional URL parameters that you'd like to send with the outgoing request.
 * values should be an object containing the fields to be updated.
 * context is the request context used for interpolating values within the call, this is
 *  always req.context
 * The last param is an error first callback function.
 */
V2Twilio.request('update', params, values, req.context, function(err, result) {
  if (err) {
    // Handle error
  } else {
    // result is the updated object
  }
});
```

### Destroy

If you want to destroy a Twilio in your custom code:

```javascript
/* First parameter is the name of the action you'd like to execute.
 * params are additional URL parameters that you'd like to send with the outgoing request.
 * values should be an object containing the fields for the new object - not used in delete calls.
 * context is the request context used for interpolating values within the call, this is
 *  always req.context
 * The last param is an error first callback function.
 */
V2Twilio.request('delete', params, values, req.context, function(err) {
  if (err) {
    // Handle error
  }
});
```### Create

If you want to create a User in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2User.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a User in your custom code:

```javascript
V2User.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a User in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2User.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a User in your custom code:

```javascript
V2User.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a UserAuditLogging in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2UserAuditLogging.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a UserAuditLogging in your custom code:

```javascript
V2UserAuditLogging.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a UserAuditLogging in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2UserAuditLogging.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a UserAuditLogging in your custom code:

```javascript
V2UserAuditLogging.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a UserSurvey in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2UserSurvey.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a UserSurvey in your custom code:

```javascript
V2UserSurvey.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a UserSurvey in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2UserSurvey.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a UserSurvey in your custom code:

```javascript
V2UserSurvey.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a UserSurveyAnswer in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2UserSurveyAnswer.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a UserSurveyAnswer in your custom code:

```javascript
V2UserSurveyAnswer.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a UserSurveyAnswer in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2UserSurveyAnswer.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a UserSurveyAnswer in your custom code:

```javascript
V2UserSurveyAnswer.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a UserSurveyVideo in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2UserSurveyVideo.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a UserSurveyVideo in your custom code:

```javascript
V2UserSurveyVideo.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a UserSurveyVideo in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2UserSurveyVideo.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a UserSurveyVideo in your custom code:

```javascript
V2UserSurveyVideo.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a VaccinationReminder in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2VaccinationReminder.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a VaccinationReminder in your custom code:

```javascript
V2VaccinationReminder.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a VaccinationReminder in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2VaccinationReminder.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a VaccinationReminder in your custom code:

```javascript
V2VaccinationReminder.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a Video in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2Video.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a Video in your custom code:

```javascript
V2Video.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a Video in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2Video.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a Video in your custom code:

```javascript
V2Video.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```### Create

If you want to create a VideoAuditLogging in your custom code:

```javascript
// Pass the create method an object containing the model attributes
V2VideoAuditLogging.create(<values>)
  .then(function(result) {
    // result is the object created.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Read

If you want to find a VideoAuditLogging in your custom code:

```javascript
V2VideoAuditLogging.findOne({id: <id>})
  .then(function(result) {
    // result is the object found.
  })
  .catch(function(err) {
    // Handle any error that may occur
  });
```

### Update

If you want to update a VideoAuditLogging in your custom code:

```javascript
// params is the "where" portion of the update
var params = {id: 1};
V2VideoAuditLogging.update(params, <values>)
  .then(function(result) {
    // result is the updated object.
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```

### Destroy

If you want to destroy a VideoAuditLogging in your custom code:

```javascript
V2VideoAuditLogging.destroy(id)
  .then(function() {
    // success
  })
  .catch(function(err) {
    // Handle any error that may occur
  })
```
## <a name="roles"></a> Roles

* unauthenticated  
* authenticated_without_role  
* patient  
* health_care_provider  
* administrator  

## <a name="api-versions"></a>API Versions

* Version 2 at /api/v2 OR /api  
* Version 1 at /api/v1   

## <a name="storage-interfaces"></a> Storage Interfaces
* AnyPresence Storage (Local)  
* SendGrid (Http)  
* TwilioAPI (Http)  
* Encrypted Mysql (Mysql)  
