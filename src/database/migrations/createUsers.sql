CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  surname VARCHAR(30) NOT NULL,
  email VARCHAR(300) NOT NULL,
  password VARCHAR(60) NOT NULL
);
