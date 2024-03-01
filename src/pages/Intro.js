import React, { useCallback } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Box, Typography  } from '@mui/material';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesStar from "../particles/particlesStar";

const particleStyle = {
    heigth: "100vh",
    width: "100vh",
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "-1",
}

const introStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
}

function Intro(props) {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    const {particleValue} = props;
    
    const selectParitlces = {
        "Rain": particlesStar,
        }
    return (
        <Box style={introStyle}>
            <Particles options={selectParitlces[particleValue]} init={particlesInit} style={particleStyle}/>
            <Box style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                pointerEvents: "none"
            }}>
                <Typography variant="h1" color="goldenrod" style={{ fontWeight: 'bold', fontFamily: 'cursive' }}>Joao Souza</Typography>
            </Box>
            <Typography variant="h4" color="paleturquoise" style={{ fontFamily: 'cursive', margin: 10 }}>joaosouza.dev1@outlook.com, <span style={{ color: 'hotpink' }}>+1 (321) 421-0338</span></Typography>
            <Typography variant="h4" color="yellowgreen" style={{ margin: 10 }}>Patriotiv st. b. 5, ap. 17, Kyiv, Ukraine, 03620</Typography>
            <Typography variant="h3" color="snow" style={{ fontFamily: 'cursive' }}>
            <ReactTypingEffect
            text="Senior Software Engineer"
            speed="200"
            eraseDelay="100"
            />
            </Typography>
        </Box>
    );
}

export default Intro;