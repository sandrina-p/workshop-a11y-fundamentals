const fs = require("fs");
const glob = require("fast-glob");
const path = require("path");
const showdown = require("showdown");

const converter = new showdown.Converter();

const workshopTitle = "A11Y+Fundamentals";
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
  <title>Briefing #${briefName}</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../assets/prism.css">
  <link rel="stylesheet" href="../assets/theme.css">
  <link rel="stylesheet" href="../assets/briefing.css">
</head>

<body>
<div class="bfg-hotlinks">
  <a href="../index.html">Go back</a>
  <a href="/solutions/${briefName}.html" target="_blank">Solution</a>
</div>
<main>
  
${html}

</main>
<footer class="g-footer">
  <span class="c-echos"></span>  
  <div class="g-footerArea">
    <p>
      Finished on time? Help your group or <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfU3zIlg48Tlv4hi1_qnhNbkBKNbGb_I9w-KSuTzLc73mVvAw/viewform?usp=pp_url&entry.225880601=${workshopTitle}&entry.1412096726=${briefName}">give feedback</a> about this exercise.
    </p>
  </div>
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
