// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
  const edges = new Array(numCourses).fill(0);
  const coursesWithNoPrereqs = [];

  for (let [course] of prerequisites) {
    edges[course]++;
  }

  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === 0) {
      coursesWithNoPrereqs.push(i);
    }
  }

  let coursesTaken = 0;

  while (coursesWithNoPrereqs.length) {
    const course = coursesWithNoPrereqs.shift();
    coursesTaken++;

    for (const [c, p] of prerequisites) {
      if (p === course) {
        edges[c]--;
        if (edges[c] === 0) {
          coursesWithNoPrereqs.push(c);
        }
      }
    }
  }

  return coursesTaken === numCourses;
}
