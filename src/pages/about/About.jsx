import './about.css'

export default function About() {
  return (<>
      <div className="about_proyect">
        <h2 className="title_about">Acerca de Venus del Litoral</h2>
        <p>Venus del Litoral se dedica a la creación de dibujos digitales inspirados en la provincia de Corrientes. Ofrece diseños únicos que pueden ser
        enmarcados, estampados y/o sublimados en distintos productos.</p>
      </div>
      <div className="about_proyect">
        <h2 className="title_about">Acerca del desarrollador</h2>
        <div className="about_me">
            <img className="img_me" src="https://media.licdn.com/dms/image/v2/C4D03AQHakzMEe2IzsA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516876717142?e=1732752000&v=beta&t=yu9bOdDThlevUyZUUpxOFiOE52owEBrH0U5ImiXoa94" alt="Fernanda Unzaga"/>
        <div className="describe_me">
          Mi nombre es Fernanda Unzaga, ingeniera de profesión, actualmente realizando un Bootcamp en EducaciónIT. <br /> Soy una persona que se
          adapta fácilmente a diferentes entornos y situaciones, siempre dispuesta a aprender cosas nuevas.
        </div>
      </div>
    </div>
</>
  )
}
