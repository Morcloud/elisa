import './css/Hero.css'
import Person from '../assets/images/person.png'
import Telefono from '../assets/images/telefono.svg'
import Correo from '../assets/images/mail.svg'
import Insta from '../assets/images/insta.svg'
import Twitter from '../assets/images/twitter.svg'

const Hero = () => {
    return (
      <section className="Hero">
        <div className="Hero__text">
          <p className="Hero__text--saludo">¡Hola a todos!</p>
          <h1>Soy Elisa</h1>
          <p className="Hero__text--info">
            Una Frontend Developer que le encanta implementar diseños que
            inspiran y atraen a las personas.
          </p>
          <div className="Hero__text--iconos">
            <figure className="icono">
              <img src={Telefono} alt="Teléfono" />
            </figure>
            <figure className="icono">
              <img src={Correo} alt="" />
            </figure>
            <figure className="icono">
              <img src={Insta} alt="" />
            </figure>
            <figure className="icono">
              <img src={Twitter} alt="" />
            </figure>
          </div>
        </div>
        <div className="Hero__img">
          <img src={Person} alt="" />
        </div>
      </section>
    );
}

export default Hero