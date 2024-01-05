import { useContext } from "react";
import { SWIGGY_IMAGE_CLOUDINARY } from "./constants/constants";
import UserContext from "./constants/UserContext";
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
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <section className="w-72 h-80 rounded-t-2xl  ">
        <img
          className="w-full h-1/2 rounded-t-2xl  hover:scale-90 bg-blend-darken   hover:brightness-50"
          src={SWIGGY_IMAGE_CLOUDINARY + cloudinaryImageId}
          alt="Restaurant Logo"
        />
        <section className="w-full h-1/2 rounded-b-2xl px-3 py-3  shadow-xl text-white hover:scale-110">
          <h1 className="text-orange-800 italic font-bold mb-1">{name}</h1>
          <h5 className="text-stone-400 font-bold">{`${cuisines
            .slice(0, 2)
            .join(", ")}, ...`}</h5>
          <h5 className="text-stone-400 font-bold">{avgRating} stars</h5>
          <h5 className="text-stone-400 font-bold">{deliveryTime} minutes</h5>
          <h5 className="font-bold text-orange-800">User : {loggedInUser}</h5>
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
          <label className="font-bold absolute top-0 left-0  rotate-30 bg-gradient-to-r from-purple-500 to-pink-500 text-white z-10 rounded-2xl p-2">
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
