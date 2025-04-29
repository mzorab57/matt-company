const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/assets/images/mattModel';
const outputDir = 'public/assets/images/mattModel/optimized';

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
    if (file.match(/\.(jpg|jpeg|png|gif)$/)) {
        sharp(path.join(inputDir, file))
            .resize(400, 400, {
                fit: 'cover',
                withoutEnlargement: true
            })
            .webp({ quality: 80 })
            .toFile(path.join(outputDir, `${path.parse(file).name}.webp`))
            .then(info => console.log(`Optimized: ${file}`))
            .catch(err => console.error(`Error optimizing ${file}:`, err));
    }
});