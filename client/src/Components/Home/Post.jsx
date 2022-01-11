import {Box, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 10,
        border: '1px solid #d3cede',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
       fontSize: 18,
       fontWeight: 600 
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})
const Post = () => {
    const classes = useStyles();
    const url = `https://images.unsplash.com/photo-1498050108023-c5249f4df085?`;
    return(
        <Box className={classes.container}>
            <img src={url} alt="wrapper"  className={classes.image}/>
            <Typography className={classes.text}>Music</Typography>
            <Typography className={classes.heading}>Code for Interview</Typography>
            <Typography className={classes.text}>Author: codeforinterview</Typography>
            <Typography className={classes.detail}>Hi from code for Interviewpppppppppppppppppppppppp</Typography>
        </Box>
    )
}

export default Post;
