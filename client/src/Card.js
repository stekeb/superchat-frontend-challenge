import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { findEntry } from "./API_services/API_Database";
import { findRepo, findContributors } from "./API_services/API_Github";

function Card(props) {
  let { nanoId } = useParams();
  const [userDataState, setUserDataState] = useState({});
  const [repoDataSate, setRepoDataState] = useState({});
  const [contributorDataState, setContributorDataState] = useState([]);

  async function getAllData() {
    const userData = await findEntry(nanoId);
    setUserDataState(userData);
    const repoData = await findRepo(userData.user, userData.repo);
    setRepoDataState(repoData);
    const contributorData = await findContributors(repoData.contributors_url);
    setContributorDataState(contributorData);
  }
  console.log(userDataState);
  console.log(repoDataSate);
  console.log(contributorDataState);

  useEffect(() => {
    getAllData(nanoId);
  }, []);

  return (
    <div>
      <h1>Card: {nanoId}</h1>
    </div>
  );
}

export default Card;
