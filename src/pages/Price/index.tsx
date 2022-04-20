import React from "react";
import { Collapse } from "antd";

import "./price.css";

const { Panel } = Collapse;

const text = `Маникюр классический/аппаратный/комбинированный/европейский      600 руб.`
const text1 = `Маникюр`
const price = `600 руб`
const Price = () => {
  return (
    <div className="price__block">
      <Collapse bordered={false} accordion>
        <Panel header={text1} key="1">
          <p>{text}</p>
          <p>{price}</p>
        </Panel>
        <Panel header={text1} key="2">
          <p>{text}</p>
          <p>{price}</p>
        </Panel>
        <Panel header={text1} key="3">
          <p>{text}</p>
          <p>{price}</p>
        </Panel>
        <Panel header={text1} key="4">
          <p>{text}</p>
          <p>{price}</p>
        </Panel>
        <Panel header={text1} key="5">
          <p>{text}</p>
          <p>{price}</p>
        </Panel>
        <Panel header={text1} key="6">
          <p>{text}</p>
          <p>{price}</p>
        </Panel>
        <Panel header={text1} key="7">
          <p>{text}</p>
          <p>{price}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Price;
