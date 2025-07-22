require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// You should use process.env here, but hardcoding for now
const mongoUrl = "mongodb+srv://darshanwadile10:darshan123@wanderlust.nmsqsox.mongodb.net/?retryWrites=true&w=majority&appName=WanderLust";

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log("🗑️ Old listings deleted");

    // Add the owner to each listing object
    const updatedData = initData.data.map((obj) => ({
      ...obj,
      owner: "66567b03fda820235197b582", // Make sure this is a valid user ID
    }));

    await Listing.insertMany(updatedData);
    console.log("✅ Database initialized successfully!");
  } catch (error) {
    console.error("❌ Error initializing DB:", error);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 DB Connection closed.");
  }
};

main()
  .then(() => {
    console.log("✅ Connected to DB");
    initDB();
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
  });