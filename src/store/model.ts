import { UserProfileVm, MemberVm } from '../pages';

export interface RootState {
  loading: boolean;
  currentOrganization: string;
  user: UserProfileVm;
  members: MemberVm[];
}
