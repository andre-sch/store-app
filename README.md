# Store app

> Built with NodeJS, Typescript and Postgres

Simple Rest API that manages the relationship between Users, Products and Purchases.   
The goal of this project is to learn more about CRUDs and RDBMS.

## :pushpin: Features

- User management
- Product management
- Product purchase
- Purchase history

## :toolbox: Setup

### Prerequisites

- Download [`git`](https://git-scm.com/downloads)
  | [`Node.js`](https://nodejs.org/en/download)
  | [`PostgreSQL`](https://www.postgresql.org/download/)
- Setup a PostgreSQL database with [`psql`](https://www.w3schools.com/postgresql/postgresql_getstarted.php)
  or [`pgAdmin4`](https://www.w3schools.com/postgresql/postgresql_pgadmin4.php)

### Installation

- Clone repository

```sh
git clone git@github.com:andre-sch/store_app.git
```

- Install packages

```sh
npm install
```

### Environment Variables

- Create `.env` file in project root
- Fill in the node-postgres [`connection config`](https://node-postgres.com/features/connecting).

```env
PGUSER = "USER_VALUE"
PGPASSWORD = "PASSWORD_VALUE"
PGDATABASE = "DATABASE_VALUE"
PGHOST = "HOST_VALUE"
PGPORT = "PORT_VALUE"
```

### Run Locally

```sh
npm run dev
```
