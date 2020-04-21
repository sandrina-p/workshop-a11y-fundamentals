# Web Accessibility Fundamentals

_The web is awesome and everyone should be able to enjoy it._

---

Hi there! I'm [Sandrina Pereira](https://www.sandrina-p.net/) and I believe that making the web accessible is one of our duties as web developers.

These are the material resources for my [Web Accessibility Fundamentals Workshop](https://www.sandrina-p.net/workshop-a11y-fundamentals/).

## Pre-Workshop requirements

To get the most out of the workshop, please do the following things in advance:

- **Install [Zoom](https://zoom.us)** to join the video call.
  - Turn on your video if possible, so we don't feel alone.
  - Keep your microphone muted to avoid background noises.
- **Install a modern browser**. Chrome or Firefox are recommended.
- **Familiarize yourself with the basics of a screen reader**. During a remote workshop it's not practical to help everyone using a SR (screen reader). For that reason, please take some minutes to practice in advance.

  - Mac: You'll be using VoiceOver. [Watch this VO introduction](https://www.youtube.com/watch?v=5R-6WvAihms&t=198s)
  - Windows: Install [NVDA](https://www.nvaccess.org/) and [watch this NVDA introduction](https://www.youtube.com/watch?v=Jao3s_CwdRU).
  - Linux: Install [Orca](https://wiki.gnome.org/Projects/Orca) and [watch this Orca introduction](https://www.youtube.com/watch?v=8OWSztc3AtY)

  - SR keyboard shortcuts: [VO and NVDA](https://dequeuniversity.com/screenreaders/survival-guide) and [Orca](https://help.gnome.org/users/orca/stable/commands_controlling_orca.html.en)

The better prepared you are for the workshop, the more you will learn from it!

## Setup the workshop

### Recommended

Install [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/en/) before proceding. Otherwise jump to the next _Alternatives_ section.

```bash
# Clone the repository
git clone https://github.com/sandrina-p/a11y-fundamentals.git

# Go to workshop folder
cd a11y-fundamentals

# Install the dependencies
npm install

# Run the project
npm start
```

### Alternatives

#### A: Locally

Just [download the project](https://github.com/sandrina-p/a11y-fundamentals/archive/master.zip), open `src/index.html` and you are ready to go.

#### B: In the browser

You may go through the [workshop on Codesandbox](https://codesandbox.io/s/github/sandrina-p/a11y-fundamentals). Open the link and fork the project. Make sure to open each individual exercise page in a new window so that you can use DevTools more easily.

### Project structure

```bash
src
├── briefings     # Exercise instructions
├── exercises     # Where you'll be working
    ├── xx.html     # The exercise html
    ├── xx.css      # The exercise styles
|-- solutions     # The final solutions
|-- index.html    # Workshop entry point
```

- In each exercise you'll find the lucky clover emoji 🍀 to guide you. I don't expected you to complete all the exercises on time. The goal is to introduce you to new things and **make you think about it and ask me questions** as we go though the content.
- Learning Tip: **Check the solutions only as a last resource.** If you take a peek at the solution before even trying, you'll be sabotaging your own learning. It's okay to struggle while you solve the exercise. It's part of the learning proccess. :)

## Workshop Outline

- 📡 Syncing...
- 🧠 **#0: Web Accessibility overview**
- 🎯 **#1: Accessible by default**
  - Appearance
  - Semantic HTML
  - Meaningful images
- 🏖 10 minutes break
- 🎯 **#2: Keyboard Navigation**
  - Interactive elements
  - Hidden elements
  - Navigation shortcuts
- 🏖 15 minutes break
- 🎯 **#3: Screen Readers**
  - Meaningful content
  - Page Landmarks
  - Accessible forms
- 🏖 5 minutes break
- 🎯 **#4: Next steps in A11Y**
  - Pairing devs and designers
  - Accessible Acceptance Criteria
  - Final Q&A

---

## Workshop Feedback

Please take a couple of minutes to [give me your feedback](https://docs.google.com/forms/d/e/1FAIpQLScLhrB3DvEF51Y43DxoQMz2pUxzkGNk3XLo6Lf5odsjJXznFA/viewform?usp=sf_link), as it will help me improving the next editions of this workshop 🤗

## License

This is only available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
