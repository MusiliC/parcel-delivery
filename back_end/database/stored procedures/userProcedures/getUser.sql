CREATE PROCEDURE getUser
  @id varchar
 AS
 BEGIN
 SELECT * FROM users WHERE id = @id;
 END