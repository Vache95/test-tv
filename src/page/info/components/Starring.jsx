import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const Starring = ({ starringName }) => (
  <div className="info__content-rigth">
    <h3 className="info__content-rigth-title">Starring</h3>
    <div className="info__content-rigth-info">
      {starringName?.length > 0 &&
        starringName?.map((elem, index) => (
          <div className="rigth-info-item" key={index}>
            <div className="rigth-info-item-starring">
              <span>
                <PersonIcon />
              </span>
              <p>{elem}</p>
            </div>
            <div className="rigth-info-item-starring-rigth">
              <p>Carol</p>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default Starring;
