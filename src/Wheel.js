const Wheel = () => {
    const wheel = {
        float: 'left',
        marginLeft:'635px',
        marginRight: '100px'
    }
    const round = {
        float: 'left',
        margin:'3px',
        width: '90px',
        height:'90px',
        border: '20px solid black',
        backgroundColor: 'gray',
        borderRadius: '50%'
    }
    return (
        <div style={wheel}>
            <div style={round}></div>
            <div style={round}></div>
        </div>
    )
}
export default Wheel;