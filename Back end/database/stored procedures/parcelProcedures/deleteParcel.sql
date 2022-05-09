CREATE PROCEDURE deleteParcel
 @id varchar
 AS
 BEGIN
  UPDATE users SET isDeleted = 1
 WHERE id = @id;
 END