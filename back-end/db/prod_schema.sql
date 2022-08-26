 \c d422oj8tul650v;

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN);