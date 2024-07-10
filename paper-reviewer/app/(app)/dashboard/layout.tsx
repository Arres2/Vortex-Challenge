import type { ReactNode } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Search } from "@mui/icons-material";


interface Props {
  readonly children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
   
      <>
        <AppBar component="nav">
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={""}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                MUI
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
               
                
                <Button  sx={{ color: '#fff' }}>
                    <Search/>
                </Button>
   
            </Box>
            </Toolbar>
        </AppBar>
        {children}
      </>

  );
}
