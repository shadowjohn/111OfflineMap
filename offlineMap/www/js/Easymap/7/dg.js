(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dg"] = factory();
	else
		root["dg"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 57:
/***/ (() => {


// UNUSED EXPORTS: dg3D, dgCurve, dgGMarker, dgGStyle, dgGText, dgGeoJson, dgHeatmap, dgIcon, dgKml, dgMarker, dgMenuFunc, dgMergeVector, dgPoint, dgPolygon, dgPolyline, dgSPoint, dgSource, dgStaticImage, dgText, dgWKT, dgXY, dgXYZ

// CONCATENATED MODULE: ./src/dg/dgPoint.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dgPoint = /*#__PURE__*/function () {
  function dgPoint(xy, color, radius) {
    _classCallCheck(this, dgPoint);

    this._id = "";
    this._type = 'point';
    this._label = ".";
    this._x = xy.x;
    this._y = xy.y;
    this._strokeStyle = color;
    this._fillStyle = color;
    this._ptRadius = radius;
    this._lineWidth = radius;
    this._instance = null;
  }

  _createClass(dgPoint, [{
    key: "setLabel",
    value: function setLabel(label) {
      this._label = label;

      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        if (features.length > 0) {
          features[0].set("name", label);
        }
      }
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return this._label;
    }
  }, {
    key: "setXY",
    value: function setXY(tmpxy) {
      this._x = tmpxy.x;
      this._y = tmpxy.y; //this.instance.reposMark();
      //console.log("功能未完成...");

      var p3857 = ol.proj.transform([this._x, this._y], "EPSG:4326", "EPSG:3857");

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        //console.log(p3857);
        features[0].getGeometry().setCoordinates([p3857[0], p3857[1]]);
      }
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return new dgXY(this._x, this._y);
    }
    /*getExtent() {
        let b = new Object();
        b['lt_x'] = this._x;
        b['lt_y'] = this._y;
        b['rb_x'] = this._x;
        b['rb_y'] = this._y;
        return b;
    }*/

  }, {
    key: "getExtent",
    value: function getExtent() {
      var _extent = this._instance.getSource().getExtent();

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      var b = new Object();
      b['lt_x'] = _extent_4326[0];
      b['lt_y'] = _extent_4326[3];
      b['rb_x'] = _extent_4326[2];
      b['rb_y'] = _extent_4326[1];
      return _extent_4326;
    }
  }, {
    key: "getExtentArea",
    value: function getExtentArea() {
      //取得四角範圍的面積
      //回應平方公尺
      var _extent = this._instance.getSource().getExtent();

      var _extent_3826 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:3826'));

      return Math.abs(_extent_3826[2] - _extent_3826[0]) * (_extent_3826[3] - _extent_3826[1]);
    }
  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary() {
      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        this._easymap._zoomByBoundary(features);
      }
    }
  }, {
    key: "getXY",
    value: function getXY() {
      return new dgXY(this._x, this._y);
    }
  }, {
    key: "getFillColor",
    value: function getFillColor() {
      return this._fillStyle;
    }
  }, {
    key: "setFillColor",
    value: function setFillColor(val) {
      this._fillStyle = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        //改顏色必需觸發一次改大小，才會生效
        features[0].getStyle().getImage().getFill().setColor(this._fillStyle);
        features[0].getStyle().getImage().setRadius(this._lineWidth); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "getStrokeWidth",
    value: function getStrokeWidth() {
      return this._lineWidth;
    }
  }, {
    key: "setStrokeWidth",
    value: function setStrokeWidth(val) {
      if (!isNaN(val) == false) val = 1;
      this._lineWidth = parseFloat(val);

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        //var originStyles = features[0].getStyleFunction().call(null, features[0]);
        //let s = originStyles[0].getStroke();
        //s.setWidth(val);
        ////redraw
        //features[0].setStyle(features[0].getStyle());
        features[0].getStyle().getImage().setRadius(this._lineWidth); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }]);

  return dgPoint;
}();

/* harmony default export */ const dg_dgPoint = (dgPoint);
// CONCATENATED MODULE: ./src/dg/dgText.js
function dgText_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgText_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgText_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgText_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgText_defineProperties(Constructor, staticProps); return Constructor; }

var dgText = /*#__PURE__*/function () {
  //From : https://openlayers.org/en/latest/examples/vector-labels.html
  function dgText(xy, label, color, fontSize) {
    dgText_classCallCheck(this, dgText);

    this._id = "";
    this._type = 'text';
    this._label = label;
    this._fontSize = fontSize;
    this._rotate = 0; //旋轉角度

    this._x = xy.x;
    this._y = xy.y; //this._strokeStyle = 'rgba(255,255,255,1)';   
    //this._fillStyle = color;    

    this._textColor = color; //'rgba(255,0,0,1)'; // 文字顏色

    this._textOuterColor = 'rgba(255,255,255,0.5)';
    this._ptRadius = 0;
    this._lineWidth = 0;
    this._instance = null;
    /*this._style = new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({color: 'rgba(255, 0, 0, 0.1)'}),
        stroke: new Stroke({color: 'red', width: 1}),
      }),
      text: createTextStyle(feature, resolution, myDom.points),
    });
    */
  }

  dgText_createClass(dgText, [{
    key: "setXY",
    value: function setXY(tmpxy) {
      this._x = tmpxy.x;
      this._y = tmpxy.y; //this.instance.reposMark();
      //console.log("功能未完成...");

      var p3857 = ol.proj.transform([this._x, this._y], "EPSG:4326", "EPSG:3857");

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        //console.log(p3857);
        features[0].getGeometry().setCoordinates([p3857[0], p3857[1]]);
      }
    }
  }, {
    key: "getXY",
    value: function getXY() {
      return new dgXY(this._x, this._y);
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return new dgXY(this._x, this._y);
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      var b = new Object();
      b['lt_x'] = this._x;
      b['lt_y'] = this._y;
      b['rb_x'] = this._x;
      b['rb_y'] = this._y;
      return b;
    }
  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary() {
      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        this._easymap._zoomByBoundary(features);
      }
    }
  }, {
    key: "getTextColor",
    value: function getTextColor() {
      return this._textColor;
    }
  }, {
    key: "getRotate",
    value: function getRotate() {
      return this._rotate;
    }
  }, {
    key: "setText",
    value: function setText(val) {
      this._label = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        features[0].getStyle().getText().setText(this._label);
        features[0].setStyle(features[0].getStyle());
        features[0].set("name", this._label);
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "getText",
    value: function getText() {
      return this._label;
    }
  }, {
    key: "setRotate",
    value: function setRotate(val) {
      //val = 0~360
      val = parseInt(val) % 360;
      this._rotate = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        //ff.getStyle().getText().setRotation(360/(360/6.3));
        features[0].getStyle().getText().setRotation(this._rotate / (360 / 6.3));
        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "setTextColor",
    value: function setTextColor(val) {
      this._textColor = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        features[0].getStyle().getText().getFill().setColor(this._textColor); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      return parseInt(this._fontSize);
    }
  }, {
    key: "setFontSize",
    value: function setFontSize(val) {
      if (!isNaN(val) == false) val = 1;
      this._fontSize = parseFloat(val);

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        features[0].getStyle().getText().setScale(this._fontSize / 10.0); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }]);

  return dgText;
}();

/* harmony default export */ const dg_dgText = (dgText);
// CONCATENATED MODULE: ./src/dg/dg3D.js
function dg3D_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dg3D_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dg3D_createClass(Constructor, protoProps, staticProps) { if (protoProps) dg3D_defineProperties(Constructor.prototype, protoProps); if (staticProps) dg3D_defineProperties(Constructor, staticProps); return Constructor; }

var dg3D = /*#__PURE__*/function () {
  function dg3D(layertype, url, options) {
    dg3D_classCallCheck(this, dg3D);

    this._type = 'dg3d'; // 3dtiles|kml|geojson|gltf;

    this._layerType = layertype;
    this._url = url;
    this._options = options;
    /**
     * type=gltf
     *      option={
     *          dgxy    
     *          z 
     *          scale
     *          animationLoop = NONE|REPEAT|MIRRORED_REPEAT
     *      }
     *          
     * */

    if (this._options == undefined) {
      this._options = {};
    }
  }

  dg3D_createClass(dg3D, [{
    key: "setFeatureClick",
    value: function setFeatureClick(handler) {
      this.onFeatureSelect = handler;
    }
  }]);

  return dg3D;
}();

/* harmony default export */ const dg_dg3D = (dg3D);
// CONCATENATED MODULE: ./src/dg/dgIcon.js
function dgIcon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dgIcon_dgIcon = function dgIcon(src, w, h, ops) {
  dgIcon_classCallCheck(this, dgIcon);

  this._src = src == null ? null : src;
  this._width = w == null ? 0 : w;
  this._height = h == null ? 0 : h;
  this._w = this._width;
  this._h = this._height;
  this._rotate = 0; //���ਤ��

  this._scale = 1; //��j�j�p

  this._opacity = 1; //�z����

  this._options = ops;
  /**
  * _options:{
  *      scale:1,     //1 = 100%
  *      rotate:0,    //0~360
  *      opacity:1    //0~1 �z���� 
  * }
  * 
  * */
};

/* harmony default export */ const dg_dgIcon = (dgIcon_dgIcon);
// CONCATENATED MODULE: ./src/dg/dgStaticImage.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function dgStaticImage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgStaticImage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgStaticImage_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgStaticImage_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgStaticImage_defineProperties(Constructor, staticProps); return Constructor; }

var dgStaticImage = /*#__PURE__*/function () {
  //From : https://openlayers.org/en/latest/examples/static-image.html
  function dgStaticImage(src, dgXY_lt_xy, dgXY_rb_xy, ops) {
    dgStaticImage_classCallCheck(this, dgStaticImage);

    this._type = "dgstaticimage";
    this._src = src == null ? null : src;
    this._lt_xy = new dgXY(Math.min(dgXY_lt_xy.x, dgXY_rb_xy.x), Math.max(dgXY_lt_xy.y, dgXY_rb_xy.y));
    this._rb_xy = new dgXY(Math.max(dgXY_lt_xy.x, dgXY_rb_xy.x), Math.min(dgXY_lt_xy.y, dgXY_rb_xy.y));
    this._instance = null;
    this._width = "auto";
    this._height = "auto";
    this._rotate = 0;
    this._options = ops;
    /**
     * _options:{
     *      width: 800 //�j��s���e
     *      height: 800 //�j��s����
     * }
     * 
     * */

    if (_typeof(this._options) == "object") {
      if (typeof this._options.width != "undefined") this._width = this._options.width;
      if (typeof this._options.height != "undefined") this._height = this._options.height;
      if (typeof this._options.rotate != "undefined") this._rotate = this._options.rotate;
    }

    return this;
  }

  dgStaticImage_createClass(dgStaticImage, [{
    key: "getCenter",
    value: function getCenter() {
      return new dgXY((this._lt_xy.x + this._rb_xy.x) / 2.0, (this._lt_xy.y + this._rb_xy.y) / 2.0);
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      var _extent = this._instance.getSource().imageExtent_;

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      var b = new Object();
      b['lt_x'] = _extent_4326[0];
      b['lt_y'] = _extent_4326[3];
      b['rb_x'] = _extent_4326[2];
      b['rb_y'] = _extent_4326[1];
      return _extent_4326;
    }
  }, {
    key: "getExtentArea",
    value: function getExtentArea() {
      //���o�|���d�򪺭��n
      //�^�����褽��
      var _extent = this._instance.getSource().imageExtent_;

      var _extent_3826 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:3826'));

      return Math.abs(_extent_3826[2] - _extent_3826[0]) * (_extent_3826[3] - _extent_3826[1]);
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return this.getExtentArea();
      /*let _extent = this._instance.getSource().imageExtent_;
      let _extent_3826 = ol.extent.applyTransform(
          _extent,
          ol.proj.getTransform('EPSG:3857', 'EPSG:3826')
      )*/

      /*
      �ߡG�w�������y�ФW�|�I�]a,b�^�]c,d�^�]e,f�^�]g,h�^�D�|�I�ҧΦ��|��Ϊ����n�H
      �ϡG
      |a�@b|
      |c�@d|
      |e�@f|�@���H 2 = �]a x d + c x f + e x h + g x b - b x c - d x e - f x g - h x a�^���H 2
      |g�@h|
      |a�@b|
      */
      //let _size = (_extent_3826[0].x * _extent_3826[1].y + _extent_3826[1].x * _extent_3826[2].y + _extent_3826[2].x * _extent_3826[3].y + _extent_3826[3].x * _extent_3826[0].y
      //    - _extent_3826[0].y * _extent_3826[1].x - _extent_3826[1].y * _extent_3826[2].x - _extent_3826[2].y * _extent_3826[3].x - _extent_3826[3].y * _extent_3826[0].x) / 2.0;
      //return _size;
    }
    /*setExtent(dgXY_lt_xy, dgXY_rb_xy) {
        this._lt_xy = new dgXY(Math.min(dgXY_lt_xy.x, dgXY_rb_xy.x), Math.max(dgXY_lt_xy.y, dgXY_rb_xy.y));
        this._rb_xy = new dgXY(Math.max(dgXY_lt_xy.x, dgXY_rb_xy.x), Math.min(dgXY_lt_xy.y, dgXY_rb_xy.y));
        this.setURL(this._src);
    }
    */

  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary() {
      if (this._instance != null) {
        var p3857_lt = ol.proj.transform([this._lt_xy.x, this._lt_xy.y], "EPSG:4326", "EPSG:3857");
        var p3857_rb = ol.proj.transform([this._rb_xy.x, this._rb_xy.y], "EPSG:4326", "EPSG:3857");
        var left = p3857_lt[0];
        var top = p3857_lt[1];
        var right = p3857_rb[0];
        var bottom = p3857_rb[1];

        this._easymap._olmap.getView().fit([left, bottom, right, top], this._easymap._olmap.getSize());
      }
    }
  }, {
    key: "getURL",
    value: function getURL() {
      return this._src;
    }
  }, {
    key: "setURL",
    value: function setURL(src) {
      this._src = src;
      var p3857_lt = ol.proj.transform([this._lt_xy.x, this._lt_xy.y], "EPSG:4326", "EPSG:3857");
      var p3857_rb = ol.proj.transform([this._rb_xy.x, this._rb_xy.y], "EPSG:4326", "EPSG:3857"); //�o�̪� extent �� minx miny maxx maxy

      var extent = [Math.min(p3857_lt[0], p3857_rb[0]), Math.min(p3857_lt[1], p3857_rb[1]), Math.max(p3857_lt[0], p3857_rb[0]), Math.max(p3857_lt[1], p3857_rb[1])];
      var s = new ol.source.ImageStatic({
        url: this._src,
        crossOrigin: '',
        projection: "EPSG:3857",
        imageExtent: extent,
        imageLoadFunction: function (image, src) {
          //console.log(src);
          //console.log(image);
          image.getImage().src = src; //console.log(ol.extent);
          //console.log(extent);
          //window['wtf'] = this;
          //window['wtf1'] = image;              

          image.getImage().width = this._width == "auto" ? ol.extent.getWidth(extent) : this._width;
          image.getImage().height = this._height == "auto" ? ol.extent.getHeight(extent) : this._height; //image.getImage().width = ol.extent.getWidth(extent);
          //image.getImage().height = ol.extent.getHeight(extent);
          //console.log(dgstaticimage);
          //console.log(image.getImage().width);
          //console.log(ol.extent.getWidth(extent));
          //console.log(ol.extent.getHeight(extent));
        }.bind(this) //imageSmoothing: false, 

      });

      this._instance.setSource(s);
    }
  }]);

  return dgStaticImage;
}();

/* harmony default export */ const dg_dgStaticImage = (dgStaticImage);
// CONCATENATED MODULE: ./src/dg/dgKml.js
function dgKml_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgKml_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgKml_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgKml_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgKml_defineProperties(Constructor, staticProps); return Constructor; }

var dgKml = /*#__PURE__*/function () {
  function dgKml(url, callback) {
    dgKml_classCallCheck(this, dgKml);

    //private
    this._easymap = null;
    this._type = 'dgkml';
    this._url = url;
    this._callback = callback;
    this._instance = null;
    this._async = false;
    this._setUpperZoomByBoundary = false; //whether uses most best view range

    this._xhr = null; //networklink httprequest

    this._gMarkerEnabled = false;
    this._distance = 50;
    this._threshold = 1;
    this._Style = new dgGStyle(); //2022-01-24 修正 dgGStyle 裡的 _easymap
    //改到 easymap.js 裡 #
    //this._Style._easymap = this._easymap;

    this._isZoomClusterEnabled = true; //whether 到某zoom關閉cluster

    this._clusterZoom = 17; // 預設18層以上不分群

    this._defaultStyles = null;
    this._zIndex = 1;
    this._isLinestringArrowEnabled = false; //是否開啟LineString arrow

    this._showInSelect = true; //可顯示在點開的下拉選單

    this._lineStringIconsrc = '';
    this._lineStringStyle = null;
    this._lineStringWidth = 2;
    this._zoomThreshold = 0;
    this._featureSelect = true;
    this._styleCache = {
      //加快cluster style
      h: null,
      m: null,
      l: null
    }; //public

    this.url = url; //#events 

    this.onFeatureSelect = null;
    this.onFeatureUnselect = null;
    this._onFeatureHover = null;
    this.labelVisible = false; //whether label shows or not

    this.iconVisible = false; //whether icon shows or not

    this.useNetworkLink = true; //whether use networklink

    this.opacity = 1;
    this._styleUpdated = null; //已更新過的 style

    this._heatmapObj = null; //如果變成 heatmap 這裡就不是 null
  }

  dgKml_createClass(dgKml, [{
    key: "getZIndex",
    value: function getZIndex() {
      return this._zIndex;
    }
  }, {
    key: "setZIndex",
    value: function setZIndex(val) {
      this._zIndex = parseInt(val); //console.log(this);

      if (this._easymap != null && this._easymap.setItemZIndex != null) {
        this._easymap.setItemZIndex(this, this.getZIndex());
      }
    }
  }, {
    key: "setZoomWithoutCluster",
    value: function setZoomWithoutCluster(tf, zoom) {
      if (typeof tf != 'boolean') return;
      this._isZoomClusterEnabled = tf;
      this._clusterZoom = parseInt(zoom);
    }
  }, {
    key: "enableLineStringArrow",
    value: function enableLineStringArrow(iconsrc, strokeStyle, lineWidth, zoomThreshold) {
      this._isLinestringArrowEnabled = true;
      this._lineStringIconsrc = iconsrc;
      this._lineStringStyle = strokeStyle;
      this._lineStringWidth = lineWidth;
      if (zoomThreshold == undefined) zoomThreshold = 0;
      this._zoomThreshold = zoomThreshold; //超過哪個zoom才開啟，預設為0
    }
  }, {
    key: "disalbeLineStringArrow",
    value: function disalbeLineStringArrow() {
      this._isLinestringArrowEnabled = false;
    }
  }, {
    key: "enableHeatmap",
    value: function enableHeatmap(opt) {
      if (this._instance != null) {
        if (this._heatmapObj != null) {
          this._easymap.removeItem(this._heatmapObj);
        }

        this._heatmapObj = new dgHeatmap(this, opt);

        this._easymap.addItem(this._heatmapObj);

        this.setOpacity(0);
      } else {
        console.log("dgKml 需先 addItem 至圖台才能使用 enableHeatmap...");
      }
    }
  }, {
    key: "disableHeatmap",
    value: function disableHeatmap() {
      if (this._heatmapObj != null) {
        this._easymap.removeItem(this._heatmapObj);
      }

      if (this.getOpacity() == 0) {
        this.setOpacity(1);
      }
    }
  }, {
    key: "enableCluster",
    value: function enableCluster(distance, threshold, dgGStyle) {
      this._gMarkerEnabled = true;
      this._distance = distance;
      this._threshold = threshold;
      this._Style = dgGStyle;
    }
  }, {
    key: "setClusterEnable",
    value: function setClusterEnable(distance, threshold, dgGStyle) {
      this._gMarkerEnabled = true;
      this._distance = distance;
      this._threshold = threshold;
      this._Style = dgGStyle;
    }
  }, {
    key: "setLabelVisible",
    value: function setLabelVisible(tf) {
      if (typeof tf != 'boolean') return;
      this.labelVisible = tf;
    }
  }, {
    key: "setIconVisible",
    value: function setIconVisible(tf) {
      if (typeof tf != 'boolean') return;
      this.iconVisible = tf;
    }
  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary(tf) {
      if (typeof tf != 'boolean') return;
      this._setUpperZoomByBoundary = tf;

      if (tf == true) {
        if (this._instance != null) {
          var features = this._instance.getSource().getFeatures();

          this._easymap._zoomByBoundary(features);
        }
      }
    }
  }, {
    key: "setOpacity",
    value: function setOpacity(val) {
      if (!isNaN(val) == false) val = 1;
      this.opacity = parseFloat(val); //console.log(this);        

      this._instance.setOpacity(this.opacity);
    }
  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.opacity;
    }
  }, {
    key: "getStrokeWidth",
    value: function getStrokeWidth() {
      return this._lineStringWidth;
    }
  }, {
    key: "setStrokeWidth",
    value: function setStrokeWidth(val) {
      if (!isNaN(val) == false) val = 1;
      this._lineStringWidth = parseFloat(val);

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        for (var i = 0, max_i = features.length; i < max_i; i++) {
          var originStyles = features[i].getStyleFunction().call(null, features[i]); //console.log(originStyles);

          if (originStyles[0].getStroke == null) continue;
          var s = originStyles[0].getStroke();
          s.setWidth(val); //redraw

          features[i].setStyle(features[i].getStyle());
        }
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "getStrokeColor",
    value: function getStrokeColor() {
      return this._lineStringStyle;
    }
  }, {
    key: "setStrokeColor",
    value: function setStrokeColor(val) {
      this._lineStringStyle = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        for (var i = 0, max_i = features.length; i < max_i; i++) {
          var originStyles = features[i].getStyleFunction().call(null, features[i]);
          if (originStyles[0].getStroke == null) continue;
          var s = originStyles[0].getStroke();
          s.setColor(val); //redraw

          features[i].setStyle(features[i].getStyle());
        }
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "setFeatureClick",
    value: function setFeatureClick(handler) {
      this.onFeatureSelect = handler;
    }
  }, {
    key: "setFeatureHover",
    value: function setFeatureHover(handler) {
      this._onFeatureHover = handler;
    }
  }, {
    key: "setFeatureSelectDisabled",
    value: function setFeatureSelectDisabled() {
      this._featureSelect = true;
    }
  }, {
    key: "setFeatureSelect",
    value: function setFeatureSelect(tf) {
      if (typeof tf != 'boolean') return;
      this._featureSelect = tf;
    }
  }, {
    key: "getShowInSelect",
    value: function getShowInSelect() {
      return this._showInSelect;
    }
  }, {
    key: "setShowInSelect",
    value: function setShowInSelect(tf) {
      if (typeof tf != 'boolean') return;
      this._showInSelect = tf;
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      var _extent = this._instance.getSource().getExtent();

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      var b = new Object();
      b['lt_x'] = _extent_4326[0];
      b['lt_y'] = _extent_4326[3];
      b['rb_x'] = _extent_4326[2];
      b['rb_y'] = _extent_4326[1];
      return _extent_4326;
    }
  }, {
    key: "getExtentArea",
    value: function getExtentArea() {
      //取得四角範圍的面積
      //回應平方公尺
      var _extent = this._instance.getSource().getExtent();

      var _extent_3826 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:3826'));

      return Math.abs(_extent_3826[2] - _extent_3826[0]) * (_extent_3826[3] - _extent_3826[1]);
    }
  }, {
    key: "getArea",
    value: function getArea() {
      var _size = 0;

      for (var i = 0, max_i = this._instance.getSource().getFeatures().length; i < max_i; i++) {
        if (this._instance.getSource().getFeatures()[i].getGeometry().getArea != null) {
          _size += this._instance.getSource().getFeatures()[i].getGeometry().getArea();
        }
      }

      return _size;
    }
  }, {
    key: "getAttributes",
    value: function getAttributes() {}
  }, {
    key: "getAttributeByName",
    value: function getAttributeByName() {}
  }, {
    key: "getStyleByName",
    value: function getStyleByName() {}
    /*
     * map._olmap.getLayers().getArray()[1].getSource().getFeatures()[0].getStyleFunction().call(map._olmap.getLayers().getArray()[1].getSource().getFeatures()[0])
     * */

    /*
    /*
        fill	{Boolean}
        fillColor	{String}
        fillOpacity	{Number}
        stroke	{Boolean}
        strokeColor	{String}
        strokeOpacity	{Number}
        strokeWidth	{Number}
        strokeLinecap	{String}
        strokeDashstyle	{String}
        graphic	{Boolean}
        pointRadius	{Number}
        pointerEvents	{String}
        cursor	{String}
        externalGraphic	{String}
        graphicWidth	{Number}
        graphicHeight	{Number}
        graphicOpacity	{Number}
        graphicXOffset	{Number}
        graphicYOffset	{Number}
        rotation	{Number}
        graphicZIndex	{Number}
        graphicName	{String}
        graphicTitle	{String}
        title	{String}
        backgroundGraphic	{String}
        backgroundGraphicZIndex	{Number}
        backgroundXOffset	{Number}
        backgroundYOffset	{Number}
        backgroundHeight	{Number}
        backgroundWidth	{Number}
        label	{String}
        labelAlign	    {String}
        labelXOffset	{Number}
        labelYOffset	{Number}
        labelSelect	{Boolean}
        labelOutlineColor	{String}
        labelOutlineWidth	{Number}
        labelOutlineOpacity	{Number}
        fontColor	{String}
        fontOpacity	{Number}
        fontFamily	{String}
        fontSize	{String}
        fontStyle	{String}
        fontWeight	{String}
        display	{String}
        imageOpacity    {Number}        ImageOverlay
    */

  }, {
    key: "getUpdateStyle",
    value: function getUpdateStyle() {
      return this._styleUpdated;
    }
  }, {
    key: "updateStyle",
    value: function updateStyle(style) {
      if (style == undefined) return; //let type = this._instance.getType().toLowerCase();

      if (this.getType() == null) return;
      var type = this.getType().toLowerCase();

      if (type == 'image') {
        if (style.imageOpacity != undefined) {
          var opacity = parseFloat(style.imageOpacity);

          this._instance.setOpacity(opacity);
        }
      }

      if (type == 'vector') {
        var features = this._instance.getSource().getFeatures();

        if (features.length <= 0) return;
        var originStyles = features[0].getStyleFunction().call(null, features[0]); //# 重建olStyle

        var styler = []; //console.log(this); 

        for (var i = 0; i < originStyles.length; i++) {
          styler.push(this._easymap._getOlStyleFromStyleFunction(originStyles[i]));
        } //# 更新style


        for (var _i = 0; _i < originStyles.length; _i++) {
          this._easymap._updateOlStyle(styler[_i], style);
        } //# 讀出 Feature


        for (var _i2 = 0; _i2 < features.length; _i2++) {
          var feature = features[_i2];
          feature.setStyle(styler);
        }
      }

      if (this._styleUpdated == null) {
        this._styleUpdated = this._easymap._objMergeDeep(style);
      } else {
        this._styleUpdated = this._easymap._objMergeDeep(this._styleUpdated, style);
      }
    }
  }, {
    key: "updateStyleByName",
    value: function updateStyleByName(name, style) {
      if (name == undefined) return;
      if (style == undefined) return;

      var features = this._instance.getSource().getFeatures();

      var targetFeature = null; //# 讀出 Name 的 Feature

      for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        var properties = feature.getProperties();
        if (properties.name == undefined) continue;

        if (name == properties.name) {
          targetFeature = feature;
          break;
        }
      }

      if (targetFeature == null) return false;
      var originStyles = targetFeature.getStyleFunction().call(null, targetFeature); //# 重建olStyle

      var styler = [];

      for (var _i3 = 0; _i3 < originStyles.length; _i3++) {
        styler.push(this._getOlStyleFromStyleFunction(originStyles[_i3]));
      } //# 更新style


      for (var _i4 = 0; _i4 < originStyles.length; _i4++) {
        this._updateOlStyle(styler[_i4], style);
      }

      targetFeature.setStyle(styler);
    }
  }, {
    key: "updateStyleByAttribute",
    value: function updateStyleByAttribute() {}
  }, {
    key: "getGeometryTypes",
    value: function getGeometryTypes() {
      var m = [];

      var features = this._instance.getSource().getFeatures();

      for (var i = 0; i < features.length; i++) {
        var geometryType = features[i].getGeometry().getType();

        if (m.indexOf(geometryType) == -1) {
          m.push(geometryType);
        }
      }

      return m;
    }
  }, {
    key: "getType",
    value: function getType() {
      if (this._instance != null) {
        if (this._instance.getType != null) {
          return this._instance.getType();
        } else {
          if (this._instance.constructor.name.toLowerCase() == "imagelayer") {
            return "image";
          } else {
            return "vector";
          }
        }
      }

      return null;
    }
  }]);

  return dgKml;
}();

/* harmony default export */ const dg_dgKml = (dgKml);
// CONCATENATED MODULE: ./src/dg/dgXY.js
function dgXY_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dgXY_dgXY = function dgXY(cdx, cdy, tf) {
  dgXY_classCallCheck(this, dgXY);

  this.x = cdx == null ? null : parseFloat(cdx);
  this.y = cdy == null ? null : parseFloat(cdy);
  this.os = tf == null ? false : tf;
  this.xy = [this.x, this.y];
  this.yx = [this.y, this.x];
  this.lon = this.x;
  this.lat = this.y;
};

/* harmony default export */ const dg_dgXY = (dgXY_dgXY);
// CONCATENATED MODULE: ./src/dg/dgXYZ.js
function dgXYZ_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dgXYZ = function dgXYZ(cdx, cdy, cdz, tf) {
  dgXYZ_classCallCheck(this, dgXYZ);

  this.x = cdx == null ? null : parseFloat(cdx);
  this.y = cdy == null ? null : parseFloat(cdy);
  this.z = cdy == null ? null : parseFloat(cdz);
  this.os = tf == null ? false : tf;
  this.xyz = [this.x, this.y, this.z];
  this.zyx = [this.z, this.y, this.x];
  this.lon = this.x;
  this.lat = this.y;
  this.alt = this.z;
};

/* harmony default export */ const dg_dgXYZ = (dgXYZ);
// CONCATENATED MODULE: ./src/dg/dgMarker.js
function dgMarker_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dgMarker_typeof = function _typeof(obj) { return typeof obj; }; } else { dgMarker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dgMarker_typeof(obj); }

