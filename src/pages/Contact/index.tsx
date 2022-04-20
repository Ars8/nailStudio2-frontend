import React from "react";
import { Button, Collapse } from "antd";

import "./contact.css";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Contact = () => {
  return (
    <div className="contact__block">
      <h1>Адреса и контакты</h1>
      <Collapse accordion>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <Button type="primary" shape="round" size='large'>
          Add appointment
        </Button>
    </div>
  );
};

export default Contact;
