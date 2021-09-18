import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Contributors from './Contributors'

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
 

  useEffect(() => {
    getAllData(nanoId);
  }, []);

  const sortedContributors = contributorDataState.sort(
    (a, b) => Number(b.contributions) - Number(b.contributions)
)
let maxTenContributors;

if (sortedContributors.length > 10) {
    maxTenContributors = sortedContributors.slice(0, 10)
} else {
    maxTenContributors = sortedContributors
}

const contributorsList = maxTenContributors.map((item) => (
    <Contributors
    key = {item.id}
    item = {item}
    />
))

  return (
    <div>
      <h1>Card: {nanoId}</h1>
      <div className = "contributorslist">{contributorsList}</div>
    </div>
  );
}

export default Card;
