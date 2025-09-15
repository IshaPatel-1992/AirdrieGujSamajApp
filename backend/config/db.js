import mongoose from "mongoose";


const connectDB = async () => {
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
console.error("MONGO_URI is not set in environment variables");
process.exit(1);
}


try {
// Mongoose v6+ has sane defaults so only important options are required
/* await mongoose.connect(mongoURI, {
useNewUrlParser: true,
useUnifiedTopology: true,
}); */
await mongoose.connect(mongoURI);


console.log(`MongoDB connected: ${mongoose.connection.host}`);


mongoose.connection.on("error", (err) => {
console.error("MongoDB connection error:", err);
});


mongoose.connection.on("disconnected", () => {
console.warn("MongoDB disconnected");
});
} catch (err) {
console.error("Failed to connect to MongoDB:", err);
process.exit(1);
}
};


// Graceful shutdown helper (helps when you Ctrl+C during local dev)
const gracefulClose = async () => {
try {
await mongoose.connection.close(false);
console.log("MongoDB connection closed");
process.exit(0);
} catch (err) {
console.error("Error during MongoDB graceful shutdown:", err);
process.exit(1);
}
};


process.on("SIGINT", gracefulClose);
process.on("SIGTERM", gracefulClose);


export default connectDB;