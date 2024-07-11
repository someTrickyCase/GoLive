import "./FontSizeBar.css"

export default function FontSizeBar ({onChangeHandler}) {
    return (
        <input className="font-size-bar" 
        type="range" min={20} max={46} step={1} defaultValue={26}
        onChange={event => onChangeHandler(event)}/>
    )
}