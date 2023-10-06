from flask import Flask,render_template
app = Flask(__name__)
@app.route('/')
def Homepage():
    return  render_template("Homepage.html")
@app.route('/Regstration')
def Regstration():
    return render_template("Regstration.html")
@app.route('/Book Now')
def Book():
    return render_template("Book.html")
@app.route('/About us')
def AboutUs():
    return render_template("AboutUs.html")
@app.route('/Plan')
def Plan():
    return render_template("Plan.html")
@app.route('/Info')
def Info():
    return render_template("Info.html")

