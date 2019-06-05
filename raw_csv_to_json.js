// 方便解析檔案用
let data_index = {
	'company': 0,
	'toy': 1,
	'min': 2,
	'max': 3,
	'year_num': {
		'year': 0,
		'org': 1,
		'num': 2,
	}
}

let csv_to_json = (raw_data) => {

	// 最後的結果
	let result_data = {}

	// 把每一行分開存到list中
	let data_list = raw_data.split('\n')

	for (let i = 0; i < data_list.length; i++) {
		// this_info 的結構為
		// {
		// 		max:"000097160",
		// 		min:"000066201",
		// 		company: "盈泰工業社",
		// 		toy: 地轉車,
		// },
		let this_info = {}

		// trim()用來移除前後多餘空白, 
		// 以 /t (tab)做分割，如果是用 , 做分割的csv可帶入 ','
		let this_data_list = data_list[i].trim().split('\t')

		// 以'-'做分隔符號
		let this_max_num_list = this_data_list[data_index.max].split('-')
		let this_min_num_list = this_data_list[data_index.min].split('-')

		// 讓年的形式變成 y100, y200
		let this_year = 'y' + this_max_num_list[data_index.year_num.year]
		let this_org = this_max_num_list[data_index.year_num.org]

		this_info.max = Number(this_max_num_list[data_index.year_num.num])
		this_info.min = Number(this_min_num_list[data_index.year_num.num])
		this_info.company = this_data_list[data_index.company]
		this_info.toy = this_data_list[data_index.toy]

		if (this_year in result_data) {
			// result_data已有該年份資料
			if (this_org in result_data[this_year]) {
				//result_data[this_year]已有該機構代碼
				result_data[this_year][this_org].push(this_info)
			} else {
				//result_data[this_year]無該機構代碼，新建list寫入
				result_data[this_year][this_org] = [this_info]
			}
		} else {
			// result_data無該年份資料，新建object寫入
			result_data[this_year] = {}
			result_data[this_year][this_org] = [this_info]
		}
	}
	return result_data
}