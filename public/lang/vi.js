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
};
