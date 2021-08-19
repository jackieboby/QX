#京东历史比价 (by yichahucha)
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body nzw9314/yichahucha/jd_price.js

#淘宝历史比价 (by yichahucha)
^http://.+/amdc/mobileDispatch url script-request-body nzw9314/yichahucha/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body nzw9314/yichahucha/tb_price.js

hostname = api.m.jd.com,trade-acs.m.taobao.com,
