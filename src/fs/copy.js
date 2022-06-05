import { resolve, join, dirname } from "path";
import { readdir, mkdir, copyFile } from "fs/promises";
import { fileURLToPath } from "url";

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let path = join(__dirname, "files");
  let newPath = join(__dirname, "files_copy");

  async function* files(path, newPath) {
    const dirs = await readdir(path, { withFileTypes: true });
    for (const dir of dirs) {
      const res = resolve(path, dir.name);
      const newRes = resolve(newPath, dir.name);
      if (dir.isDirectory()) {
        await mkdir(newRes, { recursive: true });
        yield* await files(res, newRes);
      } else yield { res, newRes };
    }
  }

  await mkdir(newPath)
    .then(async () => {
      for await (const file of files(path, newPath)) {
        await copyFile(file.res, file.newRes);
      }
    })
    .catch((e) => {
     throw new Error('FS operation failed');
    });
};

copy();
