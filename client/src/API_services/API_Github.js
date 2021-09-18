export const findRepo = (user, repo) => {
  return fetch(`https://api.github.com/repos/${user}/${repo}`)
    .then((data) => data.json())
    .then((userData) => userData);
};

export const findContributors = (contributors) => {
  return fetch(contributors)
    .then((data) => data.json())
    .then((userData) => userData);
};
