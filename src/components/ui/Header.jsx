import Typewriter from 'typewriter-effect';
import Cubo from '../swiper/Cubo';
import useIntersection from '../../hooks/useIntersection';
 


const Header = () => {
    const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.3, });

    return (
        <div ref={elementRef} className={ isIntersecting ? 'header__box container show' : 'header__box container hidden'} >
                <div className='header__box-info container'>
                        <img className='header__box-img' src='../profileScreenshot.jpg' alt='Img Profile' />
                        <Typewriter
                            options={{
                                strings: [  'Frontend', 
                                            'Backend',    
                                            'Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <div className='header__box-icons'>
                            <a className='header__icon-link' href='https://www.linkedin.com/in/guillemo-sandoval/' target='_blank'>
                                <i className='bx bxl-linkedin' ></i>    
                            </a>
                            <a className='header__icon-gith' href='https://github.com/MemoSan27' target='_blank'>
                                <i className='bx bxl-github' ></i>  
                            </a>
                        </div>
                </div>
                <Cubo />
        </div>
        
      )
    }

export default Header
