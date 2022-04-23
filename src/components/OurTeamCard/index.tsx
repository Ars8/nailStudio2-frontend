import { Card } from 'antd'
import React from 'react'
import { NailMasterProp } from '../NailMaster';

import './OurTeamCard.css'

const { Meta } = Card;

const OurTeamCard: React.FC<NailMasterProp> = ({fullname, email, img, position, id}:NailMasterProp):React.ReactElement => {
    
  return (
    <div className="ourTeamCard__content">
        <Card
            className="ourTeamCard__item"
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={img} />}
        >
            <Meta title={fullname} description={position} />
        </Card>     
    </div>
  )
}

export default OurTeamCard;