import express from "express";

export const app = express();

app.get('/', (req, res) => {
    res.status(200).end();
});

export const server = app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
