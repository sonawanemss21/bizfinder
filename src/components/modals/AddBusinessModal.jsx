import React, { useState, useRef, useContext, useEffect } from "react";
import { Modal, Box, Typography, Stack, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BusinessContext from "../../store/BusinessContext";
import CustomTextFieldWithLabel from "../ui/CustomTextFieldWithLabel";
import CustomButton from "../ui/CustomButton";
import CustomSelectField from "../ui/CustomSelectField";
import ByteSoft from "../../assets/ByteSoft.jpeg";
import CustomMultilineTextField from "../ui/CustomMultilineTextField";
import { toast } from "react-toastify";
import { useTheme } from "@mui/material/styles";

export default function AddBusinessModal({ open, onClose }) {
  const theme = useTheme();
  const { businesses, addBusiness } = useContext(BusinessContext);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    address: "",
    phone: "",
    website: "",
    image: null,
    description: "",
  });
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Phone must be a 10-digit number.";
    if (!formData.website.trim()) newErrors.website = "Website is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (open) {
      setFormData({
        name: "",
        category: "",
        address: "",
        phone: "",
        website: "",
        image: null,
        description: "",
      });
      setErrors({}); // ✅ Clear errors on modal open
    }
  }, [open]);

  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      // Validation per field
      if (name === "name" && value.trim()) delete updatedErrors.name;
      if (name === "category" && value.trim()) delete updatedErrors.category;
      if (name === "address" && value.trim()) delete updatedErrors.address;
      if (name === "phone" && /^\d{10}$/.test(value))
        delete updatedErrors.phone;
      if (name === "website" && value.trim()) delete updatedErrors.website;

      return updatedErrors;
    });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBusiness = () => {
    if (!validateInputs()) return;

    const newBusiness = {
      id: businesses.length + 1,
      name: formData.name || "Unnamed Business",
      category: formData.category || "other",
      rating: 0,
      address: formData.address || "Not specified",
      phone: formData.phone || "N/A",
      website: formData.website || "#",
      image: formData.image || ByteSoft,
      description: formData.description || "No description provided.",
      isVerified: true,
      reviews: [],
    };

    console.log("new: ", newBusiness);

    addBusiness((prev) => [...prev, newBusiness]);
    toast.success("Business added successfully!");
    onClose();
  };

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
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: theme.palette.primary.default }}
          >
            Add New Business
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack spacing={2}>
          <CustomTextFieldWithLabel
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            error={!!errors.name}
            helperText={errors.name}
          />
          <CustomSelectField
            label="Category"
            value={formData.category}
            onChange={handleCategoryChange}
            options={[
              "IT",
              "electrical contractor",
              "boutique",
              "content creator",
            ]}
          />
          <CustomTextFieldWithLabel
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            error={!!errors.address}
            helperText={errors.address}
          />
          <CustomTextFieldWithLabel
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <CustomTextFieldWithLabel
            label="Website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            error={!!errors.website}
            helperText={errors.website}
          />
          <CustomMultilineTextField
            label="Description"
            name="description"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            onChange={handleChange}
            sx={{
              mt: 1,
              mb: 2,
              backgroundColor: theme.palette.background.grey,
            }}
          />
          {/* <CustomButton variant="outlined" component="label">
            Upload Image
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
            />
          </CustomButton> */}
          {/* {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              style={{ width: "100px", height: "auto", borderRadius: 6 }}
            />
          )} */}
          <CustomButton onClick={handleAddBusiness}>Add Business</CustomButton>
        </Stack>
      </Box>
    </Modal>
  );
}
