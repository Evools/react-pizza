import Categories from "./components/Categories";
import Headers from "./components/Headers";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import pizzas from './pizzas.json';
import "./scss/app.scss";


function App() {
  return (
    <div className="wrapper">
      <Headers />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map(obj => <PizzaBlock key={ obj.id + Math.random() } { ...obj } />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
