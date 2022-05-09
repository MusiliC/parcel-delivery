CREATE PROCEDURE getParcel
  @id varchar
 AS
 BEGIN
 SELECT * FROM parcels WHERE id = @id;
 END