function dgMarker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgMarker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgMarker_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgMarker_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgMarker_defineProperties(Constructor, staticProps); return Constructor; }

var dgMarker = /*#__PURE__*/function () {
  function dgMarker(dgxy, mobj, drag) {
    dgMarker_classCallCheck(this, dgMarker);

    this._easymap = null;
    this._type = 'dgmarker';
    this._dgxy = dgxy == null ? null : dgxy;
    this._dgicon = mobj;
    this._htmlstr = '';
    this._drag = drag == null ? false : drag;
    this._instance = null;
    this._icontype = 'dgicon'; //dgicon|string

    this._text = '';
    this._textStyle = null; //text style

    var dg_DEFAULT_ICON = "imgs/icon01.png"; //# 事件介面

    this.ondragend = null; //v7

    this.onclick = null;
    this.ondblclick = null;
    this.mouseover = null;
    this.mouseout = null;
    this.mousedown = null;
    this.mouseup = null;

    if (mobj instanceof dgIcon) {
      this._icontype = "dgicon";
      /*this._icontype = "string";
      this._dgicon = null;
      this._htmlstr = "<img \
                          src=\""+mobj._src+"\" \
                          width=\""+mobj._w+"\" \
                          height=\""+mobj._h+"\" \
                          
                       >";
                       */
    } else if (typeof mobj == 'string') {
      this._icontype = "string";
      this._dgicon = null;
      this._htmlstr = mobj;
    }
  }

  dgMarker_createClass(dgMarker, [{
    key: "_setText",
    value: function _setText(text, style) {
      this._text = text;
      this._textStyle = style;
      if (this._instance == null) return;

      var features = this._instance.getSource().getFeatures();

      for (var i = 0; i < features.length; i++) {
        var feature = features[i];

        if (this._id == feature._dgmarkerId) {
          var originStyles = feature.getStyleFunction().call(null, feature);

          if (originStyles.length >= 1) {
            //# 更新style
            if (originStyles[0].text_ != null) {
              originStyles[0].text_.text_ = text;
            }

            if (this._textStyle != null) {
              //originStyles[0].text_.offsetY_ = this._textStyle.offsetY;
              this._updateOlStyles(originStyles, style);
            } //# 重建olStyle


            var styler = [];

            for (var _i = 0; _i < originStyles.length; _i++) {
              styler.push(this._getOlStyleFromStyleFunction(originStyles[_i]));
            } //# 讀出 Feature


            feature.setStyle(styler);
          }
        }
      }
    }
  }, {
    key: "_rotate",
    value: function _rotate(angle) {}
  }, {
    key: "getXY",
    value: function getXY() {
      //By John
      //var p = this._instance.getSource().getFeatures()[0].getGeometry().getCoordinates();
      //var p = ol.proj.transform(p, 'EPSG:3857', 'EPSG:4326');
      //var p = this._dgxy;        
      if (this._instance != null && this._instance.getPosition != null) {
        var p = this._instance.getPosition();

        p = ol.proj.transform(p, 'EPSG:3857', 'EPSG:4326'); //return new dgXY(p[0], p[1]);

        return new dgXY(p[0], p[1]);
      } else {
        return this._dgxy;
      }
    }
  }, {
    key: "getXYZ",
    value: function getXYZ() {
      var o = {};
      o['dgXY'] = this.getXY();
      o['x'] = o['dgXY'].x;
      o['y'] = o['dgXY'].y;
      o['z'] = this.getZ();
      o['height'] = this.getZ();
      return o;
    }
  }, {
    key: "getZ",
    value: function getZ() {
      if (this._icontype == "dgicon") {
        var _p = this._instance.getSource().getFeatures()[0].getGeometry().getCoordinates();

        var _z = 0;

        if (_p.length == 3) {
          _z = _p[3];
        }

        return _z;
      }

      var p = this._instance.getPosition();

      var z = 0;

      if (p.length == 3) {
        z = p[3];
      }

      return z;
    }
  }, {
    key: "setZ",
    value: function setZ(z) {
      this._z = z;

      if (this._icontype == "dgicon") {
        //貼地的要移掉才能生效
        this._instance.getSource().getFeatures()[0].getGeometry().values_.altitudeMode = ""; //原為 clampToGround

        var _p = this._instance.getSource().getFeatures()[0].getGeometry().getCoordinates();

        this._instance.getSource().getFeatures()[0].getGeometry().setCoordinates([_p[0], _p[1], z]);

        return;
      }

      var p = this._instance.getPosition();

      this._instance.setPosition([p[0], p[1], z]);
    }
  }, {
    key: "setXYZ",
    value: function setXYZ(dgxy, z) {
      this.setXY(dgxy);
      this.setZ(z);
    }
  }, {
    key: "setXY",
    value: function setXY(dgxy) {
      //By John

      /*this._dgxy = dgxy;
      this._instance.getSource().getFeatures().forEach(function (f) {
          if (this._id === f.get('_easymapId')) {
              f.setGeometry(new ol.geom.Point(ol.proj.transform(this._dgxy.xy, 'EPSG:4326', 'EPSG:3857')));
          }
      }.bind(this));
      */
      if (this._icontype == "dgicon") {
        var _p2 = ol.proj.transform(dgxy.xy, 'EPSG:4326', 'EPSG:3857');

        if (this._instance.getSource().getFeatures().length >= 1) {
          var feature = this._instance.getSource().getFeatures()[0];

          feature.getGeometry().setCoordinates(_p2);
        }

        return;
      }

      if (dgxy.x != null && dgxy.y != null) {
        if (this._instance != null && this._instance.setPosition != null) {
          var p = ol.proj.transform([dgxy.x, dgxy.y], 'EPSG:4326', 'EPSG:3857');
          this._dgxy = dgxy;

          this._instance.setPosition(p);
        } else {
          this._dgxy = dgxy;
          console.log("setXY 需先 addItem 至圖台才能使用，或是 new dgMarker 時定義位置");
        }
      } else {
        console.log("傳入的不是 dgXY 格式...");
      }
    }
  }, {
    key: "setContent",
    value: function setContent(mobj) {
      /*if(this._icontype == "dgicon")
      {
        console.log("dgicon 版的 dgmarker 無法更新內容...(待議)");
        return; 
      }
      */
      if (dgMarker_typeof(mobj) == 'object') {
        tmpdiv = document.createElement('div');
        tmpdiv.appendChild(mobj);
        this.content = tmpdiv.innerHTML; //By John

        /*if(this._instance!=null && this._instance.element !=null)
        {
          this._instance.element.innerHTML=tmpdiv.innerHTML;
        }
        else
        {
          console.log("setContent必需先 addItem 至圖台才能使用");
        }*/
      } else if (typeof mobj == 'string') {
        this.content = mobj; //By John

        /*if(this._instance!=null && this._instance.element !=null)
        {
          this._instance.element.innerHTML=mobj;
        }
        else
        {
          console.log("setContent必需先 addItem 至圖台才能使用");
        }
        */
      }

      this.onclick = function (xy, feature) {
        // 寫在這似乎只有 dgicon 有效
        this._easymap._openInfoWindow(this.getXY(), '', this.content); //console.log(feature);
        //console.log(this);
        //this.openInfoWindow(xy, this.content);

      }.bind(this);
    }
  }, {
    key: "openInfoWindow",
    value: function openInfoWindow(wcontent, ww, wh) {
      //By John
      if (ww == null || wh == null) {
        if (this._easymap != null) {
          this._easymap.openInfoWindow(this.getXY(), wcontent);
        }
      } else {
        ww = parseInt(ww);
        wh = parseInt(wh);

        if (this._easymap != null) {
          this._easymap.openInfoWindow(this.getXY(), wcontent, ww, wh);
        }
      }
    }
  }]);

  return dgMarker;
}();

