import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { chartData, colorMap, days } from "../data/activityChartData";


const ActivityChart = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 4,
        backgroundColor: "#F4F7FB",
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden"
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" mb={2} flexWrap="wrap">
        <Typography fontWeight={600} sx={{ color: "#312e81" }}>
          Activity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          3 appointments this week
        </Typography>
      </Box>

      {/* Chart Container */}
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#D3D3D3",
            borderRadius: "3px",
          },
        }}
      >
        {/* Chart */}
        <Box
          display="flex"
          justifyContent={isSmallScreen ? "flex-start" : "space-between"}
          gap={isSmallScreen ? 2 : 0}
          minWidth={isSmallScreen ? "600px" : "none"}
          sx={{
            px: isSmallScreen ? 1 : 0,
            pb: 1 
          }}
        >
          {chartData.map((dayBars, i) => (
            <Box 
              key={i} 
              display="flex" 
              flexDirection="column" 
              alignItems="center"
              sx={{
                width: isSmallScreen ? "60px" : "auto",
                flexShrink: 0
              }}
            >
              <Box 
                display="flex" 
                gap={isSmallScreen ? "3px" : "4px"} 
                height={80} 
                alignItems="flex-end"
              >
                {dayBars.map((bar, j) => (
                  <Box
                    key={j}
                    sx={{
                      width: isSmallScreen ? 3 : 4,
                      height: `${bar.height}px`,
                      borderRadius: 5,
                      backgroundColor: colorMap[bar.color],
                    }}
                  />
                ))}
              </Box>
              <Typography 
                variant="caption" 
                mt={1} 
                color="text.secondary"
                sx={{
                  fontSize: isSmallScreen ? "0.65rem" : "0.75rem"
                }}
              >
                {days[i]}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ActivityChart;
