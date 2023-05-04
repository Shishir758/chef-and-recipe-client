import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ViewRecipes = () => {
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState([]);
  const [viewRecipes, setViewRecipes] = useState(null);
  const [rating, setRating] = useState(0)

  useEffect(() => {
    fetch('https://special-jp-chef-shishir758.vercel.app/detailsData')
      .then(response => response.json())
      .then(data => setDetailsData(data))
  }, []);

  useEffect(() => {
    const matchingDetails = detailsData.find(detail => detail.id == id);
    setViewRecipes(matchingDetails);
  }, [detailsData, id]);

  if (!viewRecipes) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6 mx-5 items-center'>
        <div>
          <div className="col-md-6 ">
            <div className="w-100">
              <img className="w-1/2 mx-auto rounded-md mt-5"
                src={viewRecipes.picture} alt="" />
            </div>
          </div>
        </div>

        <div>
          <h1 className='lg:text-4xl md:text-2xl text-2xl my-4'> Name : {viewRecipes.name}</h1>
          <p><span className='font-bold'>Likes:</span> {viewRecipes.likes} </p>
          <p><span className='font-bold'>Number of Recipes:</span> {viewRecipes.num_recipes} </p>
          <p><span className='font-bold'>Year of Experience:</span> {viewRecipes.years_of_experience} </p>
          <p><span className='font-bold'>Description:</span> {viewRecipes.description}</p>
          <div className='text-center md:text-start lg:text-start'>
          </div>
        </div>
      </div>

      <div className='grid content-center items-center mt-10'>
        <h1 className='text-center text-3xl'>Recipes of--- {viewRecipes.name}</h1>
        {viewRecipes.recipes.map(data => (
          <div className='lg:flex justify-center items-center mx-5 my-10 mt-2' key={data.id}>
            <img className="lg:w-1/4 lg:h-1/4 mx-auto rounded-md mt-5 mr-5" src={data.picturefood} alt="" />
            <div className='mt-5'>
              <h1 className='lg:text-4xl md:text-2xl text-2xl my-4'>{data.name}</h1>
             
             <div className='flex-grow-1 flex items-center'>
             <Rating style={{ maxWidth: 125 }} value={data?.rating} readOnly />
             
             <span className='font-bold ms-2'> {data?.rating}</span> 
             </div>
             
              <p><span className='font-bold'>Number of Recipes:</span> {data.ingredients.map(s => (<li>{s}</li>))} </p>
              <p><span className='font-bold'>Cooking Method:</span> {data.cookingMethod} </p>

              <button className='btn disabled:hover:bg-blue-400 '
                onClick={() => {
                  toast.success('The recipe is your favorite');
                  document.getElementById(`fav-btn-${data.name}`).disabled = true;}}
                id={`fav-btn-${data.name}`}>Favorite
              </button>
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ViewRecipes;
