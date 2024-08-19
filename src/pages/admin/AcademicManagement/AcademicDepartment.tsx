import { Button, Table, TableColumnsType } from 'antd';
import { useGetAcademicDepartmentsQuery } from '../../../redux/features/admin/academicManagement.api';
import { TAcademicDepartment } from '../../../types/academicManagement.type';

export type TTableData = Pick<TAcademicDepartment, 'name' | 'academicFaculty'>;

type TAcademicFacultyProps = {
  _id: string;
  name: string;
  academicFaculty: any;
};

const AcademicDepartment = () => {
  const { data: academicDepartmentData, isFetching } =
    useGetAcademicDepartmentsQuery();

  const tableData = academicDepartmentData?.data?.map(
    ({ _id, name, academicFaculty }: TAcademicFacultyProps) => ({
      key: _id,
      name,
      academicFaculty: academicFaculty.name,
    })
  );

  console.log(tableData);

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
    },
    {
      title: 'Academic Faculty',
      dataIndex: 'academicFaculty',
    },

    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

export default AcademicDepartment;
