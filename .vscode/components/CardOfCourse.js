import React from 'react';
import './CardOfCourse.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import image from'../img/neural.png';
import Button from '@mui/material/Button';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Grid from '@mui/material/Grid';

function CardOfCourse(props) {
  return (
    <>
        <Grid item xs={5} sm={4} md={3}>
        <Card  className="card" sx={{minWidth:200,minHeight:269}}>
                <CardContent>
                    <Box className='container'>
                    <Typography gutterBottom variant="h5">
                        {props.CourseName}
                    </Typography>
                    <img src={image} alt="img"/>
                    </Box>
                    <Divider/>
                    <List>
                        <ListItem >
                        <ListItemIcon >
                            <WatchLaterIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText secondary={props.CourseDuration +" Hours"}/>
                        </ListItem>
                        <ListItem >
                        <ListItemIcon >
                            <PlayCircleOutlineIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText secondary={props.CourseLessons +" Lessons"}/>
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions>
                    <Button size="small">Start</Button>
                </CardActions>
            </Card>
        </Grid>
    </>
  )
}

export default CardOfCourse