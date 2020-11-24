function Contact() {
    return (
        <main className="container">
            
                <h1>Contact</h1>
                <hr></hr>
                <form>
                    <div className="form-group">
                        <label for="formControlInput1">Name</label>
                        <input type="text" className="form-control" id="formControlInput1" placeholder="Name"/>
                    
                    </div>
                    <div className="form-group">
                        <label for="formControlInput1">Email</label>
                        <input type="email" className="form-control" id="formControlInput2" placeholder="Email"/>
                    </div>

                    <div className="form-group">
                        <label for="formControlTextarea1">Message</label>
                        <textarea className="form-control" id="formControlTextarea" rows="3" placeholder="Message"></textarea>
                      </div>
                      <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>

                </form>

        </main>
    )
}

export default Contact;