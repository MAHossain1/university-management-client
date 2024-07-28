import AcademicDepartment from '../pages/admin/AcademicManagement/AcademicDepartment';
import AcademicFaculty from '../pages/admin/AcademicManagement/AcademicFaculty';
import AcademicSemester from '../pages/admin/AcademicManagement/AcademicSemester';
import CreateAcademicDepartment from '../pages/admin/AcademicManagement/CreateAcademicDepartment';
import CreateAcademicFaculty from '../pages/admin/AcademicManagement/CreateAcademicFaculty';
import CreateAcademicSemester from '../pages/admin/AcademicManagement/CreateAcademicSemester';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';

// export const AdminPaths = [
//   {
//     index: true,
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];

export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Academic Management',
    children: [
      {
        name: 'Create A. Semester',
        path: 'create-academic-semesters',
        element: <CreateAcademicSemester />,
      },
      {
        name: 'Academic Semester',
        path: 'academic-semesters',
        element: <AcademicSemester />,
      },
      {
        name: 'Create A. Faculty',
        path: 'create-academic-faculty',
        element: <CreateAcademicFaculty />,
      },
      {
        name: 'Academic Faculty',
        path: 'academic-Faculty',
        element: <AcademicFaculty />,
      },
      {
        name: 'Create A. Department',
        path: 'create-academic-Department',
        element: <CreateAcademicDepartment />,
      },
      {
        name: 'Academic Department',
        path: 'academic-Department',
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
      {
        name: 'Create Member',
        path: 'create-member',
        element: <CreateStudent />,
      },
    ],
  },
];

// export const adminRoutes = adminPaths.reduce((acc: IRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach(child => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

// export const adminSidebarItems = adminPaths.reduce(
//   (acc: ISidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map(child => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );
