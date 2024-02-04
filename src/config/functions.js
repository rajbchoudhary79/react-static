const getHomePageBanner = () => {
  return [
    {
      id: 1,
      image: "assets/images/banner/1.png",
      title: "Virtual Private Assistant",
    },
    {
      id: 2,
      image: "assets/images/banner/2.png",
      title: "Healthcare (VA) Virtual Assistant",
    },
    {
      id: 3,
      image: "assets/images/banner/3.png",
      title: "Virtual Receptionist Service",
    },
    {
      id: 4,
      image: "assets/images/banner/4.png",
      title: "Sales Development",
    },
    {
      id: 5,
      image: "assets/images/banner/5.png",
      title: "Social Media Management",
    },
    {
      id: 6,
      image: "assets/images/banner/6.png",
      title: "Translation/ Interpreter Service",
    },
  ];
};

const getBlogs = (slug = null) => {
  const blogs = [
    {
      title: "Unleashing the Power of Virtual Assistants",
      slug: "unleashing-the-power-of-virtual-assistants",
      date: "",
      image: "/assets/images/blogPage/blog1.jpg",
      description:
        "In this digital age, businesses are continually seeking ways to enhance efficiency and streamline operations. Enter Virtual Assistants – the game-changers that have redefined the business landscape. Leveraging advanced technologies and versatile skill sets, Virtual Assistants offer a dynamic solution to the challenges of modern-day business operations.",
    },
  ];

  if(slug){
    return blogs.find(e => e.slug === slug);
  }else{
    return blogs;
  }
};

const functions = {
  getHomePageBanner,
  getBlogs,
};

export default functions;
