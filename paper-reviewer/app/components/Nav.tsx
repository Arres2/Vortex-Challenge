"use client";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SupervisedUserCircle } from '@mui/icons-material';
import { HouseSharp } from '@mui/icons-material';
import { PostAdd } from '@mui/icons-material';
import Link from "next/link";
import { DocumentScannerOutlined } from '@mui/icons-material';
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

        <List>

        <ListItem >
            <Link href= {"/upload"}>
              <ListItemButton>
                <ListItemIcon>
                  <PostAdd />
                </ListItemIcon>
                <ListItemText primary={"Crear"} />
              </ListItemButton>
            </Link>
          </ListItem>

        <ListItem >
            <Link href= {"/profile"}>
              <ListItemButton>
                <ListItemIcon>
                  <SupervisedUserCircle />
                </ListItemIcon>
                <ListItemText primary={"Mi Perfil"} />
              </ListItemButton>
            </Link>
          </ListItem>
          
          <ListItem >
            <Link href= {"/dashboard"}>
              <ListItemButton>
                <ListItemIcon>
                  <HouseSharp />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem >
            <Link href= {"/my_edits"}>
              <ListItemButton>
                <ListItemIcon>
                  <DocumentScannerOutlined />
                </ListItemIcon>
                <ListItemText primary={"Mis Ediciones"} />
              </ListItemButton>
            </Link>
          </ListItem>


       
        </List>
  
    
      </Drawer>
      
    </nav>
  );
};
