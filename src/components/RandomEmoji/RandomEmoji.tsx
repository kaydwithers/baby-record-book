const emojis: Array<string> = ["🦒", "👶", "🐢", "🧸", "🐼", "🐱", "🐶", "🦋"];

export const RandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};
