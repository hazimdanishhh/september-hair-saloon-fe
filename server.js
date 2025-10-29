import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";
import { renderPage } from "vike/server";
import "vike/__internal"; // loads dist/server/entry.mjs

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(compression());
app.use(express.static("dist/client"));

// Serve sitemap.xml and robots.txt explicitly (important for Google)
app.get(["/sitemap.xml", "/robots.txt"], (req, res) => {
  const filePath = path.resolve(__dirname, "dist/client", req.path.slice(1));
  res.type(req.path.endsWith(".xml") ? "application/xml" : "text/plain");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`❌ File not found: ${req.path}`);
      res.status(404).send("Not found");
    }
  });
});

// Vike SSR catch-all routes
app.all(/.*/, async (req, res, next) => {
  const pageContext = await renderPage({ urlOriginal: req.originalUrl });
  const { httpResponse } = pageContext;
  if (!httpResponse) return next();
  httpResponse.headers.forEach(([n, v]) => res.setHeader(n, v));
  res.status(httpResponse.statusCode).send(httpResponse.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`✅ Server running at http://localhost:${port}`)
);
