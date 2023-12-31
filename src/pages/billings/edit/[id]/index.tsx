import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getBillingById, updateBillingById } from 'apiSdk/billings';
import { billingValidationSchema } from 'validationSchema/billings';
import { BillingInterface } from 'interfaces/billing';
import { UserInterface } from 'interfaces/user';
import { AppointmentInterface } from 'interfaces/appointment';
import { getUsers } from 'apiSdk/users';
import { getAppointments } from 'apiSdk/appointments';

function BillingEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<BillingInterface>(
    () => (id ? `/billings/${id}` : null),
    () => getBillingById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: BillingInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateBillingById(id, values);
      mutate(updated);
      resetForm();
      router.push('/billings');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<BillingInterface>({
    initialValues: data,
    validationSchema: billingValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Billings',
              link: '/billings',
            },
            {
              label: 'Update Billing',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Billing
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Amount"
            formControlProps={{
              id: 'amount',
              isInvalid: !!formik.errors?.amount,
            }}
            name="amount"
            error={formik.errors?.amount}
            value={formik.values?.amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="billing_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Billing Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.billing_date ? new Date(formik.values?.billing_date) : null}
              onChange={(value: Date) => formik.setFieldValue('billing_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'patient_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<AppointmentInterface>
            formik={formik}
            name={'appointment_id'}
            label={'Select Appointment'}
            placeholder={'Select Appointment'}
            fetcher={getAppointments}
            labelField={'status'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/billings')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'billing',
    operation: AccessOperationEnum.UPDATE,
  }),
)(BillingEditPage);
