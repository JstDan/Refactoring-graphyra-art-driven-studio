import { useState, useEffect, useRef } from "react";
const useTypewriter = (text: string) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (indexRef.current <= text.length) {
          setDisplayText(text.slice(0, indexRef.current));
          indexRef.current++;
        } else {
          setIsDeleting(true);
        }
      } else {
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayText(text.slice(0, indexRef.current));
        } else {
          setIsDeleting(false);
        }
      }
    }, 120);

    return () => clearInterval(interval);
  }, [text, isDeleting]);
  return displayText;
};
export default useTypewriter;
