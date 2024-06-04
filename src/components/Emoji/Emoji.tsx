const emojis: Array<string> = ["🦒", "👶", "🐢", "🧸", "🐼", "🐱", "🐶", "🦋"];

export const Emoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];

  return randomEmoji;
};
