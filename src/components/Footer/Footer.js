import React from 'react';
import styled from 'styled-components'
import Box from "@mui/material/Box";
import logo from '../../assets/images/Logo.png'
import algorismic from '../../assets/images/Algorismic.png'
import {Container, Link} from "@mui/material";


const FooterWrapper = styled.div`
min-height:204px;
display:flex;
justify-content:space-between;
align-items:center;
background-color:#C4C4C4;
max-width:1920px;
`

function Footer(props) {
    return (
        <FooterWrapper>
            <Container  sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
                <Box>
                    <img src={logo} alt=""/>
                </Box>
                <Box>
                    <Link to={'#'}><img src={algorismic} alt=""/></Link>
                </Box>
            </Container>
        </FooterWrapper>
    );
}

export default Footer;