/**
 * Created by xtong on 16/7/12.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import TodoList from '../js/component/todoList';
import List from '../js/component/list';
import ListItem from '../js/component/listItem';

describe('<TodoList/>', function () {

    it('should have props for ListItem', function () {
        const wrapper = mount(<TodoList/>);
        expect(wrapper.props().ListItem).to.be.defined;
        expect(wrapper.props().input).to.be.defined;
    });

    it('should have state', function () {
        const wrapper = mount(<TodoList/>);
        const listThings = [{text:'here',checked:false}];
        wrapper.setState({ list: listThings});
        expect(wrapper.state().list[0].text).to.equal('here');
        expect(wrapper.state().list[0].checked).to.equal(false);
    });
});