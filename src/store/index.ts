import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './model';
import { getAllMembers } from '../rest-api/api/organization-members/memberAPI';
import { OrganizationMember } from '../rest-api/api/model/members.model';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: true,
  state: {
    loading: false,
    currentOrganization: 'lemoncode',
    members: [],
  },
  mutations: {
    setCurrentOrganization(state, payload: { currentOrganization: string }) {
      state.currentOrganization = payload.currentOrganization;
    },
    addMember(state, payload: { members: OrganizationMember[] }) {
      state.members = { ...state.members, ...payload.members };
    },
  },
  actions: {
    loadMembers(context) {
      return getAllMembers(context.state.currentOrganization).then(members => {
        context.commit('addMember', { members });
      });
    },
  },
});
