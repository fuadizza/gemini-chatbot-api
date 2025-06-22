# Gemini AI Chatbot

A real-time chatbot web application built with Node.js, Express, and Google's Gemini AI. Features a clean, modern interface with real-time chat capabilities.

## 🚀 Features

- **Real-time Chat**: Instant messaging with Gemini AI
- **Modern UI**: Clean, responsive design
- **Error Handling**: Graceful error handling and user feedback
- **Loading States**: Visual feedback during AI processing
- **CORS Enabled**: Ready for cross-origin requests

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **AI**: Google Gemini AI (Gemini 1.5 Flash)
- **Styling**: Custom CSS with modern design

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd gemini-chatboot-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3000
   ```

4. **Get your Gemini API key**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your `.env` file

## 🚀 Running the Application

1. **Start the server**
   ```bash
   node index.js
   ```

2. **Open your browser**
   Navigate to `http://localhost:3000`

3. **Start chatting!**
   Type your message and press Enter or click Send

## 📁 Project Structure

```
gemini-chatboot-api/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables (create this)
├── .gitignore           # Git ignore rules
├── README.md            # This file
└── public/              # Frontend files
    ├── index.html       # Main HTML page
    ├── script.js        # Frontend JavaScript
    └── style.css        # Styling
```

## 🔌 API Endpoints

### POST `/api/chat`
Send a message to the chatbot.

**Request:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "reply": "I'm doing well, thank you for asking! How are you today?"
}
```

## 🎨 Customization

### Styling
Modify `public/style.css` to customize the appearance:
- Change colors in the CSS variables
- Adjust chat bubble styles
- Modify layout and spacing

### AI Model
Change the Gemini model in `index.js`:
```javascript
const model = gemini.getGenerativeModel({ model: "gemini-1.5-pro" });
```

## 🔒 Security

- API keys are stored in environment variables
- `.env` file is excluded from version control
- CORS is properly configured for security

## 🐛 Troubleshooting

### Common Issues

1. **"Cannot use import statement outside a module"**
   - Ensure `"type": "module"` is in your `package.json`

2. **"GEMINI_API_KEY is not defined"**
   - Check that your `.env` file exists and contains the API key
   - Restart the server after adding the `.env` file

3. **CORS errors**
   - The server is configured with CORS enabled
   - Check that you're accessing from the correct origin

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.