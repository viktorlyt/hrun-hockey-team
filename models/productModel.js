import mongoose from "mongoose";
import {
  PRODUCT_CATEGORY,
  PRODUCT_TYPE,
  PRODUCT_SIZES,
  PRODUCT_COLORS,
} from "../utils/constants.js";

const ProductSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    category: {
      type: String,
      enum: Object.values(PRODUCT_CATEGORY),
      default: PRODUCT_CATEGORY.ADULTS,
      required: true,
    },
    type: {
      type: String,
      enum: Object.values(PRODUCT_TYPE),
      default: PRODUCT_TYPE.JERSEY,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 350,
    },
    images: {
      type: [String],
      required: true,
      validate: [(arr) => arr.length > 0, "At least one image is required"],
    },
    // images: [
    //   {
    //     data: Buffer,
    //     contentType: String,
    //   },
    // ],
    variants: [
      {
        color: {
          type: String,
          enum: Object.values(PRODUCT_COLORS),
          required: true,
        },
        size: {
          type: String,
          enum: Object.values(PRODUCT_SIZES),
          required: true,
        },
        price: {
          type: Number,
          required: true,
          min: 0.01,
        },
        stockQuantity: {
          type: Number,
          required: true,
          min: 0,
          validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value for stockQuantity",
          },
        },
      },
    ],
  },
  { timestamps: true }
);

ProductSchema.path("variants").validate(function (variants) {
  return variants.length > 0;
}, "At least one variant is required");

ProductSchema.index({ name: "text", description: "text" });

export default mongoose.model("Product", ProductSchema);
