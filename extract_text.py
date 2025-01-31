import os
from PIL import Image
import pytesseract #type:ignore
import google.generativeai as genai #type:ignore

# Configure Tesseract path (only needed for Windows)
# Uncomment and set the path if Tesseract is not in your PATH
# pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Configure Google Gemini API key
GOOGLE_API_KEY = "AIzaSyDC_-UvB6Qbui35FpFzKIFP1DQ4OHb_w0I"  # Your Google API Key
genai.configure(api_key=GOOGLE_API_KEY)

def extract_text_from_image(image_path):
    """
    Extract text from an image file using Tesseract OCR.
    """
    try:
        # Open the image file
        image = Image.open(image_path)
        # Use Tesseract OCR to extract text
        text = pytesseract.image_to_string(image)
        return text
    except FileNotFoundError:
        return f"Error: The file '{image_path}' was not found."
    except Exception as e:
        return f"An error occurred: {str(e)}"

def analyze_contract_with_gemini(text):
    """
    Analyze the extracted text using Google Gemini API to determine if it's a contract and assess its safety.
    """
    try:
        # Initialize the Gemini model
        model = genai.GenerativeModel('gemini-pro')  # Replace with the correct model name

        # Prompt for Gemini
        prompt = f"""
        Analyze the following text and determine if it represents a legal contract.
        If it is a contract, classify it as 'Safe' or 'Unsafe' based on the following criteria:
        - High penalties or fines
        - Unfavorable termination clauses
        - Ambiguous or one-sided obligations
        If the contract is unsafe, explain the risks and potential consequences.

        Text to analyze:
        {text}
        """

        # Call Gemini API
        response = model.generate_content(prompt)

        # Extract the AI's response
        analysis_result = response.text.strip()
        return analysis_result
    except Exception as e:
        return f"Error during contract analysis: {str(e)}"

# Example usage
if __name__ == "__main__":
    # Dynamically locate the image file in the same folder as the script
    script_dir = os.path.dirname(os.path.abspath(__file__))  # Get the script's directory
    image_path = os.path.join(script_dir, "test.png")        # Full path to the image

    # Extract text from image
    if os.path.exists(image_path):
        extracted_text = extract_text_from_image(image_path)
        print("\nExtracted Text from Image:")
        print(extracted_text)

        # Store the extracted text in a list
        text_list = [extracted_text]

        # Analyze the contract using Google Gemini API
        for text in text_list:
            analysis_result = analyze_contract_with_gemini(text)
            print("\nContract Analysis Result:")
            print(analysis_result)
    else:
        print(f"Image file not found at path: {image_path}")