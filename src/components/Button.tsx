interface BtnI {
    label: string,
    onClickHandler: Function
}

export default function Button({label, onClickHandler}: BtnI) {
    return (
        <>
        <button onClick={(e) => {onClickHandler(e)}}>{label}</button>
        </>
    )
}
