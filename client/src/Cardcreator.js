import { React, useState, useEffect } from "react";
import { createEntry } from "./API_services/API_Database";
import { nanoid } from "nanoid";

function Cardcreator(props) {
  const [nanoId, setNanoId] = useState("");
  const [user, setUser] = useState("Enter User Name");
  const [repo, setRepo] = useState("Enter Repo");
  const [backColor, setBackColor] = useState("#FFFFFF");
  const [frameColor, setFrameColor] = useState("#000000");
  const [icon, setIcon] = useState("empty");
  const [nanoIdDisplay, setNanoIdDisplay] = useState("");

  useEffect(() => {
    setNanoId(nanoid());
  }, [nanoIdDisplay]);

  async function submitEntry(e) {
    e.preventDefault();

    const entry = await createEntry(
      nanoId,
      user,
      repo,
      backColor,
      frameColor,
      icon
    );
    setNanoIdDisplay(`URL to the Repository: ${entry.nanoId}`);
  }
  return (
    <div>
      <h1>Cardcreator</h1>

      <form className="entryForm" onSubmit={submitEntry}>
        <div className="entrysettings">
          <div className="colorpicker">
            <label htmlFor="backgroundcolor">Background color: </label>
            <input
              type="color"
              id="backgroundcolor"
              name="backgroundcolor"
              onChange={(e) => {
                setBackColor(e.target.value);
              }}
              value={backColor}
            ></input>
          </div>
          <div className="colorpicker">
            <label htmlFor="frameColor">Frame color: </label>
            <input
              type="color"
              id="frameColor"
              name="frameColor"
              onChange={(e) => {
                setFrameColor(e.target.value);
              }}
              value={frameColor}
            ></input>
          </div>

          <div className="textfield">
            <label htmlFor="usertextfield"></label>
            <input
              className="textfield"
              id="usertextfield"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              value={user}
              type="text"
              placeholder=""
            />
          </div>

          <div className="textfield">
            <label htmlFor="repotextfield"></label>
            <input
              className="textfield"
              id="repotextfield"
              onChange={(e) => {
                setRepo(e.target.value);
              }}
              value={repo}
              type="text"
              placeholder=""
            />
          </div>

          <button className="entryformbutton" type="submit">
            Generate Link
          </button>
        </div>
      </form>

      <div className="linkdiv">
        {nanoIdDisplay ? <h2>{nanoIdDisplay}</h2> : null}
      </div>
    </div>
  );
}

export default Cardcreator;
