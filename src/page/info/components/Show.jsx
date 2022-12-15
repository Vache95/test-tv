import React from 'react';

const Show = ({ filmItems }) => (
  <div className="info__content-left">
    <h3 className="info__content-left-title">Show Info</h3>
    <div className="info__content-left-info">
      <div className="left-info-item">
        <span className="left-info-item-title">Streamed on</span>
        <span className="left-info-item-text">BBC Three</span>
      </div>
      <div className="left-info-item">
        <span className="left-info-item-title">Schedule</span>
        <span className="left-info-item-text">{filmItems.schedule?.days?.[0]}</span>
      </div>
      <div className="left-info-item">
        <span className="left-info-item-title">Status</span>
        <span className="left-info-item-text">{filmItems?.status}</span>
      </div>
      <div className="left-info-item">
        <span className="left-info-item-title">Genres</span>
        {filmItems?.genres?.map((e) => (
          <span className="left-info-item-text">{`${e}`+ ','}</span>
        ))}
      </div>
    </div>
  </div>
);

export default Show;
