import mongoose, { Schema, model, models } from 'mongoose';

const DoctorProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    specialization: {
      type: [String],
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    hospital: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    education: {
      type: [String],
      required: true,
    },
    certifications: {
      type: [String],
    },
    consultationFee: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    availability: {
      type: Map,
      of: [String],
      default: {},
    },
    unavailableDates: {
      type: [Date],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const DoctorProfile = models.DoctorProfile || model('DoctorProfile', DoctorProfileSchema);

export default DoctorProfile;
