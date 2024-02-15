const getHomePageBanner = () => {
  return [
    {
      id: 1,
      image: "assets/images/banner/1.png",
      title: "Virtual Private Assistant",
      description:
        "Experience the transformative power of teaming up with a virtual private assistant, where cost savings, increased productivity, and time reclamation redefine your workflow",
    },
    {
      id: 2,
      image: "assets/images/banner/2.png",
      title: "Healthcare (VA) Virtual Assistant",
      description:
        "Say hello to efficiency and embrace the future of healthcare support!",
    },
    {
      id: 3,
      image: "assets/images/banner/3.png",
      title: "Virtual Receptionist Service",
      description:
        "Personalized greetings, seamless call routing, and appointment scheduling—all tailored to elevate your customer experience. Say goodbye to missed calls and hello to efficiency!",
    },
    {
      id: 4,
      image: "assets/images/banner/4.png",
      title: "Sales Development",
      description:
        "Improve your sales strategy, streamline workflows, and seamlessly convert prospects into loyal customers with our Sales Virtual Assistants!",
    },
    {
      id: 5,
      image: "assets/images/banner/5.png",
      title: "Social Media Management",
      description:
        "Your ultimate solution for conquering the ever-changing social media world. Elevate your brand, enthrall your audience, and rule social media with ease",
    },
    {
      id: 6,
      image: "assets/images/banner/6.png",
      title: "Translation/ Interpreter Service",
      description:
        "From document translation to real-time interpretation, we empower global communication and business expansion. Let us bridge the gap for you!",
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

  if (slug) {
    return blogs.find((e) => e.slug === slug);
  } else {
    return blogs;
  }
};

const functions = {
  getHomePageBanner,
  getBlogs,
};

export default functions;
