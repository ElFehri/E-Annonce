import React from 'react';
import { Link } from 'react-router-dom';

import Header from './parts/Header';
import Sidebar from './parts/Sidebar';


const HomeComponent = () => {
  return (
    <div>
    <Header/>
    <div className="flex flex-col h-screen">
     <Sidebar/>
        <main className="w-10/12 ml-auto bg-gray-100 ">
              
      <section className="relative flex-grow flex flex-col justify-center items-center py-20 bg-gradient-to-b from-gray-900 to-gray-700">
        <div className="max-w-5xl px-6 sm:px-10 lg:px-20 flex flex-col items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Deepth compnay</h1>
          <p className="text-xl mb-8 text-center"><b>Deepth</b> is a company that offers a unique and innovative platform for generating online publications and managing them in a user-friendly manner. </p>
          <Link to="/services" className="bg-white text-blue-900 font-bold py-2 px-6 rounded-full hover:bg-blue-900 hover:text-white focus:outline-none focus:shadow-outline">
            Learn More
          </Link>
        </div>
        <img src={'/images/logo.svg'} alt="Banner" className="w-full object-cover object-center max-h-96 mt-16" />
      </section>

      {/* Services section */}
<section className="bg-white py-20">
  <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
    <h2 className="text-4xl font-bold mb-8">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <img src={'/images/create.png'} alt="Service 1" className="w-full h-48 object-cover object-center" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold mb-2">publications</h3>
          <p className="text-gray-600 text-base mb-2">Our platform is designed to help businesses of all sizes generate high-quality content, including articles, blog posts, and multimedia content, and publish it online with ease. </p>
          <Link to="/services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Learn More
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <img src={'/images/publish.jpeg'} alt="Service 2" className="w-full h-48 object-cover object-center" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold mb-2">powerful</h3>
          <p className="text-gray-600 text-base mb-2">With our powerful publishing tools and intuitive content management system, you can focus on creating great content while we take care of the rest.</p>
          <Link to="/services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Learn More
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <img src={'/images/payment.jpeg'} alt="Service 2" className="w-full h-48 object-cover object-center" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold mb-2">Templating</h3>
          <p className="text-gray-600 text-base mb-2"> Whether you're looking to promote your products or services, share your expertise with others, or simply connect with your audience, Deepth makes it simple and straightforward to get your message out there.</p>
          <Link to="/services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Learn More
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <img src={'/images/easy.jpeg'} alt="Service 2" className="w-full h-48 object-cover object-center" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold mb-2">Easy</h3>
          <p className="text-gray-600 text-base mb-2">With our easy-to-use website creation tools, you can quickly and easily create a professional-looking website that reflects your brand and engages your audience.</p>
          <Link to="/services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

            {/* Testimonials section */}
            <section className="bg-gray-100 py-20">
              <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="px-6 py-4">
                      <p className="text-gray-600 text-base mb-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum justo ut purus euismod, sit amet facilisis erat fringilla. Quisque congue purus eget est tincidunt, id sagittis enim tincidunt."</p>
                      <p className="text-gray-800 font-semibold mb-2">- John Doe</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="px-6 py-4">
                      <p className="text-gray-600 text-base mb-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum justo ut purus euismod, sit amet facilisis erat fringilla. Quisque congue purus eget est tincidunt, id sagittis enim tincidunt."</p>
                      <p className="text-gray-800 font-semibold mb-2">- Jane Doe</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="px-6 py-4">
                      <p className="text-gray-600 text-base mb-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum justo ut purus euismod, sit amet facilisis erat fringilla. Quisque congue purus eget est tincidunt, id sagittis enim tincidunt."</p>
                      <p className="text-gray-800 font-semibold mb-2">- Bob Smith</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/*  Contact section */ }
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="John" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
              Email Address
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="johndoe@example.com" />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
              Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="grid-message" placeholder="Enter your message here..."></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
  </main>
  </div>
  <footer className="bg-gray-800 text-gray-300 py-8 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
    <div className="flex items-center mb-4 md:mb-0">
      <img src="/images/logo.svg" alt="Company logo" className="h-8 mr-2" />
      <h2 className="text-2xl font-bold">Deepth Company</h2>
    </div>
    <nav className="flex flex-wrap items-center text-lg justify-center md:justify-end">
      <a href="#" className="px-4 py-2 mx-2 hover:text-white">Home</a>
      <a href="#" className="px-4 py-2 mx-2 hover:text-white">About</a>
      <a href="#" className="px-4 py-2 mx-2 hover:text-white">Products</a>
      <a href="#" className="px-4 py-2 mx-2 hover:text-white">Contact</a>
    </nav>
    <div className="flex items-center mt-4 md:mt-0">
      <a href="#" className="mx-2 hover:text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
      <a href="#" className="mx-2 hover:text-white"><i className="fab fa-twitter fa-lg"></i></a>
      <a href="#" className="mx-2 hover:text-white"><i className="fab fa-instagram fa-lg"></i></a>
    </div>
  </div>
  <div className="max-w-6xl mx-auto mt-8 text-center">
    <p>&copy; 2023 Deepth. All rights reserved.</p>
  </div>
</footer>
</div>

);
}
export default HomeComponent;