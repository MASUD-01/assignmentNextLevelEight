import express from 'express';
import { authRoutes } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: authRoutes,
  },
  // {
  //   path: '/academic-departments',
  //   route: academicDepartmentRoutes
  // },
  // {
  //   path: '/faculties',
  //   route: facultyRoutes
  // },
  // {
  //   path: '/students',
  //   route: studentRoutes
  // },
  // {
  //   path: '/buildings',
  //   route: buildingRoutes
  // },
  // {
  //   path: '/rooms',
  //   route: roomRoutes
  // },
  // {
  //   path: '/courses',
  //   route: courseRoutes
  // },
  // {
  //   path: '/semester-registration',
  //   route: semesterRegistrationRoutes
  // }, {
  //   path: '/offered-courses',
  //   route: offeredCourseRoutes
  // },
  // {
  //   path: '/offered-course-sections',
  //   route: offeredCourseSectionRoutes
  // },
  // {
  //   path: '/offered-course-class-schedules',
  //   route: offeredCourseClassScheduleRoutes
  // }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;