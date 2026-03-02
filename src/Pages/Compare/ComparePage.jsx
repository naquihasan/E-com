import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import ProductCard from '../../component/ProductCard/ProductCard';

const ComparePage = () => {
  const { compareItems } = useContext(AppContext);
  const [aiResult, setAiResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    if (compareItems.length !== 2) {
      alert("Please select exactly 2 products");
      return;
    }

    setLoading(true);

    const prompt = `
Compare these two products:

1. ${compareItems[0].name}
Price: ${compareItems[0].price}
Description: ${compareItems[0].description}

2. ${compareItems[1].name}
Price: ${compareItems[1].price}
Description: ${compareItems[1].description}

Give detailed comparison and suggest which is better.
`;

    try {
      const res = await fetch("http://localhost:5000/api/compare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();

      console.log("AI Response:", data);



      //       if (data.output && data.output.length > 0) {
      //   setAiResult(data.output[0].content[0].text);
      // } else if (data.error) {
      //   setAiResult("AI Error: " + data.error.message);
      // } else {
      //   setAiResult("Unexpected AI response");
      // }
      if (data.candidates) {
        setAiResult(data.candidates[0].content.parts[0].text);
      } else {
        setAiResult("Gemini Error");
      }

    } catch (err) {
      console.error("Error:", err);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "36px 120px" }}>
      <h2 style={{ marginBottom: "36px"}}>🤖 AI Product Comparison</h2>

      <div style={{ display: "flex", marginBottom: "20px", gap: "20px" }}>
        {compareItems.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>

      <button className="btn-list" onClick={handleCompare}>
        {loading ? "Comparing..." : "Compare with AI"}
      </button>

      {aiResult && (
        <div style={{ marginTop: "30px", whiteSpace: "pre-line" }}>
          <h3>AI Result:</h3>
          <p>{aiResult}</p>
        </div>
      )}

    </div>
  );
};

export default ComparePage;