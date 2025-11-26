import json
import smtplib
import os
import urllib.parse
import urllib.request
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, ValidationError

class OrderRequest(BaseModel):
    name: str = Field(..., min_length=1)
    phone: str = Field(..., min_length=10)
    email: str = Field(default='')
    products: str = Field(..., min_length=1)
    comment: str = Field(default='')

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send order request via email and WhatsApp
    Args: event - dict with httpMethod, body
          context - object with request_id attribute
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    order = OrderRequest(**body_data)
    
    email_user = os.environ.get('EMAIL_USER')
    email_password = os.environ.get('EMAIL_PASSWORD')
    email_to = os.environ.get('EMAIL_TO')
    
    email_body = f'''
Новая заявка с сайта ГК ПОВОЛЖЬЕ

Имя: {order.name}
Телефон: {order.phone}
Email: {order.email if order.email else 'Не указан'}

Товары:
{order.products}

Комментарий:
{order.comment if order.comment else 'Нет комментария'}
'''
    
    msg = MIMEMultipart()
    msg['From'] = email_user
    msg['To'] = email_to
    msg['Subject'] = f'Новая заявка от {order.name}'
    msg.attach(MIMEText(email_body, 'plain', 'utf-8'))
    
    if 'yandex' in email_user.lower():
        smtp_server = 'smtp.yandex.ru'
        smtp_port = 587
    else:
        smtp_server = 'smtp.gmail.com'
        smtp_port = 587
    
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(email_user, email_password)
    server.send_message(msg)
    server.quit()
    
    whatsapp_text = f'''Заявка с сайта%0A%0AИмя: {order.name}%0AТелефон: {order.phone}%0A%0AТовары:%0A{urllib.parse.quote(order.products)}'''
    whatsapp_url = f'https://wa.me/79991416580?text={whatsapp_text}'
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'message': 'Заявка отправлена',
            'whatsapp_url': whatsapp_url
        })
    }
