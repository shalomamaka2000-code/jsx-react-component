import { Card, Badge, Button } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "./App.css";

const firstName = "Edema";

function App() {
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <div className="page">
      <Card className="product-card shadow-lg">
        <div className="product-image-wrap">
          <Image />
          <Badge bg="dark" className="price-badge">
            <Price />
          </Badge>
        </div>
        <Card.Body>
          <Name />
          <Description />
          <Button variant="dark" className="buy-button">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>

      <div className="greeting">
        <p className="greeting-text">{greeting}</p>
        {firstName && (
          <img
            className="greeting-image"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=400&q=80"
            alt="Welcome"
          />
        )}
      </div>
    </div>
  );
}

export default App;
