import React from 'react'
import FlippableCard from '../FlippableCard';
import { fuelTypes } from '@/constants';

const FuelTypes = () => {
    return (
        <section id="about" className="my-8 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-black">Fuel Types</h2>
            <div className="container mx-auto flex flex-wrap justify-center gap-6">

                    {fuelTypes.map((type) => {
                        return (
                            <FlippableCard 
                                imagePath={type.route} 
                                description1={type.description1}
                                description2={type.description2}
                                title={type.title}
                            />
                        );
                    })}
            </div>
        </section>
    )
}

export default FuelTypes;
