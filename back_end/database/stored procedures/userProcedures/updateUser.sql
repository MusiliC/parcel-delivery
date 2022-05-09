CREATE PROCEDURE updateUser
 @id varchar(100), 
 @username varchar(100),
 @full_name varchar(100),
 @phone_number varchar(100),
 @email varchar(100),
 @password varchar(100)

 AS
 BEGIN
 UPDATE users SET  username= @username,  full_name =@full_name, phone_number =@phone_number, email =@email, password = @password
 WHERE id = @id;
 END