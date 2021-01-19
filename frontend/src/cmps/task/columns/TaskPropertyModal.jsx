import { Component } from "react"
import { ColorCmp } from "../../group/ColorCmp"
import { Delete } from '@material-ui/icons';

export class TaskPropertyModal extends Component {
    state = {
        labelToAdd: {
            txt: '',
            color: 'rgb(120, 75, 209)'
        }
    }

    handleChange = (ev) => {
        const { value } = ev.target
        const copy = { ...this.state.labelToAdd }
        copy.txt = value
        this.setState({ labelToAdd: copy })
    }

    onColorChange = (ev, color) => {
        ev.stopPropagation()
        ev.preventDefault()
        const copy = { ...this.state.labelToAdd }
        copy.color = color
        this.setState({ labelToAdd: copy })
    }

    onSubmit = (ev) => {
        const copy = { ...this.state.labelToAdd }
        copy.txt = ''
        this.setState({ labelToAdd: copy })
        this.props.onAddLabel(ev, this.state.labelToAdd, this.props.type)
    }

    pass = () => { }

    render() {
        const { options, type, handleModalChange, onRemoveLabel, findLabel } = this.props
        const { labelToAdd } = this.state
        return (
            <div className=" task-property-modal">
                {options.map((option, idx) => {
                    return (
                        <div
                            className="option flex space-between align-center"
                            style={{ backgroundColor: option.color }}
                            key={idx}
                            onClick={() => handleModalChange(option.txt, type)}>
                            <span className="text-no-overflow">{option.txt}</span>
                            <Delete
                                className="del-btn"
                                style={(findLabel(option.txt, type) ? { cursor: "no-drop" } : {})}
                                onClick={(ev) => {
                                    onRemoveLabel(ev, option.txt, type)
                                }}>X</Delete>
                        </div>
                    )
                })
                }
                <form onClick={(ev) => {
                    ev.stopPropagation()
                }}
                    onSubmit={(ev) => {
                        this.onSubmit(ev)
                    }}>
                    <input
                        className="input"
                        onChange={this.handleChange}
                        type="text"
                        value={labelToAdd.txt}
                        placeholder={`add label...`}
                        style={{ borderLeftColor: this.state.labelToAdd.color }}
                    />
                    <button type="submit" hidden></button>
                    <ColorCmp
                        className="color-pallete"
                        changeColor={this.onColorChange}
                        togglePallete={this.pass} />
                </form>
            </div >
        )
    }
}
