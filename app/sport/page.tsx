export default function SportEventDatabase() {
    return (
      <article className="min-h-screen bg-zinc-50 dark:bg-black px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-white">
            🏅 Sports Event Database Schema
          </h1>
  
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            This article presents the complete HSQL schema and sample data
            for a Sports Event Management system, including Player, Sport,
            and Event tables.
          </p>
  
          {/* PLAYER TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            1️⃣ PLAYER Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE Player (
      playerid VARCHAR(4) PRIMARY KEY,
      playername VARCHAR(15) NOT NULL,
      age INTEGER NOT NULL,
      country VARCHAR(10) NOT NULL,
      CHECK (playerid LIKE 'P%')
  );
  
  INSERT INTO Player VALUES
  ('P211', 'Sam',     18, 'USA'),
  ('P212', 'Jimmy',   20, 'Mexico'),
  ('P213', 'Michael', 22, 'USA'),
  ('P214', 'Oliver',  21, 'England'),
  ('P215', 'Clara',   20, 'Germany'),
  ('P216', 'Amelia',  24, 'USA'),
  ('P217', 'Robert',  19, 'Mexico'),
  ('P218', 'Ella',    23, 'USA');`}
          </pre>
  
          {/* SPORT TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            2️⃣ SPORT Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE Sport (
      sportid VARCHAR(4) PRIMARY KEY,
      sportname VARCHAR(20) NOT NULL,
      sporttype VARCHAR(15) NOT NULL,
      venue VARCHAR(25) NOT NULL,
      CHECK (sportid LIKE 'S%'),
      CHECK (sporttype IN ('Athletics', 'Swimming', 'Wrestling'))
  );
  
  INSERT INTO Sport VALUES
  ('S001', '100m Backstroke',    'Swimming',   'University Sports Complex'),
  ('S002', 'Freestyle Wrestling','Wrestling',  'Indoor Arena'),
  ('S003', 'Shot Put Throw',     'Athletics',  'Outdoor Stadium'),
  ('S004', 'Trail Running',      'Athletics',  'Lake Side Trail'),
  ('S005', 'Greco Roman',        'Wrestling',  'Indoor Arena'),
  ('S006', '200m Hurdles',       'Athletics',  'Athletic Track'),
  ('S007', 'Javelin Throw',      'Athletics',  'Outdoor Stadium');`}
          </pre>
  
          {/* EVENT TABLE */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-800 dark:text-white">
            3️⃣ EVENT Table
          </h2>
  
          <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-green-400">
  {`CREATE TABLE Event (
      eventid VARCHAR(4) PRIMARY KEY,
      sportid VARCHAR(4),
      playerid VARCHAR(4),
      eventdate DATE NOT NULL,
      noofattempts INTEGER NOT NULL,
      CHECK (eventid LIKE 'E%'),
      CHECK (noofattempts > 0),
      FOREIGN KEY (sportid) REFERENCES Sport(sportid),
      FOREIGN KEY (playerid) REFERENCES Player(playerid)
  );
  
  INSERT INTO Event VALUES
  ('E901', 'S002', 'P214', DATE '2022-07-20', 1),
  ('E902', 'S003', 'P213', DATE '2022-07-22', 5),
  ('E903', 'S001', 'P216', DATE '2022-07-17', 2),
  ('E904', 'S005', 'P215', DATE '2022-07-15', 1),
  ('E905', 'S007', 'P211', DATE '2022-07-15', 6),
  ('E906', 'S002', 'P214', DATE '2022-07-21', 1),
  ('E907', 'S007', 'P218', DATE '2022-07-22', 6),
  ('E908', 'S001', 'P214', DATE '2022-07-17', 2),
  ('E909', 'S001', 'P218', DATE '2022-07-19', 1);`}
          </pre>
        </div>
      </article>
    );
  }
  