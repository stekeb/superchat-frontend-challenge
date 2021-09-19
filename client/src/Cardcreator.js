import { React, useState, useEffect } from "react";
import { createEntry } from "./API_services/API_Database";
import { nanoid } from "nanoid";
const SCURL = process.env.REACT_APP_SCURL;

function Cardcreator(props) {
  const [nanoId, setNanoId] = useState("");
  const [user, setUser] = useState("");
  const [repo, setRepo] = useState("");
  const [backColor, setBackColor] = useState("#2596be");
  const [frameColor, setFrameColor] = useState("#eeeee4");
  const [icon, setIcon] = useState("");
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
    setNanoIdDisplay(`URL to the Repository: ${SCURL}${entry.nanoId}`);
  }
  return (
    <div className="creatorcontainer" style={{ backgroundColor: frameColor }}>
    <div className="cardcreatorheader" style={{ backgroundColor: backColor }}> Github Link Generator</div>

      <form className="entryform" onSubmit={submitEntry}>
        <div className="entrysettings">
          <div className="colorpickerscontainer">
          <div className="colorpicker">
            <div>
            <label htmlFor="backgroundcolor">Header color: </label>
            </div>
            <div>
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
              placeholder="Enter User Name"
            />
          </div>
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
              placeholder="Enter Repo"
            />
          </div>
          <div className="textfield">
            <label htmlFor="icontextfield"></label>
            <input
              className="textfield"
              id="icontextfield"
              onChange={(e) => {
                setIcon(e.target.value);
              }}
              value={icon}
              type="text"
              placeholder="URL for Icon"
            />
          </div>
          <div className="buttoncontainer">
          <button className="entryformbutton" type="submit">
            Generate Link
          </button>
          </div>
  
        </div>
      </form>

      <div className="linkdiv">
        {nanoIdDisplay ? <div className="linkdivdisplay">{nanoIdDisplay}</div> : null}
      </div>
    </div>
  );
}

export default Cardcreator;
