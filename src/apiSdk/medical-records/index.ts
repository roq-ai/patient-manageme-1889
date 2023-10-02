import queryString from 'query-string';
import { MedicalRecordInterface, MedicalRecordGetQueryInterface } from 'interfaces/medical-record';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMedicalRecords = async (
  query?: MedicalRecordGetQueryInterface,
): Promise<PaginatedInterface<MedicalRecordInterface>> => {
  return fetcher('/api/medical-records', {}, query);
};

export const createMedicalRecord = async (medicalRecord: MedicalRecordInterface) => {
  return fetcher('/api/medical-records', { method: 'POST', body: JSON.stringify(medicalRecord) });
};

export const updateMedicalRecordById = async (id: string, medicalRecord: MedicalRecordInterface) => {
  return fetcher(`/api/medical-records/${id}`, { method: 'PUT', body: JSON.stringify(medicalRecord) });
};

export const getMedicalRecordById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/medical-records/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMedicalRecordById = async (id: string) => {
  return fetcher(`/api/medical-records/${id}`, { method: 'DELETE' });
};
