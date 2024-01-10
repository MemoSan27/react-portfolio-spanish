import React from 'react';
import "./lenguajes.css"
import VelocityScroll from './VelocityScroll';
import useIntersection from '../../hooks/useIntersection';

const Lenguajes = () => {

    const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.3, });

    return (
        <div ref={elementRef} className={ isIntersecting ? 'show' : 'hidden'}>
            
            <h3 className='skills__front'>Frontend</h3>
            <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={-4}>
                        <img src='../html.png' alt="" />
                        <img src="../css.png" alt="" />
                        <img src="../js.png" alt="" />
                        <img src="../react.png" alt="" />
                        <img src="../next.png" alt="" />
                        <img src="../socket.png" alt="" />
                </VelocityScroll>
                </section>
            </div>
            <h3>BackEnd</h3>
            <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={4}>
                        <img src="../node.png" alt="" />
                        <img src="../postgres.png" alt="" />
                        <img src="../mysql.png" alt="" />
                        <img src="../mongodb.png" alt="" />
                        <img src="../firebase.png" alt="" />
                        <img src="../express.png" alt="" />
                        <img src="../socket.png" alt="" />
                    </VelocityScroll>
                </section>
            </div>
            <h3>Y Mas Herramientas..</h3>
            <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={-4}>
                        <img src="../git.png" alt="" />
                        <img src="../github.png" alt="" />
                        <img src="../swiper.png" alt="" />
                        <img src="../tailwind.png" alt="" />
                        <img src="../motion.png" alt="" />
                        <img src="../redux.svg" alt="" />
                        
                    </VelocityScroll>
                </section>
            </div>
            <h3></h3>
        </div>
    );
};

export default Lenguajes;