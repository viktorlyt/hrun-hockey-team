import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productId: Number,
    name: String,
    category: {
      type: String,
      enum: ["Women", "Men", "Youth", "Kids", "Adults", "Girls", "Boys"],
      default: "Adults",
    },
    type: {
      type: String,
      enum: ["Jersey", "Hoodie", "Hat", "Novelty", "T-Shirt"],
      default: "Jersey",
    },
    description: String,
    images: [String],
    // images: [
    //   {
    //     data: Buffer,
    //     contentType: String,
    //   },
    // ],
    variants: [
      {
        color: String,
        size: String,
        price: Number,
        stockQuantity: Number,
      },
    ],
  },

  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