/* harmony default export */ const dg_dgMarker = (dgMarker);
// CONCATENATED MODULE: ./src/dg/dgGMarker.js
function dgGMarker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgGMarker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgGMarker_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgGMarker_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgGMarker_defineProperties(Constructor, staticProps); return Constructor; }

var dgGMarker = /*#__PURE__*/function () {
  function dgGMarker(markers, distance, threshold) {
    dgGMarker_classCallCheck(this, dgGMarker);

    this._easymap = null;
    this._type = "gmarker";
    this._instance = null;
    this._isCusterZoom = false;
    this._zoom = 0;
    this._Style = null;
    this._role = null;
    this._clusterSource = null; //分群的class

    this._distance = 50;
    this._threshold = null;
    this._markers = [];
    this._click = null;
    this._mouseover = null;
    this._mouseout = null;
    this._mousedown = null;
    if (distance) this._distance = distance;
    if (threshold) this._threshold = threshold;
    this._markers = markers;
    this._Style = new dgGStyle();
    this._isZoomWithoutCluster = false; //是否再否階層後不分群

    this._zoomWithoutCluster = 99; //哪一層後不分群
  }

  dgGMarker_createClass(dgGMarker, [{
    key: "setZIndexTop",
    value: function setZIndexTop() {}
  }, {
    key: "setRole",
    value: function setRole(role) {
      this._role = role; //將 this._Style 的樣式調成 role 的內容

      /*
       * role：https://easymap.gis.tw/easymap/api.html#marker%E5%88%86%E7%BE%A4(GMarker)-%E6%B8%AC%E8%A9%A6%E4%BA%8B%E4%BB%B6
       var role = {
          high: 100,  //大於該值為high
          medium: 20, //大於該值小於high值，為Medium; 小於該值為Low
          highColor: 'rgb()
          picHigh: "<div style='position:absolute;left:-29px;top:-29px;'><img src='easymap/imgs/nuclear-b.png' width='58' height='58'></div>", //大於100個marker
          picMedium: "<div style='position:absolute;left:-29px;top:-29px;'><img src='easymap/imgs/nuclear-g.png' width='58' height='58'></div>",       //介於20~100個marker
          picLow: "<div style='position:absolute;left:-29px;top:-29px;'><img src='easymap/imgs/nuclear-y.png' width='58' height='58'></div>",           //小於20個marker
          texttagHigh: texttag,    //{0}為cluster的數量
          texttagMedium: texttag,  //{0}為cluster的數量
          texttagLow: texttag     //{0}為cluster的數量
          //文字顯示的css
      };
      */

      if (this._role.high != null) {
        this._Style.setHigh(this._role.high);
      }

      if (this._role.medium != null) {
        this._Style.setMedium(this._role.medium);
      }
    }
  }, {
    key: "setZoomWithoutCluster",
    value: function setZoomWithoutCluster(tf, zoom) {
      this._isZoomWithoutCluster = tf;
      this._zoomWithoutCluster = parseInt(zoom);
    }
  }, {
    key: "setDistance",
    value: function setDistance(distance) {}
  }, {
    key: "setThreshold",
    value: function setThreshold(threshold) {}
  }, {
    key: "register",
    value: function register(eventType, callback) {
      if (!eventType) return;
      if (!callback) return;

      switch (eventType) {
        case "click":
          this._click = callback;
          break;

        default:
      }
    }
  }]);

  return dgGMarker;
}();

