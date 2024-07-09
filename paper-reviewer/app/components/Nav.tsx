"use client";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Router } from 'next/router';

const drawerWidth = 240;


export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          
          <ListItem >
            <Link href= {"/dashboard"}>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem >
            <Link href= {"/upload"}>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Upload"} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem >
            <Link href= {"/dashboard"}>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"Something"} />
            </ListItemButton>
          </ListItem>
       
        </List>
        <Divider />
    
      </Drawer>
      
    </nav>
  );
};
