require('source-map-support').install();

import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';
import sinonChai from "sinon-chai";
chai.should();
chai.use(sinonChai);

configure({ adapter: new Adapter() });
global.expect = chai.expect
beforeEach(function () {
    $(document.body).append('<div id="workspaceWrapper"><div id="workspace"></div></div>')
})
afterEach(function () {
    $("#workspaceWrapper").empty().remove();
})
document.write('<script src="/socket.io/socket.io.js"></script>');
document.write('<script>(function () { ' +
    '    var socket = io(window.location.host, { path: "/socket.io" }); ' +
    '    socket.on("execute", function () { window.location.reload(); }); ' +
    '}());</script>');

const testsContext = require.context('.', true, /test.js$/);
testsContext.keys().forEach(testsContext);