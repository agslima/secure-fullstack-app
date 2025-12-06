const express = require("express");
const path = require("path");
const RateLimit = require("express-rate-limit");
const app = express();
const PORT = process.env.PORT || 8090;

// Rate limiter: maximum 100 requests per 15 minutes per IP
const limiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Apply rate limiter to all requests
app.use(limiter);
const prescriptionData = {
    clinicName: "StayHealthy", // [cite: 1]
    doctor: {
        name: "Dr. Emily Johnson", // [cite: 3]
        license: "12345", // [cite: 4]
        phone: "(555) 987-6543", // [cite: 5]
        email: "dr.emily@example.com" // [cite: 6]
    },
    patient: {
        name: "John Smith", // [cite: 20]
        gender: "Male", // [cite: 21]
        dob: "January 15, 1980", // [cite: 22]
        phone: "(555) 123-4567", // [cite: 23]
        email: "johnsmith@example.com" // [cite: 24]
    },
    date: "July 10, 2023", // [cite: 7]
    medications: [
        {
            name: "Amoxicillin", // [cite: 9]
            dosage: "500mg", // [cite: 10]
            directions: "Take 1 capsule three times a day with meals.", // [cite: 11]
            quantity: "30 capsules" // [cite: 11] (Inferido do contexto da linha 11)
        },
        {
            name: "Ibuprofen", // [cite: 12]
            dosage: "200mg", // [cite: 13]
            directions: "Take 1 tablet every 6 hours as needed for pain.", // [cite: 14]
            quantity: "60 tablets" // [cite: 15]
        },
        {
            name: "Loratadine", // [cite: 16]
            dosage: "10mg", // [cite: 17]
            directions: "Take 1 tablet once daily in the morning.", // [cite: 18]
            quantity: "30 tablets" // [cite: 25]
        }
    ]
};

// 2. API
app.get("/api/prescription", (req, res) => {
    res.json(prescriptionData);
});


const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});