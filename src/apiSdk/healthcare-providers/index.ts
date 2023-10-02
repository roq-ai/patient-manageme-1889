import queryString from 'query-string';
import { HealthcareProviderInterface, HealthcareProviderGetQueryInterface } from 'interfaces/healthcare-provider';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHealthcareProviders = async (
  query?: HealthcareProviderGetQueryInterface,
): Promise<PaginatedInterface<HealthcareProviderInterface>> => {
  return fetcher('/api/healthcare-providers', {}, query);
};

export const createHealthcareProvider = async (healthcareProvider: HealthcareProviderInterface) => {
  return fetcher('/api/healthcare-providers', { method: 'POST', body: JSON.stringify(healthcareProvider) });
};

export const updateHealthcareProviderById = async (id: string, healthcareProvider: HealthcareProviderInterface) => {
  return fetcher(`/api/healthcare-providers/${id}`, { method: 'PUT', body: JSON.stringify(healthcareProvider) });
};

export const getHealthcareProviderById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/healthcare-providers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteHealthcareProviderById = async (id: string) => {
  return fetcher(`/api/healthcare-providers/${id}`, { method: 'DELETE' });
};
