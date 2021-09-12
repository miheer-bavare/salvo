import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id='header'>
      
      <div className='intro'>
      <ParticlesBg type="lines" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
              
                <h1>
                  Sancus
                  <span></span>
                </h1>
                <p>A new way to do credit card transactions transactions!</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
