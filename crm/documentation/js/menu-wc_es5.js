'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">crm documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-e0ee33cd7d2bd784d6079da28b1126d1e458dd02d59c097342236c1f8f16883059e43d826df656f575a814fcd13eb1594be9abff9f91e4d7473347bf6c78a382"' : 'data-target="#xs-components-links-module-AppModule-e0ee33cd7d2bd784d6079da28b1126d1e458dd02d59c097342236c1f8f16883059e43d826df656f575a814fcd13eb1594be9abff9f91e4d7473347bf6c78a382"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-e0ee33cd7d2bd784d6079da28b1126d1e458dd02d59c097342236c1f8f16883059e43d826df656f575a814fcd13eb1594be9abff9f91e4d7473347bf6c78a382"' : 'id="xs-components-links-module-AppModule-e0ee33cd7d2bd784d6079da28b1126d1e458dd02d59c097342236c1f8f16883059e43d826df656f575a814fcd13eb1594be9abff9f91e4d7473347bf6c78a382"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TestComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TestComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ClientsModule.html\" data-type=\"entity-link\" >ClientsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' : 'data-target="#xs-components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"' : 'id="xs-components-links-module-ClientsModule-346261a7e9be540a8071732944b26d69b77c2b428036809e0f916e8b16a244e8ad1b274caa8552039b70c49af16fd57f9c4dcf0622157b52a4b8c1fbb17f3827"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageAddClientComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageAddClientComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageEditClientComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageEditClientComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageListClientsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageListClientsComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ClientsRoutingModule.html\" data-type=\"entity-link\" >ClientsRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoreModule.html\" data-type=\"entity-link\" >CoreModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-CoreModule-2616ec4a014487a883e57651ea163c50e24430e19e501b5cac9c6796871359d5596b6ac237be84adbd31aefcdc5fec93acf7749b81bf04f8306e164196c8a277"' : 'data-target="#xs-components-links-module-CoreModule-2616ec4a014487a883e57651ea163c50e24430e19e501b5cac9c6796871359d5596b6ac237be84adbd31aefcdc5fec93acf7749b81bf04f8306e164196c8a277"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-CoreModule-2616ec4a014487a883e57651ea163c50e24430e19e501b5cac9c6796871359d5596b6ac237be84adbd31aefcdc5fec93acf7749b81bf04f8306e164196c8a277"' : 'id="xs-components-links-module-CoreModule-2616ec4a014487a883e57651ea163c50e24430e19e501b5cac9c6796871359d5596b6ac237be84adbd31aefcdc5fec93acf7749b81bf04f8306e164196c8a277"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/IconsModule.html\" data-type=\"entity-link\" >IconsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-IconsModule-397cf60b8be0d5fdba6ffa1bb3241b57bf08c83720607f115cbf0adc22a0cc6643dda71f3e043ee7c6717669bd5da42acd26da1194f3d6c1a282277f9ed95377"' : 'data-target="#xs-components-links-module-IconsModule-397cf60b8be0d5fdba6ffa1bb3241b57bf08c83720607f115cbf0adc22a0cc6643dda71f3e043ee7c6717669bd5da42acd26da1194f3d6c1a282277f9ed95377"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-IconsModule-397cf60b8be0d5fdba6ffa1bb3241b57bf08c83720607f115cbf0adc22a0cc6643dda71f3e043ee7c6717669bd5da42acd26da1194f3d6c1a282277f9ed95377"' : 'id="xs-components-links-module-IconsModule-397cf60b8be0d5fdba6ffa1bb3241b57bf08c83720607f115cbf0adc22a0cc6643dda71f3e043ee7c6717669bd5da42acd26da1194f3d6c1a282277f9ed95377"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/IconCloseComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IconCloseComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/IconDeleteComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IconDeleteComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/IconEditComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IconEditComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/IconNavComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IconNavComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoginModule.html\" data-type=\"entity-link\" >LoginModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LoginModule-4fedb303ff203af5c6194ffc4d36a15f96e52305dfe203b5dcbcd55f8c75cf80c024e8e7fa777b728e6eed10e3faef0c9020b4ba7b9194e8e597d3a18554e1f4"' : 'data-target="#xs-components-links-module-LoginModule-4fedb303ff203af5c6194ffc4d36a15f96e52305dfe203b5dcbcd55f8c75cf80c024e8e7fa777b728e6eed10e3faef0c9020b4ba7b9194e8e597d3a18554e1f4"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LoginModule-4fedb303ff203af5c6194ffc4d36a15f96e52305dfe203b5dcbcd55f8c75cf80c024e8e7fa777b728e6eed10e3faef0c9020b4ba7b9194e8e597d3a18554e1f4"' : 'id="xs-components-links-module-LoginModule-4fedb303ff203af5c6194ffc4d36a15f96e52305dfe203b5dcbcd55f8c75cf80c024e8e7fa777b728e6eed10e3faef0c9020b4ba7b9194e8e597d3a18554e1f4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageForgotPasswordComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageForgotPasswordComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageResetPasswordComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageResetPasswordComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageSignInComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageSignInComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageSignUpComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageSignUpComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoginRoutingModule.html\" data-type=\"entity-link\" >LoginRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OrdersModule.html\" data-type=\"entity-link\" >OrdersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-OrdersModule-d9acffdd3bbc3581ee3216e27669002cd745e9285118871f02df6607f754d71dfba2b10cc10de6222a87513af47012f1b42908b1e3d81559ca86c78c85995ddb"' : 'data-target="#xs-components-links-module-OrdersModule-d9acffdd3bbc3581ee3216e27669002cd745e9285118871f02df6607f754d71dfba2b10cc10de6222a87513af47012f1b42908b1e3d81559ca86c78c85995ddb"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-OrdersModule-d9acffdd3bbc3581ee3216e27669002cd745e9285118871f02df6607f754d71dfba2b10cc10de6222a87513af47012f1b42908b1e3d81559ca86c78c85995ddb"' : 'id="xs-components-links-module-OrdersModule-d9acffdd3bbc3581ee3216e27669002cd745e9285118871f02df6607f754d71dfba2b10cc10de6222a87513af47012f1b42908b1e3d81559ca86c78c85995ddb"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageAddOrderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageAddOrderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageEditOrderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageEditOrderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageListOrdersComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageListOrdersComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OrdersRoutingModule.html\" data-type=\"entity-link\" >OrdersRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PageNotFoundModule.html\" data-type=\"entity-link\" >PageNotFoundModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' : 'data-target="#xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' : 'id="xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageNotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageNotFoundComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PageNotFoundRoutingModule.html\" data-type=\"entity-link\" >PageNotFoundRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SharedModule-a323eac491476d1b0d3ba8b095b409cc6fb2c9514f55db531228ed88d7106d21fd969ed074b82814800b55ec36a071f9562df083d8d9a82557b3ca500b7ab8a7"' : 'data-target="#xs-components-links-module-SharedModule-a323eac491476d1b0d3ba8b095b409cc6fb2c9514f55db531228ed88d7106d21fd969ed074b82814800b55ec36a071f9562df083d8d9a82557b3ca500b7ab8a7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedModule-a323eac491476d1b0d3ba8b095b409cc6fb2c9514f55db531228ed88d7106d21fd969ed074b82814800b55ec36a071f9562df083d8d9a82557b3ca500b7ab8a7"' : 'id="xs-components-links-module-SharedModule-a323eac491476d1b0d3ba8b095b409cc6fb2c9514f55db531228ed88d7106d21fd969ed074b82814800b55ec36a071f9562df083d8d9a82557b3ca500b7ab8a7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/BtnComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BtnComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TableLightComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TableLightComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-SharedModule-a323eac491476d1b0d3ba8b095b409cc6fb2c9514f55db531228ed88d7106d21fd969ed074b82814800b55ec36a071f9562df083d8d9a82557b3ca500b7ab8a7"' : 'data-target="#xs-pipes-links-module-SharedModule-a323eac491476d1b0d3ba8b095b409cc6fb2c9514f55db531228ed88d7106d21fd969ed074b82814800b55ec36a071f9562df083d8d9a82557b3ca500b7ab8a7"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-SharedModule-a323eac491476d1b0d3ba8b095b409cc6fb2c9514f55db531228ed88d7106d21fd969ed074b82814800b55ec36a071f9562df083d8d9a82557b3ca500b7ab8a7"' : 'id="xs-pipes-links-module-SharedModule-a323eac491476d1b0d3ba8b095b409cc6fb2c9514f55db531228ed88d7106d21fd969ed074b82814800b55ec36a071f9562df083d8d9a82557b3ca500b7ab8a7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/TotalPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TotalPipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TemplatesModule.html\" data-type=\"entity-link\" >TemplatesModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'data-target="#xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'id="xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/TemplateContainerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TemplateContainerComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TemplateFullWidthComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TemplateFullWidthComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UiModule.html\" data-type=\"entity-link\" >UiModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' : 'data-target="#xs-components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' : 'id="xs-components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/UiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UiComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Order.html\" data-type=\"entity-link\" >Order</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/OrdersService.html\" data-type=\"entity-link\" >OrdersService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/VersionService.html\" data-type=\"entity-link\" >VersionService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/OrderI.html\" data-type=\"entity-link\" >OrderI</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));