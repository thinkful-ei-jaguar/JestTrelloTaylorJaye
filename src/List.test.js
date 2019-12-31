import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';
import STORE from './STORE.js';

describe('List Component', () => {
    it('List renders successfully', () => {
        const section = document.createElement('section');
        ReactDOM.render(<List key={124} header="List None" cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}/>, section);
        ReactDOM.unmountComponentAtNode(section);
});
    it('renders List HTML as expected', () => {
        const plant = renderer
            .create(<List key={124} header="List None" cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]} />)
            .toJSON();
        expect(plant).toMatchSnapshot();
    });
});