import { useEffect } from "react";

const useScript = (URL: string) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = URL;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [URL]);
};

export default useScript;
