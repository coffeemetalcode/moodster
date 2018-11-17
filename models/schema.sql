DROP DATABASE IF EXISTS moodster_db;

CREATE DATABASE moodster_db;

USE moodster_db;

CREATE TABLE user_info
(
user_id INT AUTO_INCREMENT NOT NULL UNIQUE,
user_name varchar(45) NOT NULL UNIQUE,
person_name varchar(100),
phone_number varchar(11),
PRIMARY KEY (user_id)
);

CREATE TABLE mood_data
(
user_id INT,
sleep_quality INT,
sleep_amount INT,
mood_rating INT,
mood_type INT,
diet_quality INT,
stress_level INT,
user_entry VARCHAR(1000),
FOREIGN KEY (user_id)
	REFERENCES user_info(user_id)
);

INSERT INTO user_info (user_name, person_name, phone_number) VALUES ("wingojt", "Jim Wingo", "8045393057");
INSERT INTO mood_data (sleep_quality, sleep_amount, mood_rating, mood_type, diet_quality, stress_level, user_entry) VALUES (2, 3, 1, 4, 2, 1, "great day, no complaints");

SELECT * FROM mood_data;
SELECT * FROM user_info;