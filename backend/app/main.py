"""
E-commerce Intelligent Customer Service Platform
Main application entry point
"""
from flask import Flask, jsonify
from flask_cors import CORS
from flasgger import Swagger
import os
from dotenv import load_dotenv

from app.extensions import db, jwt

# Load environment variables
load_dotenv()

def create_app(config_name='default'):
    """Application factory pattern"""
    app = Flask(__name__)
    
    # Configuration
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///app.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', app.config['SECRET_KEY'])
    
    # Initialize extensions with app
    db.init_app(app)
    jwt.init_app(app)
    CORS(app)
    
    # Swagger configuration
    swagger_config = {
        "headers": [],
        "specs": [
            {
                "endpoint": 'apispec',
                "route": '/apispec.json',
                "rule_filter": lambda rule: True,
                "model_filter": lambda tag: True,
            }
        ],
        "static_url_path": "/flasgger_static",
        "swagger_ui": True,
        "specs_route": "/api/docs"
    }
    
    swagger_template = {
        "info": {
            "title": "E-commerce Customer Service API",
            "description": "API for E-commerce Intelligent Customer Service Platform",
            "version": "1.0.0"
        }
    }
    
    Swagger(app, config=swagger_config, template=swagger_template)
    
    # Register blueprints
    from app.api import auth, chatbot, orders, products
    app.register_blueprint(auth.bp, url_prefix='/api/auth')
    app.register_blueprint(chatbot.bp, url_prefix='/api/chatbot')
    app.register_blueprint(orders.bp, url_prefix='/api/orders')
    app.register_blueprint(products.bp, url_prefix='/api/products')
    
    # Health check endpoint
    @app.route('/health')
    def health_check():
        """Health check endpoint"""
        return jsonify({
            'status': 'healthy',
            'service': 'E-commerce Customer Service Platform'
        }), 200
    
    # Create tables
    with app.app_context():
        db.create_all()
    
    return app

if __name__ == '__main__':
    app = create_app()
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('DEBUG', 'False').lower() == 'true'
    app.run(host='0.0.0.0', port=port, debug=debug)
