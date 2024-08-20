import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from 'antd';
import { useState } from 'react';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagement.api';
import { TQueryParam, TStudent } from '../../../types';

export type TTableData = Pick<TStudent, 'name' | 'id'>;

type TStudentProps = {
  _id: string;
  fullName: string;
  id: string;
};

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);

  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    { name: 'page', value: page },
    { name: 'sort', value: 'id' },
    ...params,
  ]);

  // console.log(studentData);
  const metaData = studentData?.meta;

  const tableData = studentData?.data?.map(
    ({ _id, fullName, id }: TStudentProps) => ({
      key: _id,
      fullName,
      id,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      showSorterTooltip: { target: 'full-header' },
    },
    {
      title: 'Roll NO',
      dataIndex: 'id',
    },

    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <Space>
            <Button>Details</Button>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: '1%',
    },
  ];

  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach(item =>
        queryParams.push({ name: 'name', value: item })
      );

      filters.year?.forEach(item =>
        queryParams.push({ name: 'year', value: item })
      );

      setParams(queryParams);
    }

    if (isLoading) {
      return <p>Loading</p>;
    }
  };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        current={page}
        onChange={value => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default StudentData;
