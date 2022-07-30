# Web Accessibility Fundamentals

_The web is awesome and everyone should be able to enjoy it._

---

Hi there! I'm [Sandrina Pereira](https://twitter.com/a_sandrina_p) and I believe that making the web accessible is our duty as web creators.

These are the material resources for my [Web Accessibility Fundamentals workshop](https://www.sandrina-p.net/workshop-a11y/).

Currenly, I'm avaliable for booking private workshops with you your team. Feel free to reach out!

## Pre-Workshop requirements

To get the most out of the workshop, please do the following things in advance.

- **Install [Zoom](http://zoom.com/)** to join the video call (if applicable).
  - If possible, turn your camera on, so that we don't feel alone.
- **The browser Chrome or Firefox installed.** I'll be using Chrome most of the time.
- **Setup the project** prior to the workshop to avoid unexpected installation issues.
- **Install the browser extensions** that we will use during the workshop.
- **Familiarize yourself with the basics of a screen reader**. Read below for further practical guidance.

The better prepared you are for the workshop, the more you will learn from it!

## Setup the workshop

### Recommended

Install [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/en/) before proceeding. Otherwise jump to the next _Alternative_ section.

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

### Alternative

#### Locally

- [Download the project](https://github.com/sandrina-p/workshop-a11y-fundamentals/archive/main.zip) and open `src/index.html`. You are ready to go!

## Browser extensions

Additionally to the codebase, we'll explore multiple browser extensions. Kindly install them ahead of time.

The ones below we'll use frequently:

- [Accessibility Insights for Web](https://accessibilityinsights.io/en/downloads/) - Chrome only
- [Axe Developer Tools](https://www.deque.com/axe/browser-extensions/) - Chrome or Firefox. This is the alternative, but the extension above is more complete.

At some point, we'll also use the following extensions:

- [Colour contrast checker](https://colourcontrast.cc/) - Chrome only
- [Web Developer](https://chrispederick.com/work/web-developer/) - Chrome or Firefox
- [HeadingsMap](https://rumoroso.bitbucket.io/) - Chrome or Firefox

## Screen Readers

We'll explore SR (Screen Reader) during the workshop. In a remote workshop it's not practical to teach everyone how to use a SR. For that reason, please take some time (20-30 minutes) to practice in advance, with the help of these friendly video tutorials:

- Mac: You'll use VO (Voice Over) [Watch VO introduction](https://www.youtube.com/watch?v=5R-6WvAihms&t=198s).
- Windows: Install [NVDA](https://www.nvaccess.org/) and [watch NVDA introduction](https://www.youtube.com/watch?v=Jao3s_CwdRU).
- Linux: Install [Orca](https://wiki.gnome.org/Projects/Orca) and [watch Orca introduction](https://www.youtube.com/watch?v=8OWSztc3AtY).

My favorite cheatsheet of keyboard shortcuts:

- [VO and NVDA cheatsheet](https://dequeuniversity.com/screenreaders/survival-guide)
- [Orca cheatsheet](https://help.gnome.org/users/orca/stable/commands_controlling_orca.html.en).

I encourage you to [practice with this playground](https://sgwvk.csb.app/).

**Tip:** While the SR is speaking, press `Control` key to force it to stop reading it. This might help you to reduce the annoying/frustration feeling while exploring it.

Good luck 🤞

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
    *.html
    *.css
  solutions/  # The solutions
  index.html  # Home page
```

### Expectations:

- **Time value:** I don't expect you to complete all the exercises on time. The main goal is to introduce you to new things, to make you think about them, and ask me questions as we go through the materials.
- **Guidance & tips:** Through the exercises, you'll find the light bulb emoji 💡 to guide you, and the lucky clover emoji 🍀 with extra tips for you to apply right away.
- **Solutions:** Although all the exercises have explained solutions, check them as a last resource. If you take a peek at the solution before even trying, you'll be sabotaging your own learning. It's okay to struggle while you solve the exercise. It's part of the learning process. :)

### Not a developer?

It's totally fine you don't know HTML, CSS or JS in depth. As long you can read the basic code, you'll be able to follow along with the exercises. All the exercises are done in small groups of 3-4 people, so you have people to pair and help you along.

If you don't know any code at all, I got you covered too. Besides the "coding" part, the exercises also include resources suitable for designers and Product Managers, which you are more than welcome to read/watch while the others are coding.

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

&copy; 2022 [Sandrina Pereira](https://www.sandrina-p.net/), All Rights Reserved, under [BSD 3-Clause License](LICENSE.txt).

**This material cannot be used for workshops, training, or any other form of instructing or teaching, without express written consent.**
