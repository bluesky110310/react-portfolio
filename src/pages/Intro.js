import React, { useCallback } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Box, Typography  } from '@mui/material';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesRain from "../particles/particlesRain";

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
    height: "100vh",
}

function Intro(props) {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    const {particleValue} = props;
    
    const selectParitlces = {
        "Rain": particlesRain,
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
                <Typography variant="h1" color="error">Joao David De Souza Alves</Typography>
            </Box>
            <Typography variant="h4" color="green">joaodavidmarketing@gmail.com</Typography>
            <Typography variant="h4" color="green">+1 (303) 731-3397</Typography>
            <Typography variant="h3" color="white">
            <ReactTypingEffect
            text="I'm a Full-stack Developer."
            speed="100"
            eraseDelay="100"
            />
            </Typography>
        </Box>
    );
}

export default Intro;