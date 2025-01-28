from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import face_recognition
import base64
from PIL import Image
from io import BytesIO
import os
import json

app = Flask(__name__)
CORS(app, origins=["http://localhost:3001"])

# Serve images from the images directory
@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('images', filename)

# Load profiles from JSON or create empty if it doesn't exist
if not os.path.exists("profiles.json"):
    profiles = {}
else:
    with open("profiles.json", "r") as file:
        profiles = json.load(file)

def match_face(image_data):
    """Compares the uploaded image with stored images to find a match."""
    # Decode the base64 image
    try:
        if "," in image_data:
            img_data = base64.b64decode(image_data.split(",")[1])
        else:
            img_data = base64.b64decode(image_data)
    except Exception as e:
        print(f"Error decoding image: {e}")
        return None

    # Convert the byte data to an image
    img = Image.open(BytesIO(img_data))
    if img.mode == 'RGBA':
        img = img.convert('RGB')

    # Get encodings for uploaded image
    try:
        uploaded_image = face_recognition.load_image_file(BytesIO(img_data))
        uploaded_encodings = face_recognition.face_encodings(uploaded_image)

        if len(uploaded_encodings) == 0:
            print("No faces detected in the uploaded image.")
            return None

        uploaded_encoding = uploaded_encodings[0]

        # Compare with stored images
        for profile_id, profile in profiles.items():
            stored_image = face_recognition.load_image_file(profile["image"])
            stored_encodings = face_recognition.face_encodings(stored_image)

            if len(stored_encodings) == 0:
                print(f"No faces detected in stored image for profile {profile_id}.")
                continue

            stored_encoding = stored_encodings[0]

            # Check if faces match
            if face_recognition.compare_faces([stored_encoding], uploaded_encoding)[0]:
                print(f"Match found with profile {profile_id}")
                return profile_id

    except Exception as e:
        print(f"Error processing image: {e}")
        return None

    print("No match found.")
    return None

@app.route("/recognize", methods=["POST"])
def recognize():
    """Endpoint to recognize a face."""
    data = request.json
    image_data = data.get("image")

    if not image_data:
        return jsonify({"error": "No image data provided"}), 400

    try:
        profile_id = match_face(image_data)
    except Exception as e:
        app.logger.error(f"Error processing image: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

    if profile_id:
        return jsonify({"match": True, "profileId": profile_id})
    return jsonify({"match": False})

@app.route("/profile", methods=["GET"])
def profile():
    """Endpoint to fetch a user's profile."""
    profile_id = request.args.get("id")

    if profile_id in profiles:
        profile = profiles[profile_id]
        profile["image"] = f"http://localhost:5000/images/{os.path.basename(profile['image'])}"
        return jsonify(profile)
    return jsonify({"error": "Profile not found"}), 404

@app.route("/register", methods=["POST"])
def register():
    """Endpoint to register a new user with an uploaded image."""
    if "name" not in request.form or "email" not in request.form or "image" not in request.files:
        return jsonify({"error": "Incomplete registration data"}), 400

    name = request.form["name"]
    email = request.form["email"]
    image_file = request.files["image"]
    profile_id = request.form.get("profile_id", name.lower().replace(" ", "_"))

    # Ensure the images directory exists
    if not os.path.exists("images"):
        os.makedirs("images")

    # Save the image file
    img_path = f"images/{profile_id}.jpeg"
    image_file.save(img_path)

    # Add user to profiles with the custom ID
    profiles[profile_id] = {
        "name": name,
        "email": email,
        "phone": request.form.get("phone", ""),
        "image": img_path
    }

    # Save profiles to JSON
    with open("profiles.json", "w") as file:
        json.dump(profiles, file, indent=4)

    return jsonify({"success": True, "profileId": profile_id})

@app.route("/profiles", methods=["GET"])
def get_all_profiles():
    """Endpoint to fetch all registered user profiles."""
    profiles_list = []
    for profile_id, profile in profiles.items():
        profile_copy = profile.copy()
        profile_copy["profileId"] = profile_id
        profile_copy["image"] = f"http://localhost:5000/images/{os.path.basename(profile['image'])}"
        profiles_list.append(profile_copy)

    return jsonify(profiles_list)


if __name__ == "__main__":
    app.run(debug=True)
