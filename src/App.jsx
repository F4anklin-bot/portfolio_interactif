import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Hero from './components/Hero';
import Footer from './components/Footer';

// 📌 Register le plugin (sinon useGSAP marche pas)
gsap.registerPlugin(useGSAP);

function App() {

  // 📌 Tableau des liens
  const [navList, setNavList] = useState([
    'Accueil',
    'Projets',
    'A propos',
    'Contact',
  ]);

  // 📌 Animation GSAP au chargement
  useGSAP(() => {
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out"
    });
  }, []);
  

  return (
    <div className='bg-black text-white min-h-screen w-screen flex flex-col box-border'>
      <div className='cursor'></div>
      <nav className='fixed my-auto top-0 left-0 right-0 w-full flex justify-between p-7 text-[16px] bg-transparent'>
        <div className='w-1/3'>
          <span className='font-bold text-2xl transition-all duration-500 animate-pulse text-red-500 shadow-2xl shadow-white ml-5 nav-item'>Franklin</span>
        </div>
        <div>
          <div className='bg-amber-400 animate-ping transition-all duration-1000 h-[50px] w-[50px] rounded-[50%] -mr-10'></div>
        </div>
        <div className='w-2/3'>
          <ul className='flex justify-end gap-8'>
            {navList.map((lien, index) => (
              <li 
              key={index} 
              className="nav-item relative inline-block pb-2 cursor-pointer group">
              {lien}
              
              {/* Ligne de soulignement */}
              <span className="absolute top-0 left-0 -bottom-1 h-0.5 w-0 bg-red-500 
                              transition-all duration-500 
                              group-hover:w-full">
              </span>
            </li>
            ))}
          </ul>
        </div>
      </nav>
      <section className='mt-30'>
      <Hero />
      <div className='h-[70px] w-[70px] rounded-[50%] bg-amber-400 animate-ping transition-all duration-1000 absolute left-10 shadow-sm'></div>
      <div className='bg-amber-400 w-[100px] rounded-[50%] animate-ping transition-colors duration-1000 h-[100px] shadow-lg shadow-white focus:outline-none focus:ring-2 focus:ring-pink-200 ml-[110vh]'></div>
      <h1 className='text-4xl white text-center font-extrabold'>Mes compétences</h1>
      <div className='flex justify-around items-center'>
        <div className='flex flex-col gap-2 mx-5 text-center bg-white rounded-lg px-5 py-4 w-[300px] my-10'>
          <h1 className='text-2xl font-bold text-black'>Compétences Frontend</h1>
          <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>HTML</div>
          <div className='bg-blue-300 hover:shadow-sm hover:shadow-blue-500 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2'>CSS</div>
          <div className='bg-blue-300 hover:shadow-sm hover:shadow-blue-500 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2'>JavaScript</div>
          <div className='bg-blue-300 hover:shadow-sm hover:shadow-blue-500 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2'>React</div>
          <div className='bg-blue-300 hover:shadow-sm hover:shadow-blue-500 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2'>Angular</div>
        </div>
        <div className='flex flex-col gap-2 mx-5 my-3 text-center bg-white rounded-lg px-5 py-4 w-[300px] shadow-lg shadow-gray-500 shadow-r-2'>
            <h1 className='text-2xl font-bold text-black'>Compétences Backend</h1>
            <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2  hover:shadow-sm hover:shadow-blue-500'>Node.js</div>
            <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>Django</div>
            <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>PHP</div>
            <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>MySQL</div>
            <div className='bg-blue-300 hover:shadow-sm hover:shadow-blue-500 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2'>Ruby on Rails</div>

        </div>

        <div className='bg-dotted flex flex-col gap-2 mx-5 my-3 text-center bg-white rounded-lg px-5 py-4 w-[300px] shadow-lg shadow-gray-500 shadow-r-2'>
          <h1 className='text-2xl font-bold text-black'>Langages de programmation</h1>
          <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>Python</div>
          <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>Java</div>
          <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2  hover:shadow-sm hover:shadow-blue-500'>C#</div>
          <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>Ruby</div>
          <div className='bg-blue-300 border-l-5 rounded-l-sm border-blue-500 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>C</div>
          
        </div>
      </div>
      <div className='rounded-full h-[45px] w-[45px] justify-center items-center bg-amber-400 animate-ping transition-all duration-1000 absolute left-10 shadow-sm'></div>
      </section>
      <section className=''>
        <h1 className='text-4xl white text-center font-extrabold'>Mes projets</h1>
        <div className=''>
          <div className='rounded-full bg-amber-800 h-[90px] w-[90px] justify-center ml-200 animate-ping transition-all duration-1000'></div>
          <div className='flex'>
          <div className='flex flex-col mb-5 justify-end items-center m-auto rounded-2xl p-2 bg-gradient-to-r from-[#c1121f] via-90% to-[#ff006e] h-[500px] w-[350px] '>
            <h2>Projet 1</h2>
            <p>Description du projet 1</p>
          </div>
          <div className='flex flex-col mb-5 justify-end items-center m-auto rounded-2xl p-2 bg-gradient-to-r from-[#ff006e] via-90% to-[#ffbe0b] h-[500px] w-[350px] '>
            <h2>Projet 1</h2>
            <p>Description du projet 1</p>
          </div>
          <div className='flex flex-col mb-5 justify-end items-center m-auto rounded-2xl p-2 bg-gradient-to-r from-[#ffbe0b] via-90% to-[#fb5607] h-[500px] w-[350px] '>
            <h2>Projet 1</h2>
            <p>Description du projet 1</p>
          </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default App;
