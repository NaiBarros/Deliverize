import "../styles/ingredientItem.css"

import minus from "../assets/icons/minus.svg"
import plus from "../assets/icons/plus.svg"
import { useState } from "react"

function IngredientItem(props) {
  const [quantity, setQuantity] = useState(0)

  return (
    <li className="item-container">
      <div>
        <div className="info">
          <span>
            {props.title}
          </span>
          <span>
            + R${props.price}
          </span>
        </div>
        <div className="quantity-button">
          <button onClick={() => quantity !== 0 && setQuantity(quantity - 1)}>
            <img src={minus} alt="Diminuir quantidade" />
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>
            <img src={plus} alt="Aumentar quantidade" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default IngredientItem