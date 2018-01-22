/*
 * @Author: willclass
 * @Date:   2018-01-22 11:38:53
 * @Last Modified by:   willclass
 * @Last Modified time: 2018-01-22 14:38:16
 */

'use strict';

import _ from 'lodash'

describe('Use lodash suite', function() {
	it('fill array', function() {
		var array = [1, 2, 3]
		_.fill(array, 'a')
		console.log(array)
	});
});