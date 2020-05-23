// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  const rootIdx = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[rootIdx]);

  root.left = sortedArrayToBST(nums.slice(0, rootIdx));
  root.right = sortedArrayToBST(nums.slice(rootIdx + 1));
  return root;
}
