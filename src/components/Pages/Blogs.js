import React from 'react';

const Blogs = () => {
    return (
        <div>
            blog page
            <div className="flex flex-col w-full border-opacity-50">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
    <h1 className="text-3xl">1. Difference between SQL and NoSQL</h1>
    <h6 className="text-xl">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h6>
  </div>
  <div className="divider">And</div>
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
    <h1 className="text-3xl">2. What is JWT, and how does it work?</h1>
    <p className='text-xl'>JWT Enables a Simple, Useful, Standard Container Format. Level Up Your Auth with Our Guide. Authentication & Authorization are Just 2 of the Many Uses of JWT. Level Up with Our Guide. 24/7 Support Coverage. 548% Return on Investment. 100M+ Logins Every Day. What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
  </div>
  <div className="divider">And</div>
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
    <h1 className='text-3xl'>3. What is the difference between javascript and NodeJS?</h1>
    <h6 className='text-xl'>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google's v8 engine. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser. JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML. JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development. JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</h6>
  </div>
  <div className="divider">And</div>
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
    <h1 className='text-3xl'>4. How does NodeJS handle multiple requests at the same time?</h1>
    <h6 className='text-xl'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</h6>
  </div>
</div>
        </div>
    );
};

export default Blogs;