import { SWIGGY_IMAGE_CLOUDINARY } from "./constants/constants";
const RestaurantCard = ({
  restaurant: {
    info: {
      name,
      cloudinaryImageId,
      cuisines,
      avgRating,
      sla: { deliveryTime },
    },
  },
}) => {
  return (
    <>
      <section className="w-60 h-64 rounded-t-2xl hover:scale-90 ">
        <img
          className="w-full h-1/2 rounded-t-2xl hover:skew-y-6"
          src={SWIGGY_IMAGE_CLOUDINARY + cloudinaryImageId}
          alt="Restaurant Logo"
        />
        <section className="bg-gray-50 w-full h-1/2 rounded-b-2xl px-2 py-1">
          <h1 className="text-orange-800 italic font-bold mb-1">{name}</h1>
          <h5 className="text-stone-400 font-bold">{`${cuisines
            .slice(0, 2)
            .join(", ")}, ...`}</h5>
          <h5 className="text-stone-400 font-bold">{avgRating} stars</h5>
          <h5 className="text-stone-400 font-bold">{deliveryTime} minutes</h5>
        </section>
      </section>
    </>
  );
};
export default RestaurantCard;
