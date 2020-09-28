import React from "react";

export default function CustomerDetailItem({ title, content }) {
  return (
    <div>
      <h6>{title}</h6> <p> {content}</p>
    </div>
  );
}
