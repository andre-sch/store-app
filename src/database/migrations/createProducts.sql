CREATE TABLE IF NOT EXISTS Products (
  id UUID PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  description VARCHAR(300),
  quantity INT NOT NULL,
  price INT NOT NULL
);
