export default function GiftDatabase() {
    return (
      <article className="min-h-screen bg-zinc-50 dark:bg-black px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-white">
            🎁 Gift Store Database Schema
          </h1>
  
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            This article contains the complete SQL schema and sample data
            for a Gift Store system, including Customer, Gift, and
            GiftOrder tables.
          </p>
  
          {/* CUSTOMER TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            1️⃣ CUSTOMER Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE customer (
      customerid VARCHAR(5) PRIMARY KEY,
      customername VARCHAR(15),
      location VARCHAR(15),
      CHECK (customerid LIKE 'C%')
  );
  
  INSERT INTO customer VALUES
  ('C101', 'Jack',   'Delhi'),
  ('C102', 'John',   'Bangalore'),
  ('C103', 'Sam',    'Mumbai'),
  ('C104', 'Andrew', 'Bangalore'),
  ('C105', 'Anne',   'Delhi'),
  ('C106', 'Maria',  'Mumbai'),
  ('C107', 'Jeny',   'Bangalore');`}
          </pre>
  
          {/* GIFT TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            2️⃣ GIFT Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE gift (
      giftid VARCHAR(5) PRIMARY KEY,
      giftname VARCHAR(20) UNIQUE NOT NULL,
      category VARCHAR(15),
      price NUMBER CHECK (price > 0),
      discount NUMBER,
      availability NUMBER,
      CHECK (giftid LIKE 'G%')
  );
  
  INSERT INTO gift VALUES
  ('G101', 'Dream Catcher',   'Showpiece', 500,  10, 63),
  ('G102', 'Cinnamon Candles','Home Decor',550,  5,  35),
  ('G103', 'Watch Box',       'Utilities', 2000, 20, 18),
  ('G104', 'Music Plant Lamp','Home Decor',1500, 15, 5),
  ('G105', 'Crystal Platter', 'Utilities', 2999, 7,  10),
  ('G106', 'Crystal Chariot', 'Showpiece', 2000, 15, 32),
  ('G107', 'Wood Coaster Set','Utilities', 1300, 30, 30),
  ('G108', 'Golden Foil Rose','Showpiece', 500,  30, 30),
  ('G109', 'Photo Frames',    'Home Decor',500,  30, 30);`}
          </pre>
  
          {/* GIFTORDER TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            3️⃣ GIFTORDER Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE giftorder (
      orderid NUMBER PRIMARY KEY,
      customerid VARCHAR(5),
      giftid VARCHAR(5),
      quantity NUMBER,
      shippingcity VARCHAR(15),
      FOREIGN KEY (customerid) REFERENCES customer(customerid),
      FOREIGN KEY (giftid) REFERENCES gift(giftid)
  );
  
  INSERT INTO giftorder VALUES
  (1001, 'C102', 'G104', 2, 'Delhi'),
  (1002, 'C103', 'G102', 5, 'Bangalore'),
  (1003, 'C105', 'G101', 3, 'Bangalore'),
  (1004, 'C102', 'G104', 1, 'Bangalore'),
  (1005, 'C101', 'G103', 9, 'Mysore'),
  (1006, 'C102', 'G101', 8, 'Mumbai'),
  (1007, 'C105', 'G106', 4, 'Chennai'),
  (1008, 'C105', 'G107', 4, 'Chennai'),
  (1009, 'C105', 'G108', 5, 'Mumbai'),
  (1010, 'C106', 'G105', 6, 'Mysore');`}
          </pre>
        </div>
      </article>
    );
  }
  