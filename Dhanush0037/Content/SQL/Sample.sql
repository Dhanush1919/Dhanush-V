use test_training2020;
CREATE TABLE Emptable (
    EmployeeID int not null,
    FirstName varchar(255),
    LastName varchar(255),
    City varchar(255)
)
insert into Emptable values(1,'Dhanush','Venkataraman','Cbe')
insert into Emptable values(2,'Sachin','Tendulkar','blr')

 select * from Emptable WHERE EmployeeID=1 or City='Cbe';

-- UPDATE Emptable SET CITY='Blr' where EmployeeID=2 to update the table periodically
drop table Emptable -- is used to delete the table
INSERT  into textEmptable SELECT * from Emptable
-- copies content from emptable to textemptable
-- use insert command when table already exist, when table don't exist use select command
select * from textEmptable 
--displays textemptable

