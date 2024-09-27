// ApparelList.js
import React from 'react';

function ApparelList({ apparels }) {
  return (
    <ul className="list-group">
      {apparels.map(apparel => (
        <li key={apparel._id} className="list-group-item">
          <h2>{apparel.type} - {apparel.brand}</h2>
          <p>Condition: {apparel.condition}</p>
          <p>Description: {apparel.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default ApparelList;