"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _FifteenthTitle_URL, _FifteenthTitle_ID, _FifteenthTitle_get, _FifteenthTitle_getTitleFromJson;
class FifteenthTitle {
    run() {
        __classPrivateFieldGet(FifteenthTitle, _a, "m", _FifteenthTitle_get).call(FifteenthTitle);
    }
}
_a = FifteenthTitle, _FifteenthTitle_get = function _FifteenthTitle_get() {
    fetch(__classPrivateFieldGet(FifteenthTitle, _a, "f", _FifteenthTitle_URL))
        .then(res => {
        if (res.ok)
            return res.json();
    })
        .then(resData => __classPrivateFieldGet(FifteenthTitle, _a, "m", _FifteenthTitle_getTitleFromJson).call(FifteenthTitle, resData))
        .then(element => console.log(`Заголовок поста с id - ${element.id}` + ' => ' + element.title))
        .catch(({ message }) => console.error(message));
}, _FifteenthTitle_getTitleFromJson = function _FifteenthTitle_getTitleFromJson(resData) {
    const itemWithTitle = resData.find(item => item.id === __classPrivateFieldGet(FifteenthTitle, _a, "f", _FifteenthTitle_ID));
    const title = itemWithTitle === null || itemWithTitle === void 0 ? void 0 : itemWithTitle.title;
    const id = itemWithTitle === null || itemWithTitle === void 0 ? void 0 : itemWithTitle.id;
    return { title, id };
};
_FifteenthTitle_URL = { value: 'https://jsonplaceholder.typicode.com/posts' };
_FifteenthTitle_ID = { value: 15 };
const fifteenhTitle = new FifteenthTitle();
fifteenhTitle.run();
