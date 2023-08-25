from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/recipes')
def recipes():
    return render_template('recipes.html')

@app.route('/bmi_calculator', methods=['GET', 'POST'])
def bmi_calculator():
    bmi = None
    if request.method == 'POST':
        weight = float(request.form['weight'])
        height = float(request.form['height']) / 100
        bmi = round(weight / (height ** 2), 2)
    return render_template('bmi_calculator.html', bmi=bmi)

if __name__ == '__main__':
    app.run(debug=True)

