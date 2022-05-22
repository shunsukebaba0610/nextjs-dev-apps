"use strict";
(() => {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/products/[id].js




//SSGの場合
// export async function getStaticProps({params}){
// 	const req = await fetch(`http://localhost:3000/${ params.id }.json`);
// 	const data = await req.json();
// 	return {
// 		props: {
// 			product: data,
// 		}
// 	}
// }
// export async function getStaticPaths(){
// 	const req = await fetch(`http://localhost:3000/products.json`);
// 	const data = await req.json();
// 	const paths = data.map((product)=> {
// 		return {
// 			params: {
// 				id: product,
// 			}
// 		}
// 	});
// 	return {
// 		paths,
// 		fallback: false,
// 	}
// }
async function getServerSideProps({ params  }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();
    return {
        props: {
            product: data
        }
    };
}
const Product = ({ product  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    console.log(router.query);
    const { id  } = router.query;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Home_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: (Home_module_default()).main,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    children: [
                        id,
                        "のページ"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: product.image,
                    width: "70%",
                    height: ""
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: product.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/products",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "商品一覧へ"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const _id_ = (Product);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 925:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [397,676,664,399], () => (__webpack_exec__(174)));
module.exports = __webpack_exports__;

})();