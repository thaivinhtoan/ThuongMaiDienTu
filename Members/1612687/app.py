from flask import Flask, render_template, redirect, url_for, session
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
    print(myresult)
    return render_template('index.html', list = myresult)

@app.route('/<category>')
def category(category):
    mycursor = mydb.cursor()
    query = "SELECT * FROM product where id_category = {}".format(category)
    mycursor.execute(query)
    myresult = mycursor.fetchall()

    mycursor.execute("SELECT * FROM category")
    myresult2 = mycursor.fetchall()
   
    return render_template('category.html', list = myresult, cate = myresult2)

@app.route('/<category>/<des>')
def des(category,des):
    mycursor = mydb.cursor()
    query = "SELECT * FROM product where id = {}".format(des)
    mycursor.execute(query)
    myresult = mycursor.fetchall()
    print(myresult)
    mycursor.execute("SELECT * FROM category")
    myresult2 = mycursor.fetchall()
   
    return render_template('des.html', list = myresult, cate = myresult2)

if __name__ == '__main__':
   app.run()