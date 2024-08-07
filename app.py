from flask import Flask, render_template, request, jsonify
from PIL import Image
from io import BytesIO
from ultralytics import YOLO
from flask_cors import CORS# Make sure to install Flask-CORS

app = Flask(__name__)
CORS(app)

# Load YOLO model
model = YOLO("yolov8x.pt")

@app.route('/classify', methods=['POST'])
def classify():
    photo = request.files['photo']

    if photo:
        # Upload the image and perform classification
        image = Image.open(photo)
    else:
        # Capture a photo from the camera (similar to previous code)
        image_data = request.data
        image = Image.open(BytesIO(image_data))

    # Perform image classification using the YOLOv8 model
    results = model.predict(image)
    result = results[0]
    box = result.boxes[0]
    classification = result.names[box.cls[0].item()]

    response = jsonify({"classification": classification})
    response.headers.add("Access-Control-Allow-Origin", "*")  # Allow all origins for CORS

    return response

if __name__ == '__main__':
    app.run(port=5000)  # You can specify the port for your Flask app
