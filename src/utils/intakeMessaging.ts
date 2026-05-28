export const getCurrentIntakeLabel = (currentDate: Date): string => {
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const monthDay = month * 100 + day;

  if (monthDay >= 1001 || monthDay <= 131) {
    return "January/February Intake";
  }

  if (monthDay >= 201 && monthDay <= 630) {
    return "May/June Intake";
  }

  if (monthDay >= 401 && monthDay <= 1031) {
    return "September/October Intake";
  }

  return "Admission Open";
};

export const getCurrentHeroIntakeTitle = (currentDate: Date): string =>
  `Admission for ${getCurrentIntakeLabel(currentDate)}`;

export const getCurrentPromoIntakeTitle = (currentDate: Date): string =>
  `${getCurrentIntakeLabel(currentDate)}: applications now open`;
