import { RouteConfig } from 'vue-router';
import {
  UserProfilePageContainer,
  OrganizationMembersPageContainer,
} from '../pages';

export const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/organization-members',
  },
  {
    path: '/organization-members',
    component: OrganizationMembersPageContainer,
  },
  {
    path: '/user-profile/:id',
    component: UserProfilePageContainer,
    props: true,
  },
];
