import * as yup from 'yup';

export const medicalRecordValidationSchema = yup.object().shape({
  diagnosis: yup.string().required(),
  prescription: yup.string().required(),
  notes: yup.string().nullable(),
  patient_id: yup.string().nullable().required(),
  appointment_id: yup.string().nullable().required(),
});
