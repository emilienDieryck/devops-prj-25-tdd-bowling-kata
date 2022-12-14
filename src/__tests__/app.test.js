const BowlingKata = require("../app");

it("should return 0 when all the roll was 0", () => {
  const Game = new BowlingKata();
  for (let i = 0; i < 20; i++) {
    Game.roll(0);
  }
  expect(Game.score).toBe(0);
});

it("should return 20 for only have done 1 at each roll", () => {
  const Game = new BowlingKata();
  for (let i = 0; i < 20; i++) {
    Game.roll(1);
  }
  expect(Game.score).toBe(20);
});

it("should return the correct score when there is a spare ", () => {
  const Game = new BowlingKata();
  Game.roll(5);
  Game.roll(5);
  Game.roll(3);
  for (let i = 0; i < 17; i++) {
    Game.roll(0);
  }
  expect(Game.score).toBe(16);
});

it("should return the correct score when there is a strike ", () => {
  const Game = new BowlingKata();
  Game.roll(10);
  Game.roll(1);
  Game.roll(1);
  for (let i = 0; i < 17; i++) {
    Game.roll(0);
  }
  expect(Game.score).toBe(14);
});

it("should return the correct score when there is only strike ", () => {
  const Game = new BowlingKata();
  for (let i = 0; i < 20; i++) {
    Game.roll(10);
  }
  expect(Game.score).toBe(300);
});

it("should return the correct score if the last frame is a spare", () => {
  const Game = new BowlingKata();
  Game.roll(1);
  Game.roll(4);
  Game.roll(4);
  Game.roll(5);
  Game.roll(6);
  Game.roll(4);
  Game.roll(5);
  Game.roll(5);
  Game.roll(10);
  Game.roll(0);
  Game.roll(1);
  Game.roll(7);
  Game.roll(3);
  Game.roll(6);
  Game.roll(4);
  Game.roll(10);
  Game.roll(2);
  Game.roll(8);
  Game.roll(6);

  expect(Game.score).toBe(133);
});

it("should raise an exception if roll > 10", () => {
  const Game = new BowlingKata();
  try {
    Game.roll(11);
  } catch (error) {
    expect(error.message).toBe("roll not between 0 and 10");
  }
});

it("should raise an exception if roll < 0", () => {
  const Game = new BowlingKata();
  try {
    Game.roll(-1);
  } catch (error) {
    expect(error.message).toBe("roll not between 0 and 10");
  }
});

it("should return the correct score when there is only spare ", () => {
  const Game = new BowlingKata();
  for (let i = 0; i < 21; i++) {
    Game.roll(5);
  }
  expect(Game.score).toBe(150);
});

it("should return the correct score when there is only 4 except at the end ", () => {
  const Game = new BowlingKata();
  for (let i = 0; i < 18; i++) {
    Game.roll(4);
  }
  Game.roll(0);
  Game.roll(0);

  expect(Game.score).toBe(72);
});
it("should return the correct score (80) when there is only 8 (and 0) ", () => {
  const Game = new BowlingKata();
  for (let i = 0; i < 20; i++) {
    i % 2 == 0 ? Game.roll(8) : Game.roll(0);
  }
  expect(Game.score).toBe(80);
});
