
from src.config import Config
from sentence_transformers import SentenceTransformer, util
import time
from src.utils import load_json

from flask import Flask, request, jsonify
import json
from sentence_transformers import SentenceTransformer
from src.preprocess import preprocess_query
from flask_cors import CORS
import psutil
import os

app = Flask(__name__)


\
# Enable CORS for all routes
CORS(app)





# Global variables for models
query_model_1 = None
data=None


def load_model():
    global query_model_1
    query_model_1 = SentenceTransformer(Config.MODEL_NAME)
   
def load_data():
    global data
    data=load_json("./data/processed/final_clean_with_keywords.json")




load_model()
load_data()

    
# Health check route
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify(status="healthy"), 200

@app.route('/search', methods=['POST'])
def search():
    """
    Endpoint to search for the most relevant document based on a user query.
    """
    # Extract documents from the data
    documents = [page['original_text'] for page in data['pages']]

    
    query = request.json.get('query')

    if not query:
        return jsonify({"error": "No query provided."}), 400

    # Preprocess the query and get the top relevant documents
    top_relevant_docs = preprocess_query(query, documents, model=query_model_1)

    if not top_relevant_docs:
        return jsonify({"message": "No relevant document found."}), 200

    # Find the document with the highest similarity score
    most_relevant_doc = max(top_relevant_docs, key=lambda doc: doc['similarity'])

    # Return the most relevant document as JSON
    return jsonify({"result": most_relevant_doc}), 200


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
