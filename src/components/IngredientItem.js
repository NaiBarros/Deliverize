import "../styles/ingredientItem.css"

import minus from "../assets/icons/minus.svg"
import plus from "../assets/icons/plus.svg"

function IngredientItem() {
  return (
    <li className="item-container">
      <div>
        <div className="info">
          <span>
            Queijo cheddar
          </span>
          <span>
            + R$4,99
          </span>
        </div>
        <div className="quantity-button">
          <button>
            <img src={minus} alt="Diminuir quantidade" />
          </button>
          <span>2</span>
          <button>
            <img src={plus} alt="Aumentar quantidade" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default IngredientItem