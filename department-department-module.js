(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["department-department-module"],{

/***/ "./node_modules/@angular/common/fesm5/http.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/fesm5/http.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license Angular v7.2.15
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
var HttpBackend = /** @class */ (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHeaders` class represents the header configuration options for an HTTP request.
 * Instances should be assumed immutable with lazy parsing.
 *
 * @publicApi
 */
var HttpHeaders = /** @class */ (function () {
    /**  Constructs a new HTTP header object with the given values.*/
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name_1 = line.slice(0, index);
                        var key = name_1.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a header by a given name.
     *
     * @param name The header name to check for existence.
     *
     * @returns Whether the header exits.
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns the first header value that matches a given name.
     *
     * @param name The header name to retrieve.
     *
     * @returns A string if the header exists, null otherwise
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers.
     *
     * @returns A list of header names.
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns a list of header values for a given header name.
     *
     * @param name The header name from which to retrieve the values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * Appends a new header value to the existing set of
     * header values.
     *
     * @param name The header name for which to append the values.
     *
     * @returns A clone of the HTTP header object with the value appended.
     */
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * Sets a header value for a given name. If the header name already exists,
     * its value is replaced with the given value.
     *
     * @param name The header name.
     * @param value Provides the value to set or overide for a given name.
     *
     * @returns A clone of the HTTP header object with the newly set header value.
     */
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * Deletes all header values for a given name.
     *
     * @param name The header name.
     * @param value The header values to delete for a given name.
     *
     * @returns A clone of the HTTP header object.
     */
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, other.headers.get(key));
            _this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    };
    HttpHeaders.prototype.clone = function (update) {
        var clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    HttpHeaders.prototype.applyUpdate = function (update) {
        var key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(value));
                this.headers.set(key, base);
                break;
            case 'd':
                var toDelete_1 = update.value;
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(_this.normalizedNames.get(key), _this.headers.get(key)); });
    };
    return HttpHeaders;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A class that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values. If you pass URL query parameters
 * without encoding, the query parameters can get misinterpreted at the receiving end.
 * Use the `HttpParameterCodec` class to encode and decode the query-string values.
 *
 * @publicApi
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    HttpUrlEncodingCodec.prototype.encodeKey = function (key) { return standardEncoding(key); };
    HttpUrlEncodingCodec.prototype.encodeValue = function (value) { return standardEncoding(value); };
    HttpUrlEncodingCodec.prototype.decodeKey = function (key) { return decodeURIComponent(key); };
    HttpUrlEncodingCodec.prototype.decodeValue = function (value) { return decodeURIComponent(value); };
    return HttpUrlEncodingCodec;
}());
function paramParser(rawParams, codec) {
    var map$$1 = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], 2), key = _a[0], val = _a[1];
            var list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable - all mutation operations return a new instance.
 *
 * @publicApi
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var value = options.fromObject[key];
                _this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return this.map.has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var res = this.map.get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return this.map.get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(this.map.keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var eKey = _this.encoder.encodeKey(key);
            return _this.map.get(key).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            .join('&');
    };
    HttpParams.prototype.clone = function (update) {
        var clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return _this.map.set(key, _this.cloneFrom.map.get(key)); });
            this.updates.forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var base = (update.op === 'a' ? _this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        _this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var base_1 = _this.map.get(update.param) || [];
                            var idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                _this.map.set(update.param, base_1);
                            }
                            else {
                                _this.map.delete(update.param);
                            }
                        }
                        else {
                            _this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    };
    return HttpParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var method = update.method || this.method;
        var url = update.url || this.url;
        var responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var headers = update.headers || this.headers;
        var params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, update.setHeaders[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, update.setParams[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
var HttpResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 *
 * @see [HTTP Guide](guide/http)
 *
 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
* ```
 *
 * @publicApi
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            var headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            var params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (req) { return _this.handler.handle(req); }));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof HttpResponse; }));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.body; }));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, options);
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpHandler])
    ], HttpClient);
    return HttpClient;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * @publicApi
 */
var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NoopInterceptor);
    return NoopInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
var JsonpCallbackContext = /** @class */ (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * @publicApi
 */
var JsonpClientBackend = /** @class */ (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var callback = _this.nextCallback();
            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var body = null;
            // Whether the response callback has been called.
            var finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpCallbackContext, Object])
    ], JsonpClientBackend);
    return JsonpClientBackend;
}());
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @publicApi
 */
var JsonpInterceptor = /** @class */ (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpClientBackend])
    ], JsonpInterceptor);
    return JsonpInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for @{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 *
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * @publicApi
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var status = xhr.status === 1223 ? 204 : xhr.status;
                var statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error: error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var onError = function (error) {
                var url = partialFromXhr().url;
                var res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [XhrFactory])
    ], HttpXhrBackend);
    return HttpXhrBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
var HttpXsrfTokenExtractor = /** @class */ (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = /** @class */ (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_COOKIE_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, String, String])
    ], HttpXsrfCookieExtractor);
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = /** @class */ (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_HEADER_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpXsrfTokenExtractor, String])
    ], HttpXsrfInterceptor);
    return HttpXsrfInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    HttpInterceptingHandler.prototype.handle = function (req) {
        if (this.chain === null) {
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpBackend, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], HttpInterceptingHandler);
    return HttpInterceptingHandler;
}());
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    HttpClientXsrfModule_1 = HttpClientXsrfModule;
    /**
     * Disable the default XSRF protection.
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    var HttpClientXsrfModule_1;
    HttpClientXsrfModule = HttpClientXsrfModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                HttpXsrfInterceptor,
                { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
            ],
        })
    ], HttpClientXsrfModule);
    return HttpClientXsrfModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
    HttpClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            /**
             * Optional configuration for XSRF protection.
             */
            imports: [
                HttpClientXsrfModule.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                }),
            ],
            /**
             * Configures the [dependency injector](guide/glossary#injector) where it is imported
             * with supporting services for HTTP communications.
             */
            providers: [
                HttpClient,
                { provide: HttpHandler, useClass: HttpInterceptingHandler },
                HttpXhrBackend,
                { provide: HttpBackend, useExisting: HttpXhrBackend },
                BrowserXhr,
                { provide: XhrFactory, useExisting: BrowserXhr },
            ],
        })
    ], HttpClientModule);
    return HttpClientModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                JsonpClientBackend,
                { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
            ],
        })
    ], HttpClientJsonpModule);
    return HttpClientJsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/@ngrx/effects/fesm5/effects.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ngrx/effects/fesm5/effects.js ***!
  \*****************************************************/
/*! exports provided: ɵngrx_modules_effects_effects_a, ɵngrx_modules_effects_effects_c, ɵngrx_modules_effects_effects_b, ɵngrx_modules_effects_effects_g, ɵngrx_modules_effects_effects_f, ɵngrx_modules_effects_effects_e, ɵngrx_modules_effects_effects_d, createEffect, Effect, getEffectsMetadata, mergeEffects, Actions, ofType, EffectsModule, EffectSources, EffectsFeatureModule, ROOT_EFFECTS_INIT, rootEffectsInit, EffectsRootModule, act */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_a", function() { return getSourceMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_c", function() { return _provideForRootGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_b", function() { return createSourceInstances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_g", function() { return EffectsRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_f", function() { return FEATURE_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_e", function() { return ROOT_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_effects_effects_d", function() { return _ROOT_EFFECTS_GUARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEffect", function() { return createEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return Effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEffectsMetadata", function() { return getEffectsMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeEffects", function() { return mergeEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofType", function() { return ofType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsModule", function() { return EffectsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectSources", function() { return EffectSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsFeatureModule", function() { return EffectsFeatureModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_EFFECTS_INIT", function() { return ROOT_EFFECTS_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootEffectsInit", function() { return rootEffectsInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsRootModule", function() { return EffectsRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "act", function() { return act; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license NgRx 8.6.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */






var DEFAULT_EFFECT_CONFIG = {
    dispatch: true,
    resubscribeOnError: true,
};
var CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';

/**
 * @description
 * Creates an effect from an `Observable` and an `EffectConfig`.
 *
 * @param source A function which returns an `Observable`.
 * @param config A `Partial<EffectConfig>` to configure the effect.  By default, `dispatch` is true and `resubscribeOnError` is true.
 * @returns If `EffectConfig`#`dispatch` is true, returns `Observable<Action>`.  Else, returns `Observable<unknown>`.
 *
 * @usageNotes
 *
 * ** Mapping to a different action **
 * ```ts
 * effectName$ = createEffect(
 *   () => this.actions$.pipe(
 *     ofType(FeatureActions.actionOne),
 *     map(() => FeatureActions.actionTwo())
 *   )
 * );
 * ```
 *
 *  ** Non-dispatching effects **
 * ```ts
 * effectName$ = createEffect(
 *   () => this.actions$.pipe(
 *     ofType(FeatureActions.actionOne),
 *     tap(() => console.log('Action One Dispatched'))
 *   ),
 *   { dispatch: false }
 *   // FeatureActions.actionOne is not dispatched
 * );
 * ```
 */
function createEffect(source, config) {
    var effect = source();
    var value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_EFFECT_CONFIG, config);
    Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
        value: value,
    });
    return effect;
}
function getCreateEffectMetadata(instance) {
    var propertyNames = Object.getOwnPropertyNames(instance);
    var metadata = propertyNames
        .filter(function (propertyName) {
        return instance[propertyName] &&
            instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY);
    })
        .map(function (propertyName) {
        var metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ propertyName: propertyName }, metaData);
    });
    return metadata;
}

function getSourceForInstance(instance) {
    return Object.getPrototypeOf(instance);
}

var METADATA_KEY = '__@ngrx/effects__';
function Effect(config) {
    if (config === void 0) { config = {}; }
    return function (target, propertyName) {
        var metadata = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_EFFECT_CONFIG, config, { // Overrides any defaults if values are provided
            propertyName: propertyName });
        addEffectMetadataEntry(target, metadata);
    };
}
function getEffectDecoratorMetadata(instance) {
    var effectsDecorators = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["compose"])(getEffectMetadataEntries, getSourceForInstance)(instance);
    return effectsDecorators;
}
/**
 * Type guard to detemine whether METADATA_KEY is already present on the Class
 * constructor
 */
function hasMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY);
}
/** Add Effect Metadata to the Effect Class constructor under specific key */
function addEffectMetadataEntry(sourceProto, metadata) {
    if (hasMetadataEntries(sourceProto)) {
        sourceProto.constructor[METADATA_KEY].push(metadata);
    }
    else {
        Object.defineProperty(sourceProto.constructor, METADATA_KEY, {
            value: [metadata],
        });
    }
}
function getEffectMetadataEntries(sourceProto) {
    return hasMetadataEntries(sourceProto)
        ? sourceProto.constructor[METADATA_KEY]
        : [];
}

function getEffectsMetadata(instance) {
    return getSourceMetadata(instance).reduce(function (acc, _a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch, resubscribeOnError = _a.resubscribeOnError;
        acc[propertyName] = { dispatch: dispatch, resubscribeOnError: resubscribeOnError };
        return acc;
    }, {});
}
function getSourceMetadata(instance) {
    var effects = [
        getEffectDecoratorMetadata,
        getCreateEffectMetadata,
    ];
    return effects.reduce(function (sources, source) { return sources.concat(source(instance)); }, []);
}

function mergeEffects(sourceInstance, errorHandler) {
    var sourceName = getSourceForInstance(sourceInstance).constructor.name;
    var observables$ = getSourceMetadata(sourceInstance).map(function (_a) {
        var propertyName = _a.propertyName, dispatch = _a.dispatch, resubscribeOnError = _a.resubscribeOnError;
        var observable$ = typeof sourceInstance[propertyName] === 'function'
            ? sourceInstance[propertyName]()
            : sourceInstance[propertyName];
        var resubscribable$ = resubscribeOnError
            ? resubscribeInCaseOfError(observable$, errorHandler)
            : observable$;
        if (dispatch === false) {
            return resubscribable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["ignoreElements"])());
        }
        var materialized$ = resubscribable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])());
        return materialized$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (notification) { return ({
            effect: sourceInstance[propertyName],
            notification: notification,
            propertyName: propertyName,
            sourceName: sourceName,
            sourceInstance: sourceInstance,
        }); }));
    });
    return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(observables$));
}
function resubscribeInCaseOfError(observable$, errorHandler) {
    return observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
        if (errorHandler)
            errorHandler.handleError(error);
        // Return observable that produces this particular effect
        return resubscribeInCaseOfError(observable$, errorHandler);
    }));
}

var Actions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Actions, _super);
    function Actions(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this.source = source;
        }
        return _this;
    }
    Actions_1 = Actions;
    Actions.prototype.lift = function (operator) {
        var observable = new Actions_1();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    var Actions_1;
    Actions = Actions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ScannedActionsSubject"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]])
    ], Actions);
    return Actions;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]));
function ofType() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (action) {
        return allowedTypes.some(function (typeOrActionCreator) {
            if (typeof typeOrActionCreator === 'string') {
                // Comparing the string to type
                return typeOrActionCreator === action.type;
            }
            // We are filtering by ActionCreator
            return typeOrActionCreator.type === action.type;
        });
    });
}

function reportInvalidActions(output, reporter) {
    if (output.notification.kind === 'N') {
        var action = output.notification.value;
        var isInvalidAction = !isAction(action);
        if (isInvalidAction) {
            reporter.handleError(new Error("Effect " + getEffectName(output) + " dispatched an invalid action: " + stringify(action)));
        }
    }
}
function isAction(action) {
    return (typeof action !== 'function' &&
        action &&
        action.type &&
        typeof action.type === 'string');
}
function getEffectName(_a) {
    var propertyName = _a.propertyName, sourceInstance = _a.sourceInstance, sourceName = _a.sourceName;
    var isMethod = typeof sourceInstance[propertyName] === 'function';
    return "\"" + sourceName + "." + String(propertyName) + (isMethod ? '()' : '') + "\"";
}
function stringify(action) {
    try {
        return JSON.stringify(action);
    }
    catch (_a) {
        return action;
    }
}

var onIdentifyEffectsKey = 'ngrxOnIdentifyEffects';
var onRunEffectsKey = 'ngrxOnRunEffects';
var onInitEffects = 'ngrxOnInitEffects';

var EffectSources = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EffectSources, _super);
    function EffectSources(errorHandler, store) {
        var _this = _super.call(this) || this;
        _this.errorHandler = errorHandler;
        _this.store = store;
        return _this;
    }
    EffectSources.prototype.addEffects = function (effectSourceInstance) {
        this.next(effectSourceInstance);
        if (onInitEffects in effectSourceInstance &&
            typeof effectSourceInstance[onInitEffects] === 'function') {
            this.store.dispatch(effectSourceInstance[onInitEffects]());
        }
    };
    /**
     * @internal
     */
    EffectSources.prototype.toActions = function () {
        var _this = this;
        return this.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(getSourceForInstance), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (source$) { return source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(effectsInstance)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (source$) {
            return source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(resolveEffectSource(_this.errorHandler)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (output) {
                reportInvalidActions(output, _this.errorHandler);
                return output.notification;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (notification) {
                return notification.kind === 'N';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        }));
    };
    EffectSources = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], EffectSources);
    return EffectSources;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]));
function effectsInstance(sourceInstance) {
    if (onIdentifyEffectsKey in sourceInstance &&
        typeof sourceInstance[onIdentifyEffectsKey] === 'function') {
        return sourceInstance[onIdentifyEffectsKey]();
    }
    return '';
}
function resolveEffectSource(errorHandler) {
    return function (sourceInstance) {
        var mergedEffects$ = mergeEffects(sourceInstance, errorHandler);
        if (isOnRunEffects(sourceInstance)) {
            return sourceInstance.ngrxOnRunEffects(mergedEffects$);
        }
        return mergedEffects$;
    };
}
function isOnRunEffects(sourceInstance) {
    var source = getSourceForInstance(sourceInstance);
    return (onRunEffectsKey in source && typeof source[onRunEffectsKey] === 'function');
}

var _ROOT_EFFECTS_GUARD = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('@ngrx/effects Internal Root Guard');
var IMMEDIATE_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('ngrx/effects: Immediate Effects');
var ROOT_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('ngrx/effects: Root Effects');
var FEATURE_EFFECTS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('ngrx/effects: Feature Effects');

var EffectsRunner = /** @class */ (function () {
    function EffectsRunner(effectSources, store) {
        this.effectSources = effectSources;
        this.store = store;
        this.effectsSubscription = null;
    }
    EffectsRunner.prototype.start = function () {
        if (!this.effectsSubscription) {
            this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store);
        }
    };
    EffectsRunner.prototype.ngOnDestroy = function () {
        if (this.effectsSubscription) {
            this.effectsSubscription.unsubscribe();
            this.effectsSubscription = null;
        }
    };
    EffectsRunner = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [EffectSources,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], EffectsRunner);
    return EffectsRunner;
}());

var ROOT_EFFECTS_INIT = '@ngrx/effects/init';
var rootEffectsInit = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(ROOT_EFFECTS_INIT);
var EffectsRootModule = /** @class */ (function () {
    function EffectsRootModule(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule, guard) {
        this.sources = sources;
        runner.start();
        rootEffects.forEach(function (effectSourceInstance) {
            return sources.addEffects(effectSourceInstance);
        });
        store.dispatch({ type: ROOT_EFFECTS_INIT });
    }
    EffectsRootModule.prototype.addEffects = function (effectSourceInstance) {
        this.sources.addEffects(effectSourceInstance);
    };
    EffectsRootModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({}),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(ROOT_EFFECTS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_ROOT_EFFECTS_GUARD)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [EffectSources,
            EffectsRunner,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], Array, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"], Object])
    ], EffectsRootModule);
    return EffectsRootModule;
}());

var EffectsFeatureModule = /** @class */ (function () {
    function EffectsFeatureModule(root, effectSourceGroups, storeRootModule, storeFeatureModule) {
        effectSourceGroups.forEach(function (group) {
            return group.forEach(function (effectSourceInstance) {
                return root.addEffects(effectSourceInstance);
            });
        });
    }
    EffectsFeatureModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({}),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(FEATURE_EFFECTS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [EffectsRootModule, Array, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreRootModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreFeatureModule"]])
    ], EffectsFeatureModule);
    return EffectsFeatureModule;
}());

