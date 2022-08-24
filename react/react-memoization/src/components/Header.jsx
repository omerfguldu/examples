import React from "react";

function Header({ number, data, increment }) {
  console.log("header rendered");
  return (
    <div>
      Header - {number}
      <br />
      <br />
      <code>{JSON.stringify(data)}</code>
      <br />
      <br />
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default React.memo(Header);
