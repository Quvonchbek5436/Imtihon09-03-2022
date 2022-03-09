import { Box, Typography } from "@mui/material";
import React from "react";
import bak from '../../assets/images/backgrounImgBack.png'
import styled from 'styled-components'


const Wrapper = styled.div`
min-height:100vh;
object-fit:cover;
background-color: rgba(0, 0, 0, 0.3);
    img{
        position: absolute;
        top: 0;
        left: 0;
        z-index:-1;
    }
`

export default function HomeBack() {
    return (
        <Wrapper>
            <Box
                sx={{
                    minHeight: "100vh",
                    position:'relative',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <img style={{width:'100%',height: '100%'}} src={bak} alt=""/>
                <Typography
                    variant="h3"
                    sx={{
                        maxWidth: 900,
                        textAlign: "center",
                        textShadow: "0px 7px 7px rgba(0, 0, 0, 0.7);",
                        lineHeight: 1.5,
                        color: "#fff",
                        fontFamily: "Rozha One, serif",
                        fontSize:'100px'
                    }}
                >
                    BookShop - easy buy books online
                </Typography>
            </Box>
        </Wrapper>
    );
}