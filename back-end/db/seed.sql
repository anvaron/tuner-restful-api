-- step 1 connect to the database
\c songs_dev

-- step 2 add pre made data to the table
INSERT INTO songs (name,artist,album,time,is_favorite) VALUES 
('Shape Of You', 'Ed Sheeran','Divide','3:20',true),
('Blinding Lights','The Weeknd','After Hours','2:98',true),
('Dance Monkey', 'Tones and I','The Kids Are Coming','3:29',false),
('Rockstar', 'Post Malone','Beerbongs & Bentleys', '3:38',true),
('Someone You Loved', 'Lewis Capaldi', 'Divinely Uninspired to a Hellish Extent','3:02',true);

--command
-- psql -U postgres -f db/seed.sql