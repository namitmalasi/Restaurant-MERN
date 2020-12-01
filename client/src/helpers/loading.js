import React, { Fragment } from "react";

export const showLoading = () => {
  return (
    <Fragment>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </Fragment>
  );
};
