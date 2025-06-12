import { ArrowRight } from "lucide-react";

export default function TrendingArticle() {
  const articles = [
    {
      
      category: "Game",
      title: "E-Sports Revolution: The Future of Competitive Gaming",
      authorAvatar: "https://i.pravatar.cc/100?img=1",
    },
    {
     
      category: "Food",
      title: "The Zesty World of Oranges: Benefits, Varieties, and Fun Facts!",
      authorAvatar: "https://i.pravatar.cc/100?img=2",
    },
    {
     
      category: "Motivation",
      title: "Chasing Dreams: Turning Your Cita-Cita into Reality",
      authorAvatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <div className="bg-gray-900 backdrop-blur-md rounded-2xl shadow-lg p-2 border border-white/20">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-cyan-400">Top Trending Articles</h3>
        <button className="text-yellow-400 text-sm hover:underline flex items-center gap-1">
          See more <ArrowRight size={14} />
        </button>
      </div>
      <ul className="flex flex-col gap-2 text-sm">
        {articles.map((article, idx) => (
          <li key={idx} className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition p-3 rounded-xl">
            <div className="flex items-start gap-3">
             
              <div>
                <p className="text-sm font-medium leading-snug text-gray-400">{article.title}</p>
                <p className="text-gray-300 text-xs">
                   {article.category}
                </p>
              </div>
            </div>
            {/* <img
              src={article.image}
              alt="Article"
              className="w-10 h-10 object-cover rounded-lg shadow-md"
            /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
