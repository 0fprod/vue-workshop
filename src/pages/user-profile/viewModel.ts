export interface UserProfileVm {
  login: string;
  id: number;
  avatarUrl: string;
  url: string;
  name: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
}

export const createDefaultUserProfileVm = (): UserProfileVm => ({
  login: '',
  id: -1,
  avatarUrl: '',
  url: '',
  name: '',
  blog: '',
  location: '',
  email: '',
  bio: '',
});
