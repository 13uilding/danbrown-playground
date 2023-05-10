import { Octokit } from "@octokit/core";

const yaml = require('js-yaml');
const fs = require('fs');


const octokit = new Octokit({
   // auth: 'token'
})


async function run()
{
   const options = {
      owner: '13uilding',
      repo: 'danbrown-playground',
      path: 'src/examples/helm-example.yaml',
      headers: {
         'X-GitHub-Api-Version': '2022-11-28'
      }
   }
   const res = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', options);
   console.log(res);
}

run();