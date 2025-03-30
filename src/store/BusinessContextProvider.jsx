import { useEffect, useState } from "react";
import BusinessContext from "./BusinessContext";
import initialBusinesses from "../data/businesses";

export const BusinessProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState(initialBusinesses);
  const [reviewCardOpenId, setReviewCardOpenId] = useState(null);

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });

  // 🧠 Save username to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  // ➕ Add a new business
  const addBusiness = (newBusiness) => {
    console.log("**", newBusiness);
    
    setBusinesses(newBusiness);
  };

  // 📝 Add a review
  const addReview = (businessId, comment, rating) => {
    setBusinesses((prev) =>
      prev.map((biz) =>
        biz.id === businessId
          ? {
              ...biz,
              reviews: [
                ...biz.reviews,
                {
                  id: Date.now(),
                  user: username || "Anonymous",
                  comment,
                  rating,
                  timestamp: new Date().toISOString(),
                },
              ],
            }
          : biz
      )
    );
  };

  // ❌ Delete review if user matches
  const deleteReview = (businessId, reviewId) => {
    setBusinesses((prev) =>
      prev.map((biz) =>
        biz.id === businessId
          ? {
              ...biz,
              reviews: biz.reviews.filter(
                (review) => review.id !== reviewId || review.user !== username
              ),
            }
          : biz
      )
    );
  };

  return (
    <BusinessContext.Provider
      value={{
        businesses,
        addBusiness,
        addReview,
        deleteReview,
        username,
        setUsername,
        reviewCardOpenId,
        setReviewCardOpenId,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
