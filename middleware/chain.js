export function chain(functions, index) {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return (req, event, res) => {
    return res;
  };
}
