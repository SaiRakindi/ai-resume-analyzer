interface Resume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: Feedback;
}

interface Job {
  title: string;
  description: string;
  location: string;
  requiredSkills: string[];
}

interface Feedback {
  overallScore: number;
  ATS: {
    score: number;
    tips: {
      type: "good" | "improve";
      tip: string;
    }[];
  };
  toneAndStyle: {
    score: number;
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };
  content: {
    score: number;
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };
  structure: {
    score: number;
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };
  skills: {
    score: number;
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[];
  };

  //structure change from the puter.js response
  ats_compatibility: float;
  ats_optimization_tips: string[];
  content_quality: number;
  detailed_feedback: string[];
  final_recommendation: string;
  format_and_design: string;
  keyword_match_analysis: {
    matched_keywords: string[];
    missing_keywords: string[];
    keyword_match_percentage: float;
  };
  overall_rating: float;
}
