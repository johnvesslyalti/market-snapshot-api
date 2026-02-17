import "dotenv/config";
import express from "express";
import snapshotRoutes from "./routes/snapshot.routes.js";
import redis from "./utils/redis.js";

const app = express();

app.use(express.json());
app.use("/api", snapshotRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
