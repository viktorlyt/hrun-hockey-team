import { body, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import {
  PRODUCT_CATEGORY,
  PRODUCT_TYPE,
  PRODUCT_COLORS,
  PRODUCT_SIZES,
} from "../utils/constants.js";
import Product from "../models/ProductModel.js";
import News from "../models/NewsModel.js";
import { param } from "express-validator";

// Constants
const MIN_DESCRIPTION_LENGTH = 5;
const MAX_DESCRIPTION_LENGTH = 350;
const MIN_IMAGES = 1;
const MIN_VARIANTS = 1;
const MAX_PRICE = 1000;
const MAX_STOCK = 10000;

// News
const MIN_TITLE_LENGTH = 5;
const MAX_TITLE_LENGTH = 150;
const MIN_ABSTRACT_LENGTH = 5;
const MAX_ABSTRACT_LENGTH = 350;
const MIN_CONTENT_LENGTH = 20;

const validateVariant = (variant) => {
  const errors = [];

  if (!PRODUCT_COLORS.hasOwnProperty(variant.color.toUpperCase())) {
    errors.push(`Invalid color: ${variant.color}`);
  }
  // if (!PRODUCT_SIZES.hasOwnProperty(variant.size.toUpperCase())) {
  //   errors.push(`Invalid size: ${variant.size}`);
  // }
  if (!Object.values(PRODUCT_SIZES).includes(variant.size)) {
    errors.push(`Invalid size: ${variant.size}\n`);
  }
  if (typeof variant.price !== "number" || variant.price < 0) {
    errors.push(
      `Invalid price for ${variant.color} ${variant.size}: ${variant.price}`
    );
  }
  if (!Number.isInteger(variant.stockQuantity) || variant.stockQuantity < 0) {
    errors.push(
      `Invalid stock quantity for ${variant.color} ${variant.size}: ${variant.stockQuantity}`
    );
  }

  return errors;
};

const validateVariants = (variants) => {
  const errors = [];
  const seenCombinations = {};

  variants.forEach((variant) => {
    const variantErrors = validateVariant(variant);
    errors.push(...variantErrors);

    const combinationKey = `${variant.color.toUpperCase()}-${variant.size.toUpperCase()}`;
    if (seenCombinations[combinationKey]) {
      errors.push(
        `Duplicate combination of color '${variant.color}' and size '${variant.size}'`
      );
    }
    seenCombinations[combinationKey] = true;
  });

  if (errors.length > 0) {
    throw new Error(errors.join(". "));
  }

  return true;
};

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("No product")) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateProductInput = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("Product name is required")
    .trim()
    .escape(),
  body("category")
    .isIn(Object.values(PRODUCT_CATEGORY))
    .withMessage("Invalid product category"),
  body("type")
    .isIn(Object.values(PRODUCT_TYPE))
    .withMessage("Invalid product type"),
  body("description")
    .isLength({ min: MIN_DESCRIPTION_LENGTH, max: MAX_DESCRIPTION_LENGTH })
    .withMessage(
      `Description must be between ${MIN_DESCRIPTION_LENGTH} and ${MAX_DESCRIPTION_LENGTH} characters long`
    )
    .trim()
    .escape(),
  body("images")
    .isArray({ min: MIN_IMAGES })
    .withMessage(`At least ${MIN_IMAGES} image is required`)
    .custom((images) => {
      images.forEach((image) => {
        if (typeof image !== "string" || image.trim() === "") {
          throw new Error("Each image must be a non-empty string");
        }
      });
      return true;
    }),
  body("variants")
    .isArray({ min: MIN_VARIANTS })
    .withMessage(`At least ${MIN_VARIANTS} variant is required`)
    .custom(validateVariants),
]);

// export const validateProductIdParam = withValidationErrors([
//   param("productId").custom(async (value) => {
//     const productId = Number(value);
//     if (!Number.isInteger(productId))
//       throw new BadRequestError("Invalid product ID, must be a whole number");

//     const product = await Product.findOne({ productId });
//     if (!product)
//       throw new NotFoundError(`No product with product ID : ${productId}`);
//   }),
// ]);

export const validateNewsInput = withValidationErrors([
  body("date")
    .isISO8601()
    .withMessage("Invalid date format. Use ISO 8601 format.")
    .toDate(),
  body("title")
    .isLength({ min: MIN_TITLE_LENGTH, max: MAX_TITLE_LENGTH })
    .withMessage(
      `Title must be between ${MIN_TITLE_LENGTH} and ${MAX_TITLE_LENGTH} characters long`
    )
    .trim()
    .escape(),
  body("abstract")
    .optional()
    .isLength({ min: MIN_ABSTRACT_LENGTH, max: MAX_ABSTRACT_LENGTH })
    .withMessage(
      `Abstract must be between ${MIN_ABSTRACT_LENGTH} and ${MAX_ABSTRACT_LENGTH} characters long`
    )
    .trim()
    .escape(),
  body("content")
    .isLength({ min: MIN_CONTENT_LENGTH })
    .withMessage(
      `Content must be at least ${MIN_CONTENT_LENGTH} characters long`
    )
    .trim()
    .escape(),
  body("images")
    .isArray({ min: MIN_IMAGES })
    .withMessage(`At least ${MIN_IMAGES} image is required`)
    .custom((images) => {
      images.forEach((image) => {
        if (typeof image !== "string" || image.trim() === "") {
          throw new Error("Each image must be a non-empty string");
        }
      });
      return true;
    }),
]);

export const validateIdParam = (paramName, modelName, Model) =>
  withValidationErrors([
    param(paramName)
      .isInt({ min: 1 })
      .withMessage(`Invalid ${modelName} ID. Must be a positive integer.`)
      .custom(async (value) => {
        const id = Number(value);
        const document = await Model.findOne({ [`${modelName}Id`]: id });
        if (!document) {
          throw new NotFoundError(`No ${modelName} found with ID: ${id}`);
        }
      }),
  ]);
