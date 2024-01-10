import "./portafolio.css"
import data from "../../portafolio.json";
import Typewriter from 'typewriter-effect';
import useIntersection from "../../hooks/useIntersection";

const Portafolio = () => {
    const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.05, });

    return (
      <section id='portafolio' className='portafolio'>
          <h4 ref={elementRef} className={ isIntersecting ? 'portafolio__title show' : 'portafolio__title hidden'  } > 💼 Portafolio 💼 </h4>
          <h4 ref={elementRef} className={ isIntersecting ? "portafolio__grid-title container show" : "portafolio__grid-title container hidden" } ><Typewriter
                            options={{
                                strings: ['Proyectos:', 
                                            ],
                                autoStart: true,
                                loop: true,
                                
                            }}
                        /> </h4>
  
          <section ref={elementRef} className={ isIntersecting ? "portafolio__grid container show" : "portafolio__grid container hidden"} >
            <div className="portafolio_container">
              {
                data.map((page) => (
                    <div key={ page.url } className="card btn">
                        <div className="face front">
                            <img src={page.image} alt="" />
                            <p>{ page.title }</p>
                        </div>
                        <div className="face back">
                            <div>
                                <p className="cart_title">{ page.title }</p>
                                <p className="cart_description">{ page.description }</p>
                            </div>
                            <a href={page.url} target="_blank" className="link btn">
                                Go to site
                            </a>
                        </div>
                    </div>
                ))
              }

            </div>
          </section>
      </section>
    )
  }
  
  export default Portafolio
  