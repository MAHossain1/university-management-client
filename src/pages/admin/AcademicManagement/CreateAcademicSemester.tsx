import { Button, Col, Flex } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import { monthOption } from '../../../constants/global';
import { semesterOption } from '../../../constants/semester';

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5].map(number => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = data => {
    const name = semesterOption[Number(data.name) - 1].label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <PHForm onSubmit={onSubmit}>
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
