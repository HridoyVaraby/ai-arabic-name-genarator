import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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
        
        <h1 className="text-3xl font-bold text-emerald-900 mb-6">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service ("Terms", "Terms of Service") govern your relationship with https://aiarabicname.netlify.app website (the "Service") operated by Varabit Web Design and Development ("us", "we", or "our").
            </p>
            <p className="text-gray-700 mb-4">
              Please read these Terms of Service carefully before using the Service.
            </p>
            <p className="text-gray-700">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. 
              These Terms apply to all visitors, users and others who access or use the Service.
            </p>
            <p className="text-gray-700">
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Communications</h2>
            <p className="text-gray-700">
              By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. 
              However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or the instructions provided in any email we send.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Content</h2>
            <p className="text-gray-700 mb-4">
              Our Service allows you to generate Arabic names based on your input. You are responsible for the accuracy and legality of any information you provide.
            </p>
            <p className="text-gray-700">
              You retain any intellectual property rights in the names you generate, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute them in any existing or future media for the purpose of operating and improving the Service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Accounts</h2>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="text-gray-700">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, 
              whether your password is with our Service or a third-party service.
            </p>
            <p className="text-gray-700">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features and functionality are and will remain the exclusive property of Varabit Web Design and Development and its licensors.
            </p>
            <p className="text-gray-700">
              The Service is protected by copyright, trademark, and other laws of both the Bangladesh and foreign countries. 
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Varabit Web Design and Development.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Links To Other Web Sites</h2>
            <p className="text-gray-700 mb-4">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Varabit Web Design and Development.
            </p>
            <p className="text-gray-700">
              Varabit Web Design and Development has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. 
              You further acknowledge and agree that Varabit Web Design and Development shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
            <p className="text-gray-700">
              We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-700">
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. 
              The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            <p className="text-gray-700">
              Varabit Web Design and Development its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. 
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. 
              These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Changes</h2>
            <p className="text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. 
              What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-gray-700">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. 
              If you do not agree to the new terms, please stop using the Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>By email: legal@varabit.com</li>
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

export default TermsOfService;