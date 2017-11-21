(function () {
    let reverse = require('./reverse.js');
    let append = require('./append_command.js');
    let prepend = require('./prepend.js');
    let insert = require('./insert.js');
    let del = require('./delete.js');
    let roll = require('./roll.js');
    let sort = require('./sort.js')
    let count = require('./count.js')
    let array = [];
    let initialize = false;
    let commands = {
        reverse,
        append,
        prepend,
        insert,
        del,
        roll,
        sort,
        count
    };

    let console = document.getElementById("console");
    let input = document.getElementById("input");
    document.getElementById("submit").addEventListener("click", submit);
    input.addEventListener("keypress", (e) => e.code === "Enter" ? submit() : "");

    function submit() {
        let commandTokens = input.value.split(" ").filter(e => e != "");
        if (!initialize) {
            array = commandTokens.splice(0);
            input.value = "";
            consoleWrite();
            initialize = true;
            return;
        }

        try {
            let res = commands[commandTokens[0]](array, commandTokens.splice(1));
            if (typeof res == "string") {
                errorWrite(res);
            } else {
                array = res;
                consoleWrite();
            }
        } catch (err) {
            console.value += "Error: invalid command\n";

        } finally {
            input.value = "";
        }
    }

    function consoleWrite() {
        console.value += array.join(" ") + "\n";
    }

    function errorWrite(msg) {
        console.value += msg + "\n";
    }
})();
