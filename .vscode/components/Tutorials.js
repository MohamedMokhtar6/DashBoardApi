import React from 'react';
import './Tutorials.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardOfCourse from './CardOfCourse';



function Tutorials() {
  return (
    <div>
        <Box className="head">
            <Typography variant='h2'>Your Gate To Enter Machine Learning World</Typography>
        </Box>
        <Grid container columnSpacing={1} rowSpacing={1} className="containerGrid">
                <CardOfCourse CourseName="Neural Network" CourseDuration="2" CourseLessons="28" />
                <CardOfCourse CourseName="Classification" CourseDuration="5" CourseLessons="40" />
                <CardOfCourse CourseName="SVM" CourseDuration="2.5" CourseLessons="32" />
                <CardOfCourse CourseName="Linear Regression" CourseDuration="3" CourseLessons="35" />
                <CardOfCourse CourseName="Multi Class Classification" CourseDuration="1" CourseLessons="15" />
            </Grid>
    </div>
  )
}

export default Tutorials