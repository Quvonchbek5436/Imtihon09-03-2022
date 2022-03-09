import React, {useEffect, useState} from 'react';
import {CardActions, CircularProgress, Container, Grid, Link, Modal} from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import book from "../../assets/images/book_image.png";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {useNavigate, useParams} from "react-router-dom";
import {getBooksCatigoryByCategory} from "../../api/Api";
import Button from "@mui/material/Button";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Libraries(props) {
    const [data, setData] = useState([]);
    const params = useParams()
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const goToLink = (link) =>{
        window.open(`${link}`);
    }

    useEffect(async (category) => {


        const obj = await getBooksCatigoryByCategory(category);
        if (obj.success) setData(obj.data.results.books);

    }, []);
    return (
        <>
            <Container>
                <Typography sx={{textAlign:'center',paddingTop:'50px'}} variant='h2' component={'h1'}>Books in Combined Print & E-Book Fiction</Typography>

                <Grid container spacing={2}>
                    {   data.length >2 ?
                        data.map((items, index) => {
                            return (
                                <Grid key={index} item xs={12} md={6} lg={4} xl={3} my={5}>
                                    <Card sx={{height: '100%',borderRadius:'16px'}}>
                                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <CardMedia
                                                sx={{
                                                    width: '100%',
                                                    height:'400px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                                component="img"
                                                image={items.book_image}
                                                alt="green iguana"
                                            />
                                        </Box>
                                        <CardContent sx={{textAlign:'center', }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {items.title}
                                            </Typography>
                                            <Typography gutterBottom variant="p" component="div">
                                                {items.author}
                                            </Typography>
                                            <Typography sx={{color:'#FE8537'}} gutterBottom variant="h5" component="div">
                                                {items.price} $
                                            </Typography>

                                        </CardContent>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'end',
                                        }}>
                                            <CardActions sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                mb: '20px',
                                                gap:'20px',
                                            }}>
                                                <Button sx={{paddingY:'13px',paddingX:'24px',borderRadius:'16px'}} onClick={()=>goToLink(items.buy_links[0].url)} variant="contained" size="small">Buy</Button>
                                                <Button sx={{paddingY:'13px',paddingX:'24px',borderRadius:'16px'}} onClick={()=>handleOpen} variant="contained" size="small">More</Button>
                                            </CardActions>
                                        </Box>
                                    </Card>

                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <CardMedia
                                                    sx={{
                                                        width: '100%',
                                                        height:'400px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                    component="img"
                                                    image={items.book_image}
                                                    alt="green iguana"
                                                />
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    {items.description}
                                                </Typography>
                                            </Box>
                                        </Modal>
                                </Grid>


                            )
                        }):<CircularProgress sx={{mx:'auto',my:4}} />
                    }

                </Grid>
            </Container>
        </>
    );
}

export default Libraries;