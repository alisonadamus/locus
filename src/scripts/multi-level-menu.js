const menuData = [
  {
    title: "Home",
    link: "/home",
    submenu: [
      {
        title: "How it works",
        link: "/home/how-it"
      },
      {
        title: "Our project",
        link: "/home/projects",
        submenu: [
          { title: "Livingroom", link: "/home/projects/livingroom" },
          { title: "Workspace", link: "/home/projects/workspace" },
          { title: "Library", link: "/home/projects/library" },
        ],
      },
      {
        title: "Testimonial",
        link: "/home/testimonial"
      },
      {
        title: "Contact Us",
        link: "/home/contact-us"
      },
    ]
  },
  {
    title: "Contact",
    link: "/#",
    submenu: [
      {
        title: "Social networks",
        link: "/contact/social-network",
        submenu: [
          { title: "GitHub", link: "/contact/phone/mobile" },
          { title: "Facebook", link: "/contact/phone/landline" },
          { title: "Instagram", link: "/contact/phone/landline" },
          { title: "Telegram", link: "/contact/phone/landline" },
        ]
      },
      {
        title: "Phone",
        link: "/contact/phone",
        submenu: [
          { title: "Mobile", link: "/contact/phone/mobile" },
          { title: "Landline", link: "/contact/phone/landline" },
        ],
      },
      {
        title: "Email",
        link: "/contact/email",
      },
    ],
  },
  {
    title: "Location",
    link: "/#",
    submenu: [
      {
        title: "USA",
        link: "/location/usa",
        submenu: [
          { title: "California", link: "/location/usa/california" },
          { title: "New York", link: "/location/usa/new-york" },
          { title: "Texas", link: "/location/usa/texas" },
          {
            title: "Florida",
            link: "/location/usa/florida",
            submenu: [
              { title: "Miami", link: "/location/usa/florida/miami" },
              { title: "Orlando", link: "/location/usa/florida/orlando" },
              { title: "Tampa", link: "/location/usa/florida/tampa" },
            ],
          },
        ],
      },
      {
        title: "Europe",
        link: "/location/europe",
        submenu: [
          { title: "Ukraine", link: "/location/europe/ukraine" },
          { title: "Poland", link: "/location/europe/poland" },
          { title: "Germany", link: "/location/europe/germany" },
          { title: "France", link: "/location/europe/france" },
        ],
      },
    ],
  },
  {
    title: "About Us",
    link: "/#",
    submenu: [
      {
        title: "Our Team",
        link: "/about-us/team",
      },
      {
        title: "Our History",
        link: "/about-us/history",
      },
      {
        title: "Our Mission",
        link: "/about-us/mission",
      },
    ],
  },
];

function createMenu(menuItems) {
  const ul = document.createElement("ul")
  ul.classList.add("nav__list")

  menuItems.forEach((item) => {
    const li = document.createElement("li")
    li.classList.add("nav__item")

    const a = document.createElement("a")
    a.classList.add("nav__link")
    if (item.link) {
      a.href = item.link
    }
    a.textContent = item.title

    li.appendChild(a)
    if (item.submenu) {
      const submenu = createMenu(item.submenu)
      li.appendChild(submenu)
      li.classList.add("has-submenu")
    }

    ul.appendChild(li)
  })

  return ul
}


document.getElementById("menu").appendChild(createMenu(menuData));
