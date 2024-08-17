import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Flex } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import { monthOption } from '../../../constants/global';
import { semesterOption } from '../../../constants/semester';
import { academicSemesterSchema } from '../../../schemas/academicManagement.schema';
import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/academicManagement.api';
import { toast } from 'sonner';
import { TResponse } from '../../../types/global';

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5].map(number => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const toastId = toast.loading('Creating semester...');

    const name = semesterOption[Number(data.name) - 1].label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Successfully created the semester!', { id: toastId });
      }
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId });
    }

    // console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect name="name" label="Name" options={semesterOption} />
          <PHSelect name="year" label="Year" options={yearOptions} />
          <PHSelect
            name="startMonth"
            label="Start Month"
            options={monthOption}
          />
          <PHSelect name="endMonth" label="End Month" options={monthOption} />
          <Button style={{ width: '100%' }} htmlType="submit">
            Submit
          </Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
