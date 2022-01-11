import './intro.css';
import Code from '../../img/code.gif'


const Intro = () => {

return (
  <div className="i">
    <div className="i-left">Left </div>
    <div className="i-left-wrapper">
      <h2 className="i-intro">My Nombre es </h2>
      <h1 className="i-name">Leoberto Zeron </h1>
      <div className="i-title">
        <div className="i-title-wrapper">
          <div className="i-title-item">Web Developer</div>

          <div className="i-title-item">UI/UX Designer</div>

          <div className="i-title-item">Escritor</div>

          <div className="i-title-item">Web Developer</div>
        </div>
      </div>

      <div className="i-desc">
          Soy Desarrollador Full Stack 
      </div>
    </div>

    <div className="i-rigth">
        <div className="i-bg"></div>
        <img src={Code} alt="" className='i-img' />    
    </div>
  </div>
);

}



export default Intro 