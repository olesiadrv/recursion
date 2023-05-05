const languageTree = require("./language-tree.json");

function searchLanguage(node, languageName) {
  if (
    node.Node &&
    node.Node.Language &&
    node.Node.Language.Name.toLowerCase().includes(languageName.toLowerCase())
  ) {
    return [node.Node.Language.Name];
  }
  if (node.Children && node.Children.length > 0) {
    for (let i = 0; i < node.Children.length; i++) {
      const child = node.Children[i];
      if (child.Children) {
        const path = searchLanguage(child, languageName);
        if (path) {
          return [...path, node.Node.Language.Name];
        }
      }
    }
  }
  return null;
}

const result = searchLanguage(languageTree.Root, "Central Moroccan Berber");
console.log(result);
