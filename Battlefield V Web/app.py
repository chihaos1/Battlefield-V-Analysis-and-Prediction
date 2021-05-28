import numpy as np
import pickle
from flask import Flask, render_template, request

app = Flask(__name__)
model = pickle.load(open("BFV_Model.pkl", "rb"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/index.html")
def return_home():
    return render_template("index.html")

@app.route("/predict.html", methods=["GET","POST"])
def predict():
    if request.method == "GET":
        return render_template("predict.html")
    else: 
        total_hour = int(request.form["total_hour"])
        total_damage = int(request.form["total_damage"])
        kills = int(request.form["kills"])
        assists = int(request.form["assists"])
        deaths = int(request.form["deaths"])
        resupplies = int(request.form["resupplies"])
        heals = int(request.form["heals"])
        revives = int(request.form["revives"])
        wins = int(request.form["wins"])
        win_ratio = int(request.form["win_percent"])/100
        kd = round(kills/deaths,2)
        kills_per_min = round(kills/(total_hour*60),2)
        
        features = [assists, deaths, heals, total_hour, kd, kills, kills_per_min,
                    wins, resupplies, revives, total_damage, win_ratio]
        features = [np.array(features)]
        prediction = round(model.predict(features)[0], 2) + 40
        
        return render_template("predict.html", 
                               prediction_text=f"Score Per Minute: {prediction}")

if __name__ == "__main__":
    app.run(debug=True)