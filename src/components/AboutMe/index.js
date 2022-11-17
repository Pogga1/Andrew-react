export default function AboutMe() {
    return (
      <div>
        <div classNameName='homePg-header' style={styles.homePgHeader}>
          <h2 style={styles.h2}>About Me</h2>
        </div>
        <div className="container">
        <div className="card col imgCard" styles={styles.card}>
            <div className="card-img">
              <div className='meImgContainer'>
                <img src={Me} alt="educationImg" className='meIMG'></img>
              </div>
            </div>
          </div>
          <div className="card col" styles={styles.card}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <div className='imgContainer'>
                <img src={UICimg} alt="educationImg" className='uicIMG'></img>
                <img src={NWimg} alt="educationImg" className='nwIMG'></img>
              </div>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"> </p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <h5></h5>
              <p className="card-text"> 
                Thank you- Hamza!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }