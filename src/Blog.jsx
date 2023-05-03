import React from 'react';
import Footer from './Footer';
import Header from './Header';

const blog = () => {

  return (
    <><Header></Header>
      <div className="mt-5" id="download ">
        <h4 className="mb-5 text-center font-bold">
          FAQ of Assignment Ten(10)
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 d-flex items-center mr-6 ml-6">

          <div className="col-md-6">
            <div className="w-100">
              <img
                className="w-100"
                src="https://october.eu/wp-content/uploads/2019/07/FAQs.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">

            <div className="mt-5">
              <h5 className='font-bold'>1. Tell us the differences between uncontrolled and controlled components.</h5>
              <p className="text-justify">
                In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
              </p>
              <br></br>
              <h5 className='font-bold'>2. How to validate React props using PropTypes?</h5>
              <p className="text-justify">
                React PropTypes validators:<br />
                1. any : The prop can be of any data type.<br />
                2. bool : The prop should be a Boolean.<br />
                3. number : The prop should be a number.<br />
                4. string : The prop should be a string.<br />
                5. func : The prop should be a function.<br />
                6. array : The prop should be an array.<br />
                7. object : The prop should be an object.
              </p>
              <br></br>
              <h5 className='font-bold'>3. Tell us the difference between nodejs and express js.</h5>
              <p className="text-justify">
                Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
              </p>
              <br></br>
              <h5 className='font-bold'>4. What is a custom hook, and why will you create a custom hook?</h5>
              <p className="text-justify">
                Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default blog;