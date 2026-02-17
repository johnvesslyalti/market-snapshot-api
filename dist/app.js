import "dotenv/config";
import express from "express";
import snapshotRoutes from "./routes/snapshot.routes.js";
const app = express();
app.use(express.json());
app.use("/api", snapshotRoutes);
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}
export default app;
