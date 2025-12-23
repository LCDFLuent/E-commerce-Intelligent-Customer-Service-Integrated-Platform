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
    
    # Validate required fields
    if not data:
        return jsonify({'error': 'Request body is required'}), 400
    
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    
    if not username or not email or not password:
        return jsonify({'error': 'Username, email, and password are required'}), 400
    
    if len(username) < 3:
        return jsonify({'error': 'Username must be at least 3 characters'}), 400
    
    if '@' not in email:
        return jsonify({'error': 'Invalid email address'}), 400
    
    if len(password) < 6:
        return jsonify({'error': 'Password must be at least 6 characters'}), 400
    
    # TODO: Implement user registration logic
    # Check if user already exists, hash password, save to database
    
    return jsonify({
        'message': 'User registered successfully',
        'username': username
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
    
    if not data:
        return jsonify({'error': 'Request body is required'}), 400
    
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400
    
    # TODO: Implement proper authentication
    # - Query user from database
    # - Verify password hash
    # - Return 401 if authentication fails
    # For demo purposes, creating token with warning comment
    
    # SECURITY WARNING: This is a placeholder implementation
    # In production, validate credentials against database before creating token
    
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
