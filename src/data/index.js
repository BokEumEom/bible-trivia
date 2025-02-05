import { knowledge } from "./knowledge";
import { verses } from "./verses";
import { characters } from "./characters";
import { history } from "./history";

// 모든 데이터를 하나의 배열로 통합
export const allQuestions = [
  ...knowledge,
  ...verses,
  ...characters,
  ...history,
];

// 개별 데이터를 재 export (필요시)
export { knowledge, verses, characters, history };
