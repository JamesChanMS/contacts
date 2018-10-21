import React from 'react'
import renderer from 'react-test-renderer'
import MyButton from './Mybutton'

describe('Mybutton', () => {
    it('renders', () => {
        const button = renderer.create(
            <MyButton />
        ).toJSON()
        expect(button).toMatchSnapshot()
    })

    it('correctly overrides default color', () => {
        const color = 'red'
        const button = renderer.create(
            <MyButton color={color}/>
        ).root
        console.log('button.props');
        console.log(button.props);
        expect(button.props.color).toBe(color)
    })
})