function Card({ title, content, price, image }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '70px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
    <img src={image} alt="food items" />
    <div className="card-title">
      <h6>{title}</h6>
      <p style={{color: "#EE9972"}}>{price}</p>
    </div>
      <p style={{color: "black"}}>{content}</p>
    </div>
  );
}
export default Card;