import React, { useState } from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Base from "../layout/Base";
import CustomDropdown from "../ui/CustomDropdown";
import CustomButton from "../ui/CustomButton";
import CustomSearchBar from "../ui/CustomSearchBar";
import HomeContent from "./HomeContent";
import AddBusinessModal from "../modals/AddBusinessModal";
import PrimaryButton from "../ui/PrimaryButton";
import { FaRobot } from "react-icons/fa";
import ChatWindow from "./ChatWindow";
export default function HomePage() {
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Base>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            px: 4,
            py: 2,
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          {/* Left: Category Dropdown */}
          <Box
            sx={{
              width: { xs: "40%", sm: "200px" },
              flexShrink: 0,
            }}
          >
            <CustomDropdown
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                width: { xs: "40%", sm: "200px" },
                flexShrink: 0,
              }}
            />
          </Box>

          {/* Right: Button + Search */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "flex-end",
              alignItems: isMobile ? "stretch" : "center",
              gap: 2,
            }}
          >
            <CustomButton onClick={() => setOpen(true)}>
              <AddIcon />
              Add Business
            </CustomButton>

          </Box>
        </Box>

        {/* Bottom Section - Fills Remaining Space */}
        <HomeContent category={category} />
        <AddBusinessModal open={open} onClose={() => setOpen(false)} />
        {/* AI Chatbot Button */}
        <Box sx={{ position: "absolute", bottom: 30, right: 70 }}>
          <PrimaryButton
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
            }}
            onClick={() => setShowChatbot(true)}
          >
            <FaRobot fontSize={27} style={{ marginRight: "12px" }} />
            <Typography variant="title" fontSize={17}>
              AI Chatbot
            </Typography>
          </PrimaryButton>
          <ChatWindow
            open={showChatbot}
            onClose={() => setShowChatbot(false)}
          />
        </Box>
      </Box>
    </Base>
  );
}
