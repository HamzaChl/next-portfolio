import CardNav from "./CardNav/CardNav";

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          ariaLabel: "About Company",
          href: "/about/company",
        },
        {
          label: "Careers",
          ariaLabel: "About Careers",
          href: "/about/careers",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          ariaLabel: "Featured Projects",
          href: "/projects/featured",
        },
        {
          label: "Case Studies",
          ariaLabel: "Project Case Studies",
          href: "/projects/case-studies",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          ariaLabel: "Email us",
          href: "mailto:hello@tonsite.com",
        },
        {
          label: "Twitter",
          ariaLabel: "Twitter",
          href: "https://twitter.com/tonpseudo",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://www.linkedin.com/in/tonprofil",
        },
      ],
    },
  ];

  return (
    <CardNav
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default App;
