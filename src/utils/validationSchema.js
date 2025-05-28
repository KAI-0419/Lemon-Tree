import * as Yup from "yup";

export const bookingValidationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  date: Yup.date().required("Required"),
  time: Yup.string().required("Required"),
  guests: Yup.number().min(1).max(10).required("Required"),
});
