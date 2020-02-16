import { MemberVm } from './viewModel';
import { OrganizationMember } from '../../rest-api/api/model/members.model';

export const mapMembersApiModelToVm = (
  members: OrganizationMember[]
): MemberVm[] =>
  members.map(item => ({
    name: item.login,
    avatarUrl: item.avatar_url,
    id: item.id,
  }));
