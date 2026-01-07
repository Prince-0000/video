export default function Books() {
  return (
    <article className="min-h-screen bg-zinc-50 dark:bg-black px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-white">
          📘 Online Bookstore Database Schema
        </h1>

        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
          Below is the complete SQL schema and sample data for a simple
          online bookstore system. This includes the <strong>BOOKS</strong>,
          <strong> CUSTOMERS</strong>, and <strong> ORDERS</strong> tables.
        </p>

        {/* BOOKS TABLE */}
        <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
          1️⃣ BOOKS Table
        </h2>

        <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
{`CREATE TABLE books (
    book_id CHAR(6) PRIMARY KEY
        CHECK (book_id LIKE 'BK%'),
    title VARCHAR2(50) NOT NULL,
    author VARCHAR2(30) NOT NULL,
    genre VARCHAR2(20) NOT NULL,
    stock_quantity NUMBER NOT NULL,
    price NUMBER CHECK (price > 0)
);

INSERT INTO books VALUES ('BK1001', 'The Silent Patient', 'Alex Michaelides', 'Thriller', 30, 15);
INSERT INTO books VALUES ('BK1002', 'Project Hail Mary', 'Andy Weir', 'Sci-Fi', 25, 20);
INSERT INTO books VALUES ('BK1003', 'The Midnight Library', 'Matt Haig', 'Fantasy', 40, 18);
INSERT INTO books VALUES ('BK1004', 'Dune', 'Frank Herbert', 'Sci-Fi', 20, 25);
INSERT INTO books VALUES ('BK1005', 'Circe', 'Madeline Miller', 'Fantasy', 35, 22);`}
        </pre>

        {/* CUSTOMERS TABLE */}
        <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
          2️⃣ CUSTOMERS Table
        </h2>

        <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
{`CREATE TABLE customers (
    customer_id CHAR(5) PRIMARY KEY
        CHECK (customer_id LIKE 'CU%'),
    customer_name VARCHAR2(30) NOT NULL,
    email VARCHAR2(30) NOT NULL,
    address VARCHAR2(50) NOT NULL,
    phone_number NUMBER(10) NOT NULL
);

INSERT INTO customers VALUES ('CU101', 'Alice Smith', 'alice@email.com', '123 Main St', 9876543210);
INSERT INTO customers VALUES ('CU102', 'Bob Johnson', 'bob@email.com', '456 Oak Ave', 8765432109);
INSERT INTO customers VALUES ('CU103', 'Carol White', 'carol@email.com', '789 Pine Ln', 7654321098);
INSERT INTO customers VALUES ('CU104', 'David Lee', 'david@email.com', '101 Elm Rd', 6543210987);
INSERT INTO customers VALUES ('CU105', 'Eve Green', 'eve@email.com', '202 Maple Dr', 5432109876);
INSERT INTO customers VALUES ('CU106', 'Grace', 'grace@email.com', '303 Oak Ln', 9987654321);`}
        </pre>

        {/* ORDERS TABLE */}
        <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
          3️⃣ ORDERS Table
        </h2>

        <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
{`CREATE TABLE orders (
    order_id NUMBER PRIMARY KEY,
    book_id CHAR(6),
    customer_id CHAR(5),
    quantity_ordered NUMBER(2) NOT NULL,
    order_date DATE,
    CONSTRAINT fk_book
        FOREIGN KEY (book_id) REFERENCES books(book_id),
    CONSTRAINT fk_customer
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO orders VALUES (1001, 'BK1001', 'CU101', 2, DATE '2023-10-26');
INSERT INTO orders VALUES (1002, 'BK1002', 'CU102', 1, DATE '2023-10-26');
INSERT INTO orders VALUES (1003, 'BK1003', 'CU101', 3, DATE '2023-10-27');
INSERT INTO orders VALUES (1004, 'BK1004', 'CU103', 2, DATE '2023-10-27');
INSERT INTO orders VALUES (1005, 'BK1005', 'CU104', 1, DATE '2023-10-28');
INSERT INTO orders VALUES (1006, 'BK1001', 'CU103', 4, DATE '2023-10-28');
INSERT INTO orders VALUES (1007, 'BK1003', 'CU105', 2, DATE '2023-10-29');
INSERT INTO orders VALUES (1008, 'BK1002', 'CU106', 3, DATE '2023-10-29');`}
        </pre>
      </div>
    </article>
  );
}
