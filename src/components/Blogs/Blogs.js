import React from 'react';

const Blogs = () => {
    return (
      <>
      <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Blogs
            </h2>
          </div>
          <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            <div>
              <a href="/" class="mt-2 block">
                <p class="text-xl font-semibold text-gray-900">
                  1. Difference between SQL and NoSQL?
                </p>
                <p class="mt-3 text-base text-gray-500">
                  SQL is the programming language used to interface with
                  relational databases. (Relational databases model data as
                  records in rows and tables with logical links between them).
                  NoSQL is a class of DBMs that are non-relational and generally
                  do not use SQL.
                </p>
              </a>
            </div>

            <div>
              <a href="/" class="mt-2 block">
                <p class="text-xl font-semibold text-gray-900">
                  2. What is JWT, and how does it work?
                </p>
                <p class="mt-3 text-base text-gray-500">
                  JWT Enables a Simple, Useful, Standard Container Format. Level
                  Up Your Auth with Our Guide. Authentication & Authorization
                  are Just 2 of the Many Uses of JWT. Level Up with Our Guide.
                  24/7 Support Coverage. 548% Return on Investment. 100M+ Logins
                  Every Day. What is JWT (JSON Web Token)? JSON Web Token (JWT)
                  is an open standard (RFC 7519) for securely transmitting
                  information between parties as JSON object. It is compact,
                  readable and digitally signed using a private key/ or a public
                  key pair by the Identity Provider(IdP).
                </p>
              </a>
            </div>

            <div>
              <a href="/" class="mt-2 block">
                <p class="text-xl font-semibold text-gray-900">
                  3. What is the difference between javascript and NodeJS?
                </p>
                <p class="mt-3 text-base text-gray-500">
                  JavaScript is a proper high-level programming language used to
                  create web scripts whereas Node.js is a run time environment
                  built on google's v8 engine. JavaScript is executed in the
                  browser whereas using Node.js gives us the ability to execute
                  JavaScript outside the browser. JavaScript can manipulate DOM
                  or add HTML within whereas Node.js doesn’t have the capability
                  to add HTML. JavaScript is mainly used to create front end web
                  applications or develop client-side whereas Node.js is used on
                  the back end development that is server-side development.
                  JavaScript follows the standard of JavaScript when writing
                  programs whereas Node.js is written in C++ while using the v8
                  engine, it runs JavaScript outside the browser.
                </p>
              </a>
            </div>

            <div>
              <a href="/" class="mt-2 block">
                <p class="text-xl font-semibold text-gray-900">
                  4. How does NodeJS handle multiple requests at the same time?
                </p>
                <p class="mt-3 text-base text-gray-500">
                  NodeJS receives multiple client requests and places them into
                  EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an
                  infinite loop that receives requests and processes them.
                  EventLoop is the listener for the EventQueue. If NodeJS can
                  process the request without I/O blocking then the event loop
                  would itself process the request and sends the response back
                  to the client by itself. But, it is possible to process
                  multiple requests parallelly using the NodeJS cluster module
                  or worker_threads module.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default Blogs;