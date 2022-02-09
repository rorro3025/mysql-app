use store;
CREATE TABLE IF NOT EXISTS products (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name varchar(40) NOT NULL,
  price decimal NOT NULL,
  description varchar(300) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);