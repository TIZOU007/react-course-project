function Work(){
    return(
        <section id="work">
          <h2>Projets</h2>
          <div className="work-grid">
            {/* Projet 1 */}
            <article className="work-item">
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain" alt="Application de gestion de tâches" className="work-image" />
              <div className="work-info">
                <h3>Application de gestion de tâches</h3>
                <p>Développement d'une application mobile multiplateforme...</p>
                <a href="#">Lien vers projet</a>
              </div>
            </article>
          </div>
        </section>
    )
    }
    export default Work;