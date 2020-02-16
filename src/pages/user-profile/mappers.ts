import { UserProfileVm } from './viewModel';
import { UserProfile } from '../../rest-api/api/model/user.model';

export const mapUserApiModelToVm = (user: UserProfile): UserProfileVm => ({
  login: user.login,
  id: user.id,
  avatarUrl: user.avatar_url,
  url: user.url,
  name: user.name,
  blog: user.blog,
  location: user.location,
  email: user.email,
  bio: user.bio,
});
