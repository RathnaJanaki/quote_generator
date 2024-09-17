import React from "react";

const QuoteCard = ({ quote, author, fetchNewQuote }) => {
  return (
    <div className="quote-card p-4 shadow-sm">
      <p className="lead">"{quote}"</p>
      <footer className="blockquote-footer" style={{color:"rgb(166, 166, 166)"}}>{author}</footer>
      <button className="btn btn-primary mt-3" onClick={fetchNewQuote}>
        Get New Quote
      </button>
    </div>
  );
};

export default QuoteCard;
