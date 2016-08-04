[![Build Status](https://travis-ci.org/fac-cycle/fac-cycle.svg?branch=master)](https://travis-ci.org/fac-cycle/fac-cycle)
[![Code Climate](https://codeclimate.com/github/fac-cycle/fac-cycle/badges/gpa.svg)](https://codeclimate.com/github/fac-cycle/fac-cycle)
[![Test Coverage](https://codeclimate.com/github/fac-cycle/fac-cycle/badges/coverage.svg)](https://codeclimate.com/github/fac-cycle/fac-cycle/coverage)



# fac-cycle

## Get started with this repo

### Install dependancies
run `npm install`  

### workflow
Normal contributors to the repo don't have writing rights to merge branches into the master.
You can create new branches and create pull request and comment on them.


### How to commit

We enforce linting rules on every attempt to commit something to the repo. If the code you are trying to commit raises issues or warnings with the linter, the commit will automatically be prevented until you solve it.  

The chosen linting rules are the airbnb guidelines for eslint.
They are part of the dependancies of this repo, but you might need to configure your editor accordingly.


### How to commit - part 2

We enforce commit message rules on every attempt to commit something to the repo. Write every commit as follows:  
``<type>(<scope>): <subject>``  

allowed type are:  
``["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "revert"]``  

allowed scopes are:
any one word string.  

the subject is what you actually wanted to say. Write it in an imperative fashion. See this example:  
``chore(setup): set up code coverage``

For full guidelines [click here](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit?pli=1#)

### How to commit - part 3

We enforce testing on every attempt to commit. If your commit breaks any of the tests your commit will be rejected.
