import { OrganizationMember, createEmptyMember } from "./model/members.model";

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

const resolveMembers = (data: any): Promise<OrganizationMember[]> => {
  const members = data.map(gitHubMember => {
    var member: OrganizationMember = createEmptyMember();

    member.id = gitHubMember.id;
    member.name = gitHubMember.login;
    member.avatarUrl = gitHubMember.avatar_url;

    return member;
  });

  return Promise.resolve(members);
};

export const getAllMembers = (organizationName: string): Promise<OrganizationMember[]> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data));
};
