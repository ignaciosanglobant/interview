export function idGenerator() {
  const random = Math.random();
  const s = random.toString(16);
  const id = s.slice(2);

  return id;
}
