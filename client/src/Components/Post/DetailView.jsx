import {Box, makeStyles, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Edit, Delete,} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
         padding: '0 100px',
         [theme.breakpoints.down('md')]: {
             padding: 0
         }
    }, 
    image: {
        height: '50vh',
        width: '100%',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        padding: '5px',
        border: '1px solid #878787',
        borderRadius: '10px'
    },
    heading: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            padding: '10px'
        },
        [theme.breakpoints.up('sm')]: {
            padding: '10px'
        }
    },
    detail: {
        [theme.breakpoints.down('md')]: {
            padding: '5px'
        }
    }
}))

const DetailView = () => {
    const classes = useStyles();
    const url = `https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80`;
    return (
        <Box className={classes.container}>
            <img src={url} alt ='banner' className={classes.image} />
            <Box className={classes.icons}>
               <Link to='/update'><Edit className={classes.icon} color="primary"/></Link>
                <Delete className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>Title of the Blog</Typography>
        
        <Box className={classes.subheading}>
            <Typography>Author: <span style={{fontWeight: 600}}>codeforinterview</span></Typography>
            <Typography style={{marginLeft: 'auto'}}>2 Jan 2022</Typography>
        </Box>

        <Typography className={classes.detail}>This is a blog from code for InterviewThis is a blog from code for InterviewThis is a blog from code for InterviewThis is a blog from code for Interview</Typography>
        </Box>
        
    )
}

export default DetailView;