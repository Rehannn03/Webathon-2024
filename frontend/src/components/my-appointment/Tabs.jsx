import React from 'react'

export default function Tabs({ tabs, activeTab, setActiveTab, state }) {
    const stateColors = {
        "all": "bg-primary",
        "pending": "bg-yellow-700",
        "approved": "bg-green-300",
        "rejected": "bg-red-300",
        "completed": "bg-blue-300",
    }
  return (
    <section className="overflow-hidden mt-2 mb-4 bg-gray-200 p-[6px] rounded-lg">
      <div className="grid grid-cols-4 md:gap-2">
        {tabs.map((tab, index) => (
          <div
            className={`cursor-pointer py-2 text-center rounded-lg transition-colors duration-300 text-sm md:text-base ${
              activeTab === tab
                ? `text-white ${stateColors[state]}`
                : "text-neutral-600 bg-gray-200 hover:bg-gray-300"
            }`}
            key={index}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </section>
  );
}
