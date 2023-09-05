import React from "react";
import classnames from "classnames";
import "./Badge.css";

export default function Badge({ children, type, color }) {
  let typeClass = type && `badge-${type}`;
  let colorClass = color && `badge-${color}`;
  const className = "badge"
  const allClasses = classnames(typeClass, colorClass, className);
  return <span className={allClasses}>{children}</span>;
}
