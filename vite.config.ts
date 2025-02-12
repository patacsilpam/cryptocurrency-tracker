import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// Define the alias object type
type AliasMap = Record<string, string>;

// Function to generate dynamic aliases based on `src` folder structure
const srcPath = path.resolve(__dirname, "src");
const aliases: AliasMap = fs
  .readdirSync(srcPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory()) // Only include directories
  .reduce<AliasMap>((acc, dir) => {
    acc[`@${dir.name}`] = path.resolve(srcPath, dir.name);
    return acc;
  }, {});

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": srcPath, // Root alias for src
      ...aliases, // Dynamically generated aliases
    },
  },
});
