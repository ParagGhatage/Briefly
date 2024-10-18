import json

def load_json(filepath):
    """
    Loads JSON data from a given file.

    Args:
        filepath (str): The path to the JSON file.

    Returns:
        dict: Parsed JSON data.
    """
    try:
        with open(filepath, 'r') as file:
            data = json.load(file)
        return data
    except FileNotFoundError:
        print(f"Error: The file {filepath} was not found.")
        return None
    except json.JSONDecodeError:
        print(f"Error: Failed to decode JSON from the file {filepath}.")
        return None


def format_results(top_relevant_docs):
    """
    Formats the top relevant documents for a cleaner display or response.

    Args:
        top_relevant_docs (list): List of relevant documents with page numbers and similarity scores.

    Returns:
        list: A list of formatted results for easier reading.
    """
    formatted_results = []
    for doc in top_relevant_docs:
        formatted_results.append(
            f"Page Number: {doc['page_number']} | Similarity: {doc['similarity']:.4f}\n{doc['document']}\n"
        )
    return formatted_results


def error_message(message):
    """
    Returns a standard error message format.

    Args:
        message (str): The error message.

    Returns:
        dict: A dictionary containing the error message.
    """
    return {"error": message}



