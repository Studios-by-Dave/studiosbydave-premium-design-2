import { useEffect } from "react";

const ElfsightChatbot = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if script already exists to avoid duplicates
      if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
        return;
      }

      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }, 3000); // 3-second delay to improve initial load speed

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className="elfsight-app-fe41bcb2-9bed-4b99-ab66-5f076ba6c148" 
      data-elfsight-app-lazy
    />
  );
};

export default ElfsightChatbot;