/* harmony default export */ const dg_dgGMarker = (dgGMarker);
// CONCATENATED MODULE: ./src/dg/dgGStyle.js
function dgGStyle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgGStyle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgGStyle_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgGStyle_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgGStyle_defineProperties(Constructor, staticProps); return Constructor; }

var dgGStyle_dgGStyle = /*#__PURE__*/function () {
  function dgGStyle() {
    dgGStyle_classCallCheck(this, dgGStyle);

    this._high = 100; //大於該值為high

    this._medium = 20; //大於該值小於high值，為Medium; 小於該值為Low

    this._colorHigh = {
      r: 247,
      g: 14,
      b: 26
    };
    this._colorMedium = {
      r: 255,
      g: 153,
      b: 0
    };
    this._colorLow = {
      r: 37,
      g: 169,
      b: 59
    };
  }

  dgGStyle_createClass(dgGStyle, [{
    key: "setHigh",
    value: function setHigh(high) {
      this._high = high;
    }
  }, {
    key: "setMedium",
    value: function setMedium(medium) {
      this._medium = medium;
    }
  }, {
    key: "getHigh",
    value: function getHigh() {
      return this._high;
    }
  }, {
    key: "getMedium",
    value: function getMedium() {
      return this._medium;
    }
  }, {
    key: "setColorHigh",
    value: function setColorHigh(color) {
      var rgb = this._hexToRgbA(color);

      this._colorHigh.r = rgb[0];
      this._colorHigh.g = rgb[1];
      this._colorHigh.b = rgb[2];
    }
  }, {
    key: "setColorMedium",
    value: function setColorMedium(color) {
      var rgb = this._hexToRgbA(color);

      this._colorMedium.r = rgb[0];
      this._colorMedium.g = rgb[1];
      this._colorMedium.b = rgb[2];
    }
  }, {
    key: "setColorLow",
    value: function setColorLow(color) {
      var rgb = this._hexToRgbA(color);

      this._colorLow.r = rgb[0];
      this._colorLow.g = rgb[1];
      this._colorLow.b = rgb[2];
    }
  }, {
    key: "_hexToRgbA",
    value: function _hexToRgbA(hex) {
      var c;

      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');

        if (c.length == 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }

        c = '0x' + c.join('');
        return [c >> 16 & 255, c >> 8 & 255, c & 255, 255];
      } //console.log(this);


      if (typeof hex == "string" && this._is_string_like(hex.toLowerCase(), "rgb(%")) {
        var _c = hex.split(",");

        return [parseInt(_c[0].toLowerCase().replace("rgba(", "")), parseInt(_c[1]), parseInt(_c[2].replace(")", "")), 255];
      }

      if (typeof hex == "string" && this._is_string_like(hex.toLowerCase(), "rgba(%")) {
        var _c2 = hex.split(",");

        return [parseInt(_c2[0].toLowerCase().replace("rgba(", "")), parseInt(_c2[1]), parseInt(_c2[2]), parseFloat(_c2[3].replace(")", ""))];
      }

      throw null;
    }
  }, {
    key: "_strpos",
    value: function _strpos(haystack, needle, offset) {
      var i = (haystack + '').indexOf(needle, offset || 0);
      return i === -1 ? false : i;
    }
  }, {
    key: "_is_string_like",
    value: function _is_string_like($data, $find_string) {
      var $tieneini = 0;
      if ($find_string == "") return 1;
      var $vi = $find_string.split("%");
      var $offset = 0;

      for (var $n = 0, $max_n = $vi.length; $n < $max_n; $n++) {
        if ($vi[$n] == "") {
          if ($vi[0] == "") {
            $tieneini = 1;
          }
        } else {
          var $newoff = this._strpos($data, $vi[$n], $offset);

          if ($newoff !== false) {
            if (!$tieneini) {
              if ($offset != $newoff) {
                return false;
              }
            }

            if ($n == $max_n - 1) {
              if ($vi[$n] != this._substr($data, $data.length - $vi[$n].length, $vi[$n].length)) {
                return false;
              }
            } else {
              $offset = $newoff + $vi[$n].length;
            }
          } else {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: "_substr",
    value: function _substr(str, start, len) {
      var i = 0,
          allBMP = true,
          es = 0,
          el = 0,
          se = 0,
          ret = '';
      str += '';
      var end = str.length;
      this.php_js = this.php_js || {};
      this.php_js.ini = this.php_js.ini || {};

      switch (this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase()) {
        case 'on':
          for (i = 0; i < str.length; i++) {
            if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
              allBMP = false;
              break;
            }
          }

          if (!allBMP) {
            if (start < 0) {
              for (i = end - 1, es = start += end; i >= es; i--) {
                if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
                  start--;
                  es--;
                }
              }
            } else {
              var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

              while (surrogatePairs.exec(str) != null) {
                var li = surrogatePairs.lastIndex;

                if (li - 2 < start) {
                  start++;
                } else {
                  break;
                }
              }
            }

            if (start >= end || start < 0) {
              return false;
            }

            if (len < 0) {
              for (i = end - 1, el = end += len; i >= el; i--) {
                if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
                  end--;
                  el--;
                }
              }

              if (start > end) {
                return false;
              }

              return str.slice(start, end);
            } else {
              se = start + len;

              for (i = start; i < se; i++) {
                ret += str.charAt(i);

                if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
                  se++;
                }
              }

              return ret;
            }

            break;
          }

        case 'off':
        default:
          if (start < 0) {
            start += end;
          }

          end = typeof len === 'undefined' ? end : len < 0 ? len + end : len + start;
          return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);
      }

      return undefined;
    }
  }]);

  return dgGStyle;
}();

