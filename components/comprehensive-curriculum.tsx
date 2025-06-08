import { Brain, Camera, Activity, Sword, Zap } from "lucide-react";

export default function CricketCurriculum() {
  const curriculumItems = [
    {
      icon: Camera,
      title: "Cricket Skills",
      items: [
        "Advanced batting techniques",
        "Professional bowling skills",
        "Strategic fielding positions",
        "Match situation awareness",
      ],
    },
    {
      icon: Activity,
      title: "Physical Fitness",
      items: [
        "Sport-specific conditioning",
        "Strength & power training",
        "Speed & agility drills",
        "Injury prevention protocols",
      ],
    },
    {
      icon: Sword,
      title: "Discipline",
      items: [
        "Structured daily routines",
        "Team-oriented challenges",
        "Punctuality & dedication",
        "Traditional values & ethics",
      ],
    },
    {
      icon: Zap,
      title: "Mental Strength",
      items: [
        "Pressure handling",
        "Visualization techniques",
        "Focus & concentration",
        "Performance psychology",
      ],
    },
  ];

  return (
    <div className="w-full mx-auto py-4">
      <h4 className="text-xl font-bold text-orange-700 mt-8 mb-4 flex items-center">
        <Brain className="mr-2 h-5 w-5 text-orange-600" />
        Comprehensive Curriculum
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        {curriculumItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl shadow-md border-l-4 border-orange-500 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-orange-100 p-2 sm:p-2.5 lg:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-orange-600" />
                </div>
                <h5 className="text-base font-bold text-black leading-tight">
                  {item.title}
                </h5>
              </div>

              <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                {item.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-start text-black"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-2"></div>
                    <span className="text-xs sm:text-sm lg:text-base xl:text-sm leading-relaxed">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
