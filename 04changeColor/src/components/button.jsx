
function Button({ Clr, smallcase, setColor }) {
    return(
        <>
        <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{ backgroundColor: smallcase }} onClick={() => setColor(smallcase)}>
        {Clr}
        </button>
        </>
    )
}
export default Button;
