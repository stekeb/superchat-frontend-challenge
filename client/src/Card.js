import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Contributors from "./Contributors";

import { findEntry } from "./API_services/API_Database";
import { findRepo, findContributors } from "./API_services/API_Github";

function Card(props) {
  let { nanoId } = useParams();
  const [userDataState, setUserDataState] = useState({});
  const [repoDataState, setRepoDataState] = useState({});
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
  );
  let maxTenContributors;

  if (sortedContributors.length > 10) {
    maxTenContributors = sortedContributors.slice(0, 10);
  } else {
    maxTenContributors = sortedContributors;
  }

  const contributorsList = maxTenContributors.map((item) => (
    <Contributors key={item.id} item={item} />
  ));

  return (
    <div
      className="cardcontainer"
      style={{ backgroundColor: userDataState.frameColor }}
    >
      <div
        className="topcontainer"
        style={{ backgroundColor: userDataState.frameColor }}
      >
        <div
          className="icon"
          style={{ backgroundImage: "url(" + userDataState.icon + ")" }}
        ></div>
        <div className="header">
          <div
            className="headerrepo"
            style={{ backgroundColor: userDataState.backColor }}
          >
            <a href={repoDataState.html_url}>{userDataState.repo}</a>
          </div>
          <div className="headeruser"> by {userDataState.user}</div>
        </div>
      </div>
      <div className="description">{repoDataState.description}</div>
      <div
        className="bottomcontainer"
        style={{ backgroundColor: userDataState.frameColor }}
      >
        <div className="smallcontainer">
          <div
            className="smallheader"
            style={{ backgroundColor: userDataState.backColor }}
          >
            Repository Details
          </div>
          <div className="detailsbody">
            <p>{`Name: ${repoDataState.name}`}</p>
            <p>{`Language: ${repoDataState.language}`}</p>
            <p>{`Stars: ${repoDataState.stargazers_count}`}</p>
            <p>{`Watchers: ${repoDataState.stargazers_count}`}</p>
            <p>{`Forks: ${repoDataState.forks_count}`}</p>
            <p>{`Size: ${repoDataState.size}`}</p>
          </div>
        </div>
        <div className="smallcontainer">
          <div
            className="smallheader"
            style={{ backgroundColor: userDataState.backColor }}
          >
            {" "}
            Top Contributors
          </div>
          <div className="contributorslist">{contributorsList}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
