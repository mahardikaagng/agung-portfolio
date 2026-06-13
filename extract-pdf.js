const fs = require('fs');
const path = require('path');
const PDFParse = require('pdf-parse');

async function extractPdfText(filePath) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const data = await PDFParse(fileBuffer);
    return data.text;
  } catch (error) {
    console.error(`Error extracting from ${filePath}:`, error.message);
    return '';
  }
}

async function main() {
  const cvPath = path.join(__dirname, '.next/asset/CV Anak Agung Gede Mahardika.pdf');
  const portfolioPath = path.join(__dirname, '.next/asset/Black Brown Modern Creative Portfolio Presentation_compressed (1).pdf');

  console.log('Extracting CV...');
  const cvText = await extractPdfText(cvPath);
  fs.writeFileSync(path.join(__dirname, '.next/asset/cv_extracted.txt'), cvText);
  console.log('CV extracted successfully');

  console.log('\nExtracting Portfolio...');
  const portfolioText = await extractPdfText(portfolioPath);
  fs.writeFileSync(path.join(__dirname, '.next/asset/portfolio_extracted.txt'), portfolioText);
  console.log('Portfolio extracted successfully');

  console.log('\n=== CV PREVIEW ===');
  console.log(cvText.substring(0, 1000));
  console.log('\n=== PORTFOLIO PREVIEW ===');
  console.log(portfolioText.substring(0, 1000));
}

main().catch(console.error);
