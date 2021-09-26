import React from "react";

function RightSideBar() {
  const medicals = [
    { id: 1, title: "Malaria" },
    { id: 2, title: "Typhoid" },
    { id: 3, title: "Tooth Decay" },
    { id: 4, title: "Short Sightedness" },
  ];

  const tips = [
    { id: 1, title: "Regular Exercise" },
    { id: 2, title: "A cup of water daily" },
    {
      id: 3,
      title: `Eating Fruit and vegatable
daily`,
    },
    { id: 4, title: "Reduce fatty food intake" },
  ];
  return (
    <>
      <div className="container float-end w-25 rightsidebar">
        <div className="row d-flex flex-col mt-5">
          <h4 className="mb-2">August 2021</h4>
          <div className="mt-2 mb-2"></div>
          <h5 className="card-title">Medical History</h5>
          <div
            className="card mb-2 "
            style={{
              width: "250px",
              border: "1px solid rgba(51, 45, 160, 0.2)",
              borderRadius: "20px",
            }}
          >
            <div className="card-body">
              <ul className="" style={{ listStyle: "none" }}>
                {medicals.map((item) => (
                  <li key={item.id} className="pb-2">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-2 mb-2"></div>
          <h5 className="card-title">Basic Health Tips</h5>
          <div
            className="card "
            style={{
              width: "250px",
              border: "1px solid rgba(51, 45, 160, 0.2)",
              borderRadius: "20px",
            }}
          >
            <div className="card-body">
              <ul className="" style={{ listStyle: "none" }}>
                {tips.map((tip) => (
                  <li key={tip.id} className="pb-2">
                    {tip.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
