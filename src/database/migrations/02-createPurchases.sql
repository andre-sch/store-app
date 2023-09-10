CREATE TABLE IF NOT EXISTS purchases (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  product_id UUID REFERENCES products,
  shipping_address VARCHAR(300) NOT NULL,
	payment VARCHAR(30) NOT NULL,
  quantity INT NOT NULL
);