var EffectsModule = /** @class */ (function () {
    function EffectsModule() {
    }
    EffectsModule.forFeature = function (featureEffects) {
        return {
            ngModule: EffectsFeatureModule,
            providers: [
                featureEffects,
                {
                    provide: FEATURE_EFFECTS,
                    multi: true,
                    deps: featureEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    };
    EffectsModule.forRoot = function (rootEffects) {
        return {
            ngModule: EffectsRootModule,
            providers: [
                {
                    provide: _ROOT_EFFECTS_GUARD,
                    useFactory: _provideForRootGuard,
                    deps: [[EffectsRunner, new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]()]],
                },
                EffectsRunner,
                EffectSources,
                Actions,
                rootEffects,
                {
                    provide: ROOT_EFFECTS,
                    deps: rootEffects,
                    useFactory: createSourceInstances,
                },
            ],
        };
    };
    EffectsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({})
    ], EffectsModule);
    return EffectsModule;
}());
function createSourceInstances() {
    var instances = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        instances[_i] = arguments[_i];
    }
    return instances;
}
function _provideForRootGuard(runner) {
    if (runner) {
        throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");
    }
    return 'guarded';
}

function act(
/** Allow to take either config object or project/error functions */
configOrProject, errorFn) {
    var _a = typeof configOrProject === 'function'
        ? {
            project: configOrProject,
            error: errorFn,
            operator: rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"],
            complete: undefined,
            unsubscribe: undefined,
        }
        : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, configOrProject, { operator: configOrProject.operator || rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"] }), project = _a.project, error = _a.error, complete = _a.complete, operator = _a.operator, unsubscribe = _a.unsubscribe;
    return function (source) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
            var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(source.pipe(operator(function (input, index) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
                    var completed = false;
                    var errored = false;
                    var projectedCount = 0;
                    return project(input, index).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (notification) {
                        switch (notification.kind) {
                            case 'E':
                                errored = true;
                                return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Notification"](
                                // TODO: remove any in RxJS 6.5
                                'N', error(notification.error, input));
                            case 'C':
                                completed = true;
                                return complete
                                    ? new rxjs__WEBPACK_IMPORTED_MODULE_2__["Notification"](
                                    // TODO: remove any in RxJS 6.5
                                    'N', complete(projectedCount, input))
                                    : undefined;
                            default:
                                ++projectedCount;
                                return notification;
                        }
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (n) { return n != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                        if (!completed && !errored && unsubscribe) {
                            subject.next(unsubscribe(projectedCount, input));
                        }
                    }));
                });
            })), subject);
        });
    };
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=effects.js.map


/***/ }),

/***/ "./node_modules/@ngrx/store/fesm5/store.js":
/*!*************************************************!*\
  !*** ./node_modules/@ngrx/store/fesm5/store.js ***!
  \*************************************************/
/*! exports provided: ɵngrx_modules_store_store_c, ɵngrx_modules_store_store_d, ɵngrx_modules_store_store_bd, ɵngrx_modules_store_store_z, ɵngrx_modules_store_store_bb, ɵngrx_modules_store_store_ba, ɵngrx_modules_store_store_bc, ɵngrx_modules_store_store_e, ɵngrx_modules_store_store_f, ɵngrx_modules_store_store_g, ɵngrx_modules_store_store_b, ɵngrx_modules_store_store_x, ɵngrx_modules_store_store_v, ɵngrx_modules_store_store_u, ɵngrx_modules_store_store_t, ɵngrx_modules_store_store_w, ɵngrx_modules_store_store_y, ɵngrx_modules_store_store_s, ɵngrx_modules_store_store_n, ɵngrx_modules_store_store_m, ɵngrx_modules_store_store_p, ɵngrx_modules_store_store_k, ɵngrx_modules_store_store_i, ɵngrx_modules_store_store_j, ɵngrx_modules_store_store_q, ɵngrx_modules_store_store_h, ɵngrx_modules_store_store_o, ɵngrx_modules_store_store_l, ɵngrx_modules_store_store_r, createAction, props, union, Store, select, combineReducers, compose, createReducerFactory, ActionsSubject, INIT, ReducerManager, ReducerObservable, ReducerManagerDispatcher, UPDATE, ScannedActionsSubject, createSelector, createSelectorFactory, createFeatureSelector, defaultMemoize, defaultStateFn, resultMemoize, State, StateObservable, reduceState, INITIAL_STATE, REDUCER_FACTORY, INITIAL_REDUCERS, STORE_FEATURES, META_REDUCERS, FEATURE_REDUCERS, USER_PROVIDED_META_REDUCERS, USER_RUNTIME_CHECKS, StoreModule, StoreRootModule, StoreFeatureModule, on, createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_c", function() { return ACTIONS_SUBJECT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_d", function() { return REDUCER_MANAGER_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_bd", function() { return _runtimeChecksFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_z", function() { return createActiveRuntimeChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_bb", function() { return createImmutabilityCheckMetaReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_ba", function() { return createSerializationCheckMetaReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_bc", function() { return provideRuntimeChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_e", function() { return SCANNED_ACTIONS_SUBJECT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_f", function() { return isEqualCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_g", function() { return STATE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_b", function() { return STORE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_x", function() { return _concatMetaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_v", function() { return _createFeatureReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_u", function() { return _createFeatureStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_t", function() { return _createStoreReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_w", function() { return _initialStateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_y", function() { return _provideForRootGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_s", function() { return _ACTIVE_RUNTIME_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_n", function() { return _FEATURE_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_m", function() { return _FEATURE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_p", function() { return _FEATURE_REDUCERS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_k", function() { return _INITIAL_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_i", function() { return _INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_j", function() { return _REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_q", function() { return _RESOLVED_META_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_h", function() { return _ROOT_STORE_GUARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_o", function() { return _STORE_FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_l", function() { return _STORE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_r", function() { return _USER_RUNTIME_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducerFactory", function() { return createReducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsSubject", function() { return ActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT", function() { return INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerManager", function() { return ReducerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerObservable", function() { return ReducerObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerManagerDispatcher", function() { return ReducerManagerDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannedActionsSubject", function() { return ScannedActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorFactory", function() { return createSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureSelector", function() { return createFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return defaultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStateFn", function() { return defaultStateFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultMemoize", function() { return resultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateObservable", function() { return StateObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceState", function() { return reduceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_FACTORY", function() { return REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_REDUCERS", function() { return INITIAL_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_FEATURES", function() { return STORE_FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META_REDUCERS", function() { return META_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_REDUCERS", function() { return FEATURE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PROVIDED_META_REDUCERS", function() { return USER_PROVIDED_META_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_RUNTIME_CHECKS", function() { return USER_RUNTIME_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRootModule", function() { return StoreRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFeatureModule", function() { return StoreFeatureModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license NgRx 8.6.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */





/**
 * @description
 * Creates a configured `Creator` function that, when called, returns an object in the shape of the `Action` interface.
 *
 * Action creators reduce the explicitness of class-based action creators.
 *
 * @param type Describes the action that will be dispatched
 * @param config Additional metadata needed for the handling of the action.  See {@link createAction#usage-notes Usage Notes}.
 *
 * @usageNotes
 *
 * **Declaring an action creator**
 *
 * Without additional metadata:
 * ```ts
 * export const increment = createAction('[Counter] Increment');
 * ```
 * With additional metadata:
 * ```ts
 * export const loginSuccess = createAction(
 *   '[Auth/API] Login Success',
 *   props<{ user: User }>()
 * );
 * ```
 * With a function:
 * ```ts
 * export const loginSuccess = createAction(
 *   '[Auth/API] Login Success',
 *   (response: Response) => response.user
 * );
 * ```
 *
 * **Dispatching an action**
 *
 * Without additional metadata:
 * ```ts
 * store.dispatch(increment());
 * ```
 * With additional metadata:
 * ```ts
 * store.dispatch(loginSuccess({ user: newUser }));
 * ```
 *
 * **Referencing an action in a reducer**
 *
 * Using a switch statement:
 * ```ts
 * switch (action.type) {
 *   // ...
 *   case AuthApiActions.loginSuccess.type: {
 *     return {
 *       ...state,
 *       user: action.user
 *     };
 *   }
 * }
 * ```
 * Using a reducer creator:
 * ```ts
 * on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
 * ```
 *
 *  **Referencing an action in an effect**
 * ```ts
 * effectName$ = createEffect(
 *   () => this.actions$.pipe(
 *     ofType(AuthApiActions.loginSuccess),
 *     // ...
 *   )
 * );
 * ```
 */
function createAction(type, config) {
    if (typeof config === 'function') {
        return defineType(type, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args)), { type: type }));
        });
    }
    var as = config ? config._as : 'empty';
    switch (as) {
        case 'empty':
            return defineType(type, function () { return ({ type: type }); });
        case 'props':
            return defineType(type, function (props) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { type: type })); });
        default:
            throw new Error('Unexpected config.');
    }
}
function props() {
    // the return type does not match TypePropertyIsNotAllowed, so double casting
    // is used.
    return { _as: 'props', _p: undefined };
}
function union(creators) {
    return undefined;
}
function defineType(type, creator) {
    return Object.defineProperty(creator, 'type', {
        value: type,
        writable: false,
    });
}

var INIT = '@ngrx/store/init';
var ActionsSubject = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ActionsSubject, _super);
    function ActionsSubject() {
        return _super.call(this, { type: INIT }) || this;
    }
    ActionsSubject.prototype.next = function (action) {
        if (typeof action === 'function') {
            throw new TypeError("\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().");
        }
        else if (typeof action === 'undefined') {
            throw new TypeError("Actions must be objects");
        }
        else if (typeof action.type === 'undefined') {
            throw new TypeError("Actions must have a type property");
        }
        _super.prototype.next.call(this, action);
    };
    ActionsSubject.prototype.complete = function () {
        /* noop */
    };
    ActionsSubject.prototype.ngOnDestroy = function () {
        _super.prototype.complete.call(this);
    };
    ActionsSubject = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ActionsSubject);
    return ActionsSubject;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]));
var ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];

var _ROOT_STORE_GUARD = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Root Guard');
var _INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Initial State');
var INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Initial State');
var REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Reducer Factory');
var _REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Reducer Factory Provider');
var INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Initial Reducers');
var _INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Initial Reducers');
var STORE_FEATURES = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Store Features');
var _STORE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Store Reducers');
var _FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Feature Reducers');
var _FEATURE_CONFIGS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Feature Configs');
var _STORE_FEATURES = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Store Features');
var _FEATURE_REDUCERS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Feature Reducers Token');
var FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Feature Reducers');
/**
 * User-defined meta reducers from StoreModule.forRoot()
 */
var USER_PROVIDED_META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store User Provided Meta Reducers');
/**
 * Meta reducers defined either internally by @ngrx/store or by library authors
 */
var META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Meta Reducers');
/**
 * Concats the user provided meta reducers and the meta reducers provided on the multi
 * injection token
 */
var _RESOLVED_META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Resolved Meta Reducers');
/**
 * Runtime checks defined by the user via an InjectionToken
 * Defaults to `_USER_RUNTIME_CHECKS`
 */
var USER_RUNTIME_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store User Runtime Checks Config');
/**
 * Runtime checks defined by the user via forRoot()
 */
var _USER_RUNTIME_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal User Runtime Checks Config');
/**
 * Runtime checks currently in use
 */
var _ACTIVE_RUNTIME_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@ngrx/store Internal Runtime Checks');

function combineReducers(reducers, initialState) {
    if (initialState === void 0) { initialState = {}; }
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        state = state === undefined ? initialState : state;
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
            var key = finalReducerKeys[i];
            var reducer = finalReducers[key];
            var previousStateForKey = state[key];
            var nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
function omit(object, keyToRemove) {
    return Object.keys(object)
        .filter(function (key) { return key !== keyToRemove; })
        .reduce(function (result, key) {
        var _a;
        return Object.assign(result, (_a = {}, _a[key] = object[key], _a));
    }, {});
}
function compose() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
}
function createReducerFactory(reducerFactory, metaReducers) {
    if (Array.isArray(metaReducers) && metaReducers.length > 0) {
        reducerFactory = compose.apply(null, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(metaReducers, [
            reducerFactory,
        ]));
    }
    return function (reducers, initialState) {
        var reducer = reducerFactory(reducers);
        return function (state, action) {
            state = state === undefined ? initialState : state;
            return reducer(state, action);
        };
    };
}
function createFeatureReducerFactory(metaReducers) {
    var reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0
        ? compose.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(metaReducers)) : function (r) { return r; };
    return function (reducer, initialState) {
        reducer = reducerFactory(reducer);
        return function (state, action) {
            state = state === undefined ? initialState : state;
            return reducer(state, action);
        };
    };
}

var ReducerObservable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReducerObservable, _super);
    function ReducerObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerObservable;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]));
var ReducerManagerDispatcher = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReducerManagerDispatcher, _super);
    function ReducerManagerDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerManagerDispatcher;
}(ActionsSubject));
var UPDATE = '@ngrx/store/update-reducers';
var ReducerManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReducerManager, _super);
    function ReducerManager(dispatcher, initialState, reducers, reducerFactory) {
        var _this = _super.call(this, reducerFactory(reducers, initialState)) || this;
        _this.dispatcher = dispatcher;
        _this.initialState = initialState;
        _this.reducers = reducers;
        _this.reducerFactory = reducerFactory;
        return _this;
    }
    ReducerManager.prototype.addFeature = function (feature) {
        this.addFeatures([feature]);
    };
    ReducerManager.prototype.addFeatures = function (features) {
        var reducers = features.reduce(function (reducerDict, _a) {
            var reducers = _a.reducers, reducerFactory = _a.reducerFactory, metaReducers = _a.metaReducers, initialState = _a.initialState, key = _a.key;
            var reducer = typeof reducers === 'function'
                ? createFeatureReducerFactory(metaReducers)(reducers, initialState)
                : createReducerFactory(reducerFactory, metaReducers)(reducers, initialState);
            reducerDict[key] = reducer;
            return reducerDict;
        }, {});
        this.addReducers(reducers);
    };
    ReducerManager.prototype.removeFeature = function (feature) {
        this.removeFeatures([feature]);
    };
    ReducerManager.prototype.removeFeatures = function (features) {
        this.removeReducers(features.map(function (p) { return p.key; }));
    };
    ReducerManager.prototype.addReducer = function (key, reducer) {
        var _a;
        this.addReducers((_a = {}, _a[key] = reducer, _a));
    };
    ReducerManager.prototype.addReducers = function (reducers) {
        this.reducers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.reducers, reducers);
        this.updateReducers(Object.keys(reducers));
    };
    ReducerManager.prototype.removeReducer = function (featureKey) {
        this.removeReducers([featureKey]);
    };
    ReducerManager.prototype.removeReducers = function (featureKeys) {
        var _this = this;
        featureKeys.forEach(function (key) {
            _this.reducers = omit(_this.reducers, key) /*TODO(#823)*/;
        });
        this.updateReducers(featureKeys);
    };
    ReducerManager.prototype.updateReducers = function (featureKeys) {
        this.next(this.reducerFactory(this.reducers, this.initialState));
        this.dispatcher.next({
            type: UPDATE,
            features: featureKeys,
        });
    };
    ReducerManager.prototype.ngOnDestroy = function () {
        this.complete();
    };
    ReducerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(INITIAL_STATE)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(INITIAL_REDUCERS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(REDUCER_FACTORY)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ReducerManagerDispatcher, Object, Object, Function])
    ], ReducerManager);
    return ReducerManager;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]));
var REDUCER_MANAGER_PROVIDERS = [
    ReducerManager,
    { provide: ReducerObservable, useExisting: ReducerManager },
    { provide: ReducerManagerDispatcher, useExisting: ActionsSubject },
];

var ScannedActionsSubject = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ScannedActionsSubject, _super);
    function ScannedActionsSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScannedActionsSubject.prototype.ngOnDestroy = function () {
        this.complete();
    };
    ScannedActionsSubject = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ScannedActionsSubject);
    return ScannedActionsSubject;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]));
var SCANNED_ACTIONS_SUBJECT_PROVIDERS = [
    ScannedActionsSubject,
];

var StateObservable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateObservable, _super);
    function StateObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateObservable;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]));
var State = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(State, _super);
    function State(actions$, reducer$, scannedActions, initialState) {
        var _this = _super.call(this, initialState) || this;
        var actionsOnQueue$ = actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["queueScheduler"]));
        var withLatestReducer$ = actionsOnQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(reducer$));
        var seed = { state: initialState };
        var stateAndAction$ = withLatestReducer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(reduceState, seed));
        _this.stateSubscription = stateAndAction$.subscribe(function (_a) {
            var state = _a.state, action = _a.action;
            _this.next(state);
            scannedActions.next(action);
        });
        return _this;
    }
    State.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
        this.complete();
    };
    State.INIT = INIT;
    State = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(INITIAL_STATE)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ActionsSubject,
            ReducerObservable,
            ScannedActionsSubject, Object])
    ], State);
    return State;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]));
function reduceState(stateActionPair, _a) {
    if (stateActionPair === void 0) { stateActionPair = { state: undefined }; }
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), action = _b[0], reducer = _b[1];
    var state = stateActionPair.state;
    return { state: reducer(state, action), action: action };
}
var STATE_PROVIDERS = [
    State,
    { provide: StateObservable, useExisting: State },
];

var Store = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Store, _super);
    function Store(state$, actionsObserver, reducerManager) {
        var _this = _super.call(this) || this;
        _this.actionsObserver = actionsObserver;
        _this.reducerManager = reducerManager;
        _this.source = state$;
        return _this;
    }
    Store_1 = Store;
    Store.prototype.select = function (pathOrMapFn) {
        var _a;
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return (_a = select).call.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([null, pathOrMapFn], paths))(this);
    };
    Store.prototype.lift = function (operator) {
        var store = new Store_1(this, this.actionsObserver, this.reducerManager);
        store.operator = operator;
        return store;
    };
    Store.prototype.dispatch = function (action) {
        this.actionsObserver.next(action);
    };
    Store.prototype.next = function (action) {
        this.actionsObserver.next(action);
    };
    Store.prototype.error = function (err) {
        this.actionsObserver.error(err);
    };
    Store.prototype.complete = function () {
        this.actionsObserver.complete();
    };
    Store.prototype.addReducer = function (key, reducer) {
        this.reducerManager.addReducer(key, reducer);
    };
    Store.prototype.removeReducer = function (key) {
        this.reducerManager.removeReducer(key);
    };
    var Store_1;
    Store = Store_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [StateObservable,
            ActionsSubject,
            ReducerManager])
    ], Store);
    return Store;
}(rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]));
var STORE_PROVIDERS = [Store];
function select(pathOrMapFn, propsOrPath) {
    var paths = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        paths[_i - 2] = arguments[_i];
    }
    return function selectOperator(source$) {
        var mapped$;
        if (typeof pathOrMapFn === 'string') {
            var pathSlices = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([propsOrPath], paths).filter(Boolean);
            mapped$ = source$.pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([pathOrMapFn], pathSlices)));
        }
        else if (typeof pathOrMapFn === 'function') {
            mapped$ = source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (source) { return pathOrMapFn(source, propsOrPath); }));
        }
        else {
            throw new TypeError("Unexpected type '" + typeof pathOrMapFn + "' in select operator," +
                " expected 'string' or 'function'");
        }
        return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    };
}

