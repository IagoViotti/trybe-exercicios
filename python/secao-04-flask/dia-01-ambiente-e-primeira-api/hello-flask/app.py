from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/api/')
def api_hello_world():
    return jsonify({'message': 'Hello World!'})


if __name__ == '__main__':
    # debug = Ture, reinicia automaticamente a cada mudança de arquivo
    app.run(debug=True, host='0.0.0.0', port=8000)
