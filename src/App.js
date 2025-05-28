import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: { xs: 'column', md: 'row' },
      height: "100%",
      width: '100%',
    }}>
      {/* Sidebar - hidden on mobile, shown on desktop */}
      <Box sx={{
        width: { md: '250px' },
        flexShrink: 0,
        display: { xs: 'none', md: 'block' }
      }}>
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        width: '100%'
      }}>
        <Box component="main" sx={{
          flex: 1,
          width: '100%',
        }}>
          <Dashboard />
        </Box>
      </Box>

      {/* Mobile Sidebar - shown only on mobile */}
      <Box sx={{
        display: { xs: 'flex', md: 'none' },
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1000
      }}>
        <Sidebar mobile />
      </Box>
    </Box>
  );
}

export default App;