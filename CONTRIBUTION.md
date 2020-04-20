# Contributing Guidelines

### Submitting Code and Documentation Changes
Our process for accepting changes operates by [Pull Request (PR)](https://help.github.com/articles/about-pull-requests/) and has a few steps:

1.  If you haven't submitted anything before, and you aren't (yet!) a member of our organization, **fork and clone** the repo:

        $ git clone git@github.com:<your-username>/<repository-name>.git

   1.  Create a **new branch** for the changes you want to work on. Choose a topic for your branch name that reflects the change:

        $ git checkout -b <branch-name>

1.  **Create or modify the files** with your changes. If you want to show other people work that isn't ready to merge in, commit your changes then create a pull request (PR) with _WIP_ or _Work In Progress_ in the title.

        https://github.com/chatair/<repository-name>/pull/new/master

1.  Once your changes are ready for final review, commit your changes then modify or **create your pull request (PR)**, assign as a reviewer or ping (using "`@<username>`")

1.  Allow others sufficient **time for review and comments** before merging. We make use of GitHub's review feature to comment in-line on PRs when possible. There may be some fixes or adjustments you'll have to make based on feedback.

## Commit Style
### Message Structure
Commit messages should be in the following format:

    #<issue-number> A brief description of changes on one line

### Some **DONT's**

- Don't use underscores in variable names
- All constants should be CAPS. e.g `MINIMUM_TIMEOUT_ERROR_EXTERNAL`