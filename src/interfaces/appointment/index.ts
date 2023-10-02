import { BillingInterface } from 'interfaces/billing';
import { MedicalRecordInterface } from 'interfaces/medical-record';
import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  patient_id: string;
  clinic_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  billing?: BillingInterface[];
  medical_record?: MedicalRecordInterface[];
  user?: UserInterface;
  clinic?: ClinicInterface;
  _count?: {
    billing?: number;
    medical_record?: number;
  };
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  clinic_id?: string;
  status?: string;
}
