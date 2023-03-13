const core = require("@actions/core");
const github = require("@actions/github");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const webhook = core.getInput("webhook");
    const token = core.getInput("token");
    const octokit = github.getOctokit(token);
    const event = JSON.parse(core.getInput("event"));
    core.info(toJSON(github.context.payload));
    // core.info(toJSON(event));

    if (event.state == "closed" && event.merged == true) {
      core.info("Your PR closed");
    }

    if (event.state == "opened") {
      if (event.assignees.length > 0) {
        core.info(event.assignees);
      }
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
