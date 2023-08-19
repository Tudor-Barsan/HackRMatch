import React, { useState, useEffect } from "react";

const HackerView = () => {
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch('/api', {
        headers: {'Content-Type': 'application/json'},
      })
      const json = await response.json()
      if (response.ok) {
        setMatches(json)
      }
    }

    fetchMatches()
  }, [])
    
  return <div>HackerView</div>;
};

export default HackerView;
