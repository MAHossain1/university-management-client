import { Button, Table, TableColumnsType } from 'antd';
import { useGetAcademicFacultiesQuery } from '../../../redux/features/admin/academicManagement.api';
import { TAcademicFaculty } from '../../../types/academicManagement.type';

export type TTableDataForAFaculty = Pick<TAcademicFaculty, 'name'>;
type TAcademicFacultyProps = {
  _id: string;
  name: string;
};

const AcademicFaculty = () => {
  const { data: academicFacultyData, isFetching } =
    useGetAcademicFacultiesQuery(undefined);

  const tableData = academicFacultyData?.data?.map(
    ({ _id, name }: TAcademicFacultyProps) => ({
      key: _id,
      name,
    })
  );

  const columns: TableColumnsType<TTableDataForAFaculty> = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
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

export default AcademicFaculty;
