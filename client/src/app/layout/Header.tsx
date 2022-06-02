import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'

interface Props {
  darkMode : boolean;
  handleThemeChange : () => void;
}

const Header = ({darkMode, handleThemeChange} : Props) => {
  return (
    <AppBar position='static' sx= {{mb: 5}}>
        <Toolbar>
            <Typography variant='h6'>
                RE-STORE
            </Typography>
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </Toolbar>
    </AppBar>
  )
}

export default Header       