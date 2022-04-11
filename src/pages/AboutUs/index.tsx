import React, {FC} from 'react';
import AboutUsFoto from '../../components/AboutUsFoto';
import AboutUsText from '../../components/AboutUsText';

import './AboutUs.css';

const AboutUs: FC = (props) => {
  return (
    <>
      <div className='aboutUs__content'>
        <AboutUsFoto/>
        <AboutUsText/>
      </div>
      
    </>
  );
}

export default AboutUs;