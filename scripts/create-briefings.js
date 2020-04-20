const fs = require("fs");
const glob = require("fast-glob");
const path = require("path");
const rimraf = require("rimraf");
const showdown = require("showdown");

const converter = new showdown.Converter();

const briefFiles = glob.sync("./src/briefings/*.md");

briefFiles.forEach((brief) => {
  const briefName = path.basename(brief, ".md");
  const content = fs.readFileSync(brief, "utf8");
  const html = converter.makeHtml(content);

  fs.writeFileSync(
    `src/briefings/${briefName}.html`,
    `<!DOCTYPE html>
<html lang="en">
<!-- DO NOT MODIFY THIS FILE. It's generated from the respective file xx.md -->
<head>
  <title>Brienfig #${briefName}</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/prism.css">
  <link rel="stylesheet" href="../assets/theme.css">
  <link rel="stylesheet" href="../assets/briefing.css">
</head>

<body>
  <a class="linkHome" href="../index.html">Go Back</a>
  <main>
  
${html}

  </main>
  <script src="../assets/prism.js" defer></script>
</body>
</html>`,
    (err) => {
      if (err) return console.log(err);
    }
  );
});
console.log(`:: ✅ All ${briefFiles.length} briefings created!`);