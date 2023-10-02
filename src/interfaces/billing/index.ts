import { UserInterface } from 'interfaces/user';
import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface BillingInterface {
  id?: string;
  amount: number;
  billing_date: any;
  patient_id: string;
  appointment_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  appointment?: AppointmentInterface;
  _count?: {};
}

export interface BillingGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  appointment_id?: string;
  status?: string;
}
