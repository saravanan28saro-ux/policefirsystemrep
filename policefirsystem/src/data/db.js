const express = require('express');
const path = require('path');
const app = express();
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

app.use(express.json()); // ✅ IMPORTANT

const dbPath = path.join(__dirname, "fidatabase.db");
let db = null;

// ✅ Create table function
const createTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS fir (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER
    );`;
    await db.run(query);
};

const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });

        await createTable(); // ✅ create before server starts

        app.listen(3000, () => {
            console.log("Server Running at http://localhost:3000/");
        });

    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
};

initializeDBAndServer();


// ✅ Home route
app.get("/", (req, res) => {
    res.send("Server is working 🚀");
});


// ✅ Insert data
app.post("/add", async (req, res) => {
    try {
        const { name, age } = req.body;

        const query = `INSERT INTO fir (name, age) VALUES (?, ?)`;
        await db.run(query, [name, age]);

        res.send("Data added successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});