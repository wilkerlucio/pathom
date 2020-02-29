goog.provide("com.wsscode.fuzzyjs");
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
com.wsscode.fuzzyjs.fuzzy_match_simple = function(pattern, str) {
  var patternIdx = 0;
  var strIdx = 0;
  var patternLength = pattern.length;
  var strLength = str.length;
  while (patternIdx !== patternLength && strIdx !== strLength) {
    var patternChar = pattern.charAt(patternIdx).toLowerCase();
    var strChar = str.charAt(strIdx).toLowerCase();
    if (patternChar === strChar) {
      ++patternIdx;
    }
    ++strIdx;
  }
  return patternLength !== 0 && strLength !== 0 && patternIdx === patternLength;
};
/**
 * @param {string} pattern
 * @param {string} str
 */
com.wsscode.fuzzyjs.fuzzy_match = function(pattern, str) {
  var adjacency_bonus = 5;
  var separator_bonus = 10;
  var camel_bonus = 10;
  var leading_letter_penalty = -3;
  var max_leading_letter_penalty = -9;
  var unmatched_letter_penalty = -1;
  var score = 0;
  var patternIdx = 0;
  var patternLength = pattern.length;
  var strIdx = 0;
  var strLength = str.length;
  var prevMatched = false;
  var prevLower = false;
  var prevSeparator = true;
  var bestLetter = null;
  var bestLower = null;
  var bestLetterIdx = null;
  var bestLetterScore = 0;
  var matchedIndices = [];
  while (strIdx !== strLength) {
    var patternChar = patternIdx !== patternLength ? pattern.charAt(patternIdx) : null;
    var strChar = str.charAt(strIdx);
    var patternLower = patternChar != null ? patternChar.toLowerCase() : null;
    var strLower = strChar.toLowerCase();
    var strUpper = strChar.toUpperCase();
    var nextMatch = patternChar && patternLower === strLower;
    var rematch = bestLetter && bestLower === strLower;
    var advanced = nextMatch && bestLetter;
    var patternRepeat = bestLetter && patternChar && bestLower === patternLower;
    if (advanced || patternRepeat) {
      score += bestLetterScore;
      matchedIndices.push(bestLetterIdx);
      bestLetter = null;
      bestLower = null;
      bestLetterIdx = null;
      bestLetterScore = 0;
    }
    if (nextMatch || rematch) {
      var newScore = 0;
      if (patternIdx === 0) {
        score += Math.max(strIdx * leading_letter_penalty, max_leading_letter_penalty);
      }
      if (prevMatched) {
        newScore += adjacency_bonus;
      }
      if (prevSeparator) {
        newScore += separator_bonus;
      }
      if (prevLower && strChar === strUpper && strLower !== strUpper) {
        newScore += camel_bonus;
      }
      if (nextMatch) {
        ++patternIdx;
      }
      if (newScore >= bestLetterScore) {
        if (bestLetter != null) {
          score += unmatched_letter_penalty;
        }
        bestLetter = strChar;
        bestLower = bestLetter.toLowerCase();
        bestLetterIdx = strIdx;
        bestLetterScore = newScore;
      }
      prevMatched = true;
    } else {
      formattedStr += strChar;
      score += unmatched_letter_penalty;
      prevMatched = false;
    }
    prevLower = strChar === strLower && strLower !== strUpper;
    prevSeparator = strChar === "_" || strChar === " ";
    ++strIdx;
  }
  if (bestLetter) {
    score += bestLetterScore;
    matchedIndices.push(bestLetterIdx);
  }
  var formattedStr = "";
  var lastIdx = 0;
  for (var i = 0; i < matchedIndices.length; ++i) {
    var idx = matchedIndices[i];
    formattedStr += str.substr(lastIdx, idx - lastIdx) + "\x3cb\x3e" + str.charAt(idx) + "\x3c/b\x3e";
    lastIdx = idx + 1;
  }
  formattedStr += str.substr(lastIdx, str.length - lastIdx);
  var matched = patternIdx === patternLength;
  return [matched, score, formattedStr];
};
com.wsscode.fuzzyjs.fts_fuzzy_match_async = function(matchFn, pattern, dataSet, onComplete) {
  var ITEMS_PER_CHECK = 1000;
  var max_ms_per_frame = 1000.0 / 30.0;
  var dataIndex = 0;
  var results = [];
  var resumeTimeout = null;
  function step() {
    clearTimeout(resumeTimeout);
    resumeTimeout = null;
    var stopTime = performance.now() + max_ms_per_frame;
    for (; dataIndex < dataSet.length; ++dataIndex) {
      if (dataIndex % ITEMS_PER_CHECK === 0) {
        if (performance.now() > stopTime) {
          resumeTimeout = setTimeout(step, 1);
          return;
        }
      }
      var str = dataSet[dataIndex];
      var result = matchFn(pattern, str);
      if (matchFn === com.wsscode.fuzzyjs.fuzzy_match_simple && result === true) {
        results.push(str);
      } else {
        if (matchFn === com.wsscode.fuzzyjs.fuzzy_match && result[0] === true) {
          results.push(result);
        }
      }
    }
    onComplete(results);
    return null;
  }
  var cancel = function() {
    if (resumeTimeout !== null) {
      clearTimeout(resumeTimeout);
    }
  };
  var start = function() {
    step();
  };
  var flush = function() {
    max_ms_per_frame = Infinity;
    step();
  };
  return {cancel:cancel, start:start, flush:flush};
};

//# sourceMappingURL=com.wsscode.fuzzyjs.js.map
