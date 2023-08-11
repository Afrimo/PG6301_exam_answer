# PGR6301 - Exam 2023.

### Instructions
* running code: - _npm run dev_
* building code: - _npm run build_
* running test code: - _npm run test_
* collecting test coverage: - _npm run verify_

### Tasks. - Completed & failed
* R1
* [x] Homepage with React
* [x] 2 React pages with React-Router
* [x] navigate back button
* [x] State with a trigger

* R2
* [x] RESTful API that handles GET & POST
* [ ] RESTful API that handles PUT & DELETE
* [x] Frontend uses fetch
* [ ] Github Actions failed

* R3 - [Failed]
* R4 - [Failed]
* R5 - [Failed]

####
* T1
* [x] Display activities from backend
* [x] Display number of logged hours
* [x] Log hours on tasks
* [x] Store the updated number of hours in MongoDB
* [x] basic test data from developer mode

* T2 - [Failed] 
* T3 - [Failed]
* T4 - [Failed]
* T5 - [Failed]

### API Endpoints
#### taskApi.js
* GET /api/tasks - _Retrieves all the tasks_
* POST /api/tasks/update-hours - _Updates the hours for a specific task._
#### server.js
* GET /api/unknown -  _Used to test handling unknown routes._
#### LoggingFunction.jsx
* POST /api/tasks/update-hours - _used to update the hours for a specific task_
#### TaskList.jsx
* GET /api/tasks - _used to retrieve the list of all tasks to display in the task list_


### Assumptions
The exam task that was handed out was challenging, especially when it comes to testing, as well as all the requirements above R1 and T1. 
I believe i fully completed R1 and T1, and a few of the other points in some other requirements. 
However, relatively feq requirements were accomplished holistically, but enough to achieve some of the required functionality.
I was able to let the user send and retrieve data to the backend. Users can logg hours on given tasks and even remove hours.
The add/remove hours functionality is also limited. A user can not add more than 40 hours, but can not go under 0 hours.


### Github
https://github.com/Afrimo/PG6301_exam_answer.git