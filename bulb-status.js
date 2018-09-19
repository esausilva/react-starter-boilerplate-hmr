const rp = require('request-promise');
const chalk = require('chalk');
const net = require('net');
const HOST = '192.168.71.96';
const PORT = 55443;
const REFRESH_TIME = 60000;;
const JOBS_TO_MONITOR = ['next-www-ui', 'next-www', 'next-www-wro', '~2_CRM_PgSQL'];

const UNSTABLE = 'UNSTABLE';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const IN_PROGRESS = null;
const ALL_STATES = [SUCCESS, UNSTABLE, FAILURE, IN_PROGRESS];
const DEMO = false;


function request(jobName) {
    return rp(`http://strumyk-next-build/jenkins/trunk/job/${jobName}/lastBuild/api/json`, { timeout: 5000 });
}

async function checkJobsStatus() {
    let arrayOfStatuses = [];
    if (DEMO) {
        arrayOfStatuses = [ALL_STATES[Math.floor(Math.random() * ALL_STATES.length)]];
    } else {
        let requestsResults = await Promise.all(JOBS_TO_MONITOR.map(request));
        arrayOfStatuses = requestsResults.map(JSON.parse).map(e => e.result);
    }

    if (arrayOfStatuses.includes(IN_PROGRESS)) {
		handleStatus(IN_PROGRESS);
        return;
    }
    if (arrayOfStatuses.includes(FAILURE)) {
        handleStatus(FAILURE);
        return;
    }
    if (arrayOfStatuses.includes(UNSTABLE)) {
        handleStatus(UNSTABLE);
        return;
    }
    if (arrayOfStatuses.includes(SUCCESS)) {
        handleStatus(SUCCESS);
    }


}
let lastStatus;
function handleStatus(currentStatus) {
    console.log(chalk.green('Check ' + currentStatus, new Date()));
    if (lastStatus !== currentStatus) {
        lastStatus = currentStatus;
        console.log(chalk.blue('Change state to ' + currentStatus));
        bulb.handleStatus(currentStatus);
    }
}


setInterval(function () {
    let date = new Date();
    let current_hour = date.getHours();
    if (!(current_hour >= 7 && current_hour <= 16)) {
        bulb.turnOff()
    } else {
        bulb.turnOn();
    }
    checkJobsStatus();
}, REFRESH_TIME)


//BULB MODULE
let bulb = (function () {
    function prepareBulbCommand(status) {
        if (status === SUCCESS) {
            return colorCommand(33, 80, 18);
        }
        if (status === FAILURE) {
            return colorCommand(255);
        }
        if (status === UNSTABLE) {
            return colorCommand(221, 141, 27);
        }
        return flashCommand(12, 0, 255);
    }

    function colorCommand(r = 0, g = 0, b = 0) {
        let rgb = (65536 * r) + (256 * g) + b
        return JSON.stringify({
            "id": rgb
            , "method": "set_rgb", "params": [
                rgb
                , "smooth",
                255
            ]
        }) + "\r\n";
    }
    function flashCommand(r = 0, g = 0, b = 0) {
        let rgb = (65536 * r) + (256 * g) + b
        return JSON.stringify({
            "id":
                rgb
            , "method": "start_cf", "params": [
                30, 1
                , `1000,1,${rgb},30, 1000,1,${rgb},80`,
            ]
        }) + "\r\n";
    }
    function powerCommand(on) {
        return JSON.stringify({
            "id":
                1
            , "method": "set_power", "params": [on ? "on" : "off", "smooth",
                500
            ]
        }) + "\r\n";
    }
    let bulbIsOn;
    function executeCommand(command) {
        if (bulbIsOn) {
			try{
				client.write(command);
			}catch(e){
				connect();
				client.write(command);
			}
            console.log('Sending', command);
        }
    }

    let client;
    function connnect() {
		client = new net.Socket()
        client.connect(PORT, HOST);
        client.once('connect', function () {
            console.log('CONNECTED TO: ' + HOST + ':' + PORT)
        })

        client.on('error', function (e) {
            if (e.code == 'ECONNREFUSED') {
                console.log('Is the server running at ' + PORT + '?')
                console.log('Waiting for 5 seconds before trying port:' + PORT + ' again')
                setTimeout(connnect, 5000);
            }
            console.log(e)
        })

        client.on('data', function (data) {

            try {
                var response = JSON.parse(data);
                console.log(response, new Date())
            } catch (e) {
                console.log(e, ab2str(data), new Date());
            }
        });
    }

    function ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint8Array(buf));
    }
    function turnOff() {
        if (bulbIsOn || bulbIsOn === undefined) {
			bulbIsOn = true;
            executeCommand(powerCommand(false));
            bulbIsOn = false;
            console.log(chalk.yellow('Change bulb to turnOff'));
        }
    }
    function turnOn() {
        if (!bulbIsOn || bulbIsOn === undefined) {
            bulbIsOn = true;
            executeCommand(powerCommand(true));
            console.log(chalk.yellow('Change bulb to turOn'));
        }
    }
    function handleStatus(status) {
        let command = prepareBulbCommand(status);
        console.log(command);
        executeCommand(command);
    }
    connnect();
    return { turnOff: turnOff, turnOn: turnOn, handleStatus: handleStatus };
})();
