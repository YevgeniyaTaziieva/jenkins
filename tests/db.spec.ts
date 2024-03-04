import { test, expect } from "@playwright/test";
import mysql from "mysql";

let connection = mysql.createConnection({
  connectionLimit: 10,
  host: "yh6.h.filess.io",
  user: "automation_heraction",
  password: "a15e5a47817c45a99ca9f32298e1cca90ea3c056",
  database: "automation_heraction",
  port: 3306,
});

let getUser = function () {
  return new Promise((resolve, reject) => {
    connection.connect();
    connection.query(`SELECT * from users`, function (error, results, fields) {
      if (error) reject(error);
      resolve(results);
    });
  });
};


test.describe("Testing db", () => {
  test.afterEach(() => {
    connection.end();
  });

  test("Login", async ({ request }) => {
    let res = await request.delete("http://localhost:3000/user/1");
  });
});
