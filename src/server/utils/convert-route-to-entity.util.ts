const mapping: Record<string, string> = {
  appointments: 'appointment',
  billings: 'billing',
  clinics: 'clinic',
  'healthcare-providers': 'healthcare_provider',
  'medical-records': 'medical_record',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
