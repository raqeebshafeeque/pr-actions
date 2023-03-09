const core = require("@actions/core");
const github = require("@actions/github");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const webhook = core.getInput("webhook");
    const token = core.getInput("token");
    const octokit = github.getOctokit(token);
    const event = JSON.parse(core.getInput("event"));
    core.info(github.context.payload);
    core.info("pr", event);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
