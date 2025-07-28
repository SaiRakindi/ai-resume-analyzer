import ScoreBadge from "./ScoreBadge";
import ScoreGuage from "./ScoreGuage";

const Category = ({ title, score }: { title: string; score: number }) => {
  let categoryScore = score * 10;
  const textColor =
    categoryScore > 70
      ? "text-green-600"
      : categoryScore > 49
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-2xl">{title}</p>
          <ScoreBadge score={categoryScore} />
        </div>

        <p className="text-2xl">
          <span className={textColor}>{categoryScore}</span>/100
        </p>
      </div>
    </div>
  );
};

const Summary = ({ feedback }: any) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGuage score={feedback.overall_rating * 10} />

        <div className="flex flex-col gap-2">
          <div className="text-2">Your Resume Score</div>

          <p className="text-sm text-gray-500">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>

      {/* <Category title="ATS Compatability" score={feedback.ats_compatibility} /> */}
      <Category title="Content Quality" score={feedback.content_quality} />
      <Category title="Format & Design" score={feedback.format_and_design} />
    </div>
  );
};

export default Summary;
