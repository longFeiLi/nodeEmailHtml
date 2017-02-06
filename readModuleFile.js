const fs = require('fs');

/**
 * [readModuleFile 读文件方法]
 * @param  {[type]}   path     [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function readModuleFile(path, callback) {
	try {
		console.log(path)
		var filename = require.resolve(path);
		fs.readFile(filename, 'utf8', callback);
	} catch (e) {
		callback(e);
	}
}

// 定义文件转换模块
module.exports = readModuleFile