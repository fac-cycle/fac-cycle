[![Build Status](https://travis-ci.org/fac-cycle/fac-cycle.svg?branch=master)](https://travis-ci.org/fac-cycle/fac-cycle)
[![Code Climate](https://codeclimate.com/github/fac-cycle/fac-cycle/badges/gpa.svg)](https://codeclimate.com/github/fac-cycle/fac-cycle)
[![Test Coverage](https://codeclimate.com/github/fac-cycle/fac-cycle/badges/coverage.svg)](https://codeclimate.com/github/fac-cycle/fac-cycle/coverage)



# fac-cycle

##Get started with this repo

###Install dependancies
run ``npm install ``  

### workflow
Normal contributors to the repo dont have writing rights on the main repo. The suggested workflow is to fork the repo, push your commits there on the relevant branch and create a pull request.

### How to commit

We enforce linting rules on every attempt to commit something to the repo. If the code you are trying to commit raises issuess or warnings with the linter, the commit will automatically be prevented untill you solve it.  

The choosen linting rules are the  airbnb guidelines for eslint. 
They are part of the dependancies of this repo, but you might need to configure your editor accordingly. 


###How to commit bis

We enforce commit message rules on every attemp to commit something to the repo. Write every commit as follows:  
``<type>(<scope>): <subject>``  

allowed type are:  
``["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "revert"]``  

allowed scopes are:
any one word string.  

the subject is what you actually wanted to say. Write it in an imperative fashion. See this example:  
``chore(setup): set up code coverage``

###How to commit bis bis 

We enforce testing on every attempt to commit. If your commit breakes any of the tests your commit woll be rejected.





