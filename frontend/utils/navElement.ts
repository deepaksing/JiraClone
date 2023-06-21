const renderNavElement = (windowWidth: number) => {
  const navElements = [
    { title: "Your Work" },
    { title: "Projects" },
    { title: "Filters" },
    { title: "Dashboards" },
    { title: "Teams" },
    { title: "Apps" },
  ];

  let visibleNavElements = navElements;
  let showMoreNav = false;

  if (windowWidth <= 770) {
    visibleNavElements = navElements.slice(0, 0);
    showMoreNav = true;
  } else if (windowWidth <= 870) {
    visibleNavElements = navElements.slice(0, 1);
    showMoreNav = true;
  } else if (windowWidth <= 970) {
    visibleNavElements = navElements.slice(0, 2);
    showMoreNav = true;
  } else if (windowWidth <= 1070) {
    visibleNavElements = navElements.slice(0, 3);
    showMoreNav = true;
  } else if (windowWidth <= 1170) {
    visibleNavElements = navElements.slice(0, 4);
    showMoreNav = true;
  } else if (windowWidth <= 1220) {
    visibleNavElements = navElements.slice(0, 5);
    showMoreNav = true;
  } else {
    visibleNavElements = navElements.slice(0, 6);
    showMoreNav = false;
  }

  console.log(visibleNavElements);

  return { visibleNavElements, showMoreNav };
};

export default renderNavElement;
