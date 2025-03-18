const ACTION_PERIOD = 600000;
let TIME_LEFT = 1000;

const timer = () => {
  const rollback = (ACTION_PERIOD - TIME_LEFT) / 1000;
  console.log(`Осталось ${Math.floor(rollback / 60)} минут и ${rollback % 60} секунд`);
  TIME_LEFT += 1000;
  if(TIME_LEFT === ACTION_PERIOD) {
    clearInterval(interval);
    console.log("Акция завершена!")
  }
};

const interval = setInterval(timer, 1000);
