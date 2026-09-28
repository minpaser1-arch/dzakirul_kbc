import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { generateModulService, refineSectionService } from "./api/_lib/modulService";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || "3000", 10);

app.use(express.json({ limit: "15mb" }));

// Health Check
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString(),
  });
});

// Generate Modul Ajar
app.post("/api/generate-modul", async (req: Request, res: Response) => {
  try {
    const result = await generateModulService(req.body);
    res.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error("Error in /api/generate-modul:", error);
    res.status(500).json({
      success: false,
      error: error?.message || "Gagal menghasilkan modul ajar. Silakan coba kembali.",
    });
  }
});

// Refine Section
app.post("/api/refine-section", async (req: Request, res: Response) => {
  try {
    const result = await refineSectionService(req.body);
    res.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error("Error in /api/refine-section:", error);
    res.status(500).json({
      success: false,
      error: error?.message || "Gagal menyempurnakan bagian modul.",
    });
  }
});

// Setup Vite in Dev or Static Serving in Prod
async function startServer() {
  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, "dist/index.html"));
    });
  }

  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

startServer();

export default app;
