import { UUID } from "crypto";

const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database("otor.db", sqlite3.OPEN_READWRITE, (err: Error) => {
    if (err) return console.error(err.message);
}); 

// Commands for operations with database

// Create table
let createTableSqlCommand = `CREATE TABLE IF NOT EXISTS users (guid TEXT PRIMARY KEY,name TEXT NOT NULL,surname TEXT NOT NULL,email TEXT NOT NULL UNIQUE,password TEXT NOT NULL,emailconfirmed BOOLEAN NOT NULL DEFAULT FALSE)`;

// Drop table
let dropTableSqlCommand = `DROP TABLE IF EXISTS users`;

// Insert into table
let insertIntoTableSqlCommand = `INSERT INTO users (guid,name,surname,email,password) VALUES (?,?,?,?,?)`;

export function createTable() {
    db.run(createTableSqlCommand, (err: Error) => {
        if (err) return err.message;
    });
}

export function dropTable() {
    db.run(dropTableSqlCommand, (err: Error) => {
        if (err) return err.message;
    });
}

export function insertIntoTable(guid: UUID, name: string, surname: string, email: string, password: string) {
    db.run(insertIntoTableSqlCommand, [guid, name, surname, email, password], (err: Error) => {
        if (err) return err.message;
    });
}