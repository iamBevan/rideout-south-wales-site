import * as React from "react";

function SvgThreeBars(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <path
        fillRule="evenodd"
        d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
      />
    </svg>
  );
}

export default SvgThreeBars;