const questions = [
  {
    id: "gasBill",
    label: "How much do you spend on your monthly gas bill?",
    type: "text",
    unit: "USD",
    icon: "/images/fuel.png",
  },
  {
    id: "electricBill",
    label: "How much do you spend on your monthly electric bill?",
    type: "text",
    unit: "USD",
    icon: "/images/plug.png",
  },
  {
    id: "electricSource",
    label: "What is the source of your electricity?",
    type: "select",
    options: [
      { value: "renewable", label: "Renewable" },
      { value: "coal", label: "Coal" },
      { value: "petroleum", label: "Petroleum" },
      { value: "naturalGas", label: "Natural Gas" },
      { value: "dontKnow", label: "Don't Know" },
    ],
    icon: "/images/power.png",
  },
  {
    id: "recycle",
    label: "Do you actively recycle?",
    type: "select",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
    icon: "/images/garbage.png",
  },
  {
    id: "carMileage",
    label: "What is the annual mileage of your car?",
    type: "text",
    unit: "miles",
    icon: "/images/speed.png",
  },
  {
    id: "flightsUnder4Hours",
    label: "How many flights do you take per year that are under 4 hours in duration?",
    type: "text",
    unit: "flights",
    icon: "/images/travel1.png",
  },
  {
    id: "flightsOver4Hours",
    label: "How many flights do you take per year that are over 4 hours in duration?",
    type: "text",
    unit: "flights",
    icon: "/images/travel.png",
  },
];

export default questions;
