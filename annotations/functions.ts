// first () is for the arguments, the second is for what it returns
const add = (a: number, b: number): number => {
  return a + b;
};

// destructure function arguments
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};