/* harmony default export */ const dg_dgGStyle = (dgGStyle_dgGStyle);
// CONCATENATED MODULE: ./src/dg/dgCurve.js
function dgCurve_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgCurve_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgCurve_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgCurve_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgCurve_defineProperties(Constructor, staticProps); return Constructor; }

var dgCurve = /*#__PURE__*/function () {
  function dgCurve(xy, ss, fs, ptR, sw, ang1, ang2, clockw) {
    dgCurve_classCallCheck(this, dgCurve);

    this._id = "";
    this._type = 'curve';
    this._x = xy.x;
    this._y = xy.y;
    this._strokeStyle = ss;
    this._fillStyle = fs;
    this._ptRadius = ptR;
    this._lineWidth = sw;
    this._arcAngle1 = ang1;
    this._arcAngle2 = ang2;
    this._clockwise = clockw;
    this._dash = {
      lineDash: [0, 0],
      lineCap: 'round'
    };
    this._instance = null;
    this._xs = new Array();
    this._ys = new Array();
    this._xys = new Array();
  }

  dgCurve_createClass(dgCurve, [{
    key: "setXY",
    value: function setXY(tmpxy) {
      this._x = tmpxy.x;
      this._y = tmpxy.y; //this.instance.reposMark();
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return new dgXY(this._x, this._y);
    }
  }, {
    key: "enableDashed",
    value: function enableDashed(val) {
      //val 可不填，預設為 [4,8]
      //啟動 dash
      if (val == null) {
        this._dash.lineDash = [4, 8];
      } else {
        this._dash.lineDash = val;
      }

      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        if (features.length > 0) {
          var originStyles = features[0].getStyleFunction().call(null, features[0]);
          originStyles[0].getStroke().setLineDash(this._dash.lineDash);
          features[0].setStyle(features[0].getStyle());
        } else {
          console.log("Error ... features 為 0");
        }
      }
    }
  }, {
    key: "disableDashed",
    value: function disableDashed() {
      this.enableDashed([0, 0]);
    }
  }, {
    key: "getArea",
    value: function getArea() {
      var _size = 0;

      for (var i = 0, max_i = this._instance.getSource().getFeatures().length; i < max_i; i++) {
        if (this._instance.getSource().getFeatures()[i].getGeometry().getArea != null) {
          _size += this._instance.getSource().getFeatures()[i].getGeometry().getArea();
        }
      }

      return _size;
    }
    /*getExtent() {
        let b = new Object();
        if (this._instance != null) {
            let features = this._instance.getSource().getFeatures();
            let _extent = features[0].getGeometry().getExtent()
            let p0 = ol.proj.transform([_extent[0], _extent[1]], "EPSG:3857", "EPSG:4326");
            let p1 = ol.proj.transform([_extent[2], _extent[3]], "EPSG:3857", "EPSG:4326");
            b['lt_x'] = p0[0];
            b['lt_y'] = p0[1];
            b['rb_x'] = p1[0];
            b['rb_y'] = p1[1];
            return b;
        }
        return null;
    }*/

  }, {
    key: "getExtent",
    value: function getExtent() {
      var _extent = this._instance.getSource().getExtent();

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      var b = new Object();
      b['lt_x'] = _extent_4326[0];
      b['lt_y'] = _extent_4326[3];
      b['rb_x'] = _extent_4326[2];
      b['rb_y'] = _extent_4326[1];
      return _extent_4326;
    }
  }, {
    key: "getExtentArea",
    value: function getExtentArea() {
      //取得四角範圍的面積
      //回應平方公尺
      var _extent = this._instance.getSource().getExtent();

      var _extent_3826 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:3826'));

      return Math.abs(_extent_3826[2] - _extent_3826[0]) * (_extent_3826[3] - _extent_3826[1]);
    }
  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary() {
      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        this._easymap._zoomByBoundary(features);
      }
    }
  }, {
    key: "getStrokeWidth",
    value: function getStrokeWidth() {
      return this._lineWidth;
    }
  }, {
    key: "setStrokeWidth",
    value: function setStrokeWidth(val) {
      if (!isNaN(val) == false) val = 1;
      this._lineWidth = parseFloat(val);

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        var originStyles = features[0].getStyleFunction().call(null, features[0]);
        var s = originStyles[0].getStroke();
        s.setWidth(val); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "getStrokeColor",
    value: function getStrokeColor() {
      return this._strokeStyle;
    }
  }, {
    key: "setStrokeColor",
    value: function setStrokeColor(val) {
      this._strokeStyle = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        var originStyles = features[0].getStyleFunction().call(null, features[0]);
        var s = originStyles[0].getStroke();
        s.setColor(val); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "getFillColor",
    value: function getFillColor() {
      return this._fillStyle;
    }
  }, {
    key: "setFillColor",
    value: function setFillColor(val) {
      this._fillStyle = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        var originStyles = features[0].getStyleFunction().call(null, features[0]);
        var s = originStyles[0].getFill();
        s.setColor(val); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }]);

  return dgCurve;
}();

/* harmony default export */ const dg_dgCurve = (dgCurve);
// CONCATENATED MODULE: ./src/dg/dgPolyline.js
function dgPolyline_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dgPolyline_typeof = function _typeof(obj) { return typeof obj; }; } else { dgPolyline_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dgPolyline_typeof(obj); }

function dgPolyline_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgPolyline_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgPolyline_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgPolyline_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgPolyline_defineProperties(Constructor, staticProps); return Constructor; }

