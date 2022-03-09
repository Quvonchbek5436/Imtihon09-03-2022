import React, {useEffect, useState} from 'react';
import {getBooksByCategory} from "../../api/Api";
import {CircularProgress, Container, Grid} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import book from '../../assets/images/book.png'
import Box from "@mui/material/Box";
import {useNavigate}from 'react-router-dom'
import {setCategory} from "../../redux/actions/booksActions";
import styled from 'styled-components'
import {useSelector} from "react-redux";

const Wrapper = styled.div`
    background-color:#E5E5E5;
    
`

function Catigory(props) {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const getName =(name)=>{
        navigate(`/home/${name}`)
        console.log(name);
        setCategory(name).then(r => r.data);
    }
    useEffect(async () => {


        const obj = await getBooksByCategory();
         setData(obj.data.results);

    }, []);


    return (
            <Wrapper>
                <Container>
                    <Typography sx={{textAlign:'center',paddingTop:'50px'}} variant='h2' component={'h1'}>Categories</Typography>

                    <Grid container spacing={2} py={5}>
                        {   data.length >2 ?
                            data.map((items,index)=>{
                                // console.log(items);
                                return(
                                    <Grid key={index} item xs={12} md={6} lg={4} xl={3}  my={5} >
                                        <Card sx={{height:'100%',paddingTop:'30px',borderRadius:'14px'}} onClick={()=>getName(items.list_name_encoded)}>
                                            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                <CardMedia
                                                    sx={{width:'50px',height:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}
                                                    component="img"
                                                    image={book}
                                                    alt="green iguana"
                                                />
                                            </Box>
                                            <CardContent sx={{textAlign:'center'}}>
                                                <Typography gutterBottom variant="h5" component="div" >
                                                    {items.list_name}
                                                </Typography>

                                            </CardContent>

                                        </Card>
                                    </Grid>

                                )
                            }
                            ):<CircularProgress sx={{mx:'auto',my:4}} />
                        }
                    </Grid>
                </Container>
            </Wrapper>
    );
}

export default Catigory;