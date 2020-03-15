import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        padding: '10px 30px',
        backgroundColor: '#005005',
      },
      label: {
        color: '#fff',
        fontWeight: 700,
        fontSize: '1rem',
      }
    },
    MuiTextField: {
      root: {
        marginBottom: '15px',
        '&:last-of-type': {
          marginBottom: 0,
        }
      }
    }
  },
  typography: {
    fontSize: 14,
  },
  palette: {
    primary: {
      main: '#2e7d32',
    }
  }
});