"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Player;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function defaultFormatTime(seconds) {
  var h = Math.floor(seconds / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = seconds % 60;
  return [h, m > 9 ? m : h ? "0" + m : m || "0", s > 9 ? s : "0" + s].filter(function (a) {
    return a;
  }).join(":");
}

function Player(_ref) {
  var audioSource = _ref.audioSource,
      _ref$decrementPeriod = _ref.decrementPeriod,
      decrementPeriod = _ref$decrementPeriod === void 0 ? 5 : _ref$decrementPeriod,
      _ref$incrementPeriod = _ref.incrementPeriod,
      incrementPeriod = _ref$incrementPeriod === void 0 ? 5 : _ref$incrementPeriod,
      _ref$onIncrement = _ref.onIncrement,
      onIncrement = _ref$onIncrement === void 0 ? function () {} : _ref$onIncrement,
      _ref$onDecrement = _ref.onDecrement,
      onDecrement = _ref$onDecrement === void 0 ? function () {} : _ref$onDecrement,
      _ref$onPlay = _ref.onPlay,
      onPlay = _ref$onPlay === void 0 ? function () {} : _ref$onPlay,
      _ref$onStop = _ref.onStop,
      onStop = _ref$onStop === void 0 ? function () {} : _ref$onStop,
      _ref$audioFunctions = _ref.audioFunctions,
      audioFunctions = _ref$audioFunctions === void 0 ? {} : _ref$audioFunctions,
      _ref$formatTime = _ref.formatTime,
      formatTime = _ref$formatTime === void 0 ? function (time) {
    return defaultFormatTime(time);
  } : _ref$formatTime;
  var audio = (0, _react.useRef)();

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      duration = _useState2[0],
      setDuration = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTime = _useState4[0],
      setCurrentTime = _useState4[1];

  return _react.default.createElement("div", null, _react.default.createElement("audio", _extends({
    preload: "auto",
    ref: audio,
    onTimeUpdate: function onTimeUpdate() {
      setCurrentTime(Math.floor(audio.current.currentTime));
    },
    onLoadedMetadata: function onLoadedMetadata() {
      setDuration(Math.floor(audio.current.duration));
      setCurrentTime(Math.floor(audio.current.currentTime));
    },
    src: audioSource
  }, audioFunctions)), _react.default.createElement("div", null, _react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0 auto"
    }
  }, _react.default.createElement("p", {
    style: {
      margin: 0
    }
  }, formatTime(currentTime)), _react.default.createElement("p", {
    style: {
      margin: 0
    }
  }, formatTime(duration))), _react.default.createElement("progress", {
    style: {
      width: "100%"
    },
    value: currentTime,
    max: duration
  })), _react.default.createElement("div", null, _react.default.createElement("button", {
    onClick: function onClick() {
      audio.current.play();
      onPlay();
    }
  }, "play"), _react.default.createElement("button", {
    onClick: function onClick() {
      audio.current.pause();
      onStop();
    }
  }, "stop"), _react.default.createElement("button", {
    onClick: function onClick() {
      audio.current.currentTime += incrementPeriod;
      onIncrement();
    }
  }, "+".concat(incrementPeriod)), _react.default.createElement("button", {
    onClick: function onClick() {
      audio.current.currentTime -= decrementPeriod;
      onDecrement();
    }
  }, "-".concat(decrementPeriod))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Rm9ybWF0VGltZSIsInNlY29uZHMiLCJoIiwiTWF0aCIsImZsb29yIiwibSIsInMiLCJmaWx0ZXIiLCJhIiwiam9pbiIsIlBsYXllciIsImF1ZGlvU291cmNlIiwiZGVjcmVtZW50UGVyaW9kIiwiaW5jcmVtZW50UGVyaW9kIiwib25JbmNyZW1lbnQiLCJvbkRlY3JlbWVudCIsIm9uUGxheSIsIm9uU3RvcCIsImF1ZGlvRnVuY3Rpb25zIiwiZm9ybWF0VGltZSIsInRpbWUiLCJhdWRpbyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiY3VycmVudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJ3aWR0aCIsInBsYXkiLCJwYXVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsT0FBM0IsRUFBb0M7QUFDbEMsTUFBTUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsT0FBTyxHQUFHLElBQXJCLENBQVY7QUFDQSxNQUFNSSxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxPQUFPLEdBQUcsSUFBWCxHQUFtQixFQUE5QixDQUFWO0FBQ0EsTUFBTUssQ0FBQyxHQUFHTCxPQUFPLEdBQUcsRUFBcEI7QUFDQSxTQUFPLENBQUNDLENBQUQsRUFBSUcsQ0FBQyxHQUFHLENBQUosR0FBUUEsQ0FBUixHQUFZSCxDQUFDLEdBQUcsTUFBTUcsQ0FBVCxHQUFhQSxDQUFDLElBQUksR0FBbkMsRUFBd0NDLENBQUMsR0FBRyxDQUFKLEdBQVFBLENBQVIsR0FBWSxNQUFNQSxDQUExRCxFQUNKQyxNQURJLENBQ0csVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUo7QUFBQSxHQURKLEVBRUpDLElBRkksQ0FFQyxHQUZE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LElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JJLE1BQUFBLEtBQUssQ0FBQ0ssT0FBTixDQUFjRixXQUFkLElBQTZCWCxlQUE3QjtBQUNBQyxNQUFBQSxXQUFXO0FBQ1o7QUFKSCxnQkFNT0QsZUFOUCxFQWpCRixFQXlCRTtBQUNFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JRLE1BQUFBLEtBQUssQ0FBQ0ssT0FBTixDQUFjRixXQUFkLElBQTZCWixlQUE3QjtBQUNBRyxNQUFBQSxXQUFXO0FBQ1o7QUFKSCxnQkFNT0gsZUFOUCxFQXpCRixDQWhDRixDQURGO0FBcUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gZGVmYXVsdEZvcm1hdFRpbWUoc2Vjb25kcykge1xuICBjb25zdCBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gIGNvbnN0IG0gPSBNYXRoLmZsb29yKChzZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gIGNvbnN0IHMgPSBzZWNvbmRzICUgNjA7XG4gIHJldHVybiBbaCwgbSA+IDkgPyBtIDogaCA/IFwiMFwiICsgbSA6IG0gfHwgXCIwXCIsIHMgPiA5ID8gcyA6IFwiMFwiICsgc11cbiAgICAuZmlsdGVyKGEgPT4gYSlcbiAgICAuam9pbihcIjpcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcih7XG4gIGF1ZGlvU291cmNlLFxuICBkZWNyZW1lbnRQZXJpb2QgPSA1LFxuICBpbmNyZW1lbnRQZXJpb2QgPSA1LFxuICBvbkluY3JlbWVudCA9ICgpID0+IHt9LFxuICBvbkRlY3JlbWVudCA9ICgpID0+IHt9LFxuICBvblBsYXkgPSAoKSA9PiB7fSxcbiAgb25TdG9wID0gKCkgPT4ge30sXG4gIGF1ZGlvRnVuY3Rpb25zID0ge30sXG4gIGZvcm1hdFRpbWUgPSB0aW1lID0+IHtcbiAgICByZXR1cm4gZGVmYXVsdEZvcm1hdFRpbWUodGltZSk7XG4gIH1cbn0pIHtcbiAgY29uc3QgYXVkaW8gPSB1c2VSZWYoKTtcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YXVkaW9cbiAgICAgICAgcHJlbG9hZD1cImF1dG9cIlxuICAgICAgICByZWY9e2F1ZGlvfVxuICAgICAgICBvblRpbWVVcGRhdGU9eygpID0+IHtcbiAgICAgICAgICBzZXRDdXJyZW50VGltZShNYXRoLmZsb29yKGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUpKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25Mb2FkZWRNZXRhZGF0YT17KCkgPT4ge1xuICAgICAgICAgIHNldER1cmF0aW9uKE1hdGguZmxvb3IoYXVkaW8uY3VycmVudC5kdXJhdGlvbikpO1xuICAgICAgICAgIHNldEN1cnJlbnRUaW1lKE1hdGguZmxvb3IoYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSkpO1xuICAgICAgICB9fVxuICAgICAgICBzcmM9e2F1ZGlvU291cmNlfVxuICAgICAgICB7Li4uYXVkaW9GdW5jdGlvbnN9XG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19Pntmb3JtYXRUaW1lKGN1cnJlbnRUaW1lKX08L3A+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19Pntmb3JtYXRUaW1lKGR1cmF0aW9uKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cHJvZ3Jlc3NcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICB2YWx1ZT17Y3VycmVudFRpbWV9XG4gICAgICAgICAgbWF4PXtkdXJhdGlvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnQucGxheSgpO1xuICAgICAgICAgICAgb25QbGF5KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHBsYXlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBhdWRpby5jdXJyZW50LnBhdXNlKCk7XG4gICAgICAgICAgICBvblN0b3AoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgc3RvcFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgKz0gaW5jcmVtZW50UGVyaW9kO1xuICAgICAgICAgICAgb25JbmNyZW1lbnQoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2ArJHtpbmNyZW1lbnRQZXJpb2R9YH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lIC09IGRlY3JlbWVudFBlcmlvZDtcbiAgICAgICAgICAgIG9uRGVjcmVtZW50KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtgLSR7ZGVjcmVtZW50UGVyaW9kfWB9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il19