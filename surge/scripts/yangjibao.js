// 养基宝 /users/v1/account：修改账户 VIP 相关字段
const body = $response.body;

try {
  const obj = JSON.parse(body);
  if (obj && obj.data && typeof obj.data === "object") {
    Object.assign(obj.data, {
      subscribe_status: 1,
      vip_label: true,
      has_stock_hold: true,
      has_stock_option: true,
      is_pay: true,
      open_free_vip_sign: true,
      show_bkxh: true,
      vip_expiry_date: "2029-12-31",
    });
    $done({ body: JSON.stringify(obj) });
  } else {
    $done({});
  }
} catch (e) {
  console.log("yangjibao: " + e);
  $done({});
}
