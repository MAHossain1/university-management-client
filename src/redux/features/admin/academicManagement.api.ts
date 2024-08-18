import { TQueryParam, TResponseRedux } from '../../../types';
import {
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSemester,
} from '../../../types/academicManagement.type';
import { baseApi } from '../../api/baseApi';

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllSemesters: builder.query({
      query: args => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return { url: '/academic-semesters', method: 'GET', params: params };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          meta: response.meta,
          data: response.data,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: data => ({
        url: '/academic-semesters/create-academic-semester',
        method: 'POST',
        body: data,
      }),
    }),
    getAcademicFaculties: builder.query({
      query: () => {
        return { url: '/academic-faculties', method: 'GET' };
      },
      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          meta: response.meta,
          data: response.data,
        };
      },
    }),
    addAcademicFaculty: builder.mutation({
      query: data => ({
        url: '/academic-faculties/create-academic-faculty',
        method: 'POST',
        body: data,
      }),
    }),
    getAcademicDepartments: builder.query({
      query: () => {
        return { url: '/academic-departments', method: 'GET' };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          meta: response.meta,
          data: response.data,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: data => ({
        url: '/academic-department/create-academic-department',
        method: 'POST',
        body: data,
      }),
    }),

    //end endPoints
  }),
});

export const {
  useGetAllSemestersQuery,
  useAddAcademicSemesterMutation,
  useGetAcademicFacultiesQuery,
} = academicManagementApi;
