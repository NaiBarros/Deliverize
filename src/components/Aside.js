import "../styles/aside.css"

import minus from "../assets/icons/minus.svg"
import plus from "../assets/icons/plus.svg"

import IngredientItem from "./IngredientItem"
import { useState } from "react"

function Aside() {
  const [quantity, setQuantity] = useState(0)
  return (
    <aside className="aside-container">
      <div>
        <header>
          <h1>
            Adicionar Ingredientes
          </h1>
          <h2>
            Até 8 ingredientes.
          </h2>
        </header>
        <ul className="ingredients-list">
          <IngredientItem title="Queijo cheddar" price="4,99" />
          <IngredientItem title="Cebola crispy" price="1,50" />
          <IngredientItem title="Molho cheddar" price="3,50" />
          <IngredientItem title="Molho de picanha" price="3,50" />
        </ul>
        <div>
          <p>
            Precisa de Talher?
          </p>
        </div>
        <label>
          Sim
          <input type="radio" name="radio-button" />
        </label>
        <label>
          Não
          <input type="radio" name="radio-button" />
        </label>
      </div>
      <footer>
        <div className="quantity-button">
          <button onClick={() => quantity !== 0 && setQuantity(quantity - 1)}>
            <img src={minus} alt="Diminuir quantidade" />
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>
            <img src={plus} alt="Aumentar quantidade" />
          </button>
        </div>
        <button>
          Adicionar
        </button>
      </footer>
    </aside>
  )
}
export default Aside