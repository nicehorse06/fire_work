let fs = require('fs')
let csv_to_json = require('./csv_to_json')

// 測試資料 'test_data/test.txt' 
// 可能的錯誤資料 'test_data/illegal.txt'
// 正式資料
let raw_data = 'raw_fire_data.txt'

let read_file = (callback) => {
	fs.readFile(raw_data, function (err, data) {
		if (err) throw err;
		callback(data.toString())
	});
}

let write_file = (this_data) => {
	fs.writeFile('fire_data.json', JSON.stringify(csv_to_json(this_data)), function (err) {
		if (err)
			console.log(err);
		else
			console.log('Write operation complete.');
	});
}

read_file(write_file)