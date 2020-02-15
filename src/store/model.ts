import { MemberVm } from '../pages/organization-members/viewModel';

export interface RootState {
  loading: boolean;
  currentOrganization: string;
  members: MemberVm[];
}
