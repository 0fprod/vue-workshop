export interface OrganizationMember {
  id: number;
  name: string;
  avatarUrl: string;
}

export const createEmptyMember = (): OrganizationMember => ({
  avatarUrl: "",
  id: -1,
  name: ""
});
