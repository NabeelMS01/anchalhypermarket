"use client";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface IReview {
  name: string;
  img: string;
  review: string;
  date: string;
  rating: number; // rating out of 5
}

const GoogleReview = ({ name, img, review, date, rating }: IReview) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-amber-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={`${name}'s profile picture`}
          referrerPolicy="no-referrer"
          className="w-11 h-11 rounded-full object-cover bg-gray-100"
        />
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 truncate">
            {name}
          </h3>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
      </div>
      <div className="flex items-center gap-0.5 mt-3 text-sm">
        {renderStars()}
      </div>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-5">
        {review}
      </p>
    </div>
  );
};

export default GoogleReview;
