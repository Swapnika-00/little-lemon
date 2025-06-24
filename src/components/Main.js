import { useNavigate } from "react-router-dom";
function Main() {
    const navigate = useNavigate();

  return (
    <main>
      <section style={{ display: "flex", alignItems: "center", maxWidth: "900px",margin: "0 auto", padding: "1rem" }}>
        <div className="main-section">
          <h4>Little Lemon</h4>
          <h6>Chicago</h6>
          <p>
            We are a family-owned Mediterranean restaurant,<br />
            focused on traditional<br />
            recipes served with a modern twist.
          </p>
          <button onClick={()=> navigate('/reservetable')}>Reserve a Table</button>
        </div>
        <aside>
          <img
            src="/restauranfood.jpg"
            alt="food item"
            style={{ maxWidth: "300px", borderRadius: "8px"}}
          />
        </aside>
      </section>
    </main>
  );
}
 export default Main;