## **NODE API Example using OpenWeatherMap**

---

### Video Overview

- WIP

---

### backend folder:

#### To run: - could write script to setup and run back and front

### change to backend directory

```shell
cd NODEAPI/backend
```

### install packages

```shell
npm install
```

### Get free API Key from https://openweathermap.org/

### modify .env.example to be just .env

```shell
sudo mv .env.example .env
```

### add api key

```shell
sudo nano .env
```

### start backend

```shell
npm start
```

### optional: start in developer mode which restarts server on file save

```shell
npm start dev
```

#### Structure app.js->route.js->controller.js->service.js->db.js <br/>

Contrived file names to make it easy to follow<br/>
Note these could be folders of same name in actual app with multiple files<br/>
Great blog post on express api structure below<br/>
https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way

#### Files:

app.js - run backend server<br/>
route.js - direct endpoint calls to controller<br/>
controller.js - strip out request data -> validate it -> call service<br/>
service.js - business logic (maybe better to validate here) -> shape data -> call db<br/>
db.js - calls to backend storage (database.json) and OpenWeatherMap API - change to any backend storage<br/>

GET <br/>
http://localhost:5000/weather/43.85862094380924/-70.37649712393015<br/>

POST <br/>
http://localhost:5000/weather/ <br/>

body<br/>

```javascript
    {
        "AnyProp":"AnyValue",
        "AnyOtherProp":"AnyOtherValue"
    }
```

---

### frontend folder: React

#### react pros please fix my hook logic if necessary

<br/>
#### To run:

### change to frontend directory

```shell
cd frontend
```

### install packages

```shell
npm install
```

### run frontend

```shell
npm start
```

### TODO

- break out Weather.js into multiple components
  - GetCoords
  - ChooseUnits
  - DisplayWeather
  - PostToDB
