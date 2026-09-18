const Child = ({ product }) => {
  const { title, image, price, description, category } = product;

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Child;
