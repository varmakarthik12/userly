const { execSync } = require("child_process");

const branch = execSync(`git branch | grep \\* | cut -d ' ' -f2`)
	.toString()
	.trim();

execSync(`git checkout ${branch}`, { stdio: [0, 1, 2] });
execSync(`git pull origin ${branch}`, { stdio: [0, 1, 2] });
execSync("yarn install", { stdio: [0, 1, 2] });
execSync("git fetch --prune upstream", { stdio: [0, 1, 2] });

try {
	execSync(`git rebase upstream/${branch}`, { stdio: [0, 1, 2] });
} catch (error) {
	execSync("git add ../yarn.lock", { stdio: [0, 1, 2] });
	execSync('git commit -m "chore(install): Update dependencies."', {
		stdio: [0, 1, 2]
	});
	execSync(`git rebase upstream/${branch}`, { stdio: [0, 1, 2] });
}

execSync(`git push --force origin ${branch}`, { stdio: [0, 1, 2] });
