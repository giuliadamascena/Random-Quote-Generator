# 🎯 Random Quote Generator

This project is a **responsive random quote generator** that fetches inspirational quotes from an external API. If the API is unavailable, it falls back to a set of offline quotes. It also includes a tweet button so users can share their favorite quotes instantly.

> Built using **HTML**, **CSS**, and **JavaScript**.
> Fully compliant with [freeCodeCamp's Front End Libraries certification project](https://www.freecodecamp.org/learn).

---

## ✨ Features

- 🔁 Fetches a new quote from the [ZenQuotes API](https://zenquotes.io/)
- ⚠️ Falls back to offline quotes when offline or API fails
- 🖱️ Click a button to get a new quote instantly
- 🐦 Share quotes on Twitter with one click
- 📱 Fully responsive design for desktop and mobile

---


## 🚀 Demo

Try the live version here:
👉 [https://giuliadamascena.github.io/random-quote-generator](#)


---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- [ZenQuotes API](https://zenquotes.io/)
- [AllOrigins CORS Proxy](https://allorigins.win/)

---

## 📂 File Structure

random-quote-generator/
├── index.html
├── style.css
├── script.js
└── README.md



## 🔧 Setup Instructions

To run this project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/giuliadamascena/random-quote-generator.git
   cd random-quote-generator
Open with Live Server or open index.html manually in your browser.

✅ You're done! Click "New Quote" to generate quotes.

❗ API & CORS Info
This project uses the ZenQuotes API wrapped with the AllOrigins CORS proxy to bypass browser CORS restrictions:


fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random?t=" + Date.now())
If the API is down, a set of fallback quotes will be used automatically.

📜 License
This project is open-source and available under the MIT License.

🙋‍♀️ Author
Made by Giulia Damascena
Feel free to connect with me on GitHub!