CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  description VARCHAR(300),
  quantity INT NOT NULL,
  price INT NOT NULL
);
