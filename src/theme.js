import {
  cyan500,
  cyan600,
  deepPurple500,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const MUITHEME = getMuiTheme({
  appBar: {
    color: white,
    textColor: deepPurple500,
    titleFontWeight: typography.fontWeightLight,
    padding: spacing.desktopGutter,
  },
  toolbar: {
    color: deepPurple500,
    backgroundColor: white,
    titleFontWeight: typography.fontWeightLight,
  },
  spacing,
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 300,
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan600,
    primary3Color: grey400,
    accent1Color: deepPurple500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: deepPurple500,
    shadowColor: fullBlack,
  },
});

export default MUITHEME;
