import { Box, Typography, CircularProgress } from "@mui/material";
import BusinessCard from "../business/BusinessCard";
import BusinessContext from "../../store/BusinessContext";
import { useContext, useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
const ITEMS_PER_BATCH = 5;

export default function HomeContent({ category }) {
  const theme = useTheme();
  const { businesses } = useContext(BusinessContext);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef();
  const sentinelRef = useRef();

  const filteredBusinesses =
    category !== "all"
      ? businesses.filter((b) => b.category === category) 
      : businesses;

  useEffect(() => {
    setVisibleCount(ITEMS_PER_BATCH);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [category]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + ITEMS_PER_BATCH, filteredBusinesses.length)
            );
            setIsLoading(false);
          }, 500); // simulate load delay
        }
      },
      {
        root: contentRef.current,
        threshold: 1.0,
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [filteredBusinesses, isLoading]);

  const visibleBusinesses = filteredBusinesses.slice(0, visibleCount);

  return (
    <Box
      ref={contentRef}
      sx={{
        flex: 1,
        // p: 4,
        overflowY: "auto",
        marginX: "auto",

        // Custom scrollbar styling
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.secondary.main, // Deep Blue
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: theme.palette.secondary.main, // Slightly darker blue
        },

        // Remove scrollbar arrows
        "&::-webkit-scrollbar-button": {
          display: "none",
          height: 0,
          width: 0,
        },

        // For Firefox
        scrollbarWidth: "thin",
        scrollbarColor: `${theme.palette.secondary.main} transparent`,
      }}
    >
      {visibleBusinesses.length > 0 ? (
        visibleBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))
      ) : (
        <Typography variant="body1" color="text.secondary">
          No businesses found for this category.
        </Typography>
      )}

      {/* Sentinel & Loader */}
      {visibleBusinesses.length < filteredBusinesses.length && (
        <Box
          ref={sentinelRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 80,
          }}
        >
          {isLoading && <CircularProgress color="secondary" />}
        </Box>
      )}
    </Box>
  );
}
