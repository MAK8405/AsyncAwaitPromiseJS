import { getFruit } from "../4. AsyncAwait/AsyncAwait.js";

const badSmoothie = async () => {
  try {
    const a = getFruit("pineapple");
    const b = getFruit("strawberry");
    const smoothie = await Promise.all([a, b]);

    throw "broken!";

    return smoothie;
  } catch (err) {
    console.log(err);
    // return `😬 We are going to be fine...`
    throw `💩 It's broken!`;
  }
};
