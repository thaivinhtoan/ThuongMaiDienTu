from flask import Flask, render_template, redirect, url_for
import mysql.connector
app = Flask(__name__)
mydb = mysql.connector.connect(
  host="sql12.freemysqlhosting.net",
  user="sql12328142",
  passwd="iEhPW1Zn9E",
  database="sql12328142"
)

@app.route('/')
def home():
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM category")
    myresult = mycursor.fetchall()
    print(type(myresult), flush=True)
    for x in myresult:
        print(x)
    return render_template('index.html', list = myresult)

@app.route('/<category>')
def category(category):
    return render_template('category.html')

if __name__ == '__main__':
   app.run()