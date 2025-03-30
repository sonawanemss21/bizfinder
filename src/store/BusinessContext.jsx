import { createContext } from "react";

const BusinessContext = createContext({
  businesses: [],
  addBusiness: (item) => {},
  addReview: (businessId, comment, rating) => {},
  deleteReview: (businessId, reviewId) => {},
  username: "",
  setUsername: (item) => {},
  reviewCardOpenId: null,
});

export default BusinessContext;
