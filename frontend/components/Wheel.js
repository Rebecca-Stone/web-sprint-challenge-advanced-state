import React from "react";
import { connect } from "react-redux";

import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

function Wheel(props) {
  const { wheel, moveClockwise, moveCounterClockwise } = props;

  const counterClockWiseClick = () => {
    switch (wheel) {
      case 0:
        return moveCounterClockwise(5);
      case 1:
        return moveCounterClockwise(0);
      case 2:
        return moveCounterClockwise(1);
      case 3:
        return moveCounterClockwise(2);
      case 4:
        return moveCounterClockwise(3);
      case 5:
        return moveCounterClockwise(4);
      default:
        return null;
    }
  };

  const clockwiseClick = () => {
    switch (wheel) {
      case 0:
        return moveClockwise(1);
      case 1:
        return moveClockwise(2);
      case 2:
        return moveClockwise(3);
      case 3:
        return moveClockwise(4);
      case 4:
        return moveClockwise(5);
      case 5:
        return moveClockwise(0);
      default:
        return null;
    }
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div
          className={`cog ${wheel === 0 ? "active" : null}`}
          style={{ "--i": 0 }}
        >
          {wheel === 0 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 1 ? "active" : null}`}
          style={{ "--i": 1 }}
        >
          {wheel === 1 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 2 ? "active" : null}`}
          style={{ "--i": 2 }}
        >
          {wheel === 2 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 3 ? "active" : null}`}
          style={{ "--i": 3 }}
        >
          {wheel === 3 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 4 ? "active" : null}`}
          style={{ "--i": 4 }}
        >
          {wheel === 4 ? "B" : null}
        </div>
        <div
          className={`cog ${wheel === 5 ? "active" : null}`}
          style={{ "--i": 5 }}
        >
          {wheel === 5 ? "B" : null}
        </div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={counterClockWiseClick}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={clockwiseClick}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wheel: state.wheel,
  };
};

export default connect(mapStateToProps, {
  moveClockwise,
  moveCounterClockwise,
})(Wheel);
