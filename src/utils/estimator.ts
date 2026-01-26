export function calculateSolarEstimate({
  monthlyBill,
  roofArea,
}: {
  monthlyBill: number;
  roofArea: number;
}) {
  const UNIT_RATE = 6;           // ₹ per unit
  const UNITS_PER_KW = 120;      // per month
  const AREA_PER_KW = 100;       // sq.ft
  const COST_PER_KW = 55000;     // ₹

  const monthlyUnits = monthlyBill / UNIT_RATE;
  const requiredKW = Math.ceil(monthlyUnits / UNITS_PER_KW);
  const requiredArea = requiredKW * AREA_PER_KW;

  const feasible = roofArea >= requiredArea;

  const estimatedCost = requiredKW * COST_PER_KW;
  const yearlySavings = monthlyBill * 12 * 0.9;

  return {
    requiredKW,
    requiredArea,
    feasible,
    estimatedCost,
    yearlySavings,
  };
}