function isEqualCheck(a, b) {
    return a === b;
}
function isArgumentsChanged(args, lastArguments, comparator) {
    for (var i = 0; i < args.length; i++) {
        if (!comparator(args[i], lastArguments[i])) {
            return true;
        }
    }
    return false;
}
function resultMemoize(projectionFn, isResultEqual) {
    return defaultMemoize(projectionFn, isEqualCheck, isResultEqual);
}
function defaultMemoize(projectionFn, isArgumentsEqual, isResultEqual) {
    if (isArgumentsEqual === void 0) { isArgumentsEqual = isEqualCheck; }
    if (isResultEqual === void 0) { isResultEqual = isEqualCheck; }
    var lastArguments = null;
    // tslint:disable-next-line:no-any anything could be the result.
    var lastResult = null;
    var overrideResult;
    function reset() {
        lastArguments = null;
        lastResult = null;
    }
    function setResult(result) {
        if (result === void 0) { result = undefined; }
        overrideResult = result;
    }
    // tslint:disable-next-line:no-any anything could be the result.
    function memoized() {
        if (overrideResult !== undefined) {
            return overrideResult;
        }
        if (!lastArguments) {
            lastResult = projectionFn.apply(null, arguments);
            lastArguments = arguments;
            return lastResult;
        }
        if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
            return lastResult;
        }
        var newResult = projectionFn.apply(null, arguments);
        lastArguments = arguments;
        if (isResultEqual(lastResult, newResult)) {
            return lastResult;
        }
        lastResult = newResult;
        return newResult;
    }
    return { memoized: memoized, reset: reset, setResult: setResult };
}
function createSelector() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    return createSelectorFactory(defaultMemoize).apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input));
}
function defaultStateFn(state, selectors, props, memoizedProjector) {
    if (props === undefined) {
        var args_1 = selectors.map(function (fn) { return fn(state); });
        return memoizedProjector.memoized.apply(null, args_1);
    }
    var args = selectors.map(function (fn) {
        return fn(state, props);
    });
    return memoizedProjector.memoized.apply(null, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args, [props]));
}
function createSelectorFactory(memoize, options) {
    if (options === void 0) { options = {
        stateFn: defaultStateFn,
    }; }
    return function () {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        var args = input;
        if (Array.isArray(args[0])) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), head = _a[0], tail = _a.slice(1);
            args = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(head, tail);
        }
        var selectors = args.slice(0, args.length - 1);
        var projector = args[args.length - 1];
        var memoizedSelectors = selectors.filter(function (selector) {
            return selector.release && typeof selector.release === 'function';
        });
        var memoizedProjector = memoize(function () {
            var selectors = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                selectors[_i] = arguments[_i];
            }
            return projector.apply(null, selectors);
        });
        var memoizedState = defaultMemoize(function (state, props) {
            return options.stateFn.apply(null, [
                state,
                selectors,
                props,
                memoizedProjector,
            ]);
        });
        function release() {
            memoizedState.reset();
            memoizedProjector.reset();
            memoizedSelectors.forEach(function (selector) { return selector.release(); });
        }
        return Object.assign(memoizedState.memoized, {
            release: release,
            projector: memoizedProjector.memoized,
            setResult: memoizedState.setResult,
        });
    };
}
function createFeatureSelector(featureName) {
    return createSelector(function (state) {
        var featureState = state[featureName];
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !(featureName in state)) {
            console.warn("@ngrx/store: The feature name \"" + featureName + "\" does " +
                'not exist in the state, therefore createFeatureSelector ' +
                'cannot access it.  Be sure it is imported in a loaded module ' +
                ("using StoreModule.forRoot('" + featureName + "', ...) or ") +
                ("StoreModule.forFeature('" + featureName + "', ...).  If the default ") +
                'state is intended to be undefined, as is the case with router ' +
                'state, this development-only warning message can be ignored.');
        }
        return featureState;
    }, function (featureState) { return featureState; });
}

function isUndefined(target) {
    return target === undefined;
}
function isNull(target) {
    return target === null;
}
function isArray(target) {
    return Array.isArray(target);
}
function isString(target) {
    return typeof target === 'string';
}
function isBoolean(target) {
    return typeof target === 'boolean';
}
function isNumber(target) {
    return typeof target === 'number';
}
function isObjectLike(target) {
    return typeof target === 'object' && target !== null;
}
function isObject(target) {
    return isObjectLike(target) && !isArray(target);
}
function isPlainObject(target) {
    if (!isObject(target)) {
        return false;
    }
    var targetPrototype = Object.getPrototypeOf(target);
    return targetPrototype === Object.prototype || targetPrototype === null;
}
function isFunction(target) {
    return typeof target === 'function';
}
function hasOwnProperty(target, propertyName) {
    return Object.prototype.hasOwnProperty.call(target, propertyName);
}

function immutabilityCheckMetaReducer(reducer, checks) {
    return function (state, action) {
        var act = checks.action ? freeze(action) : action;
        var nextState = reducer(state, act);
        return checks.state ? freeze(nextState) : nextState;
    };
}
function freeze(target) {
    Object.freeze(target);
    var targetIsFunction = isFunction(target);
    Object.getOwnPropertyNames(target).forEach(function (prop) {
        if (hasOwnProperty(target, prop) &&
            (targetIsFunction
                ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments'
                : true)) {
            var propValue = target[prop];
            if ((isObjectLike(propValue) || isFunction(propValue)) &&
                !Object.isFrozen(propValue)) {
                freeze(propValue);
            }
        }
    });
    return target;
}

function serializationCheckMetaReducer(reducer, checks) {
    return function (state, action) {
        if (checks.action) {
            var unserializableAction = getUnserializable(action);
            throwIfUnserializable(unserializableAction, 'action');
        }
        var nextState = reducer(state, action);
        if (checks.state) {
            var unserializableState = getUnserializable(nextState);
            throwIfUnserializable(unserializableState, 'state');
        }
        return nextState;
    };
}
function getUnserializable(target, path) {
    if (path === void 0) { path = []; }
    // Guard against undefined and null, e.g. a reducer that returns undefined
    if ((isUndefined(target) || isNull(target)) && path.length === 0) {
        return {
            path: ['root'],
            value: target,
        };
    }
    var keys = Object.keys(target);
    return keys.reduce(function (result, key) {
        if (result) {
            return result;
        }
        var value = target[key];
        if (isUndefined(value) ||
            isNull(value) ||
            isNumber(value) ||
            isBoolean(value) ||
            isString(value) ||
            isArray(value)) {
            return false;
        }
        if (isPlainObject(value)) {
            return getUnserializable(value, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(path, [key]));
        }
        return {
            path: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(path, [key]),
            value: value,
        };
    }, false);
}
function throwIfUnserializable(unserializable, context) {
    if (unserializable === false) {
        return;
    }
    var unserializablePath = unserializable.path.join('.');
    var error = new Error("Detected unserializable " + context + " at \"" + unserializablePath + "\"");
    error.value = unserializable.value;
    error.unserializablePath = unserializablePath;
    throw error;
}

function createActiveRuntimeChecks(runtimeChecks) {
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
        if (runtimeChecks === undefined) {
            console.warn('@ngrx/store: runtime checks are currently opt-in but will be the default in the next major version with the possibility to opt-out, see https://ngrx.io/guide/migration/v8 for more information.');
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ strictStateSerializability: false, strictActionSerializability: false, strictStateImmutability: false, strictActionImmutability: false }, runtimeChecks);
    }
    return {
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictStateImmutability: false,
        strictActionImmutability: false,
    };
}
function createSerializationCheckMetaReducer(_a) {
    var strictActionSerializability = _a.strictActionSerializability, strictStateSerializability = _a.strictStateSerializability;
    return function (reducer) {
        return strictActionSerializability || strictStateSerializability
            ? serializationCheckMetaReducer(reducer, {
                action: strictActionSerializability,
                state: strictStateSerializability,
            })
            : reducer;
    };
}
function createImmutabilityCheckMetaReducer(_a) {
    var strictActionImmutability = _a.strictActionImmutability, strictStateImmutability = _a.strictStateImmutability;
    return function (reducer) {
        return strictActionImmutability || strictStateImmutability
            ? immutabilityCheckMetaReducer(reducer, {
                action: strictActionImmutability,
                state: strictStateImmutability,
            })
            : reducer;
    };
}
function provideRuntimeChecks(runtimeChecks) {
    return [
        {
            provide: _USER_RUNTIME_CHECKS,
            useValue: runtimeChecks,
        },
        {
            provide: USER_RUNTIME_CHECKS,
            useFactory: _runtimeChecksFactory,
            deps: [_USER_RUNTIME_CHECKS],
        },
        {
            provide: _ACTIVE_RUNTIME_CHECKS,
            deps: [USER_RUNTIME_CHECKS],
            useFactory: createActiveRuntimeChecks,
        },
        {
            provide: META_REDUCERS,
            multi: true,
            deps: [_ACTIVE_RUNTIME_CHECKS],
            useFactory: createImmutabilityCheckMetaReducer,
        },
        {
            provide: META_REDUCERS,
            multi: true,
            deps: [_ACTIVE_RUNTIME_CHECKS],
            useFactory: createSerializationCheckMetaReducer,
        },
    ];
}
function _runtimeChecksFactory(runtimeChecks) {
    return runtimeChecks;
}

