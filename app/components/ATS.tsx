import { cn } from "~/utils";

const ATS = ({
  score,
  suggestions,
}: {
  score: number;
  suggestions: string[];
}) => {
  const atsScore = score * 10; // Convert to a 0-100 scale

  console.log("suggestions", suggestions);

  return (
    <div
      className={cn(
        "rounded-2xl shadow-md w-full bg-gradient-to-b to-light-white p-8 flex flex-col gap-4",
        atsScore > 69
          ? "from-green-100"
          : atsScore > 49
          ? "from-yellow-100"
          : "from-red-100"
      )}
    >
      <div className="flex flex-row gap-4 items-center">
        <img
          src={
            atsScore > 69
              ? "/icons/ats-good.svg"
              : atsScore > 49
              ? "/icons/ats-warning.svg"
              : "/icons/ats-bad.svg"
          }
          alt="ATS"
          className="w-10 h-10"
        />
        <p className="text-2xl font-semibold">ATS Score - {atsScore}/100</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xl">
          How well does your resume pass through Applicant Tracking Systems?
        </p>
        <p className="text-lg text-gray-500">
          Your resume was scanned like an employer would. Here's how it
          performed:
        </p>
        {suggestions.map((suggestion: string, index: number) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            <img
              // src={
              //   suggestion?.type === "good"
              //     ? "/icons/check.svg"
              //     : "/icons/warning.svg"
              // }
              src="/icons/warning.svg"
              alt="ATS"
              className="w-4 h-4"
            />
            <p className="text-lg text-gray-500">{suggestion}</p>
          </div>
        ))}
        <p className="text-lg text-gray-500">
          Want a better score? Improve your resume by applying the suggestions
          listed below.
        </p>
      </div>
    </div>
  );
};

export default ATS;
