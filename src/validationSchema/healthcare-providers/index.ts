import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  specialty: yup.string().required(),
  license_number: yup.string().required(),
  experience_years: yup.number().integer().required(),
  clinic_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
