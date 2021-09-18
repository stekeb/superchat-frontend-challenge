const BASEURL = process.env.REACT_APP_BASEURL;

export const createEntry = (
  nanoId,
  user,
  repo,
  backColor,
  frameColor,
  icon
) => {
  return fetch(BASEURL, {
    method: "POST",
    body: JSON.stringify({
      nanoId,
      user,
      repo,
      backColor,
      frameColor,
      icon,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((userData) => userData);
};

export const findEntry = (nanoId) => {
  return fetch(BASEURL + nanoId)
    .then((data) => data.json())
    .then((userData) => userData);
};
