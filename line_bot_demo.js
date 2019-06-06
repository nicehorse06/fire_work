const fire_data = require('./fire_data.json')

// 方便解析檔案用
let data_index = {
	'year': 0,
	'org': 1,
	'num': 2,
}

let line_bot = (message) => {
	let return_message = ''

	// 如果形式為 [數字]-[英文]-[數字] 的內容的regex
	let fire_code_pattern = /^[0-9]+-[A-Za-z]-[0-9]+$/

	if(fire_code_pattern.test(message)){
		return_message = message_about_fire(message)
	}else if(message == 'info'){
		return_message = '這是火焰大挑戰頻道，有很多火焰小玩具，請輸入如[102-E-012236097]的[數字-英文-數字]資料'
	}else{
		return_message = '請輸入"info"查看更多訊息'
	}
	return return_message
}

// 處理火焰資料輸入的訊息
let message_about_fire = (message) => {
	let this_message_list = message.split('-')

	let this_info = {
		'year': this_message_list[data_index.year],
		'org': this_message_list[data_index.org],
		'num': Number(this_message_list[data_index.num])
	}

	if (fire_data[this_info.year] && fire_data[this_info.year][this_info.org]) {
		let this_year_list = fire_data[this_info.year][this_info.org]
		let result_data = fire_num_in_range(this_year_list, this_info.num)
		if ('company' in result_data) {
			return result_data.company +' '+ result_data.toy
		} else {
			return '找不到這筆火焰資料: ' + message
		}
	}
}
 
// 找出數字在範圍之內的資料
let fire_num_in_range = (this_list, this_num) => {
	for (let i = 0; i < this_list.length; i++) {
		let this_max = Number(this_list[i].max)
		let this_min = Number(this_list[i].min)
		if (this_max >= this_num && this_num <= this_min) {
			return this_list[i]
		}
	}
	return {}
}

// process.argv為參數列表，[0]為檔案名稱，[1]為檔案位置，[2]為第一個參數
console.log(line_bot(process.argv[2]))