var dgPolyline = /*#__PURE__*/function () {
  function dgPolyline(pts, ss, sw) {
    dgPolyline_classCallCheck(this, dgPolyline);

    this._type = 'polyline';
    this._xys = pts;
    this._instance = null;
    this._pcount = this._xys.length;
    this._strokeStyle = ss;
    this._lineWidth = sw;
    this._isLinestringArrowEnabled = false;
    this._lineStringIconsrc = '';
    this._lineStringIconsrcScale = 1.0; //比例放大

    this._xs = new Array();
    this._ys = new Array();
    this._dash = {
      lineDash: [0, 0],
      lineCap: 'round'
    };

    for (var i = 0; i < this._xys.length; i++) {
      this._xs.push(this._xys[i].x);

      this._ys.push(this._xys[i].y);
    }

    return this;
  }

  dgPolyline_createClass(dgPolyline, [{
    key: "getCenter",
    value: function getCenter() {
      var x = null;
      var y = null;

      for (var i = 0; i < this._xys.length; i++) {
        if (i == 0) {
          x = this._xys[i].x;
          y = this._xys[i].y;
        } else {
          x += this._xys[i].x;
          y += this._xys[i].y;
        }
      }

      x /= this._xys.length;
      y /= this._xys.length;
      return new dgXY(x, y);
    }
    /*getExtent() {
        let b = new Object();
        if (this._instance != null) {
            let features = this._instance.getSource().getFeatures();
            let _extent = features[0].getGeometry().getExtent()
            let p0 = ol.proj.transform([_extent[0], _extent[1]], "EPSG:3857", "EPSG:4326");
            let p1 = ol.proj.transform([_extent[2], _extent[3]], "EPSG:3857", "EPSG:4326");
            b['lt_x'] = p0[0];
            b['lt_y'] = p0[1];
            b['rb_x'] = p1[0];
            b['rb_y'] = p1[1];
            return b;
        }
        b['lt_x'] = null;
        b['lt_y'] = null;
        b['rb_x'] = null;
        b['rb_y'] = null;
        for (let i = 0; i < this._xys.length; i++) {
            if (i == 0) {
                b['lt_x'] = this._xys[i].x;
                b['lt_y'] = this._xys[i].y;
                b['rb_x'] = this._xys[i].x;
                b['rb_y'] = this._xys[i].y;
            }
            else {
                b['lt_x'] = Math.min(b['lt_x'], this._xys[i].x);
                b['lt_y'] = Math.max(b['lt_y'], this._xys[i].y);
                b['rb_x'] = Math.max(b['rb_x'], this._xys[i].x);
                b['rb_y'] = Math.min(b['rb_y'], this._xys[i].y);
            }
        }
        return b;
    }*/

  }, {
    key: "enableDashed",
    value: function enableDashed(val) {
      //val 可不填，預設為 [4,8]
      //啟動 dash
      if (val == null) {
        this._dash.lineDash = [4, 8];
      } else {
        this._dash.lineDash = val;
      }

      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        if (features.length > 0) {
          var originStyles = features[0].getStyleFunction().call(null, features[0]);
          originStyles[0].getStroke().setLineDash(this._dash.lineDash);
          features[0].setStyle(features[0].getStyle());
        } else {
          console.log("Error ... features 為 0");
        }
      }
    }
  }, {
    key: "enableLineStringArrow",
    value: function enableLineStringArrow(iconsrc, op) {
      var _this = this;

      //zoomThreshold
      //亦可換成 easymap/imgs/arror.png
      if (iconsrc == null || iconsrc == '') {
        iconsrc = "https://openlayers.org/en/latest/examples/data/arrow.png";
      }

      this._lineStringIconsrc = iconsrc; //if (zoomThreshold == undefined) zoomThreshold = 0;
      //this._zoomThreshold = zoomThreshold;//超過哪個zoom才開啟，預設為0

      if (dgPolyline_typeof(op) == "object") {
        if (typeof op.scale != "undefined") {
          this._lineStringIconsrcScale = op.scale;
        }
      }

      if (this._instance == null) {
        console.log("需要在 addItem 後才能使用");
        return;
      }

      if (this._isLinestringArrowEnabled == true) {
        console.log("已經上過箭頭了...");
        return;
      }

      this._isLinestringArrowEnabled = true;

      var features = this._instance.getSource().getFeatures();

      var _loop = function _loop(i, max_i) {
        var styles = [// linestring
        _this._instance.getSource().getFeatures()[i].getStyle()];
        var feature = features[i];
        feature._lineStringIconsrc = _this._lineStringIconsrc;
        var geometry = feature.getGeometry();
        var type = geometry.getType(); //let properties = feature.getProperties()

        if (type.toLowerCase() == 'linestring' || type.toLowerCase() == 'multilinestring') {} else {
          return "continue";
        }

        var segments = null;

        if (type.toLowerCase() == 'multilinestring') {
          segments = geometry.getLineString();
        } else {
          segments = geometry;
        } // From : https://openlayers.org/en/latest/examples/line-arrows.html


        segments.forEachSegment(function (start, end) {
          var dx = end[0] - start[0];
          var dy = end[1] - start[1];
          var rotation = Math.atan2(dy, dx); // arrows
          //var styles = feature.getStyleFunction().call(null, feature);

          styles.push(new ol.style.Style({
            geometry: new ol.geom.Point(end),
            image: new ol.style.Icon({
              src: this._lineStringIconsrc,
              anchor: [0.75, 0.5],
              rotateWithView: true,
              rotation: -rotation,
              scale: this._lineStringIconsrcScale
            })
          }));
        }.bind(_this));
        feature.setStyle(styles);
      };

      for (var i = 0, max_i = features.length; i < max_i; i++) {
        var _ret = _loop(i, max_i);

        if (_ret === "continue") continue;
      }
    }
  }, {
    key: "disableLineStringArrow",
    value: function disableLineStringArrow() {
      if (this._isLinestringArrowEnabled == false) {
        console.log("還沒上過箭頭...");
        return;
      }

      this._isLinestringArrowEnabled = false;

      var features = this._instance.getSource().getFeatures();

      for (var i = 0, max_i = features.length; i < max_i; i++) {
        var feature = features[i];
        var styles = feature.getStyle();

        if (Array.isArray(styles)) {
          styles = styles[0];
        }
        /*for (let j = 0, max_j = styles.length; j < max_j; j++) {
            if (styles[j].image_ != null && styles[j].image_.getSrc != null && styles[j].image_.getSrc() == this._lineStringIconsrc) {
                //回到原始狀態...
                styles[j] = new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: width * 2,
                        fill: new ol.style.Fill({
                            color: white //Basically points change to white here
                        }),
                    });
                });
            }
        }
        styles = styles.filter(function (el) {
            return el != null;
        });
        */
        //https://stackoverflow.com/questions/65754068/how-to-remove-style-from-individual-feature-of-a-vector-layer-in-open-layers            


        feature.setStyle(styles);
      }
    }
  }, {
    key: "disableDashed",
    value: function disableDashed() {
      this.enableDashed([0, 0]);
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      var _extent = this._instance.getSource().getExtent();

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      var b = new Object();
      b['lt_x'] = _extent_4326[0];
      b['lt_y'] = _extent_4326[3];
      b['rb_x'] = _extent_4326[2];
      b['rb_y'] = _extent_4326[1];
      return _extent_4326;
    }
  }, {
    key: "getExtentArea",
    value: function getExtentArea() {
      //取得四角範圍的面積
      //回應平方公尺
      var _extent = this._instance.getSource().getExtent();

      var _extent_3826 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:3826'));

      return Math.abs(_extent_3826[2] - _extent_3826[0]) * (_extent_3826[3] - _extent_3826[1]);
    }
  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary() {
      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        this._easymap._zoomByBoundary(features);
      }
    }
  }, {
    key: "getVertexCount",
    value: function getVertexCount() {
      return this._xys.length - 2;
    }
  }, {
    key: "getVertex",
    value: function getVertex(iidx) {
      return this._xys[iidx - 1];
    }
  }, {
    key: "addVertex",
    value: function addVertex(ixy) {
      if (this._instance != null) this._instance.removeItem(this);

      this._xys.push(ixy);

      this._xs.push(ixy.x);

      this._ys.push(ixy.y);

      this._pcount = this._xys.length;
      if (this._instance != null) this._instance.addItem(this);
    }
  }, {
    key: "getStrokeWidth",
    value: function getStrokeWidth() {
      return this._lineWidth;
    }
  }, {
    key: "setStrokeWidth",
    value: function setStrokeWidth(val) {
      if (!isNaN(val) == false) val = 1;
      this._lineWidth = parseFloat(val);

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        var originStyles = features[0].getStyleFunction().call(null, features[0]);
        var s = originStyles[0].getStroke();
        s.setWidth(val); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "getStrokeColor",
    value: function getStrokeColor() {
      return this._strokeStyle;
    }
  }, {
    key: "setStrokeColor",
    value: function setStrokeColor(val) {
      this._strokeStyle = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        var originStyles = features[0].getStyleFunction().call(null, features[0]);
        var s = originStyles[0].getStroke();
        s.setColor(val); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }]);

  return dgPolyline;
}();

/* harmony default export */ const dg_dgPolyline = (dgPolyline);
// CONCATENATED MODULE: ./src/dg/dgPolygon.js
function dgPolygon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgPolygon_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgPolygon_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgPolygon_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgPolygon_defineProperties(Constructor, staticProps); return Constructor; }

