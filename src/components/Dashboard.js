import {
  Box,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";

import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import ActivityChart from "./ActivityChart";

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <Box sx={{
        flex: 1,
        overflow: 'auto',
        width: '100%'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '100%',
          width: '100%'
        }}>
          {/* Left Content Area */}
          <Box sx={{
            px: { xs: 2, md: 3 },
            width: { xs: '100%', md: '50%' },
            py: { xs: 2, md: 3 },
            boxSizing: 'border-box'
          }}>
            {/* Search Bar */}
            <Box display="flex" justifyContent="center" alignItems="center" mb={4} sx={{ width: "100%", mt: { xs: 8, md: 0 } }}>
              <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    '& fieldset': {
                      borderColor: '#E2E8F0',
                    },
                    '&:hover fieldset': {
                      borderColor: '#CBD5E1',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#3835aa',
                    },
                  },
                  maxWidth: { xs: '100%', sm: '500px' },
                  width: '100%'
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="medium" sx={{ color: "gray.500" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <NotificationsIcon fontSize="medium" sx={{ color: "#3835aa" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" fontWeight={600} mb={4} sx={{ color: "#312e81" }}>
                Dashboard
              </Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}>
              <AnatomySection />
              <ActivityChart />
            </Box>
          </Box>

          {/* Right Sidebar */}
          <Box sx={{
            width: { xs: '100%', md: '50%' },
            bgcolor: '#f4f7fb',
            px: { xs: 2, md: 3 },
            py: { xs: 2, md: 3 },
            borderLeft: { md: '1px solid #e2e8f0' },
            boxSizing: 'border-box',

          }}>
            <Box display="flex" justifyContent="flex-end" width="100%" gap={2} mb={3}>
              <IconButton sx={{
                bgcolor: "#01e0e7",
                color: "white",
                "&:hover": { bgcolor: "#00b6bb" },
                borderRadius: 2,
                width: "40px",
                height: "40px",
                fontSize: "28px"
              }}>
                🧑🏻‍🦱
              </IconButton>
              <IconButton sx={{
                bgcolor: "#3832a3",
                color: "white",
                "&:hover": { bgcolor: "#2d2786" },
                borderRadius: 2,
                width: "40px",
                height: "40px"
              }}>
                <AddIcon sx={{ fontSize: "15px" }} />
              </IconButton>
            </Box>

            <CalendarView />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;