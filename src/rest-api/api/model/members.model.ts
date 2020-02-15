export interface OrganizationMember {
  id: number;
  login: string;
  avatar_url: string;
}

export const createEmptyMember = (): OrganizationMember => ({
  avatar_url: '',
  id: -1,
  login: '',
});
