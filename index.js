require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const NodeGeocoder = require("node-geocoder");

// Set up options for OpenStreetMap, including the required User-Agent
const options = {
  provider: "openstreetmap",
  customHttpOptions: {
    headers: { "User-Agent": "WanderLust-App" },
  },
};

const geocoder = NodeGeocoder(options);

const mongoUrl = process.env.ATLASDB_URL;

// Helper function to create a delay between API calls
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    
    let updatedData = [];
    // Use a for...of loop to process one item at a time
    for (let obj of initData.data) {
      try {
        let data = await geocoder.geocode(
          `${obj.location}, ${obj.country}`
        );

        if (!data || !data.length) {
          console.error(
            `Geocoding failed for ${obj.location}, ${obj.country}: Location not found`
          );
          // Skip this entry if geocoding fails
          continue; 
        }

        const geometry = {
          type: "Point",
          coordinates: [data[0].longitude, data[0].latitude],
        };

        // Add the owner and new geometry to the object
        obj.owner = "689eca7bae409aafe6505e13"; // Replace with your actual user ID
        obj.geometry = geometry;
        updatedData.push(obj);

        console.log(`Successfully geocoded: ${obj.title}`);

        // Wait for 1.1 seconds before the next request to respect the rate limit
        await delay(1100);

      } catch (error) {
        console.error(
          `Geocoding error for ${obj.location}, ${obj.country}:`,
          error.message
        );
      }
    }

    if (updatedData.length > 0) {
      await Listing.insertMany(updatedData);
      console.log("DB was initialized successfully!");
    } else {
      console.log("DB initialization failed, no data was inserted.");
    }

  } catch (error) {
    console.error("Error initializing DB:", error);
  } finally {
    // Ensure the database connection is closed
    mongoose.connection.close();
  }
};

main()
  .then(() => {
    console.log("Connected to DB");
    initDB();
  })
  .catch((err) => {
    console.log(err);
  });