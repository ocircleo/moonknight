import React from 'react';
import ReactStars from "react-rating-stars-component";
const Reviews = ({ data }) => {
    console.log('ola')
    console.log(data)
    return (
        <div className="pt-3 border-2 rounded p-2">
            <div className="md:flex md:justify-between">
                <div className="md:flex gap-8 ">
                    <img className="w-20 h-20 rounded-lg" src={data.userImg} alt="" />
                    <h3 className="text-xl font-medium pt-4">{data.name}</h3>
                </div>
                <div className="flex gap-4">
                    <div><ReactStars count={data?.rating || 4} size={24} activeColor="#ffd700" /></div>
                </div>
            </div>


            <div >
                <p className="text-lg text-gray-400 ">It was popularised in the 1960s with the release of Letraset sheets containing LoremIpsum passages,
                    and more recently with desktop publishing software like Aldus
                    PageMakerincluding versions of Lorem Ipsum.It was popularised in the 1960s</p>
            </div>
        </div>
    );
};

export default Reviews;