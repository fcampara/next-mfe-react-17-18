import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme()

const Context = (props) => {
  const { children } = props
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default Context
