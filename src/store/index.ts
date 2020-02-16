import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './model';
import { MemberVm } from '../pages/organization-members/viewModel';
import { getAllMembers } from '../rest-api/api/organization-members';
import { OrganizationMember } from '../rest-api/api/model/members.model';
import {
  mapMembersApiModelToVm,
  mapUserApiModelToVm,
  UserProfileVm,
} from '../pages';
import { getUser } from '../rest-api/api/user-profile';
import { UserProfile } from '../rest-api/api/model/user.model';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: true,
  state: {
    loading: false,
    currentOrganization: 'lemoncode',
    members: [],
    user: {} as UserProfileVm,
  },
  mutations: {
    setUser(state, payload: { user: UserProfileVm }) {
      state.user = payload.user;
    },
    setCurrentOrganization(state, payload: { currentOrganization: string }) {
      state.currentOrganization = payload.currentOrganization;
    },
    addMember(state, payload: { members: MemberVm[] }) {
      state.members = [...payload.members];
    },
    setLoading(state, payload: { loading: boolean }) {
      state.loading = payload.loading;
    },
  },
  actions: {
    loadMembers(context) {
      return getAllMembers(context.state.currentOrganization).then(
        (members: OrganizationMember[]) => {
          let mappedMembers: MemberVm[] = mapMembersApiModelToVm(members);
          context.commit('addMember', { members: mappedMembers });
        }
      );
    },
    loadUser(context, payload: { userId: string }) {
      return getUser(payload.userId).then((user: UserProfile) => {
        const mappedUser = mapUserApiModelToVm(user);
        context.commit('setUser', { user: mappedUser });
      });
    },
  },
});
