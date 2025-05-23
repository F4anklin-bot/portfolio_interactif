import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Shape from './components/Shape';
import { CiLight } from "react-icons/ci";

gsap.registerPlugin(useGSAP);

function App() {

  function handleRotation(){
    
  }
  const [navList] = useState([
    'Accueil',
    'Projets',
    'A propos',
    'Contact',
  ]);

  const [light, setLight] = useState(); 

  const competences_frontend = ["HTML", "CSS", "Javascript", "React", "Angular"];
  const competences_backend = ["Node.js", "Django", "PHP", "MySQL", "Ruby on Rails"];
  const langage_programmation = ["Python", "Java", "C#", "Ruby", "C"];

  useGSAP(() => {
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      duration: 2,
      ease: "power2.out"
    });
  });

  return (
    <div className='bg-black text-white min-h-screen w-full flex flex-col box-border overflow-x-hidden'>
      <nav className='fixed top-0 left-0 right-0 w-full flex justify-between p-7 text-[16px] bg-transparent z-50'>
        <div className='w-1/3'>
          <span className='font-bold text-2xl transition-all duration-1000 animate-pulse text-red-500 shadow-2xl shadow-white ml-5 nav-item'>
            Franklin
          </span>
        </div>
        <div className='w-2/3'>
          <ul className='flex justify-end gap-8'>
            {navList.map((lien) => (
              <li 
                key={lien}
                className="nav-item relative inline-block pb-2 cursor-pointer group"
              >
                {lien}
                <span className="absolute top-0 left-0 -bottom-1 h-0.5 w-0 bg-red-500 
                                transition-all duration-1000 
                                group-hover:w-full" />
              </li>
            ))}
            <button className='bg-transparent rounded-sm text-center flex justify-center items-center p-1 cursor-pointer' onMouseEnter={() =>handleRotation() }><span className='text-yellow-400'><CiLight size={15} /></span></button>
          </ul>
        </div>
      </nav>

      <main className='pt-20 w-full'>
        <section className='relative w-full'>
            <Shape />
            <Shape />
            <Shape />
            <Shape />
            <Shape />
          <Hero />
        </section>

        <section className='py-16 relative w-full px-4'>
          <h1 className='text-4xl text-center font-extrabold mb-12'>Mes compétences</h1>
          <div className='flex flex-wrap justify-center gap-8 max-w-[1400px] mx-auto'>
            {/* Bloc Frontend */}
            <div className='flex flex-col gap-2 text-center bg-white rounded-lg px-5 py-4 w-[300px]'>
              <h2 className='text-2xl font-bold text-black'>Frontend</h2>
              {competences_frontend.map((competence) => (
                <div key={competence} className='bg-black text-white my-2 border-l-4 border-amber-400 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>
                  {competence}
                </div>
              ))}
            </div>

            {/* Bloc Backend */}
            <div className='flex flex-col gap-2 text-center bg-white rounded-lg px-5 py-4 w-[300px]'>
              <h2 className='text-2xl font-bold text-black'>Backend</h2>
              {competences_backend.map((competence) => (
                <div key={competence} className='bg-black text-white my-2 border-l-4 border-amber-400 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>
                  {competence}
                </div>
              ))}
            </div>

            {/* Bloc Langages */}
            <div className='flex flex-col gap-2 text-center bg-white rounded-lg px-5 py-4 w-[300px]'>
              <h2 className='text-2xl font-bold text-black'>Langages</h2>
              {langage_programmation.map((langage) => (
                <div key={langage} className='bg-black text-white my-2 border-l-4 border-amber-400 rounded-lg p-2 hover:shadow-sm hover:shadow-blue-500'>
                  {langage}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-16 relative w-full px-4'>
          <h1 className='text-4xl text-center font-extrabold mb-12'>Mes projets</h1>
          <div className='flex flex-wrap justify-center gap-8 max-w-[1400px] mx-auto'>
            {[1, 2, 3].map((project) => (
              <div 
                key={project}
                className='flex flex-col justify-end items-center rounded-2xl p-2 bg-gradient-to-r from-[#c1121f] via-[90%] to-[#ff006e] h-[500px] w-full max-w-[350px]'
              >
                <h2 className='text-2xl font-bold'>Projet {project}</h2>
                <p className='text-gray-200'>Description du projet {project}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;