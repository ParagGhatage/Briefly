from sentence_transformers import util

def preprocess_query(query, documents, model, threshold=0.2, top_k=5):
    """
    Preprocesses the query, encodes it, and finds the top-k most similar documents.

    Args:
        query (str): The user's query to process.
        documents (list): List of cleaned document texts.
        model (SentenceTransformer): The sentence transformer model to use.
        threshold (float): The cosine similarity threshold to filter relevant documents.
        top_k (int): The number of top relevant documents to return.

    Returns:
        list: Top-k most relevant documents based on cosine similarity.
    """

    # Encode the documents and the query into sentence embeddings
    doc_embeddings = model.encode(documents, convert_to_tensor=True)
    query_embedding = model.encode(query, convert_to_tensor=True)

    # Compute cosine similarity between query and documents
    cosine_similarities = util.cos_sim(query_embedding, doc_embeddings)

    # Get indices of documents sorted by similarity score (descending order)
    sorted_indices = cosine_similarities.argsort(descending=True).tolist()[0]

    # Collect the top-k relevant documents based on the threshold
    top_relevant_docs = []
    for idx in sorted_indices[:top_k]:
        if cosine_similarities[0][idx] >= threshold:
            top_relevant_docs.append({
                'page_number': idx + 1,  # Assuming the page number is the document's index + 1
                'similarity': float(cosine_similarities[0][idx]),
                'document': documents[idx]
            })
        else:
            break  # Stop when similarity falls below the threshold

    return top_relevant_docs
