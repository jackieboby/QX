#禁百度跳转app
^https?:\/\/.*\.baidu\.com\/.* url request-header (\r\n)User-Agent:.+iPhone.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (Linux; Android 10; NOH-AN00 Build/HUAWEINOH-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36 T7/12.20.0.0 SP-engine/2.33.0 baiduboxapp(Baidu; P1 10)  NABar/1.0 $2

hostname = *.baidu.com
