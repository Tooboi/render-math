// import { useEffect, useState } from 'react'
// import { ReactComponent as Github } from '../images/github.svg';
// import { ReactComponent as Insta } from '../images/insta.svg';
// import { ReactComponent as Linked } from '../images/linked.svg';
// import { ReactComponent as Artststion } from '../images/artstation.svg';
export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div onClick={scrollToTop} className="flex justify-between static bottom-0 w-full px-8 pb-4">
      <div className="h-full">
        <p className="text-stone-700 select-none mt-3">© All Rights Reserved</p>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:animate-pulse w-8 h-8 stroke-stone-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>
      </div>
      <div className=" text-center flex justify-center py-2">
      {/* <a href="https://www.artstation.com/gamma2dot2" target="_blank" rel="noreferrer">
          <Artststion className="w-6 mx-2 fill-stone-700 hover:fill-stone-600 hover:scale-105 transition-all active:scale-100" />
        </a>
        <a href="https://www.instagram.com/gamma2dot2/" target="_blank" rel="noreferrer">
          <Insta className="w-6 mx-2 fill-stone-700 hover:fill-stone-600 hover:scale-105 transition-all active:scale-100" />
        </a>
        <a href="https://www.linkedin.com/in/joshua-pica-4194111b5/" target="_blank" rel="noreferrer">
          <Linked className="w-6 mx-2 fill-stone-700 hover:fill-stone-600 hover:scale-105 transition-all active:scale-100" />
        </a>
        <a href="https://github.com/Tooboi" target="_blank" rel="noreferrer">
          <Github className="w-6 mx-2 fill-stone-700 hover:fill-stone-600 hover:scale-105 transition-all active:scale-100" />
        </a> */}
      </div>
    </div>
  );
}
