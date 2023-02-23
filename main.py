from flask import Flask, render_template, redirect, url_for, request
from send_mail import SendMail

app = Flask(__name__)
app.config['SECRET_KEY'] = "ERTweooejklE"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/send-msg", methods=["POST"])
def send_msg():
    name = request.form["name"].strip()
    email = request.form["email"]
    msg = request.form["msg"].strip()

    send_mail = SendMail(name, email, msg)
    send_mail.send_msg()

    return redirect(url_for("home"))


if __name__ == "__main__":
    app.run(debug=True)
