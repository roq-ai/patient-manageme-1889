import { ClinicInterface } from 'interfaces/clinic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  specialty: string;
  clinic_id: string;
  user_id: string;
  license_number: string;
  experience_years: number;
  created_at?: any;
  updated_at?: any;

  clinic?: ClinicInterface;
  user?: UserInterface;
  _count?: {};
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  specialty?: string;
  clinic_id?: string;
  user_id?: string;
  license_number?: string;
}
