import React from "react";

const Blog = () => {
  return (
    <div className="">
      <section className="dark:bg-teal-400 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-12 lg:px-16 xl:px-32 divide-teal-700">
            <details open="">
              <summary className="py-2 outline-none text-purple-700 cursor-pointer focus:underline">
                What is the purpose of react router ?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  ReactJS Router is mainly used for developing Single Page Web
                  Applications. React Router is used to define multiple routes
                  in the application. When a user types a specific URL into the
                  browser, and if this URL path matches any 'route' inside the
                  router file, the user will be redirected to that particular
                  route.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none  text-purple-700 cursor-pointer focus:underline">
                How does context API work..?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The React Context API is a way for a React app to effectively
                  produce global variables that can be passed around. This is
                  the alternative to "prop drilling" or moving props from
                  grandparent to child to parent, and so on. Context is also
                  touted as an easier, lighter approach to state management
                  using Redux.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none text-purple-700 cursor-pointer focus:underline">
                What is useRef() hooks in react .?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Essentially, useRef is like a “box” that can hold a mutable
                  value in its .current property. You might be familiar with
                  refs primarily as a way to access the DOM. If you pass a ref
                  object to React with useRef(), React will set its .current
                  property to the corresponding DOM node whenever that node
                  changes.
                </p>
                <p>
                  React hooks allow us to use state and other React features
                  inside functional components — a huge improvement over
                  managing state in class components. Perhaps not as popular as
                  useState and useEffect, useRef is a nifty hook that has some
                  important use cases.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
