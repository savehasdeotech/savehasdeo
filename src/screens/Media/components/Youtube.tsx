import React, { ReactElement } from "react";

interface Props {}

function Youtube({}: Props): ReactElement {
  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        style={{ maxWidth: 1200 }}
        src="http://www.youtube.com/embed/videoseries?list=UUbKexsKmesybTT_afHkqC0g"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  );
}

export default Youtube;
