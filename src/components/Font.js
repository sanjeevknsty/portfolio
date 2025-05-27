import { styled } from '@mui/material/styles';
import { TableCell, TableContainer } from '@mui/material';

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
fontFamily: '"Orbitron", sans-serif',
// fontSize: 30,
fontWeight:900,
color: '#aaa',
fontSize: '4rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',
  maxWidth: '100%',
  padding:5,
  position: 'relative',
  zIndex: 1,
  transition: 'color 0.4s ease-in-out',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#aaa',
    zIndex: -11,
    transition: 'top 0.5s ease-in-out',
  },

  '&:hover': {
    color: 'black',
  },
  '&:hover::before': {
    top: '0',
  },
}));

export const CustomTableContainer = styled(TableContainer)(({ theme }) => ({
  marginLeft: '5%',
//   marginTop: theme.spacing(4),
fontFamily: '"Orbitron", sans-serif',
 color: 'white',
 fontSize: '3rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
//   textAlign: 'left',

  width: '90%',

  
}));
