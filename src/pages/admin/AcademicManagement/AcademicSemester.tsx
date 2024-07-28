import { useGetAllSemestersQuery } from '../../../redux/features/academicSemester/academicSemesterApi';

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);

  return <div>hello</div>;
};

export default AcademicSemester;
