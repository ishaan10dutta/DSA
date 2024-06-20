// Given a list of scores of different students, return the average score
// of each student's top five scores in the order of each student's id.

// Each entry items[i] has items[i][0] the student's id, and items[i][1]
// the student's score.  The average score is calculated using integer division.

// Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
// Explanation:
// The average of the student with id = 1 is 87.
// The average of the student with id = 2 is 88.

// 1 <= items.length <= 1000
// items[i].length == 2
// The IDs of the students is between 1 to 1000
// The score of the students is between 1 to 100
// For each student, there are at least 5 scores
//https://leetcode.com/problems/high-five/description/

function highFiveScores(scores: number[][]): number[][] {
  let scoresByIdMap = scores.reduce((acc, [id, score]) => {
    if (!acc[id]) acc[id] = [];
    acc[id].push(score);
    return acc;
  }, {} as Record<number, number[]>);

  const resTopFive = Object.entries(scoresByIdMap).map(([id, scores]) => {
    scores.sort((a, b) => b - a);
    const topFive = scores.slice(0, 5);
    const average = Math.floor(
      topFive.reduce((acc, curr) => acc + curr, 0) / 5
    );
    return [parseInt(id), average];
  });

  return resTopFive.sort((a, b) => a[0] - b[0]);
}
