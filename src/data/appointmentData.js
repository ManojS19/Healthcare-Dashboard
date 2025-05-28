

export const days = [
  { day: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
  { day: "Tues", date: 26, times: ["08:00", "09:00", "10:00"], active: true },
  { day: "Wed", date: 27, times: ["12:00", "13:00"] },
  { day: "Thurs", date: 28, times: ["10:00", "11:00"] },
  { day: "Fri", date: 29, times: ["14:00", "16:00"] },
  { day: "Sat", date: 30, times: ["12:00", "14:00", "15:00"] },
  { day: "Sun", date: 31, times: ["09:00", "10:00", "11:00"] },
];

export const featuredAppointments = [
  {
    type: "Dentist",
    time: "09:00–11:00",
    doctor: "Dr. Cameron Williamson",
    color: "#3835ac",
    icon: "🦷",
  },
  {
    type: "Physiotherapy Appointment",
    time: "11:00–12:00",
    doctor: "Dr. Kevin Djones",
    color: "#E0E7FF",
    icon: "💪",
    textColor: "#312e81",
  },
];

export const upcomingSchedule = {
  Thursday: [
    { label: "Health checkup complete", time: "11:00 AM", emoji: "💉" },
    { label: "Ophthalmologist", time: "14:00 PM", emoji: "👁️" },
  ],
  Saturday: [
    { label: "Cardiologist", time: "12:00 AM", emoji: "❤️" },
    { label: "Neurologist", time: "16:00 PM", emoji: "🧑‍⚕️" },
  ],
};