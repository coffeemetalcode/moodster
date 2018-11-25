USE moodster_db;

-- Populate Users with starter data --

INSERT INTO Users (id, user_name, person_name, phone_number) VALUES 
(1, "dbstocker", "David Stocker", "8043354241");

-- Populate CheckIns with starter data --

INSERT INTO CheckIns (id, user_id, sleep_quality, sleep_amount, mood_rating, mood_type, diet_quality, stress_level, user_entry) VALUES 
(1, 1, 2, 6, 1, 1, 2, 1, "great day, no complaints"),
(2, 1, 3, 6, 2, 1, 3, 3, "Feeling a little stressed today."),
(3, 1, 4, 7, 1, 1, 2, 3, "Good sleep. I need to eat better."),
(4, 1, 4, 7, 1, 4, 4, 4, "A little stressed.");