export default function CameraDatabase() {
    return (
      <article className="min-h-screen bg-zinc-50 dark:bg-black px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-white">
            📸 Camera Store Database Schema
          </h1>
  
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            This article presents the complete SQL schema and sample data
            for a Camera Store system, including Camera, Customer, and
            TransactionDetails tables.
          </p>
  
          {/* CAMERA TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            1️⃣ CAMERA Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE Camera (
      cameraid CHAR(5) PRIMARY KEY,
      brand VARCHAR(30) NOT NULL,
      resolution CHAR(5) NOT NULL,
      quantityavailable NUMBER NOT NULL,
      price NUMBER CHECK (price > 0)
  );
  
  INSERT INTO Camera VALUES ('CM101', 'Fujifilm',  '2160p', 25, 1200);
  INSERT INTO Camera VALUES ('CM102', 'Canon',     '1080p', 45,  480);
  INSERT INTO Camera VALUES ('CM103', 'Panasonic', '1080p', 35,  820);
  INSERT INTO Camera VALUES ('CM104', 'Nikon',     '1080p', 25,  850);
  INSERT INTO Camera VALUES ('CM105', 'Sony',      '2160p', 45,  750);`}
          </pre>
  
          {/* CUSTOMER TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            2️⃣ CUSTOMER Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE Customer (
      customerid CHAR(4) PRIMARY KEY,
      customername VARCHAR(25) NOT NULL,
      phonenumber NUMBER(10) NOT NULL,
      emailid VARCHAR(25) NOT NULL,
      city VARCHAR(10) NOT NULL,
      CHECK (customerid LIKE 'C%')
  );
  
  INSERT INTO Customer VALUES ('C101', 'John',    7282894291, 'john@abc.com',   'Seattle');
  INSERT INTO Customer VALUES ('C102', 'Jenny',   9484599241, 'jenny@abc.com',  'Houston');
  INSERT INTO Customer VALUES ('C103', 'Rony',    9728289428, 'rony@xyz.com',   'Seattle');
  INSERT INTO Customer VALUES ('C104', 'Kate',    9450363475, 'kate@grt.com',   'New York');
  INSERT INTO Customer VALUES ('C105', 'William', 9460670235, 'william@abc.com','Chicago');
  INSERT INTO Customer VALUES ('C106', 'Clark',   9234444487, 'clark@xyz.com',  'Austin');`}
          </pre>
  
          {/* TRANSACTION TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            3️⃣ TRANSACTION DETAILS Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE TransactionDetails (
      transactionid NUMBER PRIMARY KEY,
      cameraid CHAR(5),
      customerid CHAR(4),
      quantityordered NUMBER(2) NOT NULL,
      transactiondate DATE NOT NULL,
      FOREIGN KEY (cameraid) REFERENCES Camera(cameraid),
      FOREIGN KEY (customerid) REFERENCES Customer(customerid)
  );
  
  INSERT INTO TransactionDetails VALUES (101, 'CM101', 'C101', 2, DATE '2021-11-03');
  INSERT INTO TransactionDetails VALUES (102, 'CM101', 'C102', 3, DATE '2021-09-22');
  INSERT INTO TransactionDetails VALUES (103, 'CM103', 'C101', 1, DATE '2021-04-24');
  INSERT INTO TransactionDetails VALUES (104, 'CM102', 'C104', 5, DATE '2021-07-10');
  INSERT INTO TransactionDetails VALUES (105, 'CM103', 'C103', 2, DATE '2021-01-04');
  INSERT INTO TransactionDetails VALUES (106, 'CM105', 'C105', 4, DATE '2021-10-03');
  INSERT INTO TransactionDetails VALUES (107, 'CM103', 'C105', 5, DATE '2021-06-26');
  INSERT INTO TransactionDetails VALUES (108, 'CM104', 'C106', 6, DATE '2021-07-04');`}
          </pre>
        </div>
      </article>
    );
  }
  