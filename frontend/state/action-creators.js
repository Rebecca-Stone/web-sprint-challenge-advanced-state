import axios from "axios";
import {
  SET_QUIZ_INTO_STATE,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_SELECTED_ANSWER,
} from "./action-types";
// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(nextId) {
  return { type: MOVE_CLOCKWISE, payload: nextId };
}

export function moveCounterClockwise(nextId) {
  return { type: MOVE_COUNTERCLOCKWISE, payload: nextId };
}

export function selectAnswer(answer_id) {
  return { type: SET_SELECTED_ANSWER, payload: answer_id };
}

export function setMessage() {
  return { type: SET_INFO_MESSAGE };
}

export function setQuiz() {
  return { type: SET_QUIZ_INTO_STATE }
}

export function inputChange({ name, value }) {
  return { type: INPUT_CHANGE, payload: { name, value } };
}

export function resetForm() {}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios
      .get("http://localhost:9000/api/quiz/next")
      .then((res) => {
        dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data.data });
        console.log(res.data.data);
      })
      .catch((err) => {
        dispatch(
          setMessage(err.response.data.message));
      });
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  };
}
export function postAnswer() {
  return function () {
    axios
      .post("http://localhost:9000/api/quiz/answer")
      .then((res) => {
        console.log(res);
      })
      // On successful POST:
      // - Dispatch an action to reset the selected answer state
      // - Dispatch an action to set the server message to state
      // - Dispatch the fetching of the next quiz
      .catch((err) => {
        console.log(err);
      });
  };
}
export function postQuiz() {
  return function (dispatch) {
    axios
      .post("http://localhost:9000/api/quiz/new")
      .then((res) => {
        console.log(res);
      })
      // On successful POST:
      // - Dispatch the correct message to the the appropriate state
      // - Dispatch the resetting of the form
      .catch((err) => {
        console.log(err);
      });
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
