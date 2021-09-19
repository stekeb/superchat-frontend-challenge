import React from "react";

function Contributors({ item }) {
  return (
    <div className="singlecontributor">
      <a href={item.html_url}>{`-> ${item.login} (${item.contributions})`}</a>
    </div>
  );
}

export default Contributors;
