DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(40),
    lastName VARCHAR(40),
    email VARCHAR(40),
    password VARCHAR(40),
    yearExp INT,
    dayExp INT,
    height INT,
    weight INT,
    shoeSize DECIMAL,
    skier INT,
    snowboarder INT
);

INSERT INTO users(firstName, lastName, email, password, yearExp, dayExp, height, weight, shoeSize, skier, snowboarder)
VALUES('Rayner', 'Susanto', 'Rayner.Susanto@colorado.edu', '1234', 3, 20, 170, 180, 9.5, 1, 0),
('Thor', 'Breece', 'Thor.Breece@colorado.edu', '6789');