var dgPolygon = /*#__PURE__*/function () {
  function dgPolygon(pts, ss, fs, sw) {
    dgPolygon_classCallCheck(this, dgPolygon);

    var npts = pts.slice();
    this._id = null;
    this._type = 'polygon';
    this._xys = npts;
    this._instance = null;
    this._attributes = {};
    this._dash = {
      lineDash: [0, 0],
      lineCap: 'round'
    };

    if (npts[0] != npts[pts.length - 1]) {
      this._xys.push(npts[0]);
    }

    this._pcount = this._xys.length;
    this._strokeStyle = ss;
    this._fillStyle = fs;
    this._lineWidth = sw;
    this._xs = new Array();
    this._ys = new Array();

    for (var i = 0; i < this._pcount; i++) {
      this._xs.push(this._xys[i].x);

      this._ys.push(this._xys[i].y);
    }
  }

  dgPolygon_createClass(dgPolygon, [{
    key: "enableDashed",
    value: function enableDashed(val) {
      //val 可不填，預設為 [4,8]
      //啟動 dash
      if (val == null) {
        this._dash.lineDash = [4, 8];
      } else {
        this._dash.lineDash = val;
      }

      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        if (features.length > 0) {
          var originStyles = features[0].getStyleFunction().call(null, features[0]);
          originStyles[0].getStroke().setLineDash(this._dash.lineDash);
          features[0].setStyle(features[0].getStyle());
        } else {
          console.log("Error ... features 為 0");
        }
      }
    }
  }, {
    key: "disableDashed",
    value: function disableDashed() {
      this.enableDashed([0, 0]);
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      var x = null;
      var y = null;

      for (var i = 0; i < this._xys.length; i++) {
        if (i == 0) {
          x = this._xys[i].x;
          y = this._xys[i].y;
        } else {
          x += this._xys[i].x;
          y += this._xys[i].y;
        }
      }

      x /= this._xys.length;
      y /= this._xys.length;
      return new dgXY(x, y);
    }
    /*getExtent() {
        let b = new Object();
        if (this._instance != null) {
            let features = this._instance.getSource().getFeatures();
            let _extent = features[0].getGeometry().getExtent()
            let p0 = ol.proj.transform([_extent[0], _extent[1]], "EPSG:3857", "EPSG:4326");
            let p1 = ol.proj.transform([_extent[2], _extent[3]], "EPSG:3857", "EPSG:4326");
            b['lt_x'] = p0[0];
            b['lt_y'] = p0[1];
            b['rb_x'] = p1[0];
            b['rb_y'] = p1[1];
            return b;
        }
        b['lt_x'] = null;
        b['lt_y'] = null;
        b['rb_x'] = null;
        b['rb_y'] = null;
        for (let i = 0; i < this._xys.length; i++) {
            if (i == 0) {
                b['lt_x'] = this._xys[i].x;
                b['lt_y'] = this._xys[i].y;
                b['rb_x'] = this._xys[i].x;
                b['rb_y'] = this._xys[i].y;
            }
            else {
                b['lt_x'] = Math.min(b['lt_x'], this._xys[i].x);
                b['lt_y'] = Math.max(b['lt_y'], this._xys[i].y);
                b['rb_x'] = Math.max(b['rb_x'], this._xys[i].x);
                b['rb_y'] = Math.min(b['rb_y'], this._xys[i].y);
            }
        }
        return b;
    }
    */

  }, {
    key: "getExtent",
    value: function getExtent() {
      var _extent = this._instance.getSource().getExtent();

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      var b = new Object();
      b['lt_x'] = _extent_4326[0];
      b['lt_y'] = _extent_4326[3];
      b['rb_x'] = _extent_4326[2];
      b['rb_y'] = _extent_4326[1];
      return _extent_4326;
    }
  }, {
    key: "getExtentArea",
    value: function getExtentArea() {
      //取得四角範圍的面積
      //回應平方公尺
      var _extent = this._instance.getSource().getExtent();

      var _extent_3826 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:3826'));

      return Math.abs(_extent_3826[2] - _extent_3826[0]) * (_extent_3826[3] - _extent_3826[1]);
    }
  }, {
    key: "getArea",
    value: function getArea() {
      var _size = 0;

      for (var i = 0, max_i = this._instance.getSource().getFeatures().length; i < max_i; i++) {
        if (this._instance.getSource().getFeatures()[i].getGeometry().getArea != null) {
          _size += this._instance.getSource().getFeatures()[i].getGeometry().getArea();
        }
      }

      return _size;
    }
  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary() {
      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        this._easymap._zoomByBoundary(features);
      }
    }
  }, {
    key: "getVertexCount",
    value: function getVertexCount() {
      return this.xys.length - 1;
    }
  }, {
    key: "getVertex",
    value: function getVertex(iidx) {
      return this.xys[iidx - 1];
    }
  }, {
    key: "addVertex",
    value: function addVertex(ixy) {
      if (this.instance != null) this.instance.removeItem(this);
      tmpxy = this.xys.pop();
      this.xys.push(ixy);
      this.xys.push(tmpxy);
      tmpx = this.xs.pop();
      this.xs.push(ixy.x);
      this.xs.push(tmpx);
      tmpy = this.ys.pop();
      this.ys.push(ixy.y);
      this.ys.push(tmpy);
      this.pcount = this.xys.length;
      if (this.instance != null) this.instance.addItem(this);
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(objects) {
      for (var wtfkey in objects) {
        this.attributes[wtfkey] = objects[wtfkey];
      }
    }
  }, {
    key: "getStrokeWidth",
    value: function getStrokeWidth() {
      return this._lineWidth;
    }
  }, {
    key: "setStrokeWidth",
    value: function setStrokeWidth(val) {
      if (!isNaN(val) == false) val = 1;
      this._lineWidth = parseFloat(val);

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        var originStyles = features[0].getStyleFunction().call(null, features[0]);
        var s = originStyles[0].getStroke();
        s.setWidth(val); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "getStrokeColor",
    value: function getStrokeColor() {
      return this._strokeStyle;
    }
  }, {
    key: "setStrokeColor",
    value: function setStrokeColor(val) {
      this._strokeStyle = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        var originStyles = features[0].getStyleFunction().call(null, features[0]);
        var s = originStyles[0].getStroke();
        s.setColor(val); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }, {
    key: "getFillColor",
    value: function getFillColor() {
      return this._fillStyle;
    }
  }, {
    key: "setFillColor",
    value: function setFillColor(val) {
      this._fillStyle = val;

      var features = this._instance.getSource().getFeatures();

      if (features.length > 0) {
        var originStyles = features[0].getStyleFunction().call(null, features[0]);
        var s = originStyles[0].getFill();
        s.setColor(val); //redraw

        features[0].setStyle(features[0].getStyle());
      } else {
        console.log("Error ... features 為 0");
      }
    }
  }]);

  return dgPolygon;
}();

/* harmony default export */ const dg_dgPolygon = (dgPolygon);
// CONCATENATED MODULE: ./src/dg/dgMenuFunc.js
function dgMenuFunc_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dgMenuFunc = function dgMenuFunc(fname, cfunc, icon) {
  dgMenuFunc_classCallCheck(this, dgMenuFunc);

  var o = new Object();
  o.mname = fname;
  o.afunc = cfunc;
  o.icon = icon;
  return o;
};

/* harmony default export */ const dg_dgMenuFunc = (dgMenuFunc);
// CONCATENATED MODULE: ./src/dg/dgSource.js
function dgSource_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dgSource = function dgSource(layer, options) {
  dgSource_classCallCheck(this, dgSource);

  this._id = options.name;
  this._type = 'dgSource';
  this._layerType = layer;

  if (options.getUrl != null) {
    this._getUrl = options.getUrl;
  }
  /**
   * url
   */


  this._options = options;
  this.options = options;
  this._events = [];

  if (Array.isArray(this._options.url) == true) {
    for (var i = 0; i < this._options.url.length; i++) {
      this._options.url[i] = this._options.url[i].replace(/\$/g, '');
    }
  } else {
    this._options.url = this._options.url.replace(/\$/g, '');
  }
};

/* harmony default export */ const dg_dgSource = (dgSource);
// CONCATENATED MODULE: ./src/dg/dgGeoJson.js
function dgGeoJson_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgGeoJson_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgGeoJson_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgGeoJson_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgGeoJson_defineProperties(Constructor, staticProps); return Constructor; }

var dgGeoJson = /*#__PURE__*/function () {
  function dgGeoJson(url, callback) {
    dgGeoJson_classCallCheck(this, dgGeoJson);

    //private
    this._easymap = null;
    this._type = 'dggeojson';
    this._url = url;
    this._geojson = null;
    this._callback = callback;
    this._instance = null;
    this._async = false;
    this._setUpperZoomByBoundary = false; //whether uses most best view range

    this._xhr = null; //networklink httprequest
    //this._gMarkerEnabled = false;
    //this._distance = 50;
    //this._threshold = 1;
    //this._Style = new dgGStyle();
    //this._isZoomClusterEnabled = true; //whether ��Yzoom����cluster
    //this._clusterZoom = 17;            // �w�]18�h�H�W�����s
    //this._defaultStyles = null;

    this._zIndex = 1; //this._isLinestringArrowEnabled = false;//�O�_�}��LineString arrow
    //this._showInSelect = true; //�i��ܦb�I�}���U�Կ��
    //this._lineStringIconsrc = '';
    //this._lineStringStyle = null;

    this._lineStringWidth = 1; //this._zoomThreshold = 0;

    this._featureSelect = true;
    /*this._styleCache = {//�[��cluster style
        h: null,
        m: null,
        l: null
    };*/
    //public

    this.url = url; //#events 

    this.onFeatureSelect = null;
    this.onFeatureUnselect = null;
    this._onFeatureHover = null;
    this.labelVisible = false; //whether label shows or not

    this.iconVisible = false; //whether icon shows or not

    this.useNetworkLink = true; //whether use networklink

    this.opacity = 1;
  }

  dgGeoJson_createClass(dgGeoJson, [{
    key: "getCenter",
    value: function getCenter() {
      var _extent = this._instance.getSource().getExtent();

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      return new dgXY((_extent_4326[0] + _extent_4326[2]) / 2.0, (_extent_4326[1] + _extent_4326[3]) / 2.0);
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      var _extent = this._instance.getSource().getExtent();

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      var b = new Object();
      b['lt_x'] = _extent_4326[0];
      b['lt_y'] = _extent_4326[3];
      b['rb_x'] = _extent_4326[2];
      b['rb_y'] = _extent_4326[1];
      return _extent_4326;
    }
  }, {
    key: "getExtentArea",
    value: function getExtentArea() {
      //���o�|���d�򪺭��n
      //�^�����褽��
      var _extent = this._instance.getSource().getExtent();

      var _extent_3826 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:3826'));

      return Math.abs(_extent_3826[2] - _extent_3826[0]) * (_extent_3826[3] - _extent_3826[1]);
    }
  }, {
    key: "getArea",
    value: function getArea() {
      var _size = 0;

      for (var i = 0, max_i = this._instance.getSource().getFeatures().length; i < max_i; i++) {
        if (this._instance.getSource().getFeatures()[i].getGeometry().getArea != null) {
          _size += this._instance.getSource().getFeatures()[i].getGeometry().getArea();
        }
      }

      return _size;
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this._zIndex;
    }
  }, {
    key: "setZIndex",
    value: function setZIndex(val) {
      this._zIndex = parseInt(val); //console.log(this);

      if (this._easymap != null && this._easymap.setItemZIndex != null) {
        this._easymap.setItemZIndex(this, this.getZIndex());
      }
    }
  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary() {
      this._setUpperZoomByBoundary = true;

      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        this._easymap._zoomByBoundary(features);
      }
    }
  }, {
    key: "setOpacity",
    value: function setOpacity(val) {
      if (!isNaN(val) == false) val = 1;
      this.opacity = parseFloat(val); //console.log(this);        

      this._instance.setOpacity(this.opacity);
    }
  }, {
    key: "setFeatureClick",
    value: function setFeatureClick(handler) {
      this.onFeatureSelect = handler;
    }
  }, {
    key: "setFeatureHover",
    value: function setFeatureHover(handler) {
      this._onFeatureHover = handler;
    } //updateStyleByAttribute() { }

  }, {
    key: "getType",
    value: function getType() {
      if (this._instance != null) {
        return this._instance.getType();
      }

      return null;
    }
  }]);

  return dgGeoJson;
}();

