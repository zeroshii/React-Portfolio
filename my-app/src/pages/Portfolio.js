function Portfolio() {
    return (
        <main className="container">

        <h1>Portfolio</h1>
        <hr>
        <!-- <div className="card-group"> -->
          <div className="row" style="margin-bottom: 50px;">
            <div className="col-sm-4">
            <div className="card">
              <img className="card-img-top" src="assets/fandomzzz.png" alt="Card image cap">
              <div className="card-body">
                <h5 className="card-title">Fandomzzz E-Commerce App</h5>
                <p className="card-text">An e-commerce website for purchasing and selling fan merchandise using full stack web technologies. This is a team collaboration project.</p>
                <a className="btn btn-info" href="https://stormy-depths-87128.herokuapp.com/" target="_blank">Deploy App</a>
                <a className="btn btn-info"  href="https://github.com/zeroshii/Project-2" target="_blank">GitHub Repo</a>
              </div>
            </div>
            </div>

            <div className="col-sm-4">
            <div className="card">
              <img className="card-img-top" src="assets/travelbugimg.png" alt="Card image cap">
              <div className="card-body">
                <h5 className="card-title">Travel Bug App</h5>
                <p className="card-text">A travel app that helps travelers plan their trip according to weather, hotels, and attractions within a searched city.  This is a team collaboration project. </p>
                <a className="btn btn-info" href="https://klsybthrst.github.io/TravelBug/" target="_blank">Deploy App</a>
                <a className="btn btn-info"  href="https://github.com/klsybthrst/TravelBug" target="_blank">GitHub Repo</a>
              </div>
            </div>
            </div>

            <div className="col-sm-4">
            <div className="card">
              <img className="card-img-top" src="assets/empSummary.jpg" alt="Card image cap">
              <div className="card-body">
                <h5 className="card-title">Employee Summary</h5>
                <p className="card-text">A command line application that will prompt user for information about the team manager and team members and then render the information to an HTML file to display the formatted team roster.</p>
                <a className="btn btn-info" href="https://drive.google.com/file/d/1WKqlOQsrSB7bC0m8CQyjqpgfsqTfwb2C/view?usp=sharing" target="_blank">Deploy App</a>
                <a className="btn btn-info"  href="https://github.com/zeroshii/Employee-Summary" target="_blank">GitHub Repo</a>
              </div>
            </div>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-4">
            <div className="card">
              <img className="card-img-top" src="assets/readme-screenshot.png" alt="Card image cap">
              <div className="card-body">
                <h5 className="card-title">Good README Generator</h5>
                <p className="card-text">A command-line application that dynamically generates a professional README.md from user input using Node.js and the Inquirer package. </p>
                <a className="btn btn-info" href="https://drive.google.com/file/d/1rusqGflE4pAzd_AgTzleP_oM3dLBgiWO/view?usp=sharing" target="_blank">Deploy App</a>
                <a className="btn btn-info"  href="https://github.com/zeroshii/Good-ReadMe-Generator" target="_blank">GitHub Repo</a>
              </div>
            </div>
            </div>

            <div className="col-sm-4">
            <div className="card">
              <img className="card-img-top" src="assets/weatherdash-img.jpg" alt="Card image cap">
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">This is an app that displays the current day weather and 5-day forecast of a searched city.</p>
                <a className="btn btn-info" href="https://zeroshii.github.io/Weather-Dash-App/" target="_blank">Deploy App</a>
                <a className="btn btn-info"  href="https://github.com/zeroshii/Weather-Dash-App" target="_blank">GitHub Repo</a>
            </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <img className="card-img-top" src="assets/workschedulerimg.png" alt="Card image cap">
              <div className="card-body">
                <h5 className="card-title">Work Day Scheduler</h5>
                <p className="card-text">This is a 9-5 work day planner that colour-codes each hour by past, present, or future, and can save user text input to local storage.</p>
                <a className="btn btn-info" href="https://zeroshii.github.io/Work-Day-Scheduler" target="_blank">Deploy App</a>
                <a className="btn btn-info"  href="https://github.com/zeroshii/Work-Day-Scheduler" target="_blank">GitHub Repo</a>
            </div>
          </div>
          </div>
        </div>
        <!-- </div> -->
    </main>
    )
}

export default Portfolio;