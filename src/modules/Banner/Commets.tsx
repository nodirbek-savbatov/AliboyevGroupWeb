import BlogCard from "../../components/BlogCart";
import ProductItem from "../../components/ProductItem";
import FullScreenWrapper from "../../components/Wrapper";
import { BlogCardType } from "../../types/BlogType";

const blogPosts: BlogCardType[] = [
    {
      date: "2025-03-24",
      user: "Ali Valiyev",
      title: "TypeScript bilan ishlash",
      text: "TypeScript – bu JavaScript ning kuchliroq versiyasi bo‘lib, u aniq turlarga ega.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
    },
    {
      date: "2025-03-23",
      user: "Zarina Karimova",
      title: "React va TypeScript",
      text: "React bilan TypeScript birgalikda ishlaganda kodning sifatini oshirish mumkin.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
    },
    {
      date: "2025-03-22",
      user: "Javlonbek Xolmurodov",
      title: "Frontend trendlar 2025",
      text: "2025-yilda frontend dunyosida yangi kutubxonalar va frameworklar paydo bo‘lishi kutilmoqda.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
    },
    {
      date: "2025-03-21",
      user: "Madina O‘rinboyeva",
      title: "CSS yangi imkoniyatlari",
      text: "CSS da yangi selectorlar va animatsiya imkoniyatlari qo‘shildi.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
    }
  ];
  

const Commets = () => {
  return (
   <div className="mt-10">
  <FullScreenWrapper>
    <h1 className="text-3xl text-center font-semibold text-gray-800">Latest News
    </h1>
  </FullScreenWrapper>
  <FullScreenWrapper>
      <p className="text-center mt-5">There are many variations of passages of lorem ipsum available</p>
    </FullScreenWrapper>
  <FullScreenWrapper>
    <img className="mt-5" src="/public/images/hbdr.png" alt="new arrival" />
  </FullScreenWrapper>
    <FullScreenWrapper>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {blogPosts.map((blog, index) => (
        <BlogCard
          key={index}
          date={blog.date}
          user={blog.user}
          image={blog.image}
          title={blog.title}
          text={blog.text}
        />
      ))}
    </div>
    </FullScreenWrapper>
   </div>
  );
};

export default Commets;
