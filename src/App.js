import Categories from "./components/Categories";
import Headers from "./components/Headers";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";
import { useState, useEffect } from 'react';


function App() {
  // https://641559b753d7f60a8cab69c0.mockapi.io/items

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://641559b753d7f60a8cab69c0.mockapi.io/items')
      .then((res) => { return res.json(); })
      .then((arr) => { setItems(arr); });
    return () => {
    };
  }, []);


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
              items.map(obj => <PizzaBlock key={obj.id + Math.random()} {...obj} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
