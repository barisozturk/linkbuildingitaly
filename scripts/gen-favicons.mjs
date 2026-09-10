import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "src/app/icon.svg"));

async function png(size) {
  return sharp(svg, { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

// Build a .ico file embedding PNG images (supported by modern browsers).
function buildIco(entries) {
  const count = entries.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const bodies = [];
  entries.forEach((e, i) => {
    const b = 16 * i;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b + 0); // width
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b + 1); // height
    dir.writeUInt8(0, b + 2); // palette
    dir.writeUInt8(0, b + 3); // reserved
    dir.writeUInt16LE(1, b + 4); // color planes
    dir.writeUInt16LE(32, b + 6); // bits per pixel
    dir.writeUInt32LE(e.data.length, b + 8); // size of image data
    dir.writeUInt32LE(offset, b + 12); // offset
    offset += e.data.length;
    bodies.push(e.data);
  });
  return Buffer.concat([header, dir, ...bodies]);
}

const [p16, p32, p48, p180, p512] = await Promise.all([png(16), png(32), png(48), png(180), png(512)]);

writeFileSync(join(root, "public/favicon-16x16.png"), p16);
writeFileSync(join(root, "public/favicon-32x32.png"), p32);
writeFileSync(join(root, "public/apple-touch-icon.png"), p180);

const ico = buildIco([
  { size: 16, data: p16 },
  { size: 32, data: p32 },
  { size: 48, data: p48 },
]);
writeFileSync(join(root, "public/favicon.ico"), ico);
writeFileSync(join(root, "src/app/favicon.ico"), ico);

console.log("Generated: favicon.ico (16/32/48), favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png");
