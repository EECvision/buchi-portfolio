export const handleInit = ({
  card,
  cardWrapper,
  counter,
  offset,
}: {
  cardWrapper: HTMLDivElement;
  card: HTMLDivElement;
  counter: number;
  offset: number;
}) => {
  if (cardWrapper && card) {
    const width = card.getBoundingClientRect().width;
    cardWrapper.style.transform = `translateX(-${
      width * counter + offset * offset
    }px)`;
  }
};

export const handleClick = ({
  direction,
  counter,
  cardWrapper,
  timer,
  setCounter,
}: {
  direction: "prev" | "next";
  cardWrapper: HTMLDivElement;
  timer: number;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const count = cardWrapper?.children.length
    ? cardWrapper?.children.length / 2
    : 0;
  if (!cardWrapper) return;
  cardWrapper.style.transition = "transform 850ms";

  if (direction === "next") {
    if (counter < count - 1) {
      setCounter((c) => c + 1);
    } else {
      clearTimeout(timer);
      cardWrapper.style.transition = "transform 0ms";
      setCounter(0);
    }
  } else if (direction === "prev") {
    if (counter > 0) {
      setCounter((c) => c - 1);
    } else {
      clearTimeout(timer);
      cardWrapper.style.transition = "transform 0ms";
      setCounter(count - 1);
    }
  }
};
