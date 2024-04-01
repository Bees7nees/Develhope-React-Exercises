import { useState } from "react";
import classes from "./Container.module.scss";

export function Container({ children, title }) {
  const [showContent, setShowContent] = useState(false);

  function toggleContent() {
    setShowContent(!showContent);
    if (showContent === true) {
      console.log("content is shown");
    } else {
      console.log("content is hidden");
    }
  }

  return (
    <div className={classes.container}>
      <span className={classes.title} onClick={toggleContent}>
        {title}
      </span>
      <br />
      <span className={showContent ? classes.content : ""}>{children}</span>
    </div>
  );
}
