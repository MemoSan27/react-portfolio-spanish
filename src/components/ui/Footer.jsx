

const Footer = () => {
  return (
    <>
        <h2 className='footer__text container'> Gracias por su visita!! 😊</h2>
        <h2 className='footer__text container'> Más opciones de contacto: </h2>
       <div className='header__box-icons flex container'>
            <a className='header__icon-link' href='https://www.linkedin.com/in/guillemo-sandoval/' target='_blank'>
                <i className='bx bxl-linkedin' ></i>    
            </a>
            <a className='header__icon-gith' href='https://github.com/MemoSan27' target='_blank'>
                <i className='bx bxl-github' ></i>  
            </a>
            <a className='header__icon-what' href='https://wa.me/+526699418129' target='_blank'>
                <i className='bx bxl-whatsapp'></i>
            </a>
            <a className='header__icon-gmail' href='mailto:memo2705@gmail.com' target='_blank'>
                <i className='bx bxl-gmail' ></i>
            </a>
        </div>
        <h2 className='footer__text container'> Hecho con ❤️ por Guillermo Sandoval.</h2> 
    </>
  )
}

export default Footer
