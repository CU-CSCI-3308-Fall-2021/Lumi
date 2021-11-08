DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(40),
    lastName VARCHAR(40),
    email VARCHAR(40),
    password VARCHAR(40),
    level INT,
    snowboardsize INT,
    shoeSize DECIMAL,
    skier INT,
    snowboarder INT
);

INSERT INTO users(firstName, lastName, email, password, level, snowboardsize, shoeSize, skier, snowboarder)
VALUES('Rayner', 'Susanto', 'Rayner.Susanto@colorado.edu', '1234', 1, 190, 6.5, 1, 0),
('Thor', 'Breece', 'Thor.Breece@colorado.edu', '6789', 3, 210, 8.5, 1, 0);
