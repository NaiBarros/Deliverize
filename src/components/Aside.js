import "../styles/aside.css"

import minus from "../assets/icons/minus.svg"
import plus from "../assets/icons/plus.svg"

import IngredientItem from "./IngredientItem"

function Aside() {
  return (
    <aside className="aside-container">
      <header>
        <h1>
          Adicionar Ingredientes
        </h1>
        <h2>
          Até 8 ingredientes.
        </h2>
      </header>
      <ul className="ingredients-list">
        <IngredientItem />
        <IngredientItem />
        <IngredientItem />
        <IngredientItem />
      </ul>
      <footer>
        <div className="quantity-button">
          <button>
            <img src={minus} alt="Diminuir quantidade" />
          </button>
          <span>2</span>
          <button>
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