# Project Setup and Issue Reproduction

This README provides steps to set up the project, reproduce the issue, and provides a brief explanation of the problem.

# Setup

0. Run yarn install
1. Run the build command in the project: yarn build
2. Start the server with yarn start

# Issue Reproduction

1.  Access the page, and stay on the route "/"
2.  Repeat steps 1 and 2 from the Setup section to simulate a new deployment
3.  With the previous page still open with the old deployment, click on "Current Page". This will trigger the error.

# Problem Description

From our understanding of the previous issue, Next.js should perform a hard-refresh when it receives a 404 while trying to perform data-fetching on a dynamic page with some data-fetching method like getServerSideProps. Currently, this error occurs on the same page, but it does not happen if we go to another page.

If this is not a bug, how can we solve this problem given that requests to `.next/data/{buildId}` are dynamic?
