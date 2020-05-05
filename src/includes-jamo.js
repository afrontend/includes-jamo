function includesJamo(str, jamo) {
  if (!str || !jamo) return false;
  return str.includes(jamo)
}

module.exports = {
  includesJamo
}
