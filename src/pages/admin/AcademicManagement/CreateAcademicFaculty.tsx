import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Flex } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import { useAddAcademicFacultyMutation } from '../../../redux/features/admin/academicManagement.api';
import { academicFacultySchema } from '../../../schemas/academicManagement.schema';
import { TResponse } from '../../../types';
import { TAcademicFaculty } from '../../../types/academicManagement.type';

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    console.log('[clicked]', data);
    const toastId = toast.loading('Creating...');

    const academicFacultyData = {
      name: data.name,
    };

    try {
      const res = (await addAcademicFaculty(
        academicFacultyData
      )) as TResponse<TAcademicFaculty>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Successfully created the academic faculty!', {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId });
    }

    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicFacultySchema)}
        >
          <PHInput type="text" name="name" label="Academic Faculty Name" />
          <Button style={{ width: '100%' }} htmlType="submit">
            Submit
          </Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
