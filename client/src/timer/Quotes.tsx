import React, { useEffect, useState } from "react";

import allQuotes from "../lib/quotes";

const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<Array<string>>([]);

  const index = 0;

  // Load quotes on initial render.
  useEffect(() => {
    setQuotes(allQuotes);
  }, []);
  return <div className="m-auto italic">{quotes[index]}</div>;
};

export default Quotes;
