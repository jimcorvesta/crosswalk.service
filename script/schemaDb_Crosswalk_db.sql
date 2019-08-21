--
-- Database: crosswalk_db
--

CREATE DATABASE crosswalk_db;

-- ENTITIES

--
-- Schema entity crosswalk
--

CREATE TABLE IF NOT EXISTS "crosswalk" (
	KeyspringID varchar(130)  NOT NULL,
	LegacyID varchar(130)  NOT NULL,
	version varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);



