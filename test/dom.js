/*
 * @Author: willclass
 * @Date:   2018-01-22 14:55:27
 * @Last Modified by:   willclass
 * @Last Modified time: 2018-01-22 16:20:50
 */

'use strict';


import {
	Simulate
} from "react-dom/test-utils"

import expect from "expect.js"

describe('dom test', function() {
	var _d;


	beforeEach(() => {
		_d = document.createElement("div");
		document.body.appendChild(_d);
	})

	it("first", function() {
		_d.style.width = "100%"
		_d.style.height = "100px"
		_d.style.background = "#ccc";

	})

	it("second", function() {
		_d.style.background = "#0cc";
		_d.style.width = "100px"
		_d.style.height = "100px"
	})

});