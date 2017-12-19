const cli = require("cli");

// cli.withStdinLines(function(lines, newline) {
//     this.output(lines.sort().join(newline));
// });

const cliArgs = cli.parse({
    criteria: [ "c", "Criteria to be used for filtering/ordering", "string", "age" ]
});
console.log(cliArgs);

let progress = 0.8;
// cli.progress(progress);
cli.debug("debug");
cli.error("error");
cli.info("info");
cli.ok("msg");

// stops the execution of the program
cli.fatal("fatal");
