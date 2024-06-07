import express from "express"; // Backend framework
import dotenv from "dotenv";
import cors from "cors"; // Middleware
import bodyParser from "body-parser"; // Parse JSON from front-end
import emailjs from "@emailjs/browser";

// Intialize express, dotenv and assign port
const app = express();
const port = 5000;
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

// import.meta.env is for client-side only
emailjs.init({
  publicKey: process.env.VITE_REACT_PORTFOLIO_PUBLIC_KEY,
  blockHeadless: true, // Prevent spam
});

// Listen to the port for changes
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

// Handle request from front-end

app.post("/send-email", (req, res) => {
  const { serviceID, templateID, templateParams } = req.body;

  emailjs
    .send(serviceID, templateID, templateParams)
    .then((response) => {
      res.status(200).json({ status: "success", data: response });
    })
    .catch((error) => {
      res.status(500).json({ status: "error", error: error });
    });
});
