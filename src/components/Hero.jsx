import './css/Hero.css'

const Hero = () => {
    return (
        <section className='Hero'>
            <div className="Hero__text">
                <p className="Hero__text--saludo">
                    ¡Hola a todos!
                </p>
                <h1>Soy Elisa</h1>
                <p className="Hero__text--info">
                    Una Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.
                </p>
            </div>
            <div className="Hero__img"></div>
        </section>
    )
}

export default Hero