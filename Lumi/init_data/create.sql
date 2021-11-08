DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(40),
    lastName VARCHAR(40),
    email VARCHAR(40),
    password VARCHAR(40)
);

INSERT INTO users(firstName, lastName, email, password)
VALUES('Rayner', 'Susanto', 'Rayner.Susanto@colorado.edu', '12345'),
('Thor', 'Breece', 'Thor.Breece@colorado.edu', '6789');
