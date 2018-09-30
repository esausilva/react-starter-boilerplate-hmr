import chai from 'chai'
import React from 'react'
import ReactDOM from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import Hello from './components/Hello';
import { Parent, MChild } from './components/ParentChild';
import sinon from 'sinon';

describe("<Hello/>", () => {
    "use strict";
    it('renders one <h1> tag', () => {
        const wrapper = shallow(<Hello />);
        render(<Hello />, $("#workspace")[0])
        expect(wrapper.find('h1')).to.have.length(1);
    });
})
describe('enzyme', function () {
    let sandbox = sinon.createSandbox();
    beforeEach(function () {
        sandbox = sinon.createSandbox();
    });

    afterEach(function () {
        // completely restore all fakes created through the sandbox
        sandbox.restore();
    });
    it('renders without crashing parent', () => {
        const div = $("#workspace")[0];
        ReactDOM.render(<Parent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing child', () => {
        let handler = () => { };
        const div = $("#workspace")[0];
        ReactDOM.render(<MChild a={{}} handler={handler} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders MCHild and call handler', () => {
        let handler = () => { };
        let html = render(<MChild a={{ i: 0 }} handler={handler} />);

        expect(html.text()).to.contains('"i":0');

        html = render(<MChild a={{ i: 1 }} handler={handler} />);

        expect(html.text()).to.contains('"i":1');
    });
    it('renders MCHild and call handler - sinon', () => {
        let handler = sandbox.spy();
        let model = { i: 0 }
        let html = ReactDOM.render(<MChild model={model} handler={handler} />, $("#workspace")[0]);

        const newLocal = $("#workspace").find("button");
        $(newLocal).click();

        expect(handler).to.calledWith('model');
    });

    it('renders Parent and call handler', async () => {
        let wrapper = mount(<Parent />);
        const instance = wrapper.instance();

        expect(instance.state.a.i).to.be.eq(0);
        expect(wrapper.text()).to.contains('"i":0');

        let buttons = wrapper.find('button');
        buttons.at(0).simulate('click');
        await wait();
        buttons.at(1).simulate('click');
        await wait();

        // @ts-ignore
        expect(instance.state.a.i).to.be.eq(1);
        // @ts-ignore
        expect(wrapper.text()).to.contains('"i":1');
    });

})

function wait() {
    return new Promise((r, re) => {
        setTimeout(function () {
            r();
        }, 300)
    })
}