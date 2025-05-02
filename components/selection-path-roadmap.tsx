export const SelectionPathRoadmap = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-12">
      <h2 className="text-2xl font-bold flex items-center mb-6">
        <span className="text-orange-600 mr-2">●</span>
        Your Path to Selection
      </h2>
      <div className="relative pl-8">
        <div className="mb-8 relative">
          <div className="absolute -left-8 top-0 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold z-10">
            1
          </div>
          <h3 className="text-xl font-semibold mb-2">Initial Screening</h3>
          <p className="text-gray-600 mb-2">
            The first assessment focuses on basic technical abilities and
            general performance in skill assessments.
          </p>
          <div className="text-sm text-gray-500">
            90 min. session - selection based on your performance in basic skill
            assessments
          </div>
        </div>

        <div className="mb-8 relative">
          <div className="absolute -left-8 top-0 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold z-10">
            2
          </div>
          <h3 className="text-xl font-semibold mb-2">Small Matches</h3>
          <p className="text-gray-600 mb-2">
            Players are evaluated on how they apply their skills in small-sided
            games, focusing on decision-making and teamwork.
          </p>
          <div className="text-sm text-gray-500">
            60 min. session - observed for technical application and tactical
            awareness
          </div>
        </div>

        <div className="mb-8 relative">
          <div className="absolute -left-8 top-0 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold z-10">
            3
          </div>
          <h3 className="text-xl font-semibold mb-2">Final Selection Camp</h3>
          <p className="text-gray-600 mb-2">
            The final assessment evaluates players in full-sided games with
            official rules.
          </p>
          <div className="text-sm text-gray-500">
            Full 11v11 matches over 2 days - intensive focus on all attributes
            as a complete player
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-0 bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold z-10">
            4
          </div>
          <h3 className="text-xl font-semibold mb-2">Team Draft</h3>
          <p className="text-gray-600 mb-2">
            Selected players are invited to join teams based on their
            performance throughout the trial process.
          </p>
          <div className="text-sm bg-orange-100 text-orange-700 px-4 py-2 rounded-md inline-block">
            Top performers receive academy placements and potential contract
            offers
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPathRoadmap;
