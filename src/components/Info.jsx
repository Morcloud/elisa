import Flecha from '../assets/images/down-arrow.svg'
import Laptop from '../assets/images/laptop.png'

import '../components/css/Info.css'

const Info = () => {
    return (
        <section className="bodyPage">
            <article className="bodyPage__first">
                <h4>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles</h4>
                <h5>Aquí hay algunos que me gustaría compartir</h5>
                <figure>
                    <img src={Flecha} alt=""/>
                </figure>
            </article>
            <article className="bodyPage__second">
                <div className="bodyPage__second--info">
                    <h4>leonidasesteban.com</h4>
                    <p>Accede a más de 120 proyectos que te ayudarán a mejorar tus habilidades como desarrollador Front-end</p>
                    <div className="enlaces">
                        <a href="">ver proyecto</a>
                        <a href=""><i className="github"></i> ver código</a>
                    </div>
                </div>
                <figure className="bodyPage__second--img">
                    <img src={Laptop} alt=""/>
                </figure>
            </article>
        </section>
    )
}

export default Info