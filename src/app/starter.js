const os = require("os")
const { exec } = require('child_process');
if (os.arch() === "x64" && os.platform() === "linux") {
  exec('bash src/app/tools/OS/lindeps.sh', (error, stdout, stderr) => {
    if (error) {
      return;
    }

    if (stderr) {
      return;
    }
  });
}
