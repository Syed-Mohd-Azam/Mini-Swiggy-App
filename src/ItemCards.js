import ItemCard from "./ItemCard";
const ItemCards = ({ itemCards }) => {
  return (
    <>
      {itemCards?.map(({ card: { info } }) => (
        <ItemCard key={info.id} info={info} />
      ))}
    </>
  );
};
export default ItemCards;
