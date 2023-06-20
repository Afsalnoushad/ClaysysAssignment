CREATE DATABASE tutorial;
USE tutorial;

CREATE TABLE DEPARTMENTS
(
	DEPTID INT PRIMARY KEY,
	NAME VARCHAR(50)
);

CREATE TABLE EMPLOYEE
(
	EMPLOYEEID	INT PRIMARY KEY ,
	DEPTID		INT FOREIGN KEY REFERENCES DEPARTMENTS	(DEPTID),
	SURNAME		VARCHAR (40) ,
	NAME		VARCHAR	(30) ,
	BIRTHDATE	DATETIME ,
	HEIGHT		FLOAT ,
);

CREATE TABLE SALARIES
(
	SALARYID	INT PRIMARY KEY ,
	PERSONID	INT FOREIGN KEY REFERENCES EMPLOYEE (EMPLOYEEID) ,
	GROSS		MONEY ,
	SALARYDATE	DATETIME 
);

CREATE TABLE BONUSES
(
	BONUSID		INT PRIMARY KEY ,
	PERSONID	INT FOREIGN KEY REFERENCES EMPLOYEE (EMPLOYEEID) ,
	DESCRIPT	VARCHAR(100)
);

CREATE TABLE [percent]
(
	[birth date]	DATETIME ,
	[50]			INT	,
	[COL*]			INT
);

DROP TABLE [percent];

SELECT EMPLOYEEID , DEPTID 
	FROM EMPLOYEE;

CREATE DATABASE claysys ;
USE claysys;

CREATE TABLE registration 
(
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    state VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO registration (id,first_name, last_name, dob, age, gender, phone, email, address, state, city, username, password)
VALUES (1,'John', 'Jackson', '1990-01-01', 32, 'Male', '1234567890', 'johnjackson@gmail.com', '123 Main St', 'Bangalore', 'Basavanagudi', 'johnjackson123', 'password123');

UPDATE registration
SET first_name = 'Kevin', last_name = 'Jameson'
WHERE id = 1;

SELECT * FROM registration;

INSERT INTO registration (id,first_name, last_name, dob, age, gender, phone, email, address, state, city, username, password)
VALUES (2,'Hari', 'Ram', '1999-05-02', 27, 'Male', '1234567622', 'hariram@gmail.com', '345 Main St', 'Kerala', 'Trivandrum', 'hariram123', 'password123'),		
(3,'David', 'John', '1996-04-11', 30, 'Male', '1224667890', 'davidjohn@gmail.com', '678 Main St', 'Bangalore', 'Indira Nagar', 'davidjohn234', 'password163'),			
(4,'Karthika', 'RamRaj', '1990-01-01', 26, 'Male', '1294564890', 'karthikarr@gmail.com', '633 Main St', 'Kerala', 'Ernakulam', 'karthika555', 'password193'),		
(5,'Robin', 'ChandraSekhar', '1990-01-01', 29, 'Male', '1264562890', 'robincs@gmail.com', '277 Main St', 'Kerala', 'Kozhikode', 'robin777', 'passrobin333');			

SELECT * FROM registration;

DELETE FROM registration 
		WHERE age= 27;

SELECT * FROM registration;

CREATE TABLE Employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
);

INSERT INTO Employee (id, first_name, last_name, salary)
VALUES
    (1, 'Jomon', 'Jacob', 50000.00),
    (2, 'Hari', 'Priya', 60000.00),
    (3, 'Peter', 'Griffin', 55000.00),
    (4, 'Vishnu', 'Anil', 52000.00),
    (5, 'Daniel', 'Wilson', 58000.00);

USE claysys;

CREATE TABLE Employeenew (
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
);

INSERT INTO Employeenew(id, first_name, last_name, salary)
VALUES
    (1, 'Jomon', 'Jacob', 50000.00),
    (2, 'Hari', 'Priya', 60000.00),
    (3, 'Peter', 'Griffin', 55000.00),
    (4, 'Vishnu', 'Anil', 52000.00),
    (5, 'Daniel', 'Wilson', 58000.00);

SELECT * FROM Employeenew;

SELECT MAX(salary) AS second_highest_salary
FROM Employeenew
WHERE salary < (SELECT MAX(salary) FROM Employeenew);

