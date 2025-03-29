import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "saturnfit-blog";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});
