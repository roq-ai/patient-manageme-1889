interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Medical Biller'],
  customerRoles: ['Customer'],
  tenantRoles: ['Healthcare Provider', 'Medical Biller', 'Patient'],
  tenantName: 'Clinic',
  applicationName: 'Patient Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal user information',
    'Book appointments',
    'View medical records',
    'View billing information',
  ],
  ownerAbilities: [
    'Manage billing records',
    'View patient appointments',
    'Access medical records',
    'View healthcare provider information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/07eaf4ac-75c9-4966-9280-f76d00d65d17',
};
