DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,      
  firstName VARCHAR(30),       
  lastName VARCHAR(30),  
  email VARCHAR(30) NOT NULL,
  username VARCHAR(30) NOT NULL,        
  height INT NOT NULL,         
  footsize INT NOT NULL        
);
