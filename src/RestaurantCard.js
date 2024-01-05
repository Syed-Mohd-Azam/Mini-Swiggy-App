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
      <section className="w-60 h-64 rounded-t-2xl  ">
        <img
          className="w-full h-1/2 rounded-2xl mb-2 hover:scale-90 bg-blend-darken shadow-xl  hover:brightness-50"
          src={SWIGGY_IMAGE_CLOUDINARY + cloudinaryImageId}
          alt="Restaurant Logo"
        />
        <section
          style={{ backgroundColor: "#f0f0f0" }}
          className="w-full h-1/2 rounded-2xl px-2 py-1 hover:skew-y-6 shadow-xl"
        >
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
// Higher Order Component

export const withPromotedLabel = (RestaurantCard) => {
  return ({ restaurant }) => {
    return (
      <>
        <section className="relative">
          <label className="font-bold absolute top-0 left-0 p-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white z-10 rounded-lg">
            {restaurant?.info?.aggregatedDiscountInfoV3?.header}{" "}
            {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}
          </label>
          <RestaurantCard restaurant={restaurant} />
        </section>
      </>
    );
  };
};
export default RestaurantCard;
