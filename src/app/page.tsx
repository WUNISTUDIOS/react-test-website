import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import image from "next/image";

export default function Home() {
  return (
<div>
    <title>Denzel Test</title>
   <link rel="icon" href="favicon.ico"/>
    <main className='bg-white px10'>
      <section className=" bg-blue-700 min-h-screen">
      <nav className="p-10 mb-12 flex justify-between">
        <h1 className='text-xl'>developed by cgidoggs</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl">

            </BsFillMoonStarsFill>
          </li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teel-500 text-white px-4 py-2 rounded-md ml-8" 
          href="#">other portfolio</a></li>
        </ul>
      </nav>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl p-2 text-teal-600 font-medium">Denzel Arthur</h2>
        <h3 className='text-2xl p2'>designer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto'>
        a side project of mine that allows me to practise progamming while incorperating my love and passion for visual effects
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
      <AiFillTwitterCircle>
      </AiFillTwitterCircle>
      <AiFillLinkedin>
      </AiFillLinkedin>
      <AiFillYoutube>
      </AiFillYoutube>
      </div>
      <div className=''>
     

      </div>
      </section>
       
      <section>
        <div>
          <h3 className='text-3xl py-1'>
            services I offer
          </h3>
          <p className='text-md py-2 leading-8 text-gray-800 max-w-xl mx-auto'>
          Wuni also develops educational content for maker spaces and other S.T.E.A.M based learning environments.
          Wuni also develops educational content for maker spaces and other S.T.E.A.M based learning environments.
          Wuni also develops educational content for maker spaces and other S.T.E.A.M based learning environments.
          Wuni also develops educational content for maker spaces and other S.T.E.A.M based learning environments.
          Wuni also develops educational content for maker spaces and other S.T.E.A.M based learning environments.
          </p>

          <p className='text-md py-2 leading-8 text-gray-800 max-w-xl mx-auto'>
          Wuni also develops <span className="text-teal-500"> educational </span> 
          content for maker spaces and other S.T.E.A.M based learning environments.
          Wuni also develops educational content for maker spaces and other S.T.E.A.M based learning environments.
          Wuni also develops educational content for maker spaces and other S.T.E.A.M based learning environments.
          Wuni also develops educational content for maker spaces and other S.T.E.A.M based learning environments.
          Wuni also develops educational content for maker spaces and other S.T.E.A.M based learning environments.
          </p>

        </div>
      </section>

    </main>
    </div>
  )
}