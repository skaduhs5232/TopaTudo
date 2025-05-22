from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector as sql

from config.loadconfig import load_dbconfig

app = Flask(__name__)
CORS(app)

try:
    dbconfig = load_dbconfig(env='development')
except Exception as exc:
    print(f"Erro ao carregar configurações: {str(exc)}")
    exit(1)

def connectToDatabase():
    try:
        return sql.connect(**dbconfig)
    except sql.Error as err:
        print(f"Erro de Conexão: {err}")
        return None


@app.route("/users", methods=["GET"])
def getUsers():
    conn = connectToDatabase()
    if conn:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM usuarios")
        response = cursor.fetchall()

        cursor.close()
        conn.close()
        return jsonify(response)

    return jsonify({"error": "Erro de conexão com o banco"}), 500


@app.route('/users/<string:user_id>', methods=['GET'])
def getUser(user_id):
    conn = connectToDatabase()
    if conn:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM usuarios WHERE id = %s", (user_id,))
        response = cursor.fetchone()

        cursor.close()
        conn.close()
        
        if response:
            return jsonify(response)
        else:
            return jsonify({'error':'Usuário não encontrado'}), 404
        
    return jsonify({"error": "Erro de conexão com o banco"}), 500




if __name__ == "__main__":
    app.run(debug=False)
