import "../styles/section.css"

import hamburguer from "../assets/images/hamburguer.png"

function Section() {
  return (
    <section className="burger-section">
      <img src={hamburguer} alt="hamburguer" />
      <h1>Oferta Picanha Cheddar Bacon</h1>
      <p>
        Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim
      </p>
      <div className="prices-container">
        <h1 className="price">R$31,99</h1>
        <h1 className="price old">R$34,95</h1>
      </div>
    </section>
  )
}

export default Section 