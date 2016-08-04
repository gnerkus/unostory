import {
  cyan500,
  cyan600,
  orange500,
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
    titleFontWeight: typography.fontWeightLight,
    padding: spacing.desktopGutter,
  },
  spacing,
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 300,
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan600,
    primary3Color: grey400,
    accent1Color: orange500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: orange500,
    shadowColor: fullBlack,
  },
});

export default MUITHEME;