/* harmony default export */ const dg_dgGeoJson = (dgGeoJson);
// CONCATENATED MODULE: ./src/dg/dgWKT.js
function dgWKT_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgWKT_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgWKT_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgWKT_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgWKT_defineProperties(Constructor, staticProps); return Constructor; }

var dgWKT = /*#__PURE__*/function () {
  function dgWKT(url, srs, callback) {
    dgWKT_classCallCheck(this, dgWKT);

    //private
    this._easymap = null;
    this._type = 'dgwkt';
    this._url = url;
    this._wkt = null;
    this._callback = callback;
    this._instance = null;
    this._async = false;
    this._dataSRS = "EPSG:4326"; //預設 4326

    if (srs != null) {
      this._dataSRS = srs;
    }

    this._setUpperZoomByBoundary = false; //whether uses most best view range

    this._xhr = null; //networklink httprequest
    //this._gMarkerEnabled = false;
    //this._distance = 50;
    //this._threshold = 1;
    //this._Style = new dgGStyle();
    //this._isZoomClusterEnabled = true; //whether 到某zoom關閉cluster
    //this._clusterZoom = 17;            // 預設18層以上不分群
    //this._defaultStyles = null;

    this._zIndex = 1; //this._isLinestringArrowEnabled = false;//是否開啟LineString arrow
    //this._showInSelect = true; //可顯示在點開的下拉選單
    //this._lineStringIconsrc = '';
    //this._lineStringStyle = null;

    this._lineStringWidth = 1; //this._zoomThreshold = 0;

    this._featureSelect = true;
    /*this._styleCache = {//加快cluster style
        h: null,
        m: null,
        l: null
    };*/
    //public

    this.url = url; //#events 

    this.onFeatureSelect = null;
    this.onFeatureUnselect = null;
    this._onFeatureHover = null;
    this.labelVisible = false; //whether label shows or not

    this.iconVisible = false; //whether icon shows or not

    this.useNetworkLink = true; //whether use networklink

    this.opacity = 1;
  }

  dgWKT_createClass(dgWKT, [{
    key: "getCenter",
    value: function getCenter() {
      var _extent = this._instance.getSource().getExtent();

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      return new dgXY((_extent_4326[0] + _extent_4326[2]) / 2.0, (_extent_4326[1] + _extent_4326[3]) / 2.0);
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      var _extent = this._instance.getSource().getExtent();

      var _extent_4326 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:4326'));

      var b = new Object();
      b['lt_x'] = _extent_4326[0];
      b['lt_y'] = _extent_4326[3];
      b['rb_x'] = _extent_4326[2];
      b['rb_y'] = _extent_4326[1];
      return _extent_4326;
    }
  }, {
    key: "getExtentArea",
    value: function getExtentArea() {
      //取得四角範圍的面積
      //回應平方公尺
      var _extent = this._instance.getSource().getExtent();

      var _extent_3826 = ol.extent.applyTransform(_extent, ol.proj.getTransform('EPSG:3857', 'EPSG:3826'));

      return Math.abs(_extent_3826[2] - _extent_3826[0]) * (_extent_3826[3] - _extent_3826[1]);
    }
  }, {
    key: "getArea",
    value: function getArea() {
      var _size = 0;

      for (var i = 0, max_i = this._instance.getSource().getFeatures().length; i < max_i; i++) {
        if (this._instance.getSource().getFeatures()[i].getGeometry().getArea != null) {
          _size += this._instance.getSource().getFeatures()[i].getGeometry().getArea();
        }
      }

      return _size;
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this._zIndex;
    }
  }, {
    key: "setZIndex",
    value: function setZIndex(val) {
      this._zIndex = parseInt(val); //console.log(this);

      if (this._easymap != null && this._easymap.setItemZIndex != null) {
        this._easymap.setItemZIndex(this, this.getZIndex());
      }
    }
  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary() {
      this._setUpperZoomByBoundary = true;

      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        this._easymap._zoomByBoundary(features);
      }
    }
  }, {
    key: "setOpacity",
    value: function setOpacity(val) {
      if (!isNaN(val) == false) val = 1;
      this.opacity = parseFloat(val); //console.log(this);        

      this._instance.setOpacity(this.opacity);
    }
  }, {
    key: "setFeatureClick",
    value: function setFeatureClick(handler) {
      this.onFeatureSelect = handler;
    }
  }, {
    key: "setFeatureHover",
    value: function setFeatureHover(handler) {
      this._onFeatureHover = handler;
    } //updateStyleByAttribute() { }

  }, {
    key: "getType",
    value: function getType() {
      if (this._instance != null) {
        return this._instance.getType();
      }

      return null;
    }
  }]);

  return dgWKT;
}();

/* harmony default export */ const dg_dgWKT = (dgWKT);
// CONCATENATED MODULE: ./src/dg/dgMergeVector.js
function dgMergeVector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgMergeVector_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgMergeVector_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgMergeVector_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgMergeVector_defineProperties(Constructor, staticProps); return Constructor; }

var dgMergeVector = /*#__PURE__*/function () {
  function dgMergeVector(vector, xy) {
    dgMergeVector_classCallCheck(this, dgMergeVector);

    this._id = null;
    this._type = 'mergevector';
    this._instance = vector;
    this._xy = {
      x: xy.x,
      y: xy.y
    };
  }

  dgMergeVector_createClass(dgMergeVector, [{
    key: "getCenter",
    value: function getCenter() {
      return new dgXY(this._xy.x, this._xy.y);
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      var b = new Object();
      return b;
    }
  }, {
    key: "setUpperZoomByBoundary",
    value: function setUpperZoomByBoundary() {
      if (this._instance != null) {
        var features = this._instance.getSource().getFeatures();

        this._easymap._zoomByBoundary(features);
      }
    }
  }]);

  return dgMergeVector;
}();

/* harmony default export */ const dg_dgMergeVector = (dgMergeVector);
// CONCATENATED MODULE: ./src/dg/dgHeatmap.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function dgHeatmap_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dgHeatmap_typeof = function _typeof(obj) { return typeof obj; }; } else { dgHeatmap_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dgHeatmap_typeof(obj); }

function dgHeatmap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dgHeatmap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dgHeatmap_createClass(Constructor, protoProps, staticProps) { if (protoProps) dgHeatmap_defineProperties(Constructor.prototype, protoProps); if (staticProps) dgHeatmap_defineProperties(Constructor, staticProps); return Constructor; }

var dgHeatmap_dgHeatmap = /*#__PURE__*/function () {
  function dgHeatmap(dgObj, obj) {
    dgHeatmap_classCallCheck(this, dgHeatmap);

    //private
    this._easymap = null;
    this._type = 'dgheatmap';
    this._instance = null;
    this._layerSourceObj = null;

    if (dgObj._instance != null && dgObj._instance.getSource() != null) {
      this._layerSourceObj = dgObj._instance.getSource();
    } //default


    this._heatmapOpt = {
      blur: 10,
      radius: 6,
      field: null //是否用裡面的值來當熱區

    };

    if (obj != null) {
      this._heatmapOpt = this._objMergeDeep(this._heatmapOpt, obj);
    }
  }

  dgHeatmap_createClass(dgHeatmap, [{
    key: "_objMergeDeep",
    value: function _objMergeDeep() {
      var _this = this;

      var isObject = function isObject(obj) {
        return obj && dgHeatmap_typeof(obj) === 'object';
      };

      for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
        objects[_key] = arguments[_key];
      }

      return objects.reduce(function (prev, obj) {
        Object.keys(obj).forEach(function (key) {
          var pVal = prev[key];
          var oVal = obj[key];

          if (Array.isArray(pVal) && Array.isArray(oVal)) {
            prev[key] = pVal.concat.apply(pVal, _toConsumableArray(oVal));
          } else if (isObject(pVal) && isObject(oVal)) {
            prev[key] = _this._objMergeDeep(pVal, oVal);
          } else {
            prev[key] = oVal;
          }
        });
        return prev;
      }, {});
    }
  }, {
    key: "setBlur",
    value: function setBlur(val) {
      this._heatmapOpt.blur = val;

      this._instance.setBlur(val);
    }
  }, {
    key: "getBlur",
    value: function getBlur() {
      return this._heatmapOpt.blur;
    }
  }, {
    key: "setRadius",
    value: function setRadius(val) {
      this._heatmapOpt.radius = val;

      this._instance.setRadius(val);

      return this._heatmapOpt;
    }
  }, {
    key: "setField",
    value: function setField() {}
  }]);

  return dgHeatmap;
}();

/* harmony default export */ const dg_dgHeatmap = (dgHeatmap_dgHeatmap);
// CONCATENATED MODULE: ./src/dg/index.js
function dg_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






















var dgGText = function dgGText() {
  dg_classCallCheck(this, dgGText);
};

var dgSPoint = function dgSPoint() {
  dg_classCallCheck(this, dgSPoint);
};

window.dgGText = dgGText;
window.dgPoint = dg_dgPoint;
window.dgText = dg_dgText;
window.dgSPoint = dgSPoint;
window.dg3D = dg_dg3D;
window.dgIcon = dg_dgIcon;
window.dgStaticImage = dg_dgStaticImage;
window.dgKml = dg_dgKml;
window.dgXY = dg_dgXY;
window.dgXYZ = dg_dgXYZ;
window.dgMarker = dg_dgMarker;
window.dgGMarker = dg_dgGMarker;
window.dgGStyle = dg_dgGStyle;
window.dgCurve = dg_dgCurve;
window.dgPolyline = dg_dgPolyline;
window.dgPolygon = dg_dgPolygon;
window.dgMenuFunc = dg_dgMenuFunc;
window.dgSource = dg_dgSource;
window.dgGeoJson = dg_dgGeoJson;
window.dgWKT = dg_dgWKT;
window.dgMergeVector = dg_dgMergeVector;
window.dgHeatmap = dg_dgHeatmap;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(57);
/******/ })()
.default;
});