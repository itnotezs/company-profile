const sharp = require("sharp");
const path = require("path");

async function generateFavicons() {
  const inputPath = path.join(process.cwd(), "public", "icon.jpg");
  const outputPath = path.join(process.cwd(), "public");

  try {
    // Generate favicon.ico (16x16 and 32x32)
    await sharp(inputPath)
      .resize(32, 32)
      .toFile(path.join(outputPath, "favicon-32x32.png"));

    await sharp(inputPath)
      .resize(16, 16)
      .toFile(path.join(outputPath, "favicon-16x16.png"));

    // Generate apple-touch-icon
    await sharp(inputPath)
      .resize(180, 180)
      .toFile(path.join(outputPath, "apple-touch-icon.png"));

    // Generate Android icons
    await sharp(inputPath)
      .resize(192, 192)
      .toFile(path.join(outputPath, "icon-192x192.png"));

    await sharp(inputPath)
      .resize(512, 512)
      .toFile(path.join(outputPath, "icon-512x512.png"));

    console.log("All icons generated successfully!");
  } catch (error) {
    console.error("Error generating icons:", error);
  }
}

generateFavicons();
