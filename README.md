WELCOME TO FLIGHTS SERVICE

Project Setup

 * clone the project on your local
 * Execute npm install on the same path as of your root directory of the downloaded project
 * Create a .env file in the root directory and add the following environment varaibles-
      1. `PORT=3000`
 * Inside the src/config folder create a new config.json file and add the following piece of json-
 ```
 {
  "development": {
    "username": <your_sql_local_name_>,
    "password": <your_sql_password>,
    "database": "FlightSearchServiceDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 * Once you've added your db config as listed above,go to the src folder from your terminal and execute the `npx sequelize db:create`
 and then execute 
 `npx sequelize dbb:migrate`.

 ```
 ##DB Design
 -Airplane Table
 -City Table
 -Flights Table
 -Airport Table

 -A flight belongs to an airplane but an airplane can be used for multiple flights
 -A city has many airport but one airport belongs to a city only
 -One airport can  have many flights,but a flight belongs to one airport


##Tables

###City->id, name,created_at,updated_at
###Airport-> id, name,address,city_id,created_at,updated_at
 Relationship-> City has many airports and Airport belongs to a city(one to many)