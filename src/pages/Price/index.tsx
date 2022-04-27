import React from "react";
import { Collapse } from "antd";

import "./price.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPriceItems } from "../../store/ducks/price/selectors";
import { fetchPrice } from "../../store/ducks/price/actionCreators";
import { filterPriceCategory } from "../../services/filterPriceCategory";

const { Panel } = Collapse;

const Price: React.FC = () => {

  const dispatch = useDispatch();
  const price = useSelector(selectPriceItems);

  const price1 = filterPriceCategory(price, "Маникюр");
  const price2 = filterPriceCategory(price, "Педикюр");
  const price3 = filterPriceCategory(price, "Покрытие");
  const price4 = filterPriceCategory(price, "Дизайн (за 1 ноготь)");
  const price5 = filterPriceCategory(price, "Наращивание ногтей");
  const price6 = filterPriceCategory(price, "Укрепление и SPA-уход");
  const price7 = filterPriceCategory(price, "Дополнительные услуги");

  React.useEffect(() => {
    dispatch(fetchPrice());
  }, [dispatch]);

  return (
    <div className="price__block">
      <img
        src="https://images.unsplash.com/photo-1600427150683-348f588e815c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5haWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <Collapse bordered={false} accordion>
        <Panel header="Маникюр" key="1">
          {price1.map((item) => (
            <p className="price__item" key={item.description}>
              <div>{item.description}</div> <div>{item.cost} {item.currency}</div>
            </p>
          ))}
        </Panel>
        <Panel header="Педикюр" key="2">
          {price2.map((item) => (
            <p className="price__item" key={item.description}>
              <div>{item.description}</div> <div>{item.cost} {item.currency}</div>
            </p>
          ))}
        </Panel>
        <Panel header="Покрытие" key="3">
          {price3.map((item) => (
            <p className="price__item" key={item.description}>
              <div>{item.description}</div> <div>{item.cost} {item.currency}</div>
            </p>
          ))}
        </Panel>
        <Panel header="Дизайн (за 1 ноготь)" key="4">
          {price4.map((item) => (
            <p className="price__item" key={item.description}>
              <div>{item.description}</div> <div>{item.cost} {item.currency}</div>
            </p>
          ))}
        </Panel>
        <Panel header="Наращивание ногтей" key="5">
          {price5.map((item) => (
            <p className="price__item" key={item.description}>
              <div>{item.description}</div> <div>{item.cost} {item.currency}</div>
            </p>
          ))}
        </Panel>
        <Panel header="Укрепление и SPA-уход" key="6">
          {price6.map((item) => (
            <p className="price__item" key={item.description}>
              <div>{item.description}</div> <div>{item.cost} {item.currency}</div>
            </p>
          ))}
        </Panel>
        <Panel header="Дополнительные услуги" key="7">
          {price7.map((item) => (
            <p className="price__item" key={item.description}>
              <div>{item.description}</div> <div>{item.cost} {item.currency}</div>
            </p>
          ))}
        </Panel>
      </Collapse>
    </div>
  );
};

export default Price;
