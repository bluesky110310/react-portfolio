import * as React from 'react';
import TypographyCaption from '../components/TypographyCaption'

import MediaCard from '../components/MediaCard'
import Deloitte from '../assets/deloitte.jpg'
import Collabera from '../assets/collabera.jpg'
import Momnt from '../assets/momnt.jpg'
import Chatify from '../assets/chatify.jpg'
import Memorial from '../assets/memorial.jpg'
import Invisionapp from '../assets/invisionapp.jpg'
import BizBuySell from '../assets/bizbuysell.png'
import Memorise from '../assets/memorise.png'
import Shopping from '../assets/shopping.png'
import PetPlate from '../assets/petplate.png'
import HelloTax from '../assets/hellotax.png'
import Conectar from '../assets/conectar.png'

const divStyle = {
  width: "85%",
  marginBottom: "50px",
  position: "relative",
  textAlign: "center",
}

export default function About() {
  const actions = [
    /*{
      name: "Share",
      action: handleShare,
    }*/
  ];
  return (
    <div id={"back-to-Portfolio"} style={divStyle}>
      <TypographyCaption>
        Portfolio
      </TypographyCaption>
      <MediaCard actions={actions} imageSrc={BizBuySell}>
        <b>BizBuySell</b>
      </MediaCard>
      <MediaCard actions={actions} imageSrc={Memorise}>
        <b>Memorise</b>
      </MediaCard>
      <MediaCard actions={actions} imageSrc={Shopping}>
        <b>Shopping</b>
      </MediaCard>
      {/* <MediaCard actions={actions} imageSrc={Momnt}>
        Artis Technologies
      </MediaCard>
      <MediaCard actions={actions} imageSrc={Collabera}>
        Collabera
      </MediaCard>
      <MediaCard actions={actions} imageSrc={Deloitte}>
        Deloitte
      </MediaCard> */}
      <MediaCard actions={actions} imageSrc={PetPlate}>
        <b>PetPlate</b>
      </MediaCard>
      <MediaCard actions={actions} imageSrc={HelloTax}>
        <b>HelloTax</b>
      </MediaCard>
      <MediaCard actions={actions} imageSrc={Conectar}>
        <b>Conectar</b>
      </MediaCard>
    </div>
  );
}
