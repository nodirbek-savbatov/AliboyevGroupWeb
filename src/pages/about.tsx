import TeamCard from "../components/TeamCard";
import FullScreenWrapper from "../components/Wrapper";
import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";
import { TeamCardType } from "../types/TeamCartType";

export default function Stepper() {
  const stats = [
    { number: 229, label: "HAPPY CLIENTS" },
    { number: 109, label: "COMPLETED PROJECTS" },
    { number: 22, label: "AWESOME STAFF" },
    { number: 11, label: "WINNING AWARDS" },
  ];

  const users: TeamCardType[] = [
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      facebook: "https://facebook.com/user1",
      twitter: "https://twitter.com/user1",
      instagram: "https://instagram.com/user1",
      name: "Kevin Lee",
      job: "Art Director",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      facebook: "https://facebook.com/user2",
      twitter: "https://twitter.com/user2",
      instagram: "https://instagram.com/user2",
      name: "Sarah Johnson",
      job: "Graphic Designer",
    },
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      facebook: "https://facebook.com/user3",
      twitter: "https://twitter.com/user3",
      instagram: "https://instagram.com/user3",
      name: "Michael Smith",
      job: "Software Engineer",
    },
  ];

  return (
    <>
      <Header />
      <FullScreenWrapper>
        <div className="bg-gray-100 w-full flex items-center justify-center p-8">
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:space-x-6 max-w-4xl">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                A Minimal Team <br /> For a Better World
              </h2>
              <div className="w-16 h-1 bg-green-500 my-4"></div>
              <p className="text-gray-700 text-lg">
                Lorem Khaled Ipsum is a major key to success. The ladies always
                say Khaled you smell good, I use no cologne. Cocoa butter is the
                key. To succeed you must believe. When you believe, you will
                succeed. They will try to close the door on you, just open it.
                The key is to drink coconut, fresh coconut, trust me. It’s
                important to use cocoa butter. It’s the key to more success, why
                not live smooth?
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img
                src="/public/images/img80.jpg"
                alt="Minimal Team"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className="flex justify-center w-full items-center bg-gray-100 p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-gray-800">
                <p className="text-4xl font-bold">{stat.number}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <h1 className="flex items-center justify-center text-3xl font-semibold mt-5">
          Delivery Process
        </h1>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className="w-full flex items-center justify-center">
          <img src="/public/images/hbdr.png" className="my-2" alt="" />
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className="relative flex flex-wrap justify-center items-start gap-6 p-6">
          {[
            {
              step: "STEP 01",
              title: "CHOOSE YOUR PRODUCTS",
              description:
                "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour. Both betanin",
            },
            {
              step: "STEP 02",
              title: "CONNECT NEAREST STORED",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
              step: "STEP 03",
              title: "SHARE YOUR LOCATION",
              description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
            },
            {
              step: "STEP 04",
              title: "GET DELIVERED FAST",
              description:
                "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-1/3 p-4 ${
                index % 2 === 0 ? "self-start" : "self-end"
              }`}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="flex items-center">
                <span className="bg-green-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
                  {item.step}
                </span>
              </div>
              <div className="mt-3 p-6 bg-gray-100 rounded-lg shadow-md relative">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 mt-2">
                  {item.description}
                </p>
                {index !== 3 && (
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <h1 className="flex items-center justify-center text-3xl font-semibold mt-5">
          Meet Our Team
        </h1>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className="w-full flex items-center justify-center">
          <img src="/public/images/hbdr.png" className="my-2" alt="" />
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {users.map((user, index) => (
            <TeamCard key={index} {...user} />
          ))}
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <h1 className="flex items-center justify-center text-3xl font-semibold mt-10">
          Subscribe Our Newsletter
        </h1>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className="w-full flex items-center justify-center">
          <img src="/public/images/hbdr.png" className="my-2" alt="" />
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className="flex items-center bg-white rounded-full p-1 shadow-lg max-w-md w-full mx-auto">
          <input
            type="email"
            placeholder="Enter your mail..."
            className="flex-1 px-4 py-2 text-gray-600 bg-transparent focus:outline-none"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full flex items-center transition-all">
            Shop Now →
          </button>
        </div>
      </FullScreenWrapper>
      <Footer />
    </>
  );
}