var StoreRootModule = /** @class */ (function () {
    function StoreRootModule(actions$, reducer$, scannedActions$, store, guard) {
    }
    StoreRootModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({}),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ROOT_STORE_GUARD)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ActionsSubject,
            ReducerObservable,
            ScannedActionsSubject,
            Store, Object])
    ], StoreRootModule);
    return StoreRootModule;
}());
var StoreFeatureModule = /** @class */ (function () {
    function StoreFeatureModule(features, featureReducers, reducerManager, root) {
        this.features = features;
        this.featureReducers = featureReducers;
        this.reducerManager = reducerManager;
        var feats = features.map(function (feature, index) {
            var featureReducerCollection = featureReducers.shift();
            var reducers = featureReducerCollection /*TODO(#823)*/[index];
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, feature, { reducers: reducers, initialState: _initialStateFactory(feature.initialState) });
        });
        reducerManager.addFeatures(feats);
    }
    StoreFeatureModule.prototype.ngOnDestroy = function () {
        this.reducerManager.removeFeatures(this.features);
    };
    StoreFeatureModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({}),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_STORE_FEATURES)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(FEATURE_REDUCERS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Array, ReducerManager,
            StoreRootModule])
    ], StoreFeatureModule);
    return StoreFeatureModule;
}());
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule.forRoot = function (reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreRootModule,
            providers: [
                {
                    provide: _ROOT_STORE_GUARD,
                    useFactory: _provideForRootGuard,
                    deps: [[Store, new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]()]],
                },
                { provide: _INITIAL_STATE, useValue: config.initialState },
                {
                    provide: INITIAL_STATE,
                    useFactory: _initialStateFactory,
                    deps: [_INITIAL_STATE],
                },
                { provide: _INITIAL_REDUCERS, useValue: reducers },
                {
                    provide: _STORE_REDUCERS,
                    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"] ? reducers : _INITIAL_REDUCERS,
                },
                {
                    provide: INITIAL_REDUCERS,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _INITIAL_REDUCERS, [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](_STORE_REDUCERS)]],
                    useFactory: _createStoreReducers,
                },
                {
                    provide: USER_PROVIDED_META_REDUCERS,
                    useValue: config.metaReducers ? config.metaReducers : [],
                },
                {
                    provide: _RESOLVED_META_REDUCERS,
                    deps: [META_REDUCERS, USER_PROVIDED_META_REDUCERS],
                    useFactory: _concatMetaReducers,
                },
                {
                    provide: _REDUCER_FACTORY,
                    useValue: config.reducerFactory
                        ? config.reducerFactory
                        : combineReducers,
                },
                {
                    provide: REDUCER_FACTORY,
                    deps: [_REDUCER_FACTORY, _RESOLVED_META_REDUCERS],
                    useFactory: createReducerFactory,
                },
                ACTIONS_SUBJECT_PROVIDERS,
                REDUCER_MANAGER_PROVIDERS,
                SCANNED_ACTIONS_SUBJECT_PROVIDERS,
                STATE_PROVIDERS,
                STORE_PROVIDERS,
                provideRuntimeChecks(config.runtimeChecks),
            ],
        };
    };
    StoreModule.forFeature = function (featureName, reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreFeatureModule,
            providers: [
                {
                    provide: _FEATURE_CONFIGS,
                    multi: true,
                    useValue: config,
                },
                {
                    provide: STORE_FEATURES,
                    multi: true,
                    useValue: {
                        key: featureName,
                        reducerFactory: !(config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]) && config.reducerFactory
                            ? config.reducerFactory
                            : combineReducers,
                        metaReducers: !(config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]) && config.metaReducers
                            ? config.metaReducers
                            : [],
                        initialState: !(config instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]) && config.initialState
                            ? config.initialState
                            : undefined,
                    },
                },
                {
                    provide: _STORE_FEATURES,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _FEATURE_CONFIGS, STORE_FEATURES],
                    useFactory: _createFeatureStore,
                },
                { provide: _FEATURE_REDUCERS, multi: true, useValue: reducers },
                {
                    provide: _FEATURE_REDUCERS_TOKEN,
                    multi: true,
                    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"] ? reducers : _FEATURE_REDUCERS,
                },
                {
                    provide: FEATURE_REDUCERS,
                    multi: true,
                    deps: [
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
                        _FEATURE_REDUCERS,
                        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](_FEATURE_REDUCERS_TOKEN)],
                    ],
                    useFactory: _createFeatureReducers,
                },
            ],
        };
    };
    StoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})
    ], StoreModule);
    return StoreModule;
}());
function _createStoreReducers(injector, reducers) {
    return reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"] ? injector.get(reducers) : reducers;
}
function _createFeatureStore(injector, configs, featureStores) {
    return featureStores.map(function (feat, index) {
        if (configs[index] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]) {
            var conf = injector.get(configs[index]);
            return {
                key: feat.key,
                reducerFactory: conf.reducerFactory
                    ? conf.reducerFactory
                    : combineReducers,
                metaReducers: conf.metaReducers ? conf.metaReducers : [],
                initialState: conf.initialState,
            };
        }
        return feat;
    });
}
function _createFeatureReducers(injector, reducerCollection) {
    var reducers = reducerCollection.map(function (reducer) {
        return reducer instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"] ? injector.get(reducer) : reducer;
    });
    return reducers;
}
function _initialStateFactory(initialState) {
    if (typeof initialState === 'function') {
        return initialState();
    }
    return initialState;
}
function _concatMetaReducers(metaReducers, userProvidedMetaReducers) {
    return metaReducers.concat(userProvidedMetaReducers);
}
function _provideForRootGuard(store) {
    if (store) {
        throw new TypeError("StoreModule.forRoot() called twice. Feature modules should use StoreModule.forFeature() instead.");
    }
    return 'guarded';
}

/**
 * @description
 * Associates actions with a given state change function.
 * A state change function must be provided as the last parameter.
 *
 * @param args `ActionCreator`'s followed by a state change function.
 *
 * **To maintain type-safety**: pass 10 or less `ActionCreator`'s.
 * @returns an association of action types with a state change function.
 */
function on() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var reducer = args.pop();
    var types = args.reduce(function (result, creator) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(result, [creator.type]); }, []);
    return { reducer: reducer, types: types };
}
/**
 * @description
 * Creates a reducer function to handle state transitions.
 *
 * Reducer creators reduce the explicitness of reducer functions with switch statements.
 *
 * @param initialState Provides a state value if the current state is `undefined`, as it is initially.
 * @param ons Associations between actions and state changes.
 * @returns A reducer function.
 *
 * @usageNotes
 *
 * - Must be used with `ActionCreator`'s (returned by `createAction`).  Cannot be used with class-based action creators.
 * - An action can be associated with multiple state change functions. In this case the functions will be executed in the specified order.
 * - The returned `ActionReducer` should additionally be returned from an exported `reducer` function.
 * This is because [function calls are not supported](https://angular.io/guide/aot-compiler#function-calls-are-not-supported) by the AOT compiler.
 *
 * **Declaring a reducer creator with an exported reducer function**
 *
 * ```ts
 * const featureReducer = createReducer(
 *   initialState,
 *   on(
 *     featureActions.actionOne,
 *     featureActions.actionTwo,
 *     (state, { updatedValue }) => ({ ...state, prop: updatedValue })
 *   ),
 *   on(featureActions.actionThree, () => initialState);
 * );
 *
 * export function reducer(state: State | undefined, action: Action) {
 *   return featureReducer(state, action);
 * }
 * ```
 */
function createReducer(initialState) {
    var e_1, _a;
    var ons = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ons[_i - 1] = arguments[_i];
    }
    var map = new Map();
    var _loop_1 = function (on_1) {
        var e_2, _a;
        var _loop_2 = function (type) {
            if (map.has(type)) {
                var existingReducer_1 = map.get(type);
                var newReducer = function (state, action) {
                    return on_1.reducer(existingReducer_1(state, action), action);
                };
                map.set(type, newReducer);
            }
            else {
                map.set(type, on_1.reducer);
            }
        };
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(on_1.types), _c = _b.next(); !_c.done; _c = _b.next()) {
                var type = _c.value;
                _loop_2(type);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    try {
        for (var ons_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(ons), ons_1_1 = ons_1.next(); !ons_1_1.done; ons_1_1 = ons_1.next()) {
            var on_1 = ons_1_1.value;
            _loop_1(on_1);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (ons_1_1 && !ons_1_1.done && (_a = ons_1.return)) _a.call(ons_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        var reducer = map.get(action.type);
        return reducer ? reducer(state, action) : state;
    };
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=store.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/retry.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/retry.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/retry */ "./node_modules/rxjs-compat/_esm5/operator/retry.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.retry = _operator_retry__WEBPACK_IMPORTED_MODULE_1__["retry"];
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/retry.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/retry.js ***!
  \**********************************************************/
/*! exports provided: retry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function retry(count) {
    if (count === void 0) { count = -1; }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["retry"])(count)(this);
}
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "./src/app/department/department-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/department/department-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DepartmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentRoutingModule", function() { return DepartmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_department_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/department/list/list.component */ "./src/app/department/list/list.component.ts");




var routes = [{
        path: '',
        component: src_app_department_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }];
var DepartmentRoutingModule = /** @class */ (function () {
    function DepartmentRoutingModule() {
    }
    DepartmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DepartmentRoutingModule);
    return DepartmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/department/department.module.ts":
/*!*************************************************!*\
  !*** ./src/app/department/department.module.ts ***!
  \*************************************************/
/*! exports provided: DepartmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _department_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./department-routing.module */ "./src/app/department/department-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/department/list/list.component.ts");
/* harmony import */ var _department_shared_redux_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../department/shared/redux/effects */ "./src/app/department/shared/redux/effects/index.ts");
/* harmony import */ var _department_shared_redux_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../department/shared/redux/reducers */ "./src/app/department/shared/redux/reducers/index.ts");
/* harmony import */ var src_app_department_shared_services_DepartmentService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/department/shared/services/DepartmentService */ "./src/app/department/shared/services/DepartmentService.ts");

