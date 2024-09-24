// import banner from '../images/Banner1.png';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="flex justify-center flex-col">
      <div className="px-8 pt-4">
        <a href="#portfolio">
          {/* <img src={banner} alt="GAMMA2DOT2" /> */}
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-center flex-wrap mx-auto text-center gap-12">
        <a href="#remaining" onClick={() => handlePageChange('Remaining')} className={currentPage === 'Remaining' ? 'underline underline-offset-8 decoration-stone-400 font-normal' : 'font-light'}>
          <p className="py-1 mb-0  text-2xl sm:text-3xl hover:text-stone-200 text-stone-300 transition">ABOUT</p>
        </a>
        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'underline underline-offset-8 decoration-stone-400 font-normal' : 'font-light'}>
          <p className="py-1 mb-0  text-2xl sm:text-3xl hover:text-stone-200 text-stone-300 transition">PORTFOLIO</p>
        </a>
        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'underline underline-offset-8 decoration-stone-400 font-normal' : 'font-light'}>
          <p className="py-1 mb-0  text-2xl sm:text-3xl hover:text-stone-200 text-stone-300 transition">CONTACT</p>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
