import React from 'react'
import './Footer.scss'
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className="container ">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="footer__links text-center">
                        <a href="#"><i className="fas fa-envelope"></i></a>
                        <a href="https://github.com/sammyadewale1805" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="www.linkedin.com/in/samuel-adewale-2060a71b6
" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-center">
                    <p className="footer__copy">Copyright &copy; {year} Sahib Singh</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer