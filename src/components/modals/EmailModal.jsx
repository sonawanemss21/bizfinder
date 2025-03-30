import { useState, useRef } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  useTheme,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextFieldWithLabel from "../ui/CustomTextFieldWithLabel";
import CustomMultilineTextField from "../ui/CustomMultilineTextField";
import CustomButton from "../ui/CustomButton";
import ElectricalContractorDetails from "./ElectricalContractorDetails";
import BoutiqueDetails from "./BoutiqueDetails";
import ContentCreatorDetails from "./ContentCreatorDetails";
import ITDetails from "./ITDetails";
import { toast } from "react-toastify";

export default function EmailModal({ open, onClose, business }) {
  const theme = useTheme();
  const [specificDetails, setSpecificDetails] = useState({});

  const emailRef = useRef();
  const contactRef = useRef();
  const detailsRef = useRef();

  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateContact = (contact) => {
    return /^\d{10}$/.test(contact);
  };

  const handleEmail = () => {
    const email = emailRef.current?.value.trim() || "";
    const contact = contactRef.current?.value.trim() || "";
    const details = detailsRef.current?.value.trim() || "";

    let valid = true;

    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email. a@g.c format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!contact || !validateContact(contact)) {
      setContactError("Please enter a valid 10-digit contact number.");
      valid = false;
    } else {
      setContactError("");
    }

    if (!valid) return;

    const combinedData = {
      email,
      contact,
      additionalDetails: details,
      ...specificDetails,
    };

    console.log("Collected form data:", combinedData);
    toast.success("Email sent successfully !");
    onClose();
  };

  let displayContent = null;
  if (business.category === "IT") {
    displayContent = <ITDetails onDataChange={setSpecificDetails} />;
  } else if (business.category === "electrical contractor") {
    displayContent = (
      <ElectricalContractorDetails onDataChange={setSpecificDetails} />
    );
  } else if (business.category === "boutique") {
    displayContent = <BoutiqueDetails onDataChange={setSpecificDetails} />;
  } else if (business.category === "content creator") {
    displayContent = (
      <ContentCreatorDetails onDataChange={setSpecificDetails} />
    );
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 500 },
          p: 4,
          borderRadius: 4,
          background: theme.palette.background.blur,
          backdropFilter: "blur(20px)",
          border: `1px solid ${theme.palette.border.modal}`,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          color: theme.palette.primary.main,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: theme.palette.primary.default }}
          >
            Email Us
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{ color: theme.palette.primary.main }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack spacing={2} sx={{ mb: 2 }}>
          <CustomTextFieldWithLabel
            inputRef={emailRef}
            label="Email"
            required
            error={!!emailError}
            helperText={emailError}
          />
          <CustomTextFieldWithLabel
            inputRef={contactRef}
            label="Contact Number"
            required
            error={!!contactError}
            helperText={contactError}
          />
          <CustomMultilineTextField
            inputRef={detailsRef}
            label="Additional Details"
            variant="outlined"
            multiline
            rows={2}
            fullWidth
            placeholder="Write your review here..."
            sx={{
              mt: 1,
              mb: 2,
              backgroundColor: theme.palette.background.grey,
            }}
          />
        </Stack>

        {displayContent}

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
          <CustomButton
            onClick={handleEmail}
            variant="contained"
            // sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.primary.main }}
          >
            Email Us
          </CustomButton>
          <CustomButton
            onClick={onClose}
            variant="outlined"
            sx={{ backgroundColor: theme.palette.tertiary.main }}
          >
            Cancel
          </CustomButton>
        </Box>
      </Box>
    </Modal>
  );
}
