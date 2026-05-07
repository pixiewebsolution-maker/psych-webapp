const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// We use require because this script might be run with tsx which handles ESM but simpler to use commonjs for pathing if needed
dotenv.config({ path: '.env.local' });

const UserSchema = new mongoose.Schema({
  name: String, email: String, password: { type: String, select: true }, role: String, image: String
});
const User = mongoose.models.User || mongoose.model('User', UserSchema);

const DoctorProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  slug: String, specialization: [String], experience: Number, hospital: String, location: String,
  languages: [String], bio: String, education: [String], certifications: [String],
  consultationFee: Number, rating: Number, reviewCount: Number, availability: Map
});
const DoctorProfile = mongoose.models.DoctorProfile || mongoose.model('DoctorProfile', DoctorProfileSchema);

const AppointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'DoctorProfile' },
  date: Date, timeSlot: String, status: String, reason: String
});
const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);

const ReviewSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'DoctorProfile' },
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
  rating: Number, comment: String
});
const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);

const MONGODB_URI = process.env.MONGODB_URI;

const specializations = ['General Psychiatry', 'Child & Adolescent', 'Addiction', 'Geriatric', 'Forensic', 'Neuropsychiatry'];
const locations = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Bristol'];
const hospitals = ['St. Mary’s Wellness', 'The Priory', 'Nightingale Hospital', 'Maudsley', 'Cygnet Health'];
const languages = ['English', 'Spanish', 'French', 'German', 'Mandarin'];
const reviewComments = [
  "Extremely professional and empathetic. Highly recommend.",
  "Great experience, the doctor was very patient.",
  "Helped me navigate through a difficult time.",
  "Modern clinic and very efficient booking process.",
  "Knowledgeable and provided practical advice."
];

async function seed() {
  if (!MONGODB_URI) {
    console.error('MONGODB_URI not found');
    return;
  }
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    await User.deleteMany({});
    await DoctorProfile.deleteMany({});
    await Appointment.deleteMany({});
    await Review.deleteMany({});

    const hashedPassword = await bcrypt.hash('password123', 10);

    const admin = await User.create({ name: 'Admin', email: 'admin@ethera.com', password: hashedPassword, role: 'admin' });
    const patient = await User.create({ name: 'John Doe', email: 'patient@example.com', password: hashedPassword, role: 'patient' });

    const firstNames = ['Sarah', 'Michael', 'Emily', 'David', 'Jessica', 'James', 'Linda', 'Robert', 'Daniel', 'Sophia'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Thomas', 'Taylor'];

    const doctors = [];
    for (let i = 0; i < 15; i++) {
      const name = `Dr. ${firstNames[i % 10]} ${lastNames[i % 10]}`;
      const slug = name.toLowerCase().replace(/dr\.\s/g, 'dr-').replace(/\s/g, '-');
      
      const docUser = await User.create({
        name, email: `doctor${i+1}@ethera.com`, password: hashedPassword, role: 'doctor', image: `https://i.pravatar.cc/150?u=doctor${i+1}`
      });

      const profile = await DoctorProfile.create({
        user: docUser._id, slug, specialization: [specializations[i % 6]], experience: 5 + i,
        hospital: hospitals[i % 5], location: locations[i % 6], languages: ['English', languages[i % 5]],
        bio: `${name} is an expert in ${specializations[i % 6]} with a focus on compassionate care.`,
        education: ['MD in Psychiatry'], consultationFee: 150 + (i * 10), rating: 0, reviewCount: 0,
        availability: { monday: ['09:00', '10:00', '11:00'], tuesday: ['09:00', '10:00', '11:00'] }
      });
      doctors.push({ docUser, profile });
    }

    // Reviews
    for (let i = 0; i < 50; i++) {
      const doc = doctors[i % 15];
      const appt = await Appointment.create({
        patient: patient._id, doctor: doc.docUser._id, doctorProfile: doc.profile._id,
        date: new Date(), timeSlot: '10:00', status: 'completed'
      });
      const rating = 4 + (i % 2);
      await Review.create({
        patient: patient._id, doctor: doc.docUser._id, doctorProfile: doc.profile._id,
        appointment: appt._id, rating, comment: reviewComments[i % 5]
      });
    }

    // Update averages
    for (const doc of doctors) {
      const reviews = await Review.find({ doctorProfile: doc.profile._id });
      const avg = reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;
      await DoctorProfile.findByIdAndUpdate(doc.profile._id, { rating: avg.toFixed(1), reviewCount: reviews.length });
    }

    console.log('Seed successful');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
