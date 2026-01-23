import json
import os
import smtplib
import urllib.request
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field


class OrderRequest(BaseModel):
    name: str = Field(..., min_length=1)
    phone: str = Field(..., min_length=10)
    email: str = Field(default='')
    products: str = Field(..., min_length=1)
    comment: str = Field(default='')


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправка заявки на email td.povolzhje@yandex.ru и дублирование в Telegram
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
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        order = OrderRequest(**body_data)
    except Exception as e:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Invalid request: {str(e)}'}),
            'isBase64Encoded': False
        }
    
    email_sent = False
    telegram_sent = False
    errors = []
    
    # Отправка email
    try:
        email_user = 'td.povolzhje@yandex.ru'
        email_password = os.environ.get('EMAIL_APP_PASSWORD', '')
        email_to = 'td.povolzhje@yandex.ru'
        
        if email_password:
            msg = MIMEMultipart('alternative')
            msg['Subject'] = f'Новая заявка от {order.name}'
            msg['From'] = email_user
            msg['To'] = email_to
            
            text_content = f'''Новая заявка с сайта ГК ПОВОЛЖЬЕ

Имя: {order.name}
Телефон: {order.phone}
Email: {order.email if order.email else 'Не указан'}

Товары:
{order.products}

Комментарий:
{order.comment if order.comment else 'Нет комментария'}
'''
            
            html_content = f'''
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #0066cc;">🔔 Новая заявка с сайта ГК ПОВОЛЖЬЕ</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                    <p><strong>👤 Имя:</strong> {order.name}</p>
                    <p><strong>📞 Телефон:</strong> {order.phone}</p>
                    <p><strong>📧 Email:</strong> {order.email if order.email else 'Не указан'}</p>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p><strong>📦 Товары:</strong></p>
                    <p style="background-color: white; padding: 10px; border-radius: 4px;">{order.products}</p>
                    <p><strong>💬 Комментарий:</strong></p>
                    <p style="background-color: white; padding: 10px; border-radius: 4px;">{order.comment if order.comment else 'Нет комментария'}</p>
                </div>
            </body>
            </html>
            '''
            
            part1 = MIMEText(text_content, 'plain', 'utf-8')
            part2 = MIMEText(html_content, 'html', 'utf-8')
            msg.attach(part1)
            msg.attach(part2)
            
            with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
                server.login(email_user, email_password)
                server.send_message(msg)
                email_sent = True
    except Exception as e:
        errors.append(f'Email error: {str(e)}')
    
    # Отправка в Telegram
    try:
        telegram_bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
        telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
        
        if telegram_bot_token and telegram_chat_id:
            telegram_message = f'''🔔 Новая заявка с сайта ГК ПОВОЛЖЬЕ

👤 Имя: {order.name}
📞 Телефон: {order.phone}
📧 Email: {order.email if order.email else 'Не указан'}

📦 Товары:
{order.products}

💬 Комментарий:
{order.comment if order.comment else 'Нет комментария'}'''
            
            telegram_url = f'https://api.telegram.org/bot{telegram_bot_token}/sendMessage'
            telegram_data = {
                'chat_id': telegram_chat_id,
                'text': telegram_message
            }
            
            req = urllib.request.Request(
                telegram_url,
                data=json.dumps(telegram_data).encode('utf-8'),
                headers={'Content-Type': 'application/json'}
            )
            
            with urllib.request.urlopen(req, timeout=10) as response:
                if response.status == 200:
                    telegram_sent = True
    except Exception as e:
        errors.append(f'Telegram error: {str(e)}')
    
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
            'email_sent': email_sent,
            'telegram_sent': telegram_sent,
            'errors': errors if errors else None
        })
    }
