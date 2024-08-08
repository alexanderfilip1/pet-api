import React from "react";
import "../assets/css/SubmitBtn.css";
export default function SubmitBtn({ action }) {
  return (
    <button type="submit" className="btn">
      {action}
    </button>
  );
}
