import { Component } from 'react';
export class ColorCmp extends Component {

    render() {
        const { changeColor, togglePallete } = this.props;
        return (
            <section className='colors-container' style={{ opacity: `${this.props.opacity}` }}>
                <button
                    className='btn-color cyan' onClick={(ev) => { changeColor(ev, 'rgb(167, 255, 235)'); togglePallete() }}>
                </button>
                <button
                    className='btn-color blue' onClick={(ev) => { changeColor(ev, 'rgb(174, 203, 250)'); togglePallete() }}>
                </button>
                <button
                    className='btn-color gray' onClick={(ev) => { changeColor(ev, 'gray'); togglePallete() }}>
                </button>
                <button
                    className='btn-color light-green' onClick={(ev) => { changeColor(ev, 'rgb(164, 255, 164)'); togglePallete() }}>
                </button>
                <button
                    className='btn-color light-yellow' onClick={(ev) => { changeColor(ev, 'rgb(246, 221, 152)'); togglePallete() }}>
                </button>
                <button
                    className='btn-color pink' onClick={(ev) => { changeColor(ev, 'pink'); togglePallete() }}>
                </button>
                <button
                    className='btn-color green' onClick={(ev) => { changeColor(ev, 'rgb(0, 202, 113)'); togglePallete() }}>
                </button>
                <button
                    className='btn-color yellow' onClick={(ev) => { changeColor(ev, 'rgb(253, 171, 61)'); togglePallete() }}>
                </button>
                <button
                    className='btn-color red' onClick={(ev) => { changeColor(ev, 'rgb(228, 66, 88)'); togglePallete() }}>
                </button>

            </section>
        )
    }
}