let fs = require('fs')
let csv_to_json = require('./csv_to_json')

// process.argv為命令參數列表，[0]為檔案名稱，[1]為檔案位置，[2]為第一個參數

// 正式資料
let raw_data = process.argv[2] || 'raw_fire_data.txt'

// 輸出資料的名稱
let out_put_data_name = process.argv[3] || 'fire_data.json'

let read_file = (callback) => {
	fs.readFile(raw_data, function (err, data) {
		if (err) throw err;
		callback(data.toString())
	});
}

let write_file = (this_data) => {
	fs.writeFile(out_put_data_name, JSON.stringify(csv_to_json(this_data)), function (err) {
		if (err)
			console.log(err);
		else
			console.log('Write operation complete.');
	});
}

read_file(write_file)