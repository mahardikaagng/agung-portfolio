#!/usr/bin/env python3
import pdfplumber
import json
import sys

def extract_pdf_text(pdf_path):
    """Extract text from PDF file"""
    try:
        text = ""
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages):
                text += f"\n--- PAGE {i+1} ---\n"
                text += page.extract_text() or ""
        return text
    except Exception as e:
        print(f"Error extracting {pdf_path}: {e}", file=sys.stderr)
        return ""

def main():
    cv_path = ".next/asset/CV Anak Agung Gede Mahardika.pdf"
    portfolio_path = ".next/asset/Black Brown Modern Creative Portfolio Presentation_compressed (1).pdf"
    
    print("Extracting CV...")
    cv_text = extract_pdf_text(cv_path)
    with open(".next/asset/cv_extracted.txt", "w") as f:
        f.write(cv_text)
    print("✓ CV extracted")
    
    print("Extracting Portfolio...")
    portfolio_text = extract_pdf_text(portfolio_path)
    with open(".next/asset/portfolio_extracted.txt", "w") as f:
        f.write(portfolio_text)
    print("✓ Portfolio extracted")
    
    # Print previews
    print("\n" + "="*50)
    print("CV CONTENT PREVIEW (first 800 chars):")
    print("="*50)
    print(cv_text[:800])
    
    print("\n" + "="*50)
    print("PORTFOLIO CONTENT PREVIEW (first 800 chars):")
    print("="*50)
    print(portfolio_text[:800])

if __name__ == "__main__":
    main()
