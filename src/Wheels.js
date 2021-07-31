import Wheel from './Wheel';

const Wheels = () => {
    const wheels = {
        position: 'absolute',
        top:'520px',
        left: '-500px'
    }
    return (
        <div style={wheels}>
            <Wheel />
            <Wheel />
        </div>
    )
}
export default Wheels;