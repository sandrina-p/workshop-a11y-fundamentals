const fs = require("fs");
const glob = require("fast-glob");
const path = require("path");
const rimraf = require("rimraf");
const showdown = require("showdown");

const converter = new showdown.Converter();

const briefPatterns = path.resolve("./src/briefings", "**/*.md");
const briefFiles = glob.sync(briefPatterns);

briefFiles.forEach((brief) => {
  const briefName = path.basename(brief, ".md");
  const content = fs.readFileSync(brief, "utf8");
  const html = converter.makeHtml(content);
  const formLink = `#TODO-LINK-${briefName}`;

  fs.writeFileSync(
    `src/briefings/${briefName}.html`,
    `<!DOCTYPE html>
<html lang="en-GB">
<!-- DO NOT MODIFY THIS FILE. It's generated from the respective file xx.md -->
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/prism.css">
  <link rel="stylesheet" href="../assets/theme.css">
  <link rel="stylesheet" href="../assets/briefing.css">
</head>

<body>
  <main>
  <a class="linkHome" href="../../index.html">Go Back</a>
  ${html}

  <hr/>
  </main>
  <footer>
    <h2 id="learningsandfeedback">Feedback</h2>
    <p>After we go through the solution together, please take a minute to <a href="${formLink}">leave a quick feedback</a> about this exercise.</p>
  </footer>

  <script src="../assets/prism.js" defer></script>
</body>
</html>`,
    (err) => {
      if (err) return console.log(err);
    }
  );
});
console.log(`:: ✅ All ${briefFiles.length} briefings created!`);