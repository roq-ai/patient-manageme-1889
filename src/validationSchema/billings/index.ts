import * as yup from 'yup';

export const billingValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  billing_date: yup.date().required(),
  status: yup.string().required(),
  patient_id: yup.string().nullable().required(),
  appointment_id: yup.string().nullable().required(),
});