// Angular




// Ngrx npm


// My app





var routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
    }
];
var DepartmentModule = /** @class */ (function () {
    function DepartmentModule() {
    }
    DepartmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _department_routing_module__WEBPACK_IMPORTED_MODULE_7__["DepartmentRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({}),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_department_shared_redux_effects__WEBPACK_IMPORTED_MODULE_9__["DepartmentEffects"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('departmentList', _department_shared_redux_reducers__WEBPACK_IMPORTED_MODULE_10__["getDepartmentReducer"]),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [src_app_department_shared_services_DepartmentService__WEBPACK_IMPORTED_MODULE_11__["DepartmentService"]] // My servive
        })
    ], DepartmentModule);
    return DepartmentModule;
}());



/***/ }),

/***/ "./src/app/department/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/department/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <button class=\"btn btn-success\" (click)=\"onCreate()\">Create</button>\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"loadingIndicator\">\n    Loadding ...\n  </div>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th class=\"col-xs-3\">\n          <a href=\"#\" (click)=\"onChangeSorting('dept_external_code')\">\n                      <span>Code</span>\n                      <i *ngIf=\"model.sort.key === 'dept_external_code'\" class=\"pull-right fa\" [ngClass]=\"{'fa-angle-down': (model.sort.direction === 'desc'), 'fa-angle-up': (model.sort.direction === 'asc')}\"></i>\n                  </a>\n        </th>\n        <th class=\"col-xs-3\">\n          <a href=\"#\" (click)=\"onChangeSorting('dept_name')\">\n                      <span>Name</span>\n                      <i *ngIf=\"model.sort.key === 'dept_name'\" class=\"pull-right fa\" [ngClass]=\"{'fa-angle-down': (model.sort.direction === 'desc'), 'fa-angle-up': (model.sort.direction === 'asc')}\"></i>\n                  </a>\n        </th>\n        <th class=\"col-xs-5\">\n          <a href=\"#\" (click)=\"onChangeSorting('dept_name_abbreviation')\">\n                      <span>Abbr Name</span>\n                      <i *ngIf=\"model.sort.key === 'dept_name_abbreviation'\" class=\"pull-right fa\" [ngClass]=\"{'fa-angle-down': (model.sort.direction === 'desc'), 'fa-angle-up': (model.sort.direction === 'asc')}\"></i>\n                  </a>\n        </th>\n        <th colspan=\"2\" class=\"col-xs-1\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let dept of departments, let i = index\">\n        <td>{{ dept && dept.code }}</td>\n        <td>{{ dept && dept.name }}</td>\n        <td>{{ dept && dept.nameAbb }}</td>\n        <td>\n          <a href=\"javascript:void(0)\" (click)=\"onEdit(dept)\" class=\"m-l-20\"><img src=\"assets/images/edit.svg\" /></a>\n        </td>\n        <td>\n          <a href=\"javascript:void(0)\" (click)=\"onDelete(dept)\"><img src=\"assets/images/del.svg\" /></a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n"

/***/ }),

/***/ "./src/app/department/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/department/list/list.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .line-head {\n  height: 55px;\n  display: block;\n  min-width: 90px;\n  margin-right: 18px; }\n\n:host h4:first-child {\n  min-width: 80px;\n  padding-left: 20px; }\n\n:host .text-center {\n  text-align: center; }\n\n:host .table thead tr th {\n  min-width: 85px;\n  padding-left: 8px;\n  cursor: pointer; }\n\n:host .table tbody tr td {\n  min-width: 85px;\n  max-width: 500px;\n  padding-left: 8px;\n  line-height: 30px;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: inherit !important; }\n\n:host .table tbody tr td:nth-child(4),\n:host .table tbody tr td:nth-child(5) {\n  min-width: 25px;\n  padding: 0 8px 0 8px; }\n\n:host th {\n  line-height: inherit; }\n\n:host .message-content {\n  word-break: break-all;\n  word-wrap: break-word; }\n\n:host a {\n  color: black;\n  text-decoration: none; }\n\n:host a:focus {\n  text-decoration: none; }\n\n:host a:focus span {\n    text-decoration: underline; }\n\n:host a:focus img {\n    border-bottom: 1px solid #000000; }\n\n@media (max-width: 5120px) and (min-width: 410px) {\n  :host .modal-ms {\n    width: 400px;\n    margin: auto;\n    padding-top: 3%; } }\n\n:host .content-panel {\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudC9saXN0L2U6XFxNeSBKT0JcXGRlbW8tcmVkdXgvc3JjXFxhcHBcXGRlcGFydG1lbnRcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFMdEI7RUFRSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBVHRCO0VBWUksa0JBQWtCLEVBQUE7O0FBWnRCO0VBa0JVLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQXBCekI7RUEyQlUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsK0JBQStCLEVBQUE7O0FBakN6Qzs7RUFxQ1UsZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQXRDOUI7RUE0Q0ksb0JBQW9CLEVBQUE7O0FBNUN4QjtFQStDSSxxQkFBcUI7RUFDckIscUJBQXFCLEVBQUE7O0FBaER6QjtFQW1ESSxZQUFZO0VBQ1oscUJBQXFCLEVBQUE7O0FBcER6QjtFQXVESSxxQkFBcUIsRUFBQTs7QUF2RHpCO0lBeURNLDBCQUEwQixFQUFBOztBQXpEaEM7SUE0RE0sZ0NBQWdDLEVBQUE7O0FBR3BDO0VBL0RGO0lBaUVNLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZSxFQUFBLEVBQ2hCOztBQXBFTDtFQXVFSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXBhcnRtZW50L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAubGluZS1oZWFkIHtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiA5MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gIH1cclxuICBoNDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIC50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50YWJsZSB7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogODVweDtcclxuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQ6bnRoLWNoaWxkKDQpLFxyXG4gICAgICAgIHRkOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdGgge1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5tZXNzYWdlLWNvbnRlbnQge1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgYTpmb2N1cyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBzcGFuIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NTEyMHB4KSBhbmQgKG1pbi13aWR0aDo0MTBweCkge1xyXG4gICAgLm1vZGFsLW1zIHtcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRlbnQtcGFuZWwge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/department/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/department/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/redux/actions */ "./src/app/department/shared/redux/actions/index.ts");

// Angular


// Ngrx npm


