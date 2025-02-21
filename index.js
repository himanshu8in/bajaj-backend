import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// POST Endpoint
app.post("/bfhl", (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    const numbers = data.filter(item => !isNaN(item));
    let alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    alphabets = alphabets.map(item => item.toLowerCase());
    const highestAlphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];
    res.json({
        is_success: true,
        user_id: "himanshu_singh_14042004",
        email: "22bai70010@cuchd.in",
        roll_number: "22bai70019",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

// GET Endpoint
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 }).status(200);
});


app.listen(process.env.PORT || 2000, () => {
    console.log("Backend server running on", process.env.PORT);
});