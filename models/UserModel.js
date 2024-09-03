import mongoose from "mongoose";
import Counter from "./counter.js";

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
      index: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      index: true,
      minlength: 2,
      maxlength: 50,
    },
    dob: {
      type: Date,
      required: false,
      validate: {
        validator: function (dob) {
          const ageDiff = Date.now() - new Date(dob).getTime();
          const ageDate = new Date(ageDiff);
          const age = Math.abs(ageDate.getUTCFullYear() - 1970);
          return age >= 18;
        },
        message: "User must be at least 18 years old.",
      },
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      validate: {
        validator: function (v) {
          return /^\S+@\S+\.\S+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      country: String,
      province: String,
      postalCode: {
        type: String,
        validate: {
          validator: function (v) {
            return /^[A-Za-z0-9]{3} ?[A-Za-z0-9]{3}$/.test(v);
          },
          message: (props) => `${props.value} is not a valid postal code!`,
        },
      },
      street: String,
      apt: String,
    },
    kids: [
      {
        kidId: {
          type: Number,
          unique: true,
        },
        firstName: {
          type: String,
          required: true,
          trim: true,
        },
        lastName: {
          type: String,
          required: true,
          trim: true,
          index: true,
        },
        dob: {
          type: Date,
          validate: {
            validator: function (dob) {
              const ageDiff = Date.now() - new Date(dob).getTime();
              const ageDate = new Date(ageDiff);
              const age = Math.abs(ageDate.getUTCFullYear() - 1970);
              return age < 18;
            },
            message: "Kids must be less than 18 years old.",
          },
        },
      },
    ],
    image: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "userId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.userId = counter.seq;

    for (let kid of this.kids) {
      const kidCounter = await Counter.findByIdAndUpdate(
        { _id: "kidId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
      kid.kidId = kidCounter.seq;
    }

    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.index({
  firstName: "text",
  lastName: "text",
  "kids.firstName": "text",
  "kids.lastName": "text",
});

UserSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", UserSchema);
