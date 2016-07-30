import {
  blueGrey700,
  blueGrey800,
  pink500,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const MUITHEME = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blueGrey700,
    primary2Color: blueGrey800,
    primary3Color: grey400,
    accent1Color: pink500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: pink500,
    shadowColor: fullBlack,
  },
});

export default MUITHEME
