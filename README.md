#火焰大挑戰

### 需求 
* `盈泰工業社 地轉車 100-B-000066201 100-B-000097160`轉成`盈泰工業社 地轉車 000066201 000097160`
* 每個年度分別歸在一個json檔
* 最後完成目標是在line機器人輸入 100-B-000066202 會跑出 盈泰工業社 地轉車
* 可把這些json檔案放在網路上再使用http呼叫
* `100-B-000097160`英文為檢驗機構代碼，需要區分
	* 100 為年號
	* B為檢驗機構代碼
	* 000097160為號碼

### 程式轉完的資料結構為
```
year_100.json
{
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
}

```
or
```

all.json
{
	'year_100': {
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
	'year_101': {...},
	'year_102': {...},
}
```

### 程式範例
```
test = '盈泰工業社	地轉車	100-B-000066201	100-B-000097160'
// 產生 ["盈泰工業社", "地轉車", "100-B-000066201", "100-B-000097160"]
test.split('\t')

test2 = '100-B-000066201'
//產生 ["100", "B", "000066201"]
test2.split('-')

// 66201
Number("000066201")

```


### google drive 
* 匯入可選擇依空白、逗號、自動偵測、自訂符號


[線上轉UTF-8的好網站](https://subtitletools.com/convert-text-files-to-utf8-online)