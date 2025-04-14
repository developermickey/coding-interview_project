import { useParams } from "react-router-dom";

const contentData = {
  html: "HTML is the standard markup language for creating web pages.",
  css: "CSS is used to control the style of a web document in a simple and easy way.",
  javascript: "JavaScript is the programming language of the Web.",
  react: "React is a JavaScript library for building user interfaces.",
  tailwind: "Tailwind CSS is a utility-first CSS framework.",
};

const TopicPage = () => {
  const { topicName } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold capitalize mb-4">{topicName}</h1>
      <p className="text-gray-700">
        {contentData[topicName] || "Topic not found."}
      </p>
    </div>
  );
};

export default TopicPage;
