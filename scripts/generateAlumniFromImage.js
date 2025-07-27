const fs = require("fs");
const path = require("path");

// Folder path where images are stored
const folderPath = path.join("public", "alumni", "temp");

// Starting ID
let id = 18;

// Get list of image files
const files = fs.readdirSync(folderPath).filter((file) => {
  const ext = path.extname(file).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
});

// Generate alumni array
const allAlumni = files.map((file, index) => {
  const name = path.basename(file, path.extname(file)); // Remove extension
  return {
    id: id + index,
    name: name,
    designation: "",
    company: "",
    graduationYear: "",
    image: `/alumni/${file}`,
  };
});

// Convert array to JS export format
const fileContent = `const allAlumni = ${JSON.stringify(
  allAlumni,
  null,
  2
)};\n\nexport default allAlumni;\n`;

// Output file path
const outputFile = path.join("data", "alumniDataFromImage.json");

// Write to a JS file
fs.writeFileSync(outputFile, fileContent, "utf8");

console.log(
  `✅ alumniData.js has been created with ${allAlumni.length} entries.`
);
