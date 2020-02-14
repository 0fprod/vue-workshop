export interface RootState {
  loading: boolean;
  currentOrganization: string;
  members: OrganizationMembers[];
}

export interface OrganizationMembers {
  id: number;
  name: string;
  avatarUrl: string;
}
