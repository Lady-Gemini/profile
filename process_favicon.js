const Jimp = require("jimp");

Jimp.read("favicon.png")
  .then((image) => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];

      if (red > 230 && green > 230 && blue > 230) {
        this.bitmap.data[idx + 3] = 0; // Transparent
      }
    });

    image.resize(256, 256);
    return image.writeAsync("src/app/icon.png");
  })
  .then(() => {
    console.log("Favicon processed and saved to src/app/icon.png");
  })
  .catch((err) => {
    console.error("Error processing favicon:", err);
  });
