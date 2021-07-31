import './App.css';
import Window from './Window';
import Door from './Door';
import Reel from './Reel';
import Seats from './Seats';
import Wheels from './Wheels';

const Tube = () => {
    const bws = {
        float:'left',
        width:'380px',
        height:'200px',
        marginTop:'50px',
        marginLeft: '10px',
        marginRight: '10px',
        border:'8px solid black',
        borderRadius:'50px',
	    backgroundColor: 'gray'
    }
    const sws = {
        float:'left',
        width:'100px',
        height:'200px',
        marginTop:'50px',
        marginLeft: '10px',
        marginRight: '10px',
        border:'8px solid black',
        borderRadius:'50px',
        backgroundColor: 'gray'
    }
  
    const ds = {
        float:'left',
        width:'137px',
        height:'450px',
        margin:'10px',
        border:'5px solid red',
        borderRadius:'50px'
    }
    const dws = {
        float:'left',
        width:'100px',
        height:'250px',
        marginTop:'20px',
        marginLeft: '10px',
        marginRight: '10px',
        border:'8px solid black',
        borderRadius:'50px',
        backgroundColor: 'gray'
    }
    const reels = {
        position:'absolute',
        top: '70px',
        width:'100000px',
        height:'200px',
        border:'1px solid black',
        backgroundColor: '222222'
    }
    return(
        <>
        <Reel reels={reels} />
        <div style={{
            margin:'2px',
            width:'1500px',
            height:'500px',
            border:'10px solid red',
            borderRadius:'50px',
            backgroundColor: 'white',
            mixBlendMode: 'hard-light'
        }}>
            <Window ws={sws}/>
            <Door ds={ds} dws={dws}/>
            <Window ws={bws}/>
            <Window ws={bws}/>
            <Door ds={ds} dws={dws}/>
            <Door ds={ds} dws={dws}/>
            <Seats />
            <Wheels/>
        </div>
        </>
    )
}
export default Tube;