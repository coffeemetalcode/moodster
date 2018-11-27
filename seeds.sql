USE moodster_db;

-- Populate Users with starter data --

INSERT INTO Users (id, user_name, person_name, phone_number) VALUES 
(1, "dbstocker", "David Stocker", "8043354241"),
(2, "smittyj", "Smitty Werben Jäger Man Jensen", "8041111111");

-- Populate CheckIns with starter data --

-- dbstocker CheckIns

INSERT INTO CheckIns (id, UserId, sleep_quality, sleep_amount, mood_rating, mood_type, diet_quality, stress_level, user_entry) VALUES 
(1, 1, 2, 6, 1, 1, 2, 1, "great day, no complaints"),
(2, 1, 3, 6, 2, 1, 3, 3, "Feeling a little stressed today."),
(3, 1, 4, 7, 1, 1, 2, 3, "Good sleep. I need to eat better."),
(4, 1, 4, 7, 1, 4, 4, 4, "A little stressed.");

-- smittyj Checkins

INSERT INTO CheckIns (id, UserId, sleep_quality, sleep_amount, mood_rating, mood_type, diet_quality, stress_level, user_entry) VALUES 
(5, 2, 3, 5, 1, 2, 2, 2, "Smitty had 5 hours of sleep."),
(6, 2, 3, 6, 2, 2, 3, 4, "Smitty had 6 hours of sleep."),
(7, 2, 3, 7, 1, 1, 2, 3, "Smitty had 7 hours of sleep and he feels good."),
(8, 2, 3, 8, 1, 1, 2, 1, "Smitty had 8 hours of sleep and he feels great!");
