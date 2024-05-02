Project Setup Guide
Follow the instructions below to run this project successfully:

Step 1: Installation
Ensure you have Node.js installed on your system. Then, navigate to the project directory in your terminal and run the following command to install dependencies:

Copy code
npm install
Step 2: Configuration
Open your index.js file located in the project directory. Locate the section where the website IP address is configured. Replace the placeholder IP address 10.114.1.143 with your current working IP address. Alternatively, you can use 127.0.0.1, which is the local IP address of your AI server.

javascript
Copy code
const websiteIP = '10.114.1.143'; // Replace this IP address with your current working IP or use '127.0.0.1' for local testing
Step 3: Running the Project
Execute the following command in your terminal to run the project:

Copy code
node index.js
Step 4: QR Code Generation
Upon running the project, a QR code will be generated in the terminal.

Step 5: Integration with WhatsApp
Scan the generated QR code using your WhatsApp application.

Step 6: Ready for Automated Text Responses
With the QR code scanned, you are now set to receive automated text responses from your AI model.

Follow these steps meticulously for a smooth setup and operation of the project.