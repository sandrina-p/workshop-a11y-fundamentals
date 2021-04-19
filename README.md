# Web Accessibility Fundamentals

_The web is awesome and everyone should be able to enjoy it._

---

Hi there! I'm [Sandrina Pereira](https://twitter.com/a_sandrina_p) and I believe that making the web accessible is one of our duties as web creators.

These are the material resources for my [Web Accessibility Fundamentals workshop](https://www.sandrina-p.net/workshop-a11y/).

## Pre-Workshop requirements

To get the most out of the workshop, please do the following things in advance:

- **Install the needed video tool** to join the video call.
  - Turn on your video if possible, so we don't feel alone.
  - Keep your microphone muted to avoid background noises.
- **The browser Chrome or Firefox installed.** We'll use Chrome most of the time.
- **Setup the project** prior to the workshop to avoid unexpected installation issues.
- **Install the browser extensions** that we will use during the workshop.
- **Familiarize yourself with the basics of a screen reader**. During a remote workshop it's not practical to help everyone using a SR (screen reader). For that reason, please take some minutes to practice in advance.
  - Mac: You'll be using VoiceOver. [Watch this VO introduction](https://www.youtube.com/watch?v=5R-6WvAihms&t=198s).
  - Windows: Install [NVDA](https://www.nvaccess.org/) and [watch this NVDA introduction](https://www.youtube.com/watch?v=Jao3s_CwdRU).
  - Linux: Install [Orca](https://wiki.gnome.org/Projects/Orca) and [watch this Orca introduction](https://www.youtube.com/watch?v=8OWSztc3AtY).
  - SR keyboard shortcuts: [VO and NVDA](https://dequeuniversity.com/screenreaders/survival-guide) and [Orca](https://help.gnome.org/users/orca/stable/commands_controlling_orca.html.en).

The better prepared you are for the workshop, the more you will learn from it!

## Setup the workshop

### Recommended

Install [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/en/) before proceding. Otherwise jump to the next _Alternatives_ section.

```bash
# Clone the repository
git clone https://github.com/sandrina-p/workshop-a11y-fundamentals.git

# Go to workshop folder
cd workshop-a11y-fundamentals

# Install the dependencies
npm install

# Run the project
npm start
```

Open [http://localhost:5000/](http://localhost:5000/) and you are ready to go!

### Alternatives

#### Locally

- [Download the project](https://github.com/sandrina-p/workshop-a11y-fundamentals/archive/main.zip) and open `src/index.html`. You are ready to go.

## Developer extensions

Aditionally to the codebase, we'll explore multiple extensions. Kindly install them ahead of time before the workshop.

The ones below we'll use frequently:

- [Accessibility Insights for Web](https://accessibilityinsights.io/en/downloads/) - Chrome only
- [Axe Developer Tools](https://www.deque.com/axe/browser-extensions/) - Chrome or Firefox

At some point, we'll also use the following extensions:

- [Colour contract checker](https://colourcontrast.cc/) - Chrome only
- [Web Developer](https://chrispederick.com/work/web-developer/) - Chrome or Firefox
- [headingsMap](https://www.learningapps.co.uk/moodle/xertetoolkits/play.php?template_id=1309#page1section3) - Chrome or Firefox

## Workshop Dynamic

### Project structure

The workshop consists of a set of challenges.  
Each one introduces a new topic, followed by a code exercise for you to apply the concepts learned.
After each challenge, we'll go through the solution together and clarify any questions that you might have.

```bash
src/
  briefings/  # The exercises introduction
    *.md
  exercises/  # Where you'll be coding
    *.html      # The exercise html
    *.css       # The exercise styles
  solutions/  # The solutions
  index.html  # Workshop entry point
```

**Notes:**

- **Check solutions as a last resource.** If you take a peek at the solution before even trying, you'll be sabotaging your own learning. It's okay to struggle while you solve the exercise. It's part of the learning process. :)
- **Time expectations:** I don't expect you to complete the entire exercise on time. The goal is to introduce you to new things, to make you think about them, and ask me questions as we go through the materials.
- **Guidance & tips:** In the code, you'll find the _light bulb_ emoji 💡 to guide you, and the _lucky clover_ emoji 🍀 with extra tips.

## Workshop Outline

- 👋 Welcoming everyone
- 🧠 **#0: Web Accessibility overview**
- 🎯 **#1: Accessible by default**
  - Appearance
  - Semantic HTML
  - Meaningful images
- 🎯 **#2: Keyboard navigation**
  - Interactive elements
  - Hidden elements
  - Navigation shortcuts
- 🎯 **#3: Screen readers**
  - Meaningful content
  - Page Landmarks
  - Accessible forms
- 🎯 **#4: Next steps into A11Y**

---

## License

This project is available for private, non-commercial use under the BSD 3-Clause License.

The workshop exercises are proprietary and are licensed on a per-individual basis,
usually as a result of purchasing a ticket to a workshop, or being a participant
in a private training.

Here are some guidelines for things that are **OK** and **Not OK** based on this license:

#### OK

- Using everything in this project other than the briefings and exercises
  to build a project used for your own free or commercial training material;
- Copying code from build scripts, configuration files, tests and development
  harnesses that are not part of the exercises specifically, for your own projects;
- As an owner of an individual license, using code from tests, exercises, or
  exercise solutions for your own non-training-related project.

#### Not OK (without express written consent)

- Using this project, or any subset of exercises contained within this project to run your own workshops;
- Writing a book that uses the code from these exercises;
- Recording a screencast that contains one or more of this project's exercises.

## Copyright

&copy; 2021 [Sandrina Pereira](https://www.sandrina-p.net/), All Rights Reserved.

**This material cannot be used for workshops, training, or any other form of instructing or teaching, without express written consent.**
