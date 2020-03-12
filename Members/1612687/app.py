from flask import Flask, render_template, redirect, url_for
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/<category>')
def category(category):
    return render_template('shoe.html')


if __name__ == '__main__':
   app.run()