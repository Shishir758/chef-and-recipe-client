import React from 'react';
import './ExtraSection.css';
import email from '../../assest/email.png'
import customers from '../../assest/customers.png'
import projects from '../../assest/projects.png'
import ribon from '../../assest/ribon.png'

const ExtraSection = () => {
    return (
        <>
            <section>
                <div className='mx-auto mx-25 lg:w-3/4'>
                    <h1 className='text-center font-bold text-2xl mt-10'>Special JP Chef's Achivements</h1>
                    <p className='text-center mb-5'>
                        Chefs are culinary professionals trained in all aspects of food preparation. Their main responsibilities include planning menus, overseeing the kitchen staff, and ensuring that the food meets high-quality standards.
                    </p>
                </div>

                <div className="aboutProject">
                    <div className="projectDiv items-center">
                        <div className="project">
                            <div className="info">
                                <img className="mx-auto mt-1" src={customers} alt="" />
                                <h3>54</h3>
                                <p>Order Running</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="info">
                                <img className="mx-auto mt-1" src={projects} alt="" />
                                <h3>1458</h3>
                                <p>Order Completed</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="info">
                                <img className="mx-auto mt-1" src={ribon} alt="" />
                                <h3>590</h3>
                                <p>Award Winnings</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="info">
                                <img className="mx-auto mt-1" src={email} alt="" />
                                <h3>22578</h3>
                                <p>Email Send</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExtraSection;