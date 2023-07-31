import * as React from 'react';
import TypographyCaption from '../components/TypographyCaption'

import MediaCard from '../components/MediaCard'
import Deloitte from '../assets/deloitte.jpg'
import Collabera from '../assets/collabera.jpg'
import Momnt from '../assets/momnt.jpg'
import Chatify from '../assets/chatify.jpg'
import Memorial from '../assets/memorial.jpg'
import Invisionapp from '../assets/invisionapp.jpg'

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
        <MediaCard actions={actions} imageSrc={Momnt}>
        Artis Technologies
        </MediaCard>
        <MediaCard actions={actions} imageSrc={Collabera}>
        Collabera
        </MediaCard>
        <MediaCard actions={actions} imageSrc={Deloitte}>
        Deloitte
        </MediaCard>
        <MediaCard actions={actions} imageSrc={Chatify}>
        Chatify
        </MediaCard>
        <MediaCard actions={actions} imageSrc={Invisionapp}>
        Invision App
        </MediaCard>
        <MediaCard actions={actions} imageSrc={Memorial}>
        Memorial Frontend
        </MediaCard>
    </div>
  );
}
