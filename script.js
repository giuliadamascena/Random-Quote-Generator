// Fallback quotes for offline or error cases
const fallbackQuotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
  { text: "If you can’t explain it simply, you don’t understand it well enough.", author: "Albert Einstein" }
];

// Display quote and author in the HTML
function showQuote(quote) {
  const quoteText = quote.q || quote.text || "No quote available.";
  const quoteAuthor = quote.a || quote.author || "Anonymous";

  document.getElementById("text").textContent = `“${quoteText}”`;
  document.getElementById("author").textContent = `— ${quoteAuthor}`;
  document.getElementById("tweet-quote").href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(`"${quoteText}" — ${quoteAuthor}`);
}

// Fetch from API (or fallback)
function getQuote() {
  const proxyUrl = "https://api.allorigins.win/raw?url=";
  const targetUrl = "https://zenquotes.io/api/random?t=" + Date.now();
  const fullUrl = proxyUrl + encodeURIComponent(targetUrl);

  fetch(fullUrl)
    .then((res) => {
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      if (Array.isArray(data) && data[0]?.q && data[0]?.a) {
        showQuote(data[0]);
      } else {
        throw new Error("Invalid quote format.");
      }
    })
    .catch((err) => {
      console.warn("API failed — using fallback quote.", err);
      const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
      showQuote(fallbackQuotes[randomIndex]);
    });
}


// Initialize on page load and attach button click
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("new-quote").addEventListener("click", getQuote);
  getQuote(); // Initial load
});
