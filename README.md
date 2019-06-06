#火焰大挑戰

## 把csv檔案轉成json檔案，產生`fire_data.json`
* 命令為 `node index.js [參考原始檔] [輸入的檔案]`
* [參考原始檔] [輸入的檔案] 如果沒有填入，會有預設值`raw_fire_data.txt`和`fire_data.json`
	* 在沒有填入檔案的情況下，命令為`node index.js`
* 有填入的命令為 `node index.js input.txt output.json`

## 模擬line機器人實作
* 如果輸入火焰代號會去`fire_data.json`比對資料
* 命令為 `node line_bot_demo.js [輸入的訊息]`，以下範例：
	* `node line_bot_demo.js 100-B-000097160`，找出`金富貴貿易有限公司 金玫瑰`
	* `node line_bot_demo.js info`，告訴使用者使用方法

### 文件 
* `盈泰工業社 地轉車 100-B-000066201 100-B-000097160`轉成`盈泰工業社 地轉車 000066201 000097160`
* 可把這些json檔案放在網路上再使用http呼叫
* `100-B-000097160`英文為檢驗機構代碼，需要區分
	* 100 為年號
	* B為檢驗機構代碼
	* 000097160為號碼
* 測試資料 'test_data/test.txt' 
* 可能的錯誤資料 'test_data/illegal.txt'

### 程式轉完的資料結構為

```

fire_data.json
{
	'100': {
				'A':[{
						max:"000097160",
						min:"000066201",
						company: "盈泰工業社",
						toy: 地轉車,
					},
					{...},
					{...},
				],
				'B':[...]
			},
	'101': {...},
	'102': {...},
}
```

### google drive 
* 匯入可選擇依空白、逗號、自動偵測、自訂符號


[線上轉UTF-8的好網站](https://subtitletools.com/convert-text-files-to-utf8-online)