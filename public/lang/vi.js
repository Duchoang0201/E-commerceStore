import { Inbox, LogOut, Star, User, XCircle } from "lucide-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  navigationList: [
    { name: "Trang chủ", href: "/" },
    { name: "Liên hệ", href: "contact" },
    { name: "Thông tin", href: "about" },
    { name: "Đăng ký", href: "signup" },
  ],
  menuList: [
    {
      name: "Phụ nữ",
      href: "Woman’sFashion",
      child: [
        { name: "women1", href: "women1" },
        { name: "women2", href: "women2" },
      ],
    },
    {
      name: "Đàn ông",
      href: "Man'sFashion",
      child: [{ name: "man1", href: "man1" }],
    },
    { name: "Đồ điện tử", href: "Electronics" },
    { name: "Free style", href: "Home & Lifestyle" },
    { name: "Thuốc", href: "Medicine" },
    { name: "Thể thao & Ngoài trời", href: "Sports & Outdoor" },
    { name: "Đồ chơi em bé", href: "Baby’s & Toys" },
    { name: "Thú cưng", href: "Groceries & Pets" },
    { name: "Sức khỏe", href: "Health & Beauty" },
  ],
  flashSaleContent: {
    title: `Hôm nay`,
    content: "Flash Sales",
  },
  categoriesContent: {
    title: `Danh mục`,
    content: "Tìm kiếm bằng danh mục",
  },
  thismonthContent: {
    title: `Nổi bật trong tháng`,
    content: "Sản phẩm bán chạy",
  },
  ourProductsContent: {
    title: `Sản phẩm của chúng tôi`,
    content: "Khám phá sản phẩm",
  },
  featureContent: {
    title: `Đặc sắc`,
    content: "Hàng mới về",
  },
  userDropdown: [
    { icon: User, title: `Tài khoản`, route: "account" },
    { icon: Inbox, title: `Đơn đặt hàng`, route: "myorder" },
    { icon: XCircle, title: `Đơn hủy`, route: "cancellations" },
    { icon: Star, title: `Đánh giá`, route: "myreviews" },
    { icon: LogOut, title: `Thoát`, route: "logout" },
  ],
  checkoutForm: [
    { name: "Tên", route: "firstName", require: true },
    { name: "Tên công ty", route: "companyName", require: false },
    { name: "Địa chỉ", route: "streetAddress", require: true },
    { name: "Chung cư, tầng,...", route: "moreAddress", require: false },
    { name: "Số điện thoại", route: "phoneNumber", require: true },
    { name: "Địa chỉ email", route: "email", require: true },
  ],
  accountMenu: [
    {
      name: "Quản lý tài khoản",
      route: "managemyaccount",
      child: [
        { name: "Thông tin cá nhân", route: "myprofile" },
        { name: "Địa chỉ đặt hàng", route: "addressbook" },
        { name: "Phương thức thanh toán", route: "paymentoptions" },
      ],
    },
    {
      name: "Đơn đặt hàng",
      route: "myorders",
      child: [
        { name: "Đổi trả", route: "myreturns" },
        { name: "Hủy", route: "mycancellations" },
      ],
    },
    {
      name: "Yêu thích",
      route: "mywishList",
      child: [null],
    },
  ],
};
