import React from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import { upcomingSchedule } from "../data/appointmentData";


const UpcomingSchedule = () => {
  return (
    <Box mt={3} sx={{ width: '100%' }}>
    <Typography variant="subtitle1" gutterBottom sx={{ color: "#312e81", fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
      The Upcoming Schedule
    </Typography>
    {Object.entries(upcomingSchedule).map(([day, appointments]) => (
      <Box key={day} mt={1.5}>
        <Typography variant="caption" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
          On {day}
        </Typography>
        <Grid container spacing={1.5} sx={{ margin: 0 }}>
          {appointments.map((app, index) => (
            <Grid item xs={12} sm={6} key={index} sx={{ padding: '8px!important' }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 3,
                  bgcolor: "#E0E7FF",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: '100%'
                }}
              >
                <Box>
                  <Typography variant="body2" fontWeight={600} sx={{ color: "#312e81", fontSize: { xs: '0.8rem', sm: '0.85rem' } }}>
                    {app.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ display: "block", mt: 0.5, color: "#312e81", fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
                  >
                    {app.time}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }}>{app.emoji}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    ))}
  </Box>
  );
};

export default UpcomingSchedule;
