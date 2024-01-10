import useIntersection from "../../hooks/useIntersection";

const About = () => {
  const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.3, });

    return (
      <section id="about" className="aboutt">
        <div ref={elementRef} className={ isIntersecting ? "bgTitle container show2" : "bgTitle container hidden2" } > 
          <p className="a-title"> Sobre mí👨‍💻</p>
        </div>
        <section ref={elementRef} className={ isIntersecting ? "about container show" : "about container hidden"} >
            <figure className="about__figure">
                <img className="about__img" src="../about.jpg" />
            </figure>
            <article className="about__article">
                <p className="about__description"> Hola, mi nombre es Guillermo Antonio Sandoval Espinoza, soy originario de la ciudad de Mazatlán, México, 
                    me considero un programador entusiasta, siempre en la mejor disposición de colaborar en cualquier tarea o problema que se presente. 
                    Mi pasión es aprender cosas nuevas cada día, a día de hoy poseo conocimientos y habilidades en tecnologías de vanguardia en el
                    del Desarrollo FullStack, en el cual estare muy contento de contribuir para lograr grandes objetivos.
                </p>
            </article>  
        </section>
      </section>
      
    )
  }
  
  export default About
  