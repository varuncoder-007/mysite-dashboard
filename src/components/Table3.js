import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import Switch from "@material-ui/core/Switch";


import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from '@material-ui/core/FormGroup';


const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
    badge: {
      fontSize: 10,
      minWidth: 100,
      backgroundColor: "rgba(39, 174, 96, 0.3)",
      color: "#008000",
    },
  });

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 40,
      height: 24,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 20,
      height: 20,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[500],
      opacity: 100,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    fontFamily: "Roboto",
    fontWeight: "bolder",
    fontSize: 16,
  },
  body: {
    fontSize: 16,
    fontFamily: "Roboto",
  },
}))(TableCell);
// const useRowStyles = makeStyles({
//   root: {
//     "& > *": {
//       borderBottom: "unset",
//     },
//   },
// });

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: true,
    antoine: false,
    last: false
  });
  const { gilad, jason, antoine,last } = state;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <RemoveCircleOutlineRoundedIcon fontSize="small"/>
            ) : (
              <AddCircleOutlineOutlinedIcon fontSize="small"/>
            )}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>

              <StyledTableCell>
                
                <Badge
                  badgeContent={row.calories}
                  classes={{ badge: classes.badge }}
                />
              </StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
              <StyledTableCell>
                <IOSSwitch/>
              </StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="subtitle2" gutterBottom component="div">
              All aspects in the bidding module
              </Typography>
              <Table size="small" aria-label="purchases">
                
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right">
                    
                    </StyledTableCell>
                  </TableRow>
            
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <StyledTableCell component="th" scope="row">
                        
                      </StyledTableCell>
                      <StyledTableCell>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Access Control</FormLabel>
                          <RadioGroup aria-label="gender" name="gender1">
                            <FormControlLabel
                              value="female"
                              control={<Radio size="small" color="primary" />}
                              label={
                                <Typography variant="body2">All Access</Typography>
                              }
                            />
                            
                            <FormControlLabel
                              value="male"
                              control={<Radio size="small" color="primary" />}
                              label={
                                <Typography variant="body2">Restricted Access</Typography>

                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <FormControl
                          component="fieldset"
                          
                        >
                          <FormLabel component="legend">
                            Restrictions
                          </FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={gilad}
                                  color="primary"
                                  name="gilad"
                                  size="small"
                                  onChange={handleChange}
                                />
                              }
                              label={<Typography variant="body2">View items in access</Typography>}
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={jason}
                                  color="primary"
                                  size="small"
                                  name="jason"
                                  onChange={handleChange}
                                />
                              }
                              label={<Typography variant="body2">Edit items in access</Typography>}
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                    size="small"
                                  checked={antoine}
                                  color="primary"
                                  name="antoine"
                                  onChange={handleChange}
                                />
                              }
                              label={<Typography variant="body2">Create items in access</Typography>}
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                    size="small"
                                  checked={last}
                                  color="primary"
                                  name="antoine"
                                  onChange={handleChange}
                                />
                              }
                              label={<Typography variant="body2">Delete items in access</Typography>}
                            />
                          </FormGroup>
                          
                        </FormControl>
                      </StyledTableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
    createData(
        "Budget",
        "All Access",
        "View | Create| Edit| Delete",
        "1 min ago"
      ),
      createData("Bidding", "No Access", "-", "1 min ago"),
      createData(
        "Vendor Portal",
        "Restricted Access",
        "View | Create",
        "1 min ago"
      ),
      createData(
        "Purchase Order/Work Order",
        "Restricted Access",
        "View | Create",
        "1 min ago"
      ),
      createData(
        "Organisational Profile",
        "All Access",
        "View | Create| Edit| Delete",
        "1 min ago"
      ),
      createData("Permission & Access Control", "No Access", "-", "1 min ago"),
];

function Table3() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small">
      <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Department/RoleName</StyledTableCell>
            <StyledTableCell>Access Level</StyledTableCell>
            <StyledTableCell>Summary</StyledTableCell>
            <StyledTableCell>Last Updated</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Table3;
