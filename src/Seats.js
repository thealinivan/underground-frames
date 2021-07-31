import Seat from './Seat';
const Seats = () => {
    const seats = {
        position: 'absolute',
        top:'300px',
        left: '330px'
    }
    return (
        <div style={seats}>
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
        </div>
    )
}
export default Seats;