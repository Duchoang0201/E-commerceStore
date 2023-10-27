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
  ourProductsContent: {
    title: `Our Products`,
    content: "Explore Our Products",
  },
};
