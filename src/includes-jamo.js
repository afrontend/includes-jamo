const JATable      = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const JAGroupTable = ['가','까','나','다','따','라','마','바','빠','사','싸','아','자','짜','차','카','타','파','하'];

const JAGroupGap = '까'.charCodeAt(0) - '가'.charCodeAt(0)
const firstHangulCode = '가'.charCodeAt(0)
const lastHangulCode = '힣'.charCodeAt(0)

function isHangul(str) {
  const code = str.charCodeAt(0)
  return code >= firstHangulCode && code <= lastHangulCode
}

function extractJA(str) {
  if (isHangul(str)) {
    const code = str.charCodeAt(0)
    return JATable[Math.floor((code - firstHangulCode) / JAGroupGap)]
  } else {
    return '';
  }
}

function isJA(ja) {
  const jaAry = Array.isArray(ja) ? ja : ja.split('')
  return jaAry.every(j => JATable.includes(j))
}

function includesJamo(str, jamo) {
  if (!str || !jamo) return false
  if (!isJA(jamo)) return false
  const charAry = str.split('')
  const jaAryOfString = charAry.map(c => extractJA(c))
  const jaAry = Array.isArray(jamo) ? jamo : jamo.split('')
  return jaAry.every(j => jaAryOfString.includes(j))
}

module.exports = {
  includesJamo
}
