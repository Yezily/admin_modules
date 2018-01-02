// 返回符号和字符串 默认两位小数 四舍五入

export function currency(value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return '';
  currency = currency !== null ? currency : '';
  decimals = decimals !== null ? decimals : 2;
  let stringified = value.toFixed(decimals);
  return currency + stringified
}

const conversion = {
  index: '首页',
  order: '订单管理',
  recharge: '充值列表',
  order_list: '订单列表',
  cancel:'退订列表',
  recharge_details:'充值列表/充值详情',
  broadband:'宽带产品',
  goods_list:'产品列表',
  goods:'商品管理',
  subaccount_list:'子账户列表',
  subaccount:'子账户管理',
  business:'商家管理',
  business_list:'商家列表',
  examines:'面审管理',
  examines_list:'面审列表',
  financial_list:'财务列表',
  receivables:'应收款列表',
  financial:'财务管理',
  voucher:'财务凭证列表',
}

export function generateTitle(value) {

  return conversion[value]?conversion[value]:value
}
