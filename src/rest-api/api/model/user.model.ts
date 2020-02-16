export interface UserProfile {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  name: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export const createDefaultUserProfile = (): UserProfile => ({
  login: '',
  id: -1,
  avatar_url: '',
  url: '',
  name: '',
  blog: '',
  location: '',
  email: '',
  bio: '',
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
});
