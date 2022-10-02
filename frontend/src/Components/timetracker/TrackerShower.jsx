import React, { useEffect, useState } from "react";
import styles from "./tracker.module.css";
import { CgMoreVertical } from "react-icons/cg";
import { TbCurrencyDollar } from "react-icons/tb";
import { Watch } from "./TimerClock";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrackerAPI } from "../../store/TimeTracker/timeTracker.action";

export const TrackerShower = ({ data }) => {
  const dispatch = useDispatch();  
  const [value, setValue] = useState();
  const [userData, setUserData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // console.log(userData);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userData);
  // };

  const deleteData = (id) => {  
    dispatch(deleteTrackerAPI(id))
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(userData);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [userData]);

  // console.log(value);

  return (
    <div className={styles.trackerContainer}>
      <div className={styles.firstContainer}>
        <div>
          <input
            name="trackerName"
            onChange={handleChange}
            value={userData.trackerName}
            type="text"
          />
        </div>

        <div>{data.trackerProject}</div>

        <div>{data.trackerTag}</div>
      </div>

      <div className={styles.secondContainer}>
        <div>
          <button>
            <TbCurrencyDollar
              className={data.trackerBillable ? styles.blueDoller : ""}
            />
          </button>
        </div>

        <div className={styles.trackerSplitTime}>
          <div>
            <input
              value={userData.trackertime1}
              name="trackertime1"
              onChange={handleChange}
              type="number"
              placeholder="00:00"
            />
          </div>
          <div>-</div>
          <div>
            <input
              value={userData.trackertime2}
              name="trackertime2"
              onChange={handleChange}
              type="number"
              placeholder="00:00"
            />
          </div>
        </div>

        <div>
          <input
            value={userData.trackerDate}
            name="trackerDate"
            onChange={handleChange}
            type="date"
          />
        </div>

        <div>
          <Watch />
        </div>

        <div>
          <Menu>
            <MenuButton>
              <CgMoreVertical />
            </MenuButton>
            <MenuList>
              <MenuItem>Duplicate</MenuItem>
              <MenuItem onClick={()=>deleteData(userData.id)}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

/*

const taskSchema = mongoose.Schema({
  trackerBillable: Boolean,
  trackerDate: String,
  trackerName: String,
  trackerProject: String,
  trackerTag: String,
  trackertime1: String,
  trackertime2: String,
  trackertime3: String,  
});

  name: { type: String, required: true },
  tag: { type: String, required: true },
  billable: {type: Boolean, required: true},
  startAt: { type: String, required: true },
  endAt: { type: String, required: true },
  projectName: { type: String, requied: true },
  
  userEmail: {type:String, required: true},
  userId : { type: String, required: true },
*/
