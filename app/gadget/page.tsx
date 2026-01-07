export default function GadgetDatabase() {
    return (
      <article className="min-h-screen bg-zinc-50 dark:bg-black px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-white">
            🔌 Gadget Store Database Schema
          </h1>
  
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            This article contains the complete SQL schema and sample data
            for a Gadget Store system, including Gadget, Customer, and
            Purchase tables.
          </p>
  
          {/* GADGET TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            1️⃣ GADGET Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE Gadget (
      gadgetid VARCHAR(4) PRIMARY KEY,
      model VARCHAR(25) NOT NULL,
      brand VARCHAR(15),
      capacity INT,
      price DECIMAL(8,2) NOT NULL,
      CHECK (gadgetid LIKE 'G%')
  );
  
  INSERT INTO Gadget VALUES
  ('G101', 'iPhone 11',       'Apple', 128, 70000.20),
  ('G102', 'Note 10 Pro',     'Redmi',  64,  20000.30),
  ('G103', 'MacBook Air',     'Apple',  128, 90000.50),
  ('G104', 'ProBook',         'HP',     16,  85000.56),
  ('G105', 'Inspiron 15 Plus','Dell',   8,   85000.78),
  ('G106', 'Nord CE',         'HP',     256, 28000.89);`}
          </pre>
  
          {/* CUSTOMER TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            2️⃣ CUSTOMER Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE Customer (
      customerid VARCHAR(4) PRIMARY KEY,
      customername VARCHAR(10) NOT NULL,
      email VARCHAR(20) UNIQUE,
      city VARCHAR(15),
      membership CHAR(1),
      CHECK (customerid LIKE 'C%'),
      CHECK (membership IN ('Y','N'))
  );
  
  INSERT INTO Customer VALUES
  ('C201', 'Ashley',  'ashley12@abc.com', 'Seattle', 'Y'),
  ('C202', 'Stewart', 'stewart@abc.com',  'Phoenix', 'N'),
  ('C203', 'Bailey',  'bailey@abc.com',   'Miami',   'Y'),
  ('C204', 'Tristan', 'tristan@xyz.com',  'Atlanta', 'N'),
  ('C205', 'Daphne',  'daphne@abc.com',   'Seattle', 'N'),
  ('C206', 'Georgia', 'georgia@xyz.com',  'Miami',   'Y'),
  ('C207', 'Rex',     'rex@abc.com',      'Phoenix', 'N'),
  ('C208', 'Maxwell', 'maxwell@abc.com',  'Miami',   'Y');`}
          </pre>
  
          {/* PURCHASE TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            3️⃣ PURCHASE Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE Purchase (
      purchaseid INT PRIMARY KEY,
      gadgetid VARCHAR(4),
      customerid VARCHAR(4),
      paymentmode VARCHAR(8) NOT NULL,
      dateofpurchase DATE,
      discountpercent INT,
      FOREIGN KEY (gadgetid) REFERENCES Gadget(gadgetid),
      FOREIGN KEY (customerid) REFERENCES Customer(customerid),
      CHECK (paymentmode IN ('Cash','Card','Online'))
  );
  
  INSERT INTO Purchase VALUES
  (8001, 'G103', 'C208', 'Cash',   '2019-07-24', 10),
  (8002, 'G106', 'C203', 'Online', '2019-03-28', 20),
  (8003, 'G104', 'C206', 'Card',   '2020-10-21', 13),
  (8004, 'G103', 'C205', 'Online', '2019-01-03', 14),
  (8005, 'G105', 'C201', 'Cash',   '2020-09-02', 5),
  (8006, 'G101', 'C204', 'Card',   '2020-04-20', 16),
  (8007, 'G104', 'C208', 'Cash',   '2019-06-05', 10);`}
          </pre>
        </div>
      </article>
    );
  }
  