import { UserInterface } from 'interfaces/user';
import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface MedicalRecordInterface {
  id?: string;
  patient_id: string;
  diagnosis: string;
  prescription: string;
  notes?: string;
  appointment_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  appointment?: AppointmentInterface;
  _count?: {};
}

export interface MedicalRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  diagnosis?: string;
  prescription?: string;
  notes?: string;
  appointment_id?: string;
}
