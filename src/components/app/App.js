import './App.css';
import ProductsList from '../productsList/ProductsList';
import ProductsCreate from '../productsCreate/ProductsCreate';

function App() {
  return (
    <div className="App">
      <ProductsList />
      <ProductsCreate />
    </div>
  );
}

export default App;
