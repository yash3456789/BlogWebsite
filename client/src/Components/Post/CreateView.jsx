import { useState } from 'react';
import {Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../../Service/api';

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
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10px'
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        marginTop: 50,
        fontSize: 18,
        border: 'none',
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'All',
    createDate: new Date()
}

const CreateView = () => {
    const classes = useStyles();
        const url = `https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80`;
       const navigate = useNavigate(); 

    const [post, setPost] = useState(initialValues);

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const savePost = async () => {
        await createPost(post);
        navigate('/')
    }
    
        return(
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="banner"/>
            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="action"/>

                <InputBase
                onChange={(e) => handleChange(e)}
                placeholder="title"
                 className={classes.textField}
                 name="title"
                 />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </FormControl>

            <TextareaAutosize
               minRows={5}
               placeholder='Tell your story...'
               className={classes.textarea}
               onChange={(e) => handleChange(e)}
               name="description"
            />
        </Box>
    )
}

export default CreateView;