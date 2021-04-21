DROP TABLE hikes;

CREATE TABLE hikes (
    hikeID int PRIMARY KEY,
    name varchar(255),
    length float,
    elevationGain float,
);

INSERT INTO hikes VALUES 
(1, 'Gothic Basin', 12, 2800),
(2, 'Oyster Dome', 8, 2000),
(3, 'Camp Long', 1.6, 240),
(4, 'Schmitz Preserve Park', 1.7, 220),
(5, 'Lincoln Park', 1.85, 160),
(6, 'Westcrest Park', 2.0, 220),
(7, 'Badger Mountain-Canyon Trail', 3.25, 1195);

SELECT k.*
FROM hikes as k
GO