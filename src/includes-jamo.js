const JATable      = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
const JAGroupTable = ["가","까","나","다","따","라","마","바","빠","사","싸","아","자","짜","차","카","타","파","하"];

const JAGroupGap = "까".charCodeAt(0) - "가".charCodeAt(0)
const firstHangulCode = "가".charCodeAt(0)
const lastHangulCode = "힣".charCodeAt(0)

function isHangul(str) {
  const code = str.charCodeAt(0)
  return code >= firstHangulCode && code <= lastHangulCode
}

function ja(str) {
  if (isHangul(str)) {
    const code = str.charCodeAt(0)
    return JATable[Math.floor((code - firstHangulCode) / JAGroupGap)]
  } else {
    return '';
  }
}

function isJA(ja) {
  return JATable.includes(ja)
}

function isJAs(jas) {
  if (Array.isArray(jas)) {
    return jas.every(j => isJA(j))
  } else {
    return isJA(jas)
  }
}

function includesJamo(str, jamo) {
  if (!str || !jamo) return false
  if (!isJAs(jamo)) return false
  const charAry = str.split('')
  const jaAry = charAry.map(c => ja(c))
  return jaAry.includes(jamo)
}

module.exports = {
  includesJamo
}
