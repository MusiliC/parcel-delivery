CREATE TABLE users (
id VARCHAR(100) PRIMARY KEY NOT NULL,
username text,
full_name text,
phone_number VARCHAR(100),
email VARCHAR(100),
password VARCHAR(100),
isAdmin INT DEFAULT 0,
isDelete INT DEFAULT 0,
isSent INT DEFAULT 0
);



CREATE TABLE parcel (
id VARCHAR(100) PRIMARY KEY NOT NULL,
description TEXT,
sender_number varchar(100),
receiver_number VARCHAR(100),
start_location VARCHAR(100),
end_location VARCHAR(100),
isUpdated INT DEFAULT 0,
isDeleted INT DEFAULT 0,
isDelivered INT DEFAULT 0,
sender_name VARCHAR(100),
receiver_name VARCHAR(100),
send_date date,
sender_id VARCHAR(100) FOREIGN KEY references users(id)
);