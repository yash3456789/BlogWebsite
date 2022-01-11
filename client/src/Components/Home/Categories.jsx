import { Button, makeStyles, Table, TableHead, TableCell, TableRow, TableBody} from '@material-ui/core';
import {categories} from '../../Constants/data';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    create: {
        margin: 20,
        background: '#6495ED',
        color: '#fff',
        width: '86%'
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

const Categories = () => {
    const classes = useStyles();
    return (
       <>
       <Link  to='/create' className={classes.link}> <Button variant='contained' className={classes.create}>Create Blog</Button></Link>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>All Categories</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
               {
                   categories.map(category => (
                    <TableRow>
                       <TableCell>{category}</TableCell>
                    </TableRow>
                   ))
               }
            </TableBody>
        </Table>
       </>
    )
}

export default Categories;
