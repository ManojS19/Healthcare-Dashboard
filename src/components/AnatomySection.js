import { Box, Paper, Typography, Button, LinearProgress, Grid, useMediaQuery } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import anatomyImage from '../assets/anotomy-image.png';

// Floating Tag Component
const Tag = ({ top, left, color, icon, label }) => (

  <Box
    sx={{
      position: 'absolute',
      top,
      left,
      bgcolor: color,
      color: '#fff',
      px: 1.5,
      py: 0.5,
      fontSize: { md: 12, xs: 9 },
      borderRadius: 2,
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      transform: 'translate(-50%, -50%)',
      zIndex: 1
    }}
  >
    {icon}
    <Box component="span" sx={{ ml: 0.5 }}>
      {label}
    </Box>
  </Box>
);

// Organ Health Card
const OrganCard = ({ icon, title, progress, color }) => (
  <Paper
    elevation={1}
    sx={{
      px: { md: 3, xs: 2 },
      py: { md: 1, xs: 1.5 },
      borderRadius: 3,
      bgcolor: '#f4f7fb',
      width: "100%",
      boxSizing: 'border-box'
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ color, mr: 1 }}>{icon}</Box>
      <Typography variant="subtitle2" fontWeight="bold" color="#312e81">
        {title}
      </Typography>
    </Box>
    <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block', fontSize: "9px" }}>
      Date: 26 Oct 2021
    </Typography>
    <Box sx={{ mt: 1 }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: '#e5e7eb',
          '& .MuiLinearProgress-bar': {
            backgroundColor: color,
            borderRadius: 4,
          },
        }}
      />
    </Box>
  </Paper>
);

// Main Component
const AnatomyOverlay = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

  return (
    <Grid container spacing={isMobile ? 5 : 7} justifyContent="center" alignItems="center">
      {/* Anatomy Image Section */}
      <Grid item xs={6} md={6} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            width: isMobile ? 200 : 230,
            height: isMobile ? 300 : 350,
            boxShadow: 1,
            bgcolor: '#f4f7fb',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2
          }}
        >
          <Box
            component="img"
            src={anatomyImage}
            alt="Human anatomy model"
            sx={{
              height: isMobile ? 450 : 500,
              width: isMobile ? 130 : 150,
              objectFit: 'contain',
              borderRadius: 2,
              filter: 'drop-shadow(0px 1px 3px rgba(0,0,0,0.1))',
            }}
          />

          {/* Healthy Heart */}
          <Tag
            top={isMobile ? "29%" : "29%"}
            left={isMobile ? "90%" : "88%"}
            color="#3835ac"
            icon={<Box sx={{ fontSize: "15px" }}>❤️</Box>}
            label="Healthy Heart"
          />

          {/* Healthy Leg */}
          <Tag
            top={isMobile ? "64%" : "64%"}
            left={isMobile ? "16%" : "18%"}
            color="#01e0e7"
            icon={<Box sx={{ fontSize: "15px" }}>🦵</Box>}
            label="Healthy Leg"
          />
        </Box>
      </Grid>

      {/* Organ Cards Section */}
      <Grid item xs={6} md={6} sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? 1 : 2.5,
        alignItems: "center",
        justifyContent: 'center',
      }}>
        <OrganCard
          icon={<Box sx={{ fontSize: isMobile ? "22px" : "28px" }}>🫁</Box>}
          title="Lungs"
          progress={30}
          color="#EF4444"
        />
        <OrganCard
          icon={<Box sx={{ fontSize: isMobile ? "22px" : "28px" }}>🦷</Box>}
          title="Teeth"
          progress={60}
          color="#10B981"
        />
        <OrganCard
          icon={<Box sx={{ fontSize: isMobile ? "22px" : "28px" }}>🦴</Box>}
          title="Bone"
          progress={40}
          color="#F97316"
        />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="text"
            size="small"
            sx={{
              textTransform: 'none',
              mt: 0.5,
              color: "#312e81",
              fontSize: "10px",
              mr: isMobile ? 0 : -2
            }}
          >
            Details <ArrowForwardRoundedIcon fontSize='10px' />
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AnatomyOverlay;