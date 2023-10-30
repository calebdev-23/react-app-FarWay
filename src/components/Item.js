import React from "react";

export default function Item({item, onDeleteItem, onUpdateItem}) {
    return <li>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>
          <input
              type="checkbox"
              value={item.packed}
              onChange={() => onUpdateItem(item.id)}
          /> {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
}
