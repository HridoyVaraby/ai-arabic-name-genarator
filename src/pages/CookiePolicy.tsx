import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold text-emerald-900 mb-6">Cookie Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Cookie Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, 
              your choices regarding cookies and further information about cookies.
            </p>
            <p className="text-gray-700">
              This Cookie Policy should be read together with our Privacy Policy which can be found at <Link to="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</Link>.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, 
              to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. 
              We also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
            </p>
            <p className="text-gray-700">
              For more general information on cookies, please read <a href="https://www.cookieconsent.com/what-are-cookies/" className="text-emerald-600 hover:underline">"What Are Cookies"</a>.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies 
              without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure 
              whether you need them or not in case they are used to provide a service that you use.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Disabling Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). 
              Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. 
              Disabling cookies will usually result in also disabling certain functionality and features of the this site. 
              Therefore it is recommended that you do not disable cookies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">The Cookies We Set</h2>
            
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">Account related cookies</h3>
            <p className="text-gray-700 mb-4">
              If you create an account with us then we will use cookies for the management of the signup process and general administration. 
              These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
            </p>
            
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">Login related cookies</h3>
            <p className="text-gray-700 mb-4">
              We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. 
              These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
            </p>
            
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">Site preferences cookies</h3>
            <p className="text-gray-700 mb-4">
              In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. 
              In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Third Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
            </p>
            
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">Google Analytics</h3>
            <p className="text-gray-700 mb-4">
              This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. 
              These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
            </p>
            <p className="text-gray-700 mb-4">
              For more information on Google Analytics cookies, see the official Google Analytics page.
            </p>
            
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">Social Media</h3>
            <p className="text-gray-700">
              Our website may use social media features, such as the Facebook Like button, and Twitter, LinkedIn, and other widgets. 
              These features may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the feature to function properly. 
              Social media features and widgets are hosted by their respective companies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">More Information</h2>
            <p className="text-gray-700 mb-4">
              Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
            </p>
            <p className="text-gray-700">
              However if you are still looking for more information then you can contact us through one of our preferred contact methods:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>By email: cookies@varabit.com</li>
              <li>By visiting this page on our website: <a href="https://varabit.com/contact" className="text-emerald-600 hover:underline">https://varabit.com/contact</a></li>
            </ul>
          </section>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            &copy; {currentYear} Varabit Web Design and Development. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;