CREATE TABLE Employee1 (
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department VARCHAR(50) NOT NULL
);



INSERT INTO Employee1(id, first_name, last_name, salary, department)
VALUES
    (1, 'Jomon', 'Jacob', 50000.00,'Asp.net'),
    (2, 'Hari', 'Priya', 60000.00, 'Java'),
    (3, 'Peter', 'Griffin', 55000.00, 'C++'),
    (4, 'Vishnu', 'Anil', 52000.00, 'Python'),
    (5, 'Daniel', 'Wilson', 58000.00, 'React');

INSERT INTO Employee1(id, first_name, last_name, salary, department)
VALUES
    (6, 'Vinod', 'Nair', 50000.00,'Asp.net'),
    (7, 'Praveen', 'Prakash', 60000.00, 'Java'),
    (8, 'Rahul', 'Ravi', 55000.00, 'Java'),
    (9, 'Sree', 'Lakshmi', 52000.00, 'Python'),
    (10, 'David', 'Slazenger', 58000.00, 'React');

SELECT department, COUNT(*) AS employee_count
FROM Employee1
GROUP BY department;


CREATE TABLE Employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department_id INT
);

CREATE TABLE Departments (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT INTO Employees (id, first_name, last_name, department_id)
VALUES
    (1, 'Anand', 'Mishra', 1),
    (2, 'Aravind', 'Mohan', 2),
    (3, 'Sooraj', 'TP', 1),
    (4, 'Rahim', 'Mohd', 3),
    (5, 'Arif', 'Mohd', 2);

INSERT INTO Departments (id, name)
VALUES
    (1, 'HR'),
    (2, 'Finance'),
    (3, 'IT');

-- Inner join 
SELECT Employees.id, Employees.first_name, Employees.last_name, Departments.name AS department_name
FROM Employees
INNER JOIN Departments ON Employees.department_id = Departments.id;

--Left join
SELECT Employees.id, Employees.first_name, Employees.last_name, Departments.name AS department_name
FROM Employees
LEFT JOIN Departments ON Employees.department_id = Departments.id;

--Right join
SELECT Employees.id, Employees.first_name, Employees.last_name, Departments.name AS department_name
FROM Employees
RIGHT JOIN Departments ON Employees.department_id = Departments.id;

--Full outer join 
SELECT Employees.id, Employees.first_name, Employees.last_name, Departments.name AS department_name
FROM Employees
FULL OUTER JOIN Departments ON Employees.department_id = Departments.id;

--Cross Join
SELECT Employees.id, Employees.first_name, Employees.last_name, Departments.name AS department_name
FROM Employees
CROSS JOIN Departments;

SELECT * FROM Employees;

CREATE TABLE Customers (
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE Orders (
    id INT PRIMARY KEY,
    order_number VARCHAR(20) NOT NULL,
    order_date DATE NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

INSERT INTO Customers (id, first_name, last_name, email)
VALUES
    (1, 'Joseph', 'Vargese', 'josephv@gmail.com'),
    (2, 'Abdul', 'Samad', 'abduls@gmail.com'),
    (3, 'Manu', 'Chandran', 'manuc@gmail.com');

INSERT INTO Orders (id, order_number, order_date, customer_id)
VALUES
    (1, 'ORD001', '2023-01-01', 1),
    (2, 'ORD002', '2023-02-01', 2),
    (3, 'ORD003', '2023-03-01', 1),
    (4, 'ORD004', '2023-04-01', 3);


-- Query to Combine fields from Customers and Orders tables

SELECT Orders.order_number, Orders.order_date, Customers.first_name, Customers.last_name, Customers.email
FROM Orders
INNER JOIN Customers ON Orders.customer_id = Customers.id;

USE tutorial;

CREATE DATABASE claysysAssignment;

USE claysysAssignment;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    dob DATE,
    age INT,
    gender VARCHAR(10),
    phone VARCHAR(20),
    email VARCHAR(100),
    address VARCHAR(200),
    state VARCHAR(50),
    city VARCHAR(50),
    username VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO employee (id, first_name, last_name, dob, age, gender, phone, email, address, state, city, username, password)
VALUES
    (1, 'Asif', 'Ali', '1990-01-01', 32, 'Male', '1234567890', 'asif@gmail.com', '123 Street', 'State', 'City', 'john', 'password'),
    (2, 'Rahul', 'Krishna', '1995-05-10', 27, 'Female', '9876543210', 'rahul@gmail.com', '456 Avenue', 'State', 'City', 'jane', 'password123'),
    (3, 'Anzil', 'Hassan', '1985-09-15', 36, 'Male', '5555555555', 'anzil@gmail.com', '789 Road', 'State', 'City', 'michael', 'pass123');

-- Stored Procedures for CRUD Operations

-- INSERT 

CREATE PROCEDURE SP_InsertEmployee
    @id INT,
    @first_name VARCHAR(50),
    @last_name VARCHAR(50),
    @dob DATE,
    @age INT,
    @gender VARCHAR(10),
    @phone VARCHAR(20),
    @email VARCHAR(100),
    @address VARCHAR(200),
    @state VARCHAR(50),
    @city VARCHAR(50),
    @username VARCHAR(50),
    @password VARCHAR(50)
AS
BEGIN
    INSERT INTO employee (id, first_name, last_name, dob, age, gender, phone, email, address, state, city, username, password)
    VALUES (@id, @first_name, @last_name, @dob, @age, @gender, @phone, @email, @address, @state, @city, @username, @password);
END;
GO

-- INSERT EMPLOYEE DETAILS 
EXEC SP_InsertEmployee
    @id = 4,
    @first_name = 'Sarah',
    @last_name = 'Johnson',
    @dob = '1992-06-15',
    @age = 31,
    @gender = 'Female',
    @phone = '9999999999',
    @email = 'sarah@gmail.com',
    @address = '456 tvm',
    @state = 'State',
    @city = 'City',
    @username = 'sarah',
    @password = 'pass456';
GO
-- Stored procedure for UPDATE 

CREATE PROCEDURE SP_UpdateEmployee
    @id INT,
    @first_name VARCHAR(50),
    @last_name VARCHAR(50),
    @dob DATE,
    @age INT,
    @gender VARCHAR(10),
    @phone VARCHAR(20),
    @email VARCHAR(100),
    @address VARCHAR(200),
    @state VARCHAR(50),
    @city VARCHAR(50),
    @username VARCHAR(50),
    @password VARCHAR(50)
AS
BEGIN
    UPDATE employee
    SET first_name = @first_name,
        last_name = @last_name,
        dob = @dob,
        age = @age,
        gender = @gender,
        phone = @phone,
        email = @email,
        address = @address,
        state = @state,
        city = @city,
        username = @username,
        password = @password
    WHERE id = @id;
END;
GO

-- Stored Procedure for Delete
CREATE PROCEDURE SP_DeleteEmployee
    @id INT
AS
BEGIN
    DELETE FROM employee
    WHERE id = @id;
END;
GO
-- Delete test 
EXEC DeleteEmployee
    @id = 2;
GO

-- Single stored procedure

CREATE PROCEDURE SSP_EmployeeCRUD
    @id INT,
    @first_name VARCHAR(50),
    @last_name VARCHAR(50),
    @dob DATE,
    @age INT,
    @gender VARCHAR(10),
    @phone VARCHAR(20),
    @email VARCHAR(100),
    @address VARCHAR(200),
    @state VARCHAR(50),
    @city VARCHAR(50),
    @username VARCHAR(50),
    @password VARCHAR(50),
    @operation VARCHAR(10)
AS
BEGIN
    IF @operation = 'INSERT'
    BEGIN
        INSERT INTO employee (id, first_name, last_name, dob, age, gender, phone, email, address, state, city, username, password)
        VALUES (@id, @first_name, @last_name, @dob, @age, @gender, @phone, @email, @address, @state, @city, @username, @password);
    END;

    IF @operation = 'UPDATE'
    BEGIN
        UPDATE employee
        SET first_name = @first_name,
            last_name = @last_name,
            dob = @dob,
            age = @age,
            gender = @gender,
            phone = @phone,
            email = @email,
            address = @address,
            state = @state,
            city = @city,
            username = @username,
            password = @password
        WHERE id = @id;
    END;

    IF @operation = 'DELETE'
    BEGIN
        DELETE FROM employee
        WHERE id = @id;
    END;

END;
GO

