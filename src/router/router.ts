import { RouteConfig } from "vue-router";
import { OrganizationMembersPageContainer } from "../pages/organization-members";
import { UserProfilePageContainer } from "../pages/user-profile";

export const routes: RouteConfig[] = [
  {
    path: "/",
    redirect: "/organization-members"
  },
  {
    path: "/organization-members",
    component: OrganizationMembersPageContainer
  },
  { path: "/user-profile/:id",
    component: UserProfilePageContainer,
    props: true 
  }
];
