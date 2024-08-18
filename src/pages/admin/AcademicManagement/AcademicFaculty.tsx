import { Button, Table, TableColumnsType } from 'antd';
import { useGetAcademicFacultiesQuery } from '../../../redux/features/admin/academicManagement.api';
import { TAcademicFaculty } from '../../../types/academicManagement.type';

export type TTableDataForAFaculty = Pick<TAcademicFaculty, 'name'>;

const AcademicFaculty = () => {
  const {
    data: academicFacultyData,
    isLoading,
    isFetching,
  } = useGetAcademicFacultiesQuery(undefined);

  console.log(academicFacultyData);

  const tableData = academicFacultyData?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));

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
