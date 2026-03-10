import { useState } from "react";
import { ThumbsUp } from "lucide-react";

function Like() {
  const [isLike, setIsLike] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);
  console.log(isLike, likeCnt);

  const handleLikeToggle = () => {
    // 좋아요 상태 토글
    const nextIsLike = !isLike;
    setIsLike(nextIsLike); //true
    setLikeCnt((prev) => (nextIsLike ? prev + 1 : prev - 1));
  };

  return (
    <div className="flex justify-center mt-20 flex flex-col items-center">
      <div>
        <ThumbsUp
          size={100}
          onClick={handleLikeToggle}
          color={isLike ? "blue" : "gray"}
        />
      </div>
      <div
        className={`text-[64px] ${isLike ? "text-blue-500" : "text-gray-500"}`}
      >
        {likeCnt}
      </div>
    </div>
  );
}

export default Like;
