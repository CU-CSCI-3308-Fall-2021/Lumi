DROP TABLE IF EXISTS user_accounts CASCADE;
CREATE TABLE IF NOT EXISTS user_accounts(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL, 
    userName VARCHAR(50) NOT NULL,
    dateOfBirth DATE,             
    email VARCHAR(50),            
    password VARCHAR(50),      
    LEVEL SMALLINT,      
    bodyWeight INT,    
    shoeSize DECIMAL(2,3)
);
