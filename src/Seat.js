const Seat = () => {
    const cont ={
        float: 'left'
    }
    const seatTop ={
        margin:'3px',
        width: '90px',
        height:'90px',
        border: '2px solid blue',
        backgroundColor: 'aqua',
        borderRadius: '5px'
    }
    const seatBottom = {
        margin:'3px',
        width: '90px',
        height:'10px',
        border: '2px solid blue',
        backgroundColor: 'aqua',
        borderRadius: '5px'
    }
    return(
        <div style ={cont}>
            <div style={seatTop}></div>
            <div style={seatBottom}></div>
        </div>
    )
}
export default Seat;