import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { days, featuredAppointments } from "../data/appointmentData";
import UpcomingSchedule from "./UpcomingSchedule";

const CalendarView = () => {
  const [selectedTime, setSelectedTime] = useState("Tues-09:00");

  return (
    <Box sx={{
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box',

    }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" width='100%' mb={3}>
        <Typography fontWeight={600} variant="body2" color="#312e81">
          October 2021
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton size="small" sx={{ color: "#312e81" }}>
            <ArrowBackRoundedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: "#312e81" }}>
            <ArrowForwardRoundedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Calendar Grid */}
      <Grid container spacing={1} sx={{ width: '100%', margin: 0 }}>
        {days.map((day) => (
          <Grid item xs={12 / 7} key={day.date} sx={{ minWidth: 0, padding: '4px!important' }}>
            <Box
              textAlign="center"
              sx={{
                backgroundColor: day.date === 26 ? "#eef2ff" : "transparent",
                borderRadius: 2,
                py: 1,
                width: '100%',
              }}
            >
              <Typography
                variant="caption"
                color={day.disabled ? "#cbd5e1" : "#312e81"}
                sx={{ fontWeight: 500, fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
              >
                {day.day}
              </Typography>
              <Typography
                variant="body1"
                color={day.disabled ? "#cbd5e1" : "#312e81"}
                fontWeight={600}
                sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
              >
                {day.date}
              </Typography>

              {/* Time slots */}
              <Box display="flex" flexDirection="column" alignItems="center" gap={0.5} mt={1}>
                {day.times.map((time, index) =>
                  time ? (
                    <Box
                      key={index}
                      onClick={() => setSelectedTime(`${day.day}-${time}`)}
                      sx={{
                        fontSize: { xs: '0.65rem', sm: '0.7rem' },
                        px: 1,
                        py: 0.25,
                        borderRadius: "12px",
                        cursor: "pointer",
                        backgroundColor:
                          selectedTime === `${day.day}-${time}` ? "#3835ac" : "transparent",
                        color:
                          selectedTime === `${day.day}-${time}` ? "#fff" : "#312e81",
                        boxShadow:
                          selectedTime === `${day.day}-${time}`
                            ? "0 2px 6px rgba(0, 0, 0, 0.2)"
                            : "none",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          backgroundColor:
                            selectedTime === `${day.day}-${time}`
                              ? "#3835ac"
                              : "#e2e8f0",
                        },
                        width: '100%',
                        textAlign: 'center'
                      }}
                    >
                      {time}
                    </Box>
                  ) : (
                    <Box key={index} height={24}></Box>
                  )
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Featured Appointments */}
      <Grid container spacing={{ md: 5, xs: 2 }} mt={2} sx={{ width: '100%', }}>
        {featuredAppointments.map((item) => (
          <Grid item md={4} xs={12} key={item.type} sx={{}}>
            <Box
              sx={{
                py: 1,
                px: 2,
                borderRadius: 3,
                boxShadow: 2,
                bgcolor: item.color,
                color: item.textColor || "#fff",
                width: '100%',
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                  {item.type}
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  {item.icon}
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ opacity: 0.8, mt: 0.5, fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
                {item.time}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
                {item.doctor}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Upcoming Schedule */}
      <UpcomingSchedule />
    </Box>
  );
};

export default CalendarView;