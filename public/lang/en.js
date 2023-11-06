import { Inbox, LogOut, Star, User, XCircle } from "lucide-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  navigationList: [
    { name: "Home", href: "/" },
    { name: "Contact", href: "contact" },
    { name: "About", href: "about" },
    { name: "Sign up", href: "signup" },
  ],
  menuList: [
    {
      name: "Woman’s Fashion",
      href: "Woman’sFashion",
      child: [
        { name: "women1", href: "women1" },
        { name: "women2", href: "women2" },
      ],
    },
    {
      name: "Man's Fashion",
      href: "Man'sFashion",
      child: [{ name: "man1", href: "man1" }],
    },
    { name: "Electronics", href: "Electronics" },
    { name: "Home & Lifestyle", href: "Home & Lifestyle" },
    { name: "Medicine", href: "Medicine" },
    { name: "Sports & Outdoor", href: "Sports & Outdoor" },
    { name: "Baby’s & Toys", href: "Baby’s & Toys" },
    { name: "Groceries & Pets", href: "Groceries & Pets" },
    { name: "Health & Beauty", href: "Health & Beauty" },
  ],
  flashSaleContent: {
    title: `Today's`,
    content: "Flash Sales",
  },
  categoriesContent: {
    title: `Categories`,
    content: "Browse By Category",
  },
  thismonthContent: {
    title: `This Month`,
    content: "Best Selling Products",
  },
  ourProductsContent: {
    title: `Our Products`,
    content: "Explore Our Products",
  },
  featureContent: {
    title: `Featured`,
    content: "New Arrival",
  },
  userDropdown: [
    { icon: User, title: `Manage My Account`, route: "manageaccount" },
    { icon: Inbox, title: `My Order`, route: "myorder" },
    { icon: XCircle, title: `My Cancellations`, route: "cancellations" },
    { icon: Star, title: `My Reviews`, route: "myreviews" },
    { icon: LogOut, title: `Logout`, route: "logout" },
  ],
  checkoutForm: [
    { name: "First Name", route: "firstName", require: true },
    { name: "Company Name", route: "companyName", require: false },
    { name: "Street Address", route: "streetAddress", require: true },
    {
      name: "Apartment, floor, etc. (optional)",
      route: "moreAddress",
      require: false,
    },
    { name: "Phone Number", route: "phoneNumbber", require: true },
    { name: "Email Address", route: "email", require: true },
  ],
  accountMenu: [
    {
      name: "Manage My Account",
      route: "managemyaccount",
      child: [
        { name: "My Profile", route: "myprofile" },
        { name: "Address Book", route: "addressbook" },
        { name: "My Payment Options", route: "paymentoptions" },
      ],
    },
    {
      name: "My Orders",
      route: "myorders",
      child: [
        { name: "My Returns", route: "myreturns" },
        { name: "My Cancellations", route: "mycancellations" },
      ],
    },
    {
      name: "My WishList",
      route: "mywishList",
      child: [null],
    },
  ],
};
