import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProviders';
import Marquee from 'react-fast-marquee';
import LazyLoad from 'react-lazyload';


const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
    </div>
  }

  const [detailsData, setDetailsData] = useState([])

  useEffect(() => {
    fetch('https://special-jp-chef-shishir758.vercel.app/detailsData')
      .then(response => response.json())
      .then(data => setDetailsData(data))
  }, [])

  const filteredData = detailsData ? detailsData : detailsData;

  return (
    <>
      <div><Marquee className=''>
        In the world of &nbsp; <b> Japanese cuisine</b>, sharing ingredients with nature elevates cooking into a gesture of gratitude to the divine.
      </Marquee></div>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6 mx-5 items-center'>

        <div>
          <div className="col-md-6 ">
            <div className="w-100">
              <img className="w-100 rounded-md mt-5"
                src="https://www.wapititravel.com/blog/wp-content/uploads/2020/01/sukiyaka_healthy_japan_food.jpg" alt="" />
            </div>
          </div>
        </div>

        <div>
          <h1 className='lg:text-8xl md:text-4xl text-3xl my-4'>Japanese Food</h1>
          <p>In the world of Japanese cuisine, sharing ingredients with nature elevates cooking into a gesture of gratitude to the divine.
            This website communicates Japanese cuisine in its entirety, from cultural background to cooking method framework and a rich variety of cooking utensils.
            Let's experience the depth of Japanese cuisine!</p>
          <div className='text-center md:text-start lg:text-start'>

          </div>
        </div>
      </div>

      <div className=' mx-auto lg:w-3/4'>
        <h1 className='text-center font-bold text-2xl mt-10'>Our Chefs List</h1>
        <p className='text-center mb-5'>
          Chefs are culinary professionals trained in all aspects of food preparation. Their main responsibilities include planning menus, overseeing the kitchen staff, and ensuring that the food meets high-quality standards.
        </p>
      </div>
      <div className='mx-5 grid lg:grid-cols-3 gap-4'>
        {filteredData.map(dData => (
          <div className='bg-gray-100 rounded-md w-full p-6 justify-center align-middle' key={dData.id}>
            <LazyLoad height={200} >
              <img className='rounded-lg h-full' src={dData.picture} alt='' />
            </LazyLoad>
            <p className='font-bold my-2 text-center'>Name: {dData.name}</p>
            <p className='font-bold mb-2'>Experience : {dData.years_of_experience} Years</p>

            <div className='flex gap-8 '>
              <div>
                <p className='font-bold mb-2'>Numbers of recipes: {dData.num_recipes ? dData.num_recipes : 'N/A'}</p>
                <p className='font-bold'>Likes: {dData.likes ? dData.likes : 'N/A'}</p>
              </div>
              <div>
              </div>
            </div>
            <Link to={`/ViewRecipes/${dData.id}`}>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4'>
                View Recipes
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;