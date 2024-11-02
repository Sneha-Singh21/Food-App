import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://indsneha2002:9Cmaw6sCWo95UTvt@cluster0.3zq9h.mongodb.net/food-app"
    )
    .then(() => console.log("DB Connected"));
};
