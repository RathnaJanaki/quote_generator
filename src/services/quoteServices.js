export const fetchQuote = async () => {
    const response = await fetch("http://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    return await response.json();
  };
  