"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTableContainer = exports.CustomTableCell = void 0;

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomTableCell = (0, _styles.styled)(_material.TableCell)(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    fontFamily: '"Orbitron", sans-serif',
    // fontSize: 30,
    fontWeight: 900,
    color: '#aaa',
    fontSize: '4rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    maxWidth: '100%',
    padding: 5,
    position: 'relative'
  }, _defineProperty(_ref2, "overflow", 'hidden'), _defineProperty(_ref2, "zIndex", 1), _defineProperty(_ref2, "transition", 'color 0.4s ease-in-out'), _defineProperty(_ref2, '&::before', {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#aaa',
    zIndex: -11,
    transition: 'top 0.5s ease-in-out'
  }), _defineProperty(_ref2, '&:hover', {
    color: 'black'
  }), _defineProperty(_ref2, '&:hover::before', {
    top: '0'
  }), _ref2;
});
exports.CustomTableCell = CustomTableCell;
var CustomTableContainer = (0, _styles.styled)(_material.TableContainer)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    marginLeft: '5%',
    //   marginTop: theme.spacing(4),
    fontFamily: '"Orbitron", sans-serif',
    color: 'white',
    fontSize: '3rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    //   textAlign: 'left',
    width: '90%'
  };
});
exports.CustomTableContainer = CustomTableContainer;