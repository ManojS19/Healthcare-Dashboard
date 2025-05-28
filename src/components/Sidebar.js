import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatIcon from "@mui/icons-material/Chat";
import SupportIcon from "@mui/icons-material/Support";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
import { navigationItems, toolsItems } from "../data/navigationData";


const iconMap = {
  Dashboard: DashboardIcon,
  Clock: AccessTimeIcon,
  Calendar: CalendarMonthIcon,
  Clipboard: AssignmentIcon,
  BarChart: BarChartIcon,
  Chat: ChatIcon,
  Support: SupportIcon,
  Settings: SettingsIcon,
};

const NavItem = ({ name, icon, active, onClick }) => {
  const IconComponent = iconMap[icon] || HelpOutlineIcon;

  return (
    <ListItem disablePadding sx={{ opacity: active ? 1 : 0.5 }}>
      <ListItemButton
        selected={active}
        onClick={onClick}
        sx={{
          px: 2,
          py: 1,
          borderRadius: 2,
          "&.Mui-selected": {
            backgroundColor: "transparent",
          },
        }}
      >
        <ListItemIcon sx={{ color: active ? "#312e81" : "#1f2937", minWidth: 32 }}>
          <IconComponent sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary={name}
          primaryTypographyProps={{
            fontSize: 14,
            color: active ? "#312e81" : "#1f2937",
            fontWeight: active ? 600 : 400,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <>
      <Box>
        {/* Brand */}
        <Box mb={4} mt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            <span style={{ color: "#06b6d4" }}>Health</span>
            <span style={{ color: "#312e81" }}>care.</span>
          </Typography>
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} size="small">
              <CloseIcon />
            </IconButton>
          )}
        </Box>

        {/* General Section */}
        <Box>
          <Typography
            variant="caption"
            sx={{ px: 2, color: "#9ca3af", fontSize: 12, mb: 1 }}
          >
            General
          </Typography>
          <List>
            {navigationItems.map((item) => (
              <NavItem
                key={item.name}
                name={item.name}
                icon={item.icon}
                active={item.active}
                onClick={isMobile ? handleDrawerToggle : undefined}
              />
            ))}
          </List>
        </Box>

        {/* Tools Section */}
        <Box mt={2}>
          <Typography
            variant="caption"
            sx={{ px: 2, color: "#9ca3af", fontSize: 12, mb: 1 }}
          >
            Tools
          </Typography>
          <List>
            {toolsItems.map((item) => (
              <NavItem 
                key={item.name} 
                name={item.name} 
                icon={item.icon} 
                onClick={isMobile ? handleDrawerToggle : undefined}
              />
            ))}
          </List>
        </Box>
      </Box>

      {/* Settings at Bottom */}
      <Box>
        <Divider sx={{ my: 1 }} />
        <List>
          <NavItem 
            name="Setting" 
            icon="Settings" 
            onClick={isMobile ? handleDrawerToggle : undefined}
          />
        </List>
      </Box>
    </>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            left: 25,
            top: 16,
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: '#f9fafb',
            boxShadow: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {isMobile ? (
        <SwipeableDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: "border-box",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#f9fafb",
              borderRight: "none",
            },
          }}
        >
          {drawerContent}
        </SwipeableDrawer>
      ) : (
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: "border-box",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#f9fafb",
              borderRight: "none",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;