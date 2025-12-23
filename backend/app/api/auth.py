"""
Authentication API endpoints
"""
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flasgger import swag_from

bp = Blueprint('auth', __name__)

@bp.route('/register', methods=['POST'])
def register():
    """
    User Registration
    ---
    tags:
      - Authentication
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          required:
            - username
            - email
            - password
          properties:
            username:
              type: string
            email:
              type: string
            password:
              type: string
    responses:
      201:
        description: User registered successfully
      400:
        description: Invalid input
    """
    data = request.get_json()
    
    # TODO: Implement user registration logic
    # For now, return success response
    
    return jsonify({
        'message': 'User registered successfully',
        'username': data.get('username')
    }), 201

@bp.route('/login', methods=['POST'])
def login():
    """
    User Login
    ---
    tags:
      - Authentication
    parameters:
      - name: body
        in: body
        required: true
        schema:
          type: object
          required:
            - username
            - password
          properties:
            username:
              type: string
            password:
              type: string
    responses:
      200:
        description: Login successful
      401:
        description: Invalid credentials
    """
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    # TODO: Implement proper authentication
    # For now, create token for demo
    
    access_token = create_access_token(identity=username)
    
    return jsonify({
        'access_token': access_token,
        'username': username
    }), 200

@bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    """
    Get User Profile
    ---
    tags:
      - Authentication
    security:
      - JWT: []
    responses:
      200:
        description: User profile retrieved
      401:
        description: Unauthorized
    """
    current_user = get_jwt_identity()
    
    return jsonify({
        'username': current_user,
        'email': f'{current_user}@example.com'
    }), 200
