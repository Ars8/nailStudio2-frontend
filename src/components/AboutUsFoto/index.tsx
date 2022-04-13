import { Image } from 'antd';
import React, {FC} from 'react';

import './AboutUsFoto.css'

const AboutUsFoto: FC = (props) => {
  return (
    <>
      <Image
        className="aboutUsFoto"
        preview={false}
        src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
    </>
  );
}

export default AboutUsFoto;