-- Create Database --

-- DROP DATABASE IF EXISTS moodster_db;

-- CREATE DATABASE moodster_db;

USE moodster_db;

-- Sequelize handles everything below this comment - doing it in this file results in empty tables that resemble Sequlize tables (e.g. - a 'User' table and a 'Users' table, where the 'User' table is empty)

-- CREATE TABLE User
-- (
-- user_id INT AUTO_INCREMENT NOT NULL UNIQUE,
-- user_name varchar(45) NOT NULL UNIQUE,
-- person_name varchar(100),
-- phone_number varchar(11),
-- PRIMARY KEY (user_id)
-- );

-- CREATE TABLE CheckIn
-- (
-- user_id INT,
-- sleep_quality INT,
-- sleep_amount INT,
-- mood_rating INT,
-- mood_type INT,
-- diet_quality INT,
-- stress_level INT,
-- user_entry TEXT,
-- FOREIGN KEY (user_id)
-- 	REFERENCES User(user_id)
-- );

-- SELECT * FROM mood_data
-- LEFT JOIN user_info ON user_info.user_id = mood_data.user_id;
