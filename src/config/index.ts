import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "admin",
  password: "admin1234",
  database: "store",
  port: 3306,
});

export { pool };
