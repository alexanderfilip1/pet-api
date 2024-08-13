import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = `AnimalsApi ${title}`;
    } else {
      document.title = "AnimalsApi";
    }
  }, [title]);
}
