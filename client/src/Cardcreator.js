import React, {useEffect, useState} from 'react';
import { nanoid } from 'nanoid';

function Cardcreator(props) {
  const [nanoId, setNanoId] = useState("");
  const [user, setUser] = useState("Enter User Name");
  const [repo, setRepo] = useState("Enter Repo");
  const [backColor, setBackColor] = useState("#FFFFFF");
  const [frameColor, setFrameColor] = useState("#000000");
  const [icon, setIcon] = useState("empty");
  
  useEffect(() => {
    setNanoId(nanoid())
  },[])

  async function submitEntry(e) {
    e.preventDefault();
    console.log("button clicked")
  }

  return (
    <div>
      <h1>CARDCREATOR</h1>

      

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

    </div>
  );
}

export default Cardcreator;