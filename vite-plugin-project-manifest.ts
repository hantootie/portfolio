import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

const PROJECTS_DIR = 'public/content/projects';
const MANIFEST_PATH = path.join(PROJECTS_DIR, 'index.json');

function generateManifest() {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.json') && f !== 'index.json');
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(files, null, 2));
  console.log(`[project-manifest] Generated manifest with ${files.length} project(s)`);
}

export default function projectManifestPlugin(): Plugin {
  return {
    name: 'project-manifest',

    buildStart() {
      generateManifest();
    },

    configureServer(server) {
      // Generate on server start
      generateManifest();

      // Watch for changes in the projects directory
      const absoluteDir = path.resolve(PROJECTS_DIR);
      server.watcher.add(absoluteDir);

      server.watcher.on('add', (filePath) => {
        if (filePath.startsWith(absoluteDir) && filePath.endsWith('.json') && !filePath.endsWith('index.json')) {
          generateManifest();
        }
      });

      server.watcher.on('unlink', (filePath) => {
        if (filePath.startsWith(absoluteDir) && filePath.endsWith('.json') && !filePath.endsWith('index.json')) {
          generateManifest();
        }
      });
    },
  };
}
