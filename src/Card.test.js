import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe('Card Component', () => {
    it('card renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
});
    it('renders the Card html as expected', () => {
        const tree = renderer
            .create(<Card key={123} title="Burbank" content="california love"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});