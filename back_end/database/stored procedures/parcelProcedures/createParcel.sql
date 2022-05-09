CREATE PROCEDURE createParcel
 @id varchar(50),
 @description varchar(255),
 @sender_number varchar,
 @receiver_number varchar,
 @start_location varchar(50),
 @end_location varchar(50)

 AS
 BEGIN
 INSERT INTO parcels(id, description, sender_number, receiver_number, start_location, end_location)
 VALUES(@id,@description,@sender_number,@receiver_number,@start_location,@end_location);
 END