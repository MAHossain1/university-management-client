import { FieldValues, SubmitHandler } from 'react-hook-form';
import {
  useAddAcademicDepartmentMutation,
  useGetAcademicFacultiesQuery,
} from '../../../redux/features/admin/academicManagement.api';
import { Button, Col, Flex } from 'antd';
import PHForm from '../../../components/form/PHForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { academicDepartmentSchema } from '../../../schemas/academicManagement.schema';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { TResponse } from '../../../types';
import { TAcademicDepartment } from '../../../types/academicManagement.type';
import { toast } from 'sonner';

const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

  const { data: academicFaculties } = useGetAcademicFacultiesQuery();

  // type TDepartment =  {value: string, label: string}

  const academicFacultyOptions = academicFaculties?.data.map(
    (item: TAcademicDepartment) => ({
      value: item._id,
      label: item.name,
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const toastId = toast.loading('Creating department...');

    const academicDepartmentData = {
      name: data.name,
      academicFaculty: data.academicFaculty,
    };

    try {
      const res = (await addAcademicDepartment(
        academicDepartmentData
      )) as TResponse<TAcademicDepartment>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Successfully created the department!', { id: toastId });
      }
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId });
    }
  };

  // console.log(academicFacultyOptions);

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <PHInput type="text" name="name" label="Academic Department Name" />
          <PHSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={academicFacultyOptions}
          />

          <Button style={{ width: '100%' }} htmlType="submit">
            Submit
          </Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
