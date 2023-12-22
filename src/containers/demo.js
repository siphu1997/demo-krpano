/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames";
import React from "react";
import useAppKrpano from "../hooks/useAppKrpano";

const LoadingPage = ({ isFadingOut = false }) => {
  const wrapperClasses = classNames("loading-page", {
    "loading-page--fade-out": isFadingOut,
  });
  return (
    <div className={wrapperClasses}>
      <div className="hint">Loading...</div>
      <div className="loading-spin" />
    </div>
  );
};

const Demo = () => {
  const {
    showLoadingPage,
    isLoaded,
    containerRef,
    toggleLockView,
    isLocked,
    toggleHideSpots,
    isHideSpots,
    currentScene,
  } = useAppKrpano();

  return (
    <>
      {showLoadingPage && <LoadingPage isFadingOut={isLoaded} />}

      <div className="demo-page">
        <div ref={containerRef} />
        <div className="menu">
          <a href="#">Back to Home</a>
          <button
            onClick={toggleLockView}
            className={isLocked ? "disable" : null}
          >
            Toggle Lock View
          </button>
          <button
            onClick={toggleHideSpots}
            className={isHideSpots ? "disable" : null}
          >
            Toggle Hide Spots
          </button>
          <div className="scene-name">Current Scene Name: {currentScene}</div>
        </div>
      </div>
    </>
  );
};

export default Demo;
