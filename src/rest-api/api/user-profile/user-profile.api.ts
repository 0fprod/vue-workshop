import { UserProfile, createDefaultUserProfile } from '../model/user.model';

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

const resolveMembers = (data: any): Promise<UserProfile> => {
  const user: UserProfile = createDefaultUserProfile();

  const keysOfUserProfile = Object.keys(user);

  // map only the keys that belong to our viewModel
  const mappedUser = keysOfUserProfile.reduce(
    (accumulatedObject, currentProperty) => {
      accumulatedObject[currentProperty] = data[currentProperty];
      return accumulatedObject;
    },
    {}
  );

  Object.assign(user, mappedUser);

  return Promise.resolve(user);
};

export const getUser = (userId: string): Promise<UserProfile> => {
  const gitHubMembersUrl: string = `https://api.github.com/user/${userId}`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data));
};
