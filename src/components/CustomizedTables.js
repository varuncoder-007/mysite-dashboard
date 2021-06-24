import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Badge from '@material-ui/core/Badge';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Link} from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    fontFamily:"Roboto",
    fontWeight:"bolder",
    fontSize: 16,
    
  },
  body: {
    fontSize: 16,
    fontFamily:"Roboto"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.white,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Management Team', 159, 'All Access', 4, '1 min ago'),
  createData('Procurement Team', 237, 'Restricted Access', 8, '1 min ago'),
  createData('Project Team', 262,'Restricted Access', 16,'1 min ago'),
  createData('IT Team', 305,'Restricted Access', 4, '1 min ago'),
  createData('Super Team', 356, 'All Access', 1, '1 min ago'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,

  },
  badge:{
    fontSize:10,
    minWidth:100,
    backgroundColor: "rgba(39, 174, 96, 0.3)",
    color: "#008000",
  
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Teams</StyledTableCell>
            <StyledTableCell>Access Level</StyledTableCell>
            <StyledTableCell>No of Members</StyledTableCell>
            <StyledTableCell>Last Updated</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <StyledTableRow key={row.name}>
              <StyledTableCell><Link to="/management"><Radio color="black" size="small"/></Link></StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              
              <StyledTableCell> <Badge badgeContent={row.fat}  classes={{ badge: classes.badge }}/> </StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell><VisibilityIcon color="action"/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}