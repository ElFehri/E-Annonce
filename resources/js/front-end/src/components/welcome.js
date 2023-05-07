import React from 'react';
import { Link } from 'react-router-dom';
import Header from './parts/Header';

const Welcome = () => {
    const authenticated = false;
  return (
     <div> 
        <Header/>
      

        <main className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500">
                Bienvenue au E-Annonce de <br /> FSM
                </span>
            </h1>
            <div className="mt-12">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg uppercase tracking-wide">
                Découvrir les annonces
                </button>
            </div>
        </main>


      
<footer class="fixed bottom-0 right-0 left-0  rounded-sm shadow  bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">FSM-UMI</a> Faculte des sciences
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="www.fs-umi.ac.ma" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  );
};

export default Welcome;
