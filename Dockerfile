# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Upgrade pip
RUN pip install --upgrade pip

# Install any necessary dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your application code into the container
COPY . .

# Expose the port your Flask app runs on
EXPOSE 5000

# Run Gunicorn as the production WSGI server
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