var ListComponent = /** @class */ (function () {
    // Refer
    //https://medium.com/@RupaniChirag/simple-angular-app-using-ngrx-8-store-and-effects-factory-methods-f3423b9f6d3b
    function ListComponent(store, location) {
        var _this = this;
        this.store = store;
        this.subscriptions = [];
        this.loadingIndicator = false;
        location.onPopState(function () {
            _this.closeDelete.nativeElement.click();
        });
        this.model = {
            mode: '',
            code: '',
            name: '',
            abbName: '',
            departmentId: '',
            sort: {
                key: 'dept_external_code',
                direction: 'asc'
            },
            update_time: ''
        };
        this.subscriptions.push(store.select(function (state) { return state['departmentList'].data; }).subscribe(function (data) {
            // Data response
            if (data.length === 0 && data.status === 'success') {
                alert('Success');
            }
            else if (data.length > 0) {
                _this.loadingIndicator = false;
                _this.departments = data;
            }
        }));
        this.subscriptions.push(store.select(function (state) { return state['departmentList'].getErrors; }).subscribe(function (status) {
            // Data response
            if (status && status.data && _this.loadingIndicator) {
                alert('Success');
            }
        }));
    }
    ListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    ListComponent.prototype.onChangeSorting = function (key) {
        if (this.model.sort.key === key) {
            this.model.sort.direction = this.model.sort.direction === 'desc' ? 'asc' : 'desc';
        }
        else {
            this.model.sort = {
                key: key,
                direction: 'desc'
            };
        }
        this.search();
        return false;
    };
    ListComponent.prototype.search = function () {
        this.loadingIndicator = true;
        if (this.checkValidKeySort()) {
            this.departments = [];
            return this.store.dispatch(new _shared_redux_actions__WEBPACK_IMPORTED_MODULE_4__["GetDepartmentAction"](this.model)); // Call api
        }
        else {
            this.loadingIndicator = false;
        }
    };
    ListComponent.prototype.checkValidKeySort = function () {
        return (this.model.sort.key === 'dept_id' || this.model.sort.key === 'dept_external_code'
            || this.model.sort.key === 'dept_name' || this.model.sort.key === 'dept_name_abbreviation')
            && (this.model.sort.direction === 'desc' || this.model.sort.direction === 'asc');
    };
    ListComponent.prototype.onDelete = function (e) {
        alert('Delete');
    };
    ListComponent.prototype.onEdit = function (e) {
        alert('Delete');
    };
    ListComponent.prototype.onCreate = function (e) {
        alert('Create');
    };
    ListComponent.prototype.ngOnDestroy = function () {
        this.loadingIndicator = false;
        this.store.dispatch(new _shared_redux_actions__WEBPACK_IMPORTED_MODULE_4__["ClearGetDepartmentAction"]());
        this.subscriptions.forEach(function (subscriptsion) { return subscriptsion.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deprtBox'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "deprtBox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeDelete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ListComponent.prototype, "closeDelete", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/department/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/department/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/department/shared/models/Department.ts":
/*!********************************************************!*\
  !*** ./src/app/department/shared/models/Department.ts ***!
  \********************************************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
var Department = /** @class */ (function () {
    function Department(props) {
        this.props = props;
    }
    Object.defineProperty(Department.prototype, "id", {
        get: function () { return this.props.dept_id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "code", {
        get: function () { return this.props.dept_external_code; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "name", {
        get: function () { return this.props.dept_name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "nameAbb", {
        get: function () { return this.props.dept_name_abbreviation; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "startDate", {
        get: function () { return this.props.application_start_date; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "endDays", {
        get: function () { return this.props.application_end_days; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "updateTime", {
        get: function () { return this.props.update_time; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "deletionFlag", {
        get: function () { return this.props.deletion_flag; },
        set: function (flag) {
            this.props.deletion_flag = flag;
        },
        enumerable: true,
        configurable: true
    });
    return Department;
}());



/***/ }),

/***/ "./src/app/department/shared/redux/actions/ClearGetDepartmentAction.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/department/shared/redux/actions/ClearGetDepartmentAction.ts ***!
  \*****************************************************************************/
/*! exports provided: ClearGetDepartmentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearGetDepartmentAction", function() { return ClearGetDepartmentAction; });
var ClearGetDepartmentAction = /** @class */ (function () {
    function ClearGetDepartmentAction() {
        this.type = ClearGetDepartmentAction.TYPE;
    }
    ClearGetDepartmentAction.TYPE = '[DEPARTMENT]CLEAR_GET_ACTION';
    return ClearGetDepartmentAction;
}());



/***/ }),

/***/ "./src/app/department/shared/redux/actions/FailedGetDepartmentAction.ts":
/*!******************************************************************************!*\
  !*** ./src/app/department/shared/redux/actions/FailedGetDepartmentAction.ts ***!
  \******************************************************************************/
/*! exports provided: FailedGetDepartmentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedGetDepartmentAction", function() { return FailedGetDepartmentAction; });
var FailedGetDepartmentAction = /** @class */ (function () {
    function FailedGetDepartmentAction(error) {
        this.error = error;
        this.type = FailedGetDepartmentAction.TYPE;
    }
    FailedGetDepartmentAction.TYPE = '[DEPARTMENT]FAILED_GET_ACTION';
    return FailedGetDepartmentAction;
}());



/***/ }),

/***/ "./src/app/department/shared/redux/actions/GetDepartmentAction.ts":
/*!************************************************************************!*\
  !*** ./src/app/department/shared/redux/actions/GetDepartmentAction.ts ***!
  \************************************************************************/
/*! exports provided: GetDepartmentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDepartmentAction", function() { return GetDepartmentAction; });
var GetDepartmentAction = /** @class */ (function () {
    function GetDepartmentAction(payload) {
        this.payload = payload;
        this.type = GetDepartmentAction.TYPE;
    }
    GetDepartmentAction.TYPE = '[DEPARTMENT]GET_ACTION';
    return GetDepartmentAction;
}());



/***/ }),

/***/ "./src/app/department/shared/redux/actions/SuccessGetDepartmentAction.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/department/shared/redux/actions/SuccessGetDepartmentAction.ts ***!
  \*******************************************************************************/
/*! exports provided: SuccessGetDepartmentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessGetDepartmentAction", function() { return SuccessGetDepartmentAction; });
var SuccessGetDepartmentAction = /** @class */ (function () {
    function SuccessGetDepartmentAction(payload) {
        this.payload = payload;
        this.type = SuccessGetDepartmentAction.TYPE;
    }
    SuccessGetDepartmentAction.TYPE = '[DEPARTMENT]SUCCESS_GET_ACTION';
    return SuccessGetDepartmentAction;
}());



/***/ }),

/***/ "./src/app/department/shared/redux/actions/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/department/shared/redux/actions/index.ts ***!
  \**********************************************************/
/*! exports provided: GetDepartmentAction, ClearGetDepartmentAction, FailedGetDepartmentAction, SuccessGetDepartmentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetDepartmentAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetDepartmentAction */ "./src/app/department/shared/redux/actions/GetDepartmentAction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetDepartmentAction", function() { return _GetDepartmentAction__WEBPACK_IMPORTED_MODULE_0__["GetDepartmentAction"]; });

/* harmony import */ var _ClearGetDepartmentAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClearGetDepartmentAction */ "./src/app/department/shared/redux/actions/ClearGetDepartmentAction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearGetDepartmentAction", function() { return _ClearGetDepartmentAction__WEBPACK_IMPORTED_MODULE_1__["ClearGetDepartmentAction"]; });

/* harmony import */ var _FailedGetDepartmentAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FailedGetDepartmentAction */ "./src/app/department/shared/redux/actions/FailedGetDepartmentAction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FailedGetDepartmentAction", function() { return _FailedGetDepartmentAction__WEBPACK_IMPORTED_MODULE_2__["FailedGetDepartmentAction"]; });

/* harmony import */ var _SuccessGetDepartmentAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuccessGetDepartmentAction */ "./src/app/department/shared/redux/actions/SuccessGetDepartmentAction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuccessGetDepartmentAction", function() { return _SuccessGetDepartmentAction__WEBPACK_IMPORTED_MODULE_3__["SuccessGetDepartmentAction"]; });







/***/ }),

/***/ "./src/app/department/shared/redux/effects/DepartmentEffects.ts":
/*!**********************************************************************!*\
  !*** ./src/app/department/shared/redux/effects/DepartmentEffects.ts ***!
  \**********************************************************************/
/*! exports provided: DepartmentEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEffects", function() { return DepartmentEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/department/shared/redux/actions/index.ts");
/* harmony import */ var _services_DepartmentService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/DepartmentService */ "./src/app/department/shared/services/DepartmentService.ts");

// Angular



// Ngrx npm

// My app


var DepartmentEffects = /** @class */ (function () {
    function DepartmentEffects(actions$, departmentService) {
        var _this = this;
        this.actions$ = actions$;
        this.departmentService = departmentService;
        this.getDepartments$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["GetDepartmentAction"].TYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
            return _this.departmentService.getDepartmentListSort(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _actions__WEBPACK_IMPORTED_MODULE_5__["SuccessGetDepartmentAction"](data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_5__["FailedGetDepartmentAction"](e)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], DepartmentEffects.prototype, "getDepartments$", void 0);
    DepartmentEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _services_DepartmentService__WEBPACK_IMPORTED_MODULE_6__["DepartmentService"]])
    ], DepartmentEffects);
    return DepartmentEffects;
}());



/***/ }),

/***/ "./src/app/department/shared/redux/effects/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/department/shared/redux/effects/index.ts ***!
  \**********************************************************/
/*! exports provided: DepartmentEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DepartmentEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DepartmentEffects */ "./src/app/department/shared/redux/effects/DepartmentEffects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepartmentEffects", function() { return _DepartmentEffects__WEBPACK_IMPORTED_MODULE_0__["DepartmentEffects"]; });




/***/ }),

/***/ "./src/app/department/shared/redux/reducers/getDepartmentReducer.ts":
/*!**************************************************************************!*\
  !*** ./src/app/department/shared/redux/reducers/getDepartmentReducer.ts ***!
  \**************************************************************************/
/*! exports provided: getDepartmentReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartmentReducer", function() { return getDepartmentReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/department/shared/redux/actions/index.ts");
/* harmony import */ var _models_Department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Department */ "./src/app/department/shared/models/Department.ts");


function getDepartmentReducer(state, action) {
    if (state === void 0) { state = {
        data: [],
        getErrors: null,
    }; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["SuccessGetDepartmentAction"].TYPE:
            if (action.payload.data) {
                state.data = action.payload.data.map(function (obj) { return new _models_Department__WEBPACK_IMPORTED_MODULE_1__["Department"](obj); });
            }
            return state;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["FailedGetDepartmentAction"].TYPE:
            state.getErrors = action.error.error;
            return state;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ClearGetDepartmentAction"].TYPE:
            state.data = [];
            state.getErrors = null;
            return state;
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/department/shared/redux/reducers/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/department/shared/redux/reducers/index.ts ***!
  \***********************************************************/
/*! exports provided: getDepartmentReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getDepartmentReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDepartmentReducer */ "./src/app/department/shared/redux/reducers/getDepartmentReducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDepartmentReducer", function() { return _getDepartmentReducer__WEBPACK_IMPORTED_MODULE_0__["getDepartmentReducer"]; });




/***/ }),

/***/ "./src/app/department/shared/services/DepartmentService.ts":
/*!*****************************************************************!*\
  !*** ./src/app/department/shared/services/DepartmentService.ts ***!
  \*****************************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/retry */ "./node_modules/rxjs-compat/_esm5/add/operator/retry.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");

// Angular



// My app

var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
    }
    DepartmentService.prototype.getDepartmentListSort = function (params) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (params.sort && params.sort.key && params.sort.direction) {
            httpParams = httpParams.set('sort', params.sort.key + ':' + params.sort.direction);
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_ENDPOINT + 'departments/key_sort', { params: httpParams });
    };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ })

}]);
//# sourceMappingURL=department-department-module.js.map