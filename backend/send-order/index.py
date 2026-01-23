import json
import os
import urllib.parse
import urllib.request
from typing import Dict, Any
from pydantic import BaseModel, Field

class OrderRequest(BaseModel):
    name: str = Field(..., min_length=1)
    phone: str = Field(..., min_length=10)
    email: str = Field(default='')
    products: str = Field(..., min_length=1)
    comment: str = Field(default='')
    customer_phone: str = Field(default='')
    customer_email: str = Field(default='')

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправка заказа в Telegram на номер +79991413600
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
    
    telegram_bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
    
    customer_phone_display = order.customer_phone if order.customer_phone else order.phone
    customer_email_display = order.customer_email if order.customer_email else (order.email if order.email else 'Не указан')
    
    telegram_message = f'''🔔 Новая заявка с сайта ГК ПОВОЛЖЬЕ

👤 Имя: {order.name}
📞 Телефон клиента: {customer_phone_display}
📧 Email клиента: {customer_email_display}

📦 Товары:
{order.products}

💬 Комментарий:
{order.comment if order.comment else 'Нет комментария'}'''
    
    telegram_sent = False
    telegram_error = None
    
    if telegram_bot_token and telegram_chat_id:
        telegram_url = f'https://api.telegram.org/bot{telegram_bot_token}/sendMessage'
        telegram_data = {
            'chat_id': telegram_chat_id,
            'text': telegram_message
        }
        
        try:
            req = urllib.request.Request(
                telegram_url,
                data=json.dumps(telegram_data).encode('utf-8'),
                headers={'Content-Type': 'application/json'}
            )
            
            with urllib.request.urlopen(req, timeout=10) as response:
                if response.status == 200:
                    telegram_sent = True
        except Exception as e:
            telegram_error = str(e)
            print(f'Telegram send error: {e}')
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'message': 'Заявка отправлена' if telegram_sent else 'Заявка принята',
            'telegram_sent': telegram_sent
        })
    }
