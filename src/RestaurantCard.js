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
      <section className="res-card">
        <img
          className="res-logo"
          src={SWIGGY_IMAGE_CLOUDINARY + cloudinaryImageId}
          alt="Restaurant Logo"
        />
        <section className="res-info">
          <h1 className="info res-name">{name}</h1>
          <h5 className="info">{`${cuisines.slice(0, 2).join(", ")}, ...`}</h5>
          <h5 className="info">{avgRating} stars</h5>
          <h5 className="info">{deliveryTime} minutes</h5>
        </section>
      </section>
    </>
  );
};
export default RestaurantCard;
