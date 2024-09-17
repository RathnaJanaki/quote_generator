import React, { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";
import { fetchQuote } from "./services/quoteServices";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getNewQuote = async () => {
    try {
      const data = await fetchQuote();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="container text-center mt-5 pt-4" style={{ backgroundColor: "rgb(102, 0, 102)",color: "#fff" }}>
      <h2 className="mb-4">Quote Generator</h2>
      <QuoteCard quote={quote} author={author} fetchNewQuote={getNewQuote} />
    </div>
  );
};

export default App;
