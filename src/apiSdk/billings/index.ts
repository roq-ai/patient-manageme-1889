import queryString from 'query-string';
import { BillingInterface, BillingGetQueryInterface } from 'interfaces/billing';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBillings = async (query?: BillingGetQueryInterface): Promise<PaginatedInterface<BillingInterface>> => {
  return fetcher('/api/billings', {}, query);
};

export const createBilling = async (billing: BillingInterface) => {
  return fetcher('/api/billings', { method: 'POST', body: JSON.stringify(billing) });
};

export const updateBillingById = async (id: string, billing: BillingInterface) => {
  return fetcher(`/api/billings/${id}`, { method: 'PUT', body: JSON.stringify(billing) });
};

export const getBillingById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/billings/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBillingById = async (id: string) => {
  return fetcher(`/api/billings/${id}`, { method: 'DELETE' });
};
