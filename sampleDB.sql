DROP TABLE hikes;

CREATE TABLE hikes (
    hikeID int PRIMARY KEY,
    name varchar(255),
    length float,
    elevationGain float,
);

INSERT INTO hikes VALUES 
(1, 'Gothic Basin', 12, 2800),
(2, 'Oyster Dome', 8, 2000);

SELECT k.*
FROM hikes as k